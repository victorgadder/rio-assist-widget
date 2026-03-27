import type { AttachmentItem } from '../domain/attachment';

export type VoiceUiState = {
  isRecording: boolean;
  isRecordingPaused: boolean;
  voiceCancelDialogOpen: boolean;
  voiceCancelDialogMode: 'cancel' | 'remove';
  voiceTranscript: string;
  voiceTranscriptPreview: string;
  voiceTranscriptSegments: string[];
  voiceAttachmentId: string | null;
  pendingVoiceRemovalId: string | null;
  attachmentError: string;
  selectedFiles: AttachmentItem[];
};

export function resetVoiceCaptureDraftState() {
  return {
    voiceTranscript: '',
    voiceTranscriptPreview: '',
    voiceTranscriptSegments: [] as string[],
  };
}

export function createVoiceRecordingStartedState() {
  return {
    isRecording: true,
    isRecordingPaused: false,
  };
}

export function createVoiceRecordingPausedState() {
  return {
    isRecordingPaused: true,
  };
}

export function createVoiceRecordingResumedState() {
  return {
    isRecordingPaused: false,
  };
}

export function createVoiceRecordingFinishedState() {
  return {
    isRecording: false,
    isRecordingPaused: false,
    voiceCancelDialogOpen: false,
    voiceTranscriptPreview: '',
    voiceTranscriptSegments: [] as string[],
  };
}

export function createVoiceRecordingDiscardedState() {
  return {
    isRecording: false,
    isRecordingPaused: false,
    voiceCancelDialogOpen: false,
    voiceTranscript: '',
    voiceTranscriptPreview: '',
    voiceTranscriptSegments: [] as string[],
  };
}

export function applyVoiceAttachmentResult(
  state: Pick<VoiceUiState, 'selectedFiles' | 'attachmentError'>,
  result:
    | null
    | { error: string }
    | { item: AttachmentItem; voiceAttachmentId: string; voiceTranscript: string },
) {
  if (!result) {
    return state;
  }

  if ('error' in result) {
    return {
      ...state,
      attachmentError: result.error ?? '',
    };
  }

  return {
    selectedFiles: [...state.selectedFiles, result.item],
    attachmentError: '',
    voiceAttachmentId: result.voiceAttachmentId,
    voiceTranscript: result.voiceTranscript,
  };
}

export function openVoiceRemovalDialog(id: string) {
  return {
    voiceCancelDialogMode: 'remove' as const,
    pendingVoiceRemovalId: id,
    voiceCancelDialogOpen: true,
  };
}

export function closeVoiceDialogAndResume() {
  return {
    voiceCancelDialogOpen: false,
    pendingVoiceRemovalId: null,
    shouldResume: true,
  };
}

export function closeVoiceDialog() {
  return {
    voiceCancelDialogOpen: false,
    pendingVoiceRemovalId: null,
    shouldResume: false,
  };
}

export function confirmVoiceRemovalState(input: {
  selectedFiles: AttachmentItem[];
  targetId: string | null;
  voiceAttachmentId: string | null;
}) {
  const { selectedFiles, targetId, voiceAttachmentId } = input;
  const nextFiles = targetId
    ? selectedFiles.filter((item) => item.id !== targetId)
    : selectedFiles;
  const removedCurrentVoice = Boolean(targetId && voiceAttachmentId === targetId);

  return {
    selectedFiles: nextFiles,
    voiceAttachmentId: removedCurrentVoice ? null : voiceAttachmentId,
    voiceTranscript: removedCurrentVoice ? '' : undefined,
    pendingVoiceRemovalId: null,
    voiceCancelDialogOpen: false,
    attachmentError: nextFiles.length === 0 ? '' : undefined,
  };
}

export function finalizeAttachmentRemovalState(input: {
  files: AttachmentItem[];
  shouldClearError: boolean;
}) {
  return {
    selectedFiles: input.files,
    attachmentError: input.shouldClearError ? '' : undefined,
  };
}
