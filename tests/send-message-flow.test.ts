import { describe, expect, it } from 'vitest';
import {
  buildSendMessageCleanup,
  buildSendMessageErrorState,
  prepareSendMessage,
} from '../src/application/send-message-flow';
import { createChatMessageFactory } from '../src/application/chat-flow';

const createMessage = createChatMessageFactory({
  createId: () => 'msg-1',
  now: () => 1,
  renderHtml: (content) => `<p>${content}</p>`,
});

describe('send-message-flow', () => {
  it('prepares outgoing message with event detail, ui state and websocket payload', () => {
    const result = prepareSendMessage({
      rawValue: '  oi  ',
      isLoading: false,
      quickResponse: true,
      hasMessages: false,
      messages: [],
      apiBaseUrl: 'https://api.exemplo',
      hasToken: true,
      tokenPreview: 'abc***1234',
      createMessage,
    });

    expect(result).not.toBeNull();
    expect(result?.sendEventDetail.message).toBe('oi');
    expect(result?.uiState.isLoading).toBe(true);
    expect(result?.websocketExtraPayload).toEqual({
      quickResponse: true,
    });
    expect(result?.prepared.pendingResponse.messageId).toBe('msg-1');
  });

  it('builds cleanup and error state consistently', () => {
    const cleanup = buildSendMessageCleanup({
      selectedFiles: [
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
          id: 'img-1',
          file: {} as File,
          name: 'imagem.png',
          typeLabel: 'Imagem',
          kind: 'image',
          previewUrl: 'blob:preview',
        },
      ],
      voiceAttachmentId: null,
    });

    expect(cleanup.shouldRevokePreviewUrls).toEqual(['blob:preview']);
    expect(cleanup.selectedFiles).toEqual([]);

    expect(buildSendMessageErrorState(new Error('Falhou'))).toEqual({
      pendingResponseTo: null,
      isLoading: false,
      errorMessage: 'Falhou',
    });
  });
});
