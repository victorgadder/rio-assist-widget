import { describe, expect, it } from 'vitest';
import {
  applyOutgoingAttachmentCleanup,
  applyPreparedOutgoingMessageError,
  applyPreparedOutgoingMessageState,
  createSendEventDetail,
} from '../src/application/outgoing-message-ui-flow';

describe('outgoing-message-ui-flow', () => {
  it('creates send payload and pending UI state', () => {
    const detail = createSendEventDetail({
      content: 'Oi',
      apiBaseUrl: 'https://api.exemplo',
      hasToken: true,
      tokenPreview: 'abc***1234',
      consultantContext: null,
      isConsultantAgent: false,
      quickResponse: true,
      attachments: [
        {
          id: 'file-1',
          file: {} as File,
          name: 'teste.txt',
          typeLabel: 'Documento',
          kind: 'text',
        },
      ],
    });

    expect(detail.message).toBe('Oi');
    expect(detail.attachments).toHaveLength(1);

    const pendingState = applyPreparedOutgoingMessageState({
      messages: [],
      prepared: {
        userMessage: {
          id: 'msg-1',
          role: 'user',
          text: 'Oi',
          html: '<p>Oi</p>',
          timestamp: 1,
        },
        pendingResponse: {
          messageId: 'msg-1',
          requestText: 'Oi',
          requestToSend: 'Oi',
          quickResponse: true,
        },
        shouldRefreshConversations: true,
      },
    });

    expect(pendingState).toMatchObject({
      pendingResponseTo: {
        messageId: 'msg-1',
      },
      showNewConversationShortcut: true,
      refreshConversationsAfterResponse: true,
      message: '',
      errorMessage: '',
      isLoading: true,
    });
    expect(pendingState.messages).toHaveLength(1);
  });

  it('creates send failure and cleanup states', () => {
    expect(applyPreparedOutgoingMessageError('Falhou')).toEqual({
      pendingResponseTo: null,
      isLoading: false,
      errorMessage: 'Falhou',
    });

    const cleanup = applyOutgoingAttachmentCleanup({
      selectedFiles: [
        {
          id: 'audio-1',
          file: {} as File,
          name: 'voz.webm',
          typeLabel: 'Mensagem de audio',
          kind: 'audio',
        },
        {
          id: 'img-1',
          file: {} as File,
          name: 'imagem.png',
          typeLabel: 'Imagem',
          kind: 'image',
          previewUrl: 'blob:preview',
        },
      ],
      sentAttachments: [
        {
          id: 'audio-1',
          file: {} as File,
          name: 'voz.webm',
          typeLabel: 'Mensagem de audio',
          kind: 'audio',
        },
      ],
      voiceAttachmentId: 'audio-1',
    });

    expect(cleanup).toMatchObject({
      shouldRevokePreviewUrls: ['blob:preview'],
      selectedFiles: [],
      attachmentError: '',
      voiceAttachmentId: null,
      voiceTranscript: '',
    });
  });
});
