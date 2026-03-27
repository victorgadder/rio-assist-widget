import { buildVoiceAttachment } from '../../application/attachment-flow';
import { buildAttachmentRemoval, prepareFileSelection } from '../../application/file-selection-flow';
import {
  applyVoiceAttachmentResult,
  closeVoiceDialog,
  closeVoiceDialogAndResume,
  confirmVoiceRemovalState,
  createVoiceRecordingDiscardedState,
  createVoiceRecordingFinishedState,
  createVoiceRecordingPausedState,
  createVoiceRecordingResumedState,
  createVoiceRecordingStartedState,
  finalizeAttachmentRemovalState,
  openVoiceRemovalDialog,
  resetVoiceCaptureDraftState,
} from '../../application/media-ui-flow';
import type { AttachmentItem } from '../../domain/attachment';

type VoiceCaptureLike = {
  teardown: () => void;
  start: (input: any) => Promise<boolean>;
  pause: () => void;
  resume: (input: any) => void;
  stop: () => Promise<{ blob: Blob | null; transcript: string }>;
  discard: () => Promise<void>;
};

export type MediaHost = {
  selectedFiles: AttachmentItem[];
  attachmentError: string;
  isRecording: boolean;
  isRecordingPaused: boolean;
  voiceAttachmentId: string | null;
  voiceTranscript: string;
  voiceCancelDialogOpen: boolean;
  voiceCancelDialogMode: 'cancel' | 'remove';
  speechRecognitionAvailable: boolean;
  pendingVoiceRemovalId: string | null;
  voiceTranscriptSegments: string[];
  voiceTranscriptPreview: string;
  errorMessage: string;
  renderRoot: ParentNode;
  voiceCapture: VoiceCaptureLike;
  randomId: (length: number) => string;
  isFilePickerDisabled: boolean;
  isVoiceButtonDisabled: boolean;
};

export function teardownVoiceRecording(host: MediaHost) {
  host.voiceCapture.teardown();
  const resetState = createVoiceRecordingDiscardedState();
  host.voiceTranscript = resetState.voiceTranscript;
  host.voiceTranscriptSegments = resetState.voiceTranscriptSegments;
  host.voiceTranscriptPreview = resetState.voiceTranscriptPreview;
  host.isRecording = resetState.isRecording;
  host.isRecordingPaused = resetState.isRecordingPaused;
}

export function addVoiceAttachment(host: MediaHost, blob: Blob, transcript: string) {
  const result = buildVoiceAttachment({
    blob,
    existingFiles: host.selectedFiles,
    transcriptSegments: transcript ? [transcript] : [],
    transcriptPreview: transcript,
    createId: () =>
      (typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : host.randomId(12)),
    now: () => Date.now(),
  });

  const nextState = applyVoiceAttachmentResult(
    {
      selectedFiles: host.selectedFiles,
      attachmentError: host.attachmentError,
    },
    result,
  );
  host.selectedFiles = nextState.selectedFiles;
  host.attachmentError = nextState.attachmentError;
  if ('voiceAttachmentId' in nextState) {
    host.voiceAttachmentId = nextState.voiceAttachmentId;
  }
  if ('voiceTranscript' in nextState) {
    host.voiceTranscript = nextState.voiceTranscript;
  }
}

export async function handleVoiceButtonClick(host: MediaHost) {
  if (host.isVoiceButtonDisabled) {
    return;
  }

  const resetState = resetVoiceCaptureDraftState();
  host.voiceTranscriptSegments = resetState.voiceTranscriptSegments;
  host.voiceTranscriptPreview = resetState.voiceTranscriptPreview;
  host.voiceTranscript = resetState.voiceTranscript;

  const started = await host.voiceCapture.start({
    onTranscriptPreview: (preview: string, segments: string[]) => {
      host.voiceTranscriptPreview = preview;
      host.voiceTranscriptSegments = segments;
    },
    onSpeechRecognitionAvailabilityChange: (available: boolean) => {
      host.speechRecognitionAvailable = available;
    },
    onError: (message: string) => {
      host.errorMessage = message;
    },
    isRecordingActive: () => host.isRecording,
    isRecordingPaused: () => host.isRecordingPaused,
  });

  if (!started) {
    return;
  }

  const nextState = createVoiceRecordingStartedState();
  host.isRecording = nextState.isRecording;
  host.isRecordingPaused = nextState.isRecordingPaused;
}

export function pauseVoiceRecording(host: MediaHost) {
  if (!host.isRecording || host.isRecordingPaused) {
    return;
  }

  host.voiceCapture.pause();
  host.isRecordingPaused = createVoiceRecordingPausedState().isRecordingPaused;
}

export function resumeVoiceRecording(host: MediaHost) {
  if (!host.isRecording || !host.isRecordingPaused) {
    return;
  }

  host.voiceCapture.resume({
    onTranscriptPreview: (preview: string, segments: string[]) => {
      host.voiceTranscriptPreview = preview;
      host.voiceTranscriptSegments = segments;
    },
    onSpeechRecognitionAvailabilityChange: (available: boolean) => {
      host.speechRecognitionAvailable = available;
    },
    onError: (message: string) => {
      host.errorMessage = message;
    },
    isRecordingActive: () => host.isRecording,
    isRecordingPaused: () => host.isRecordingPaused,
  });
  host.isRecordingPaused = createVoiceRecordingResumedState().isRecordingPaused;
}

export async function handleVoiceConfirmClick(host: MediaHost) {
  if (!host.isRecording) {
    return;
  }

  const nextState = createVoiceRecordingFinishedState();
  host.isRecording = nextState.isRecording;
  host.isRecordingPaused = nextState.isRecordingPaused;
  host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
  const result = await host.voiceCapture.stop();
  if (result.blob) {
    addVoiceAttachment(host, result.blob, result.transcript);
  }
  host.voiceTranscriptSegments = nextState.voiceTranscriptSegments;
  host.voiceTranscriptPreview = nextState.voiceTranscriptPreview;
}

export async function discardVoiceRecording(host: MediaHost) {
  const nextState = createVoiceRecordingDiscardedState();
  host.isRecording = nextState.isRecording;
  host.isRecordingPaused = nextState.isRecordingPaused;
  host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
  await host.voiceCapture.discard();
  host.voiceTranscript = nextState.voiceTranscript;
  host.voiceTranscriptSegments = nextState.voiceTranscriptSegments;
  host.voiceTranscriptPreview = nextState.voiceTranscriptPreview;
}

export function handleVoiceDialogConfirm(host: MediaHost) {
  if (host.voiceCancelDialogMode === 'cancel') {
    void discardVoiceRecording(host);
    return;
  }

  const targetId = host.pendingVoiceRemovalId;
  if (targetId) {
    const nextState = confirmVoiceRemovalState({
      selectedFiles: host.selectedFiles,
      targetId,
      voiceAttachmentId: host.voiceAttachmentId,
    });
    host.selectedFiles = nextState.selectedFiles;
    host.voiceAttachmentId = nextState.voiceAttachmentId;
    if (typeof nextState.voiceTranscript === 'string') {
      host.voiceTranscript = nextState.voiceTranscript;
    }
    host.pendingVoiceRemovalId = nextState.pendingVoiceRemovalId;
    host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
    if (typeof nextState.attachmentError === 'string') {
      host.attachmentError = nextState.attachmentError;
    }
    return;
  }

  host.voiceCancelDialogOpen = false;
}

export function handleVoiceDialogContinue(host: MediaHost) {
  if (host.voiceCancelDialogMode === 'cancel') {
    const nextState = closeVoiceDialogAndResume();
    host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
    host.pendingVoiceRemovalId = nextState.pendingVoiceRemovalId;
    resumeVoiceRecording(host);
    return;
  }

  const nextState = closeVoiceDialog();
  host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
  host.pendingVoiceRemovalId = nextState.pendingVoiceRemovalId;
}

export function handleVoiceAttachmentRemove(host: MediaHost, id: string) {
  if (host.isRecording) {
    return;
  }

  const nextState = openVoiceRemovalDialog(id);
  host.voiceCancelDialogMode = nextState.voiceCancelDialogMode;
  host.pendingVoiceRemovalId = nextState.pendingVoiceRemovalId;
  host.voiceCancelDialogOpen = nextState.voiceCancelDialogOpen;
}

export function handleFilePickerClick(host: MediaHost) {
  if (host.isFilePickerDisabled) {
    return;
  }

  const input = host.renderRoot.querySelector('.file-input') as HTMLInputElement | null;
  if (input && !input.disabled) {
    input.click();
  }
}

export function handleFileInputChange(host: MediaHost, event: Event) {
  const input = event.target as HTMLInputElement | null;
  if (!input) {
    return;
  }

  const previousFiles = host.selectedFiles;
  const files = Array.from(input.files ?? []);
  input.value = '';

  if (files.length === 0) {
    return;
  }

  const result = prepareFileSelection({
    currentFiles: host.selectedFiles,
    incomingFiles: files,
    createId: () =>
      (typeof crypto !== 'undefined' && 'randomUUID' in crypto
        ? crypto.randomUUID()
        : host.randomId(12)),
    createPreviewUrl: (file) => URL.createObjectURL(file),
  });

  host.selectedFiles = result.files;
  host.attachmentError = result.error;

  previousFiles.forEach((item) => {
    if (item.previewUrl && !host.selectedFiles.find((entry) => entry.id === item.id)) {
      URL.revokeObjectURL(item.previewUrl);
    }
  });
}

export function handleAttachmentRemove(host: MediaHost, id: string) {
  const removal = buildAttachmentRemoval({
    currentFiles: host.selectedFiles,
    id,
  });
  const removed = removal.removed;
  if (removed?.kind === 'audio') {
    handleVoiceAttachmentRemove(host, id);
    return;
  }
  const nextState = finalizeAttachmentRemovalState(removal);
  host.selectedFiles = nextState.selectedFiles;
  if (removed?.previewUrl) {
    URL.revokeObjectURL(removed.previewUrl);
  }
  if (typeof nextState.attachmentError === 'string') {
    host.attachmentError = nextState.attachmentError;
  }
}
