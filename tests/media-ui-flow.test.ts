import { describe, expect, it } from 'vitest';
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
} from '../src/application/media-ui-flow';

describe('media-ui-flow', () => {
  it('creates consistent voice recording state transitions', () => {
    expect(resetVoiceCaptureDraftState()).toEqual({
      voiceTranscript: '',
      voiceTranscriptPreview: '',
      voiceTranscriptSegments: [],
    });
    expect(createVoiceRecordingStartedState()).toEqual({
      isRecording: true,
      isRecordingPaused: false,
    });
    expect(createVoiceRecordingPausedState()).toEqual({ isRecordingPaused: true });
    expect(createVoiceRecordingResumedState()).toEqual({ isRecordingPaused: false });
    expect(createVoiceRecordingFinishedState()).toEqual({
      isRecording: false,
      isRecordingPaused: false,
      voiceCancelDialogOpen: false,
      voiceTranscriptPreview: '',
      voiceTranscriptSegments: [],
    });
    expect(createVoiceRecordingDiscardedState()).toEqual({
      isRecording: false,
      isRecordingPaused: false,
      voiceCancelDialogOpen: false,
      voiceTranscript: '',
      voiceTranscriptPreview: '',
      voiceTranscriptSegments: [],
    });
  });

  it('applies voice attachment and removal states', () => {
    const attachmentState = applyVoiceAttachmentResult(
      {
        selectedFiles: [],
        attachmentError: '',
      },
      {
        item: {
          id: 'audio-1',
          file: {} as File,
          name: 'voz.webm',
          typeLabel: 'Mensagem de audio',
          kind: 'audio',
        },
        voiceAttachmentId: 'audio-1',
        voiceTranscript: 'teste',
      },
    );

    expect(attachmentState).toMatchObject({
      voiceAttachmentId: 'audio-1',
      voiceTranscript: 'teste',
      attachmentError: '',
    });

    const removalState = confirmVoiceRemovalState({
      selectedFiles: attachmentState.selectedFiles,
      targetId: 'audio-1',
      voiceAttachmentId: 'audio-1',
    });

    expect(removalState).toMatchObject({
      selectedFiles: [],
      voiceAttachmentId: null,
      voiceTranscript: '',
      pendingVoiceRemovalId: null,
      voiceCancelDialogOpen: false,
      attachmentError: '',
    });
  });

  it('handles voice dialog and attachment cleanup helpers', () => {
    expect(openVoiceRemovalDialog('audio-1')).toEqual({
      voiceCancelDialogMode: 'remove',
      pendingVoiceRemovalId: 'audio-1',
      voiceCancelDialogOpen: true,
    });
    expect(closeVoiceDialogAndResume()).toEqual({
      voiceCancelDialogOpen: false,
      pendingVoiceRemovalId: null,
      shouldResume: true,
    });
    expect(closeVoiceDialog()).toEqual({
      voiceCancelDialogOpen: false,
      pendingVoiceRemovalId: null,
      shouldResume: false,
    });
    expect(
      finalizeAttachmentRemovalState({
        files: [],
        shouldClearError: true,
      }),
    ).toEqual({
      selectedFiles: [],
      attachmentError: '',
    });
  });
});
