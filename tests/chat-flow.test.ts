import { describe, expect, it } from 'vitest';
import {
  buildWebsocketExtraPayload,
  createAssistantResponseMessage,
  createChatMessageFactory,
  prepareOutgoingMessage,
  syncConversationFromIncomingMessage,
} from '../src/application/chat-flow';

const createMessageFactory = () =>
  createChatMessageFactory({
    createId: () => 'message-id',
    now: () => 123,
    renderHtml: (content) => `<p>${content}</p>`,
  });

describe('prepareOutgoingMessage', () => {
  it('creates request and user message for regular sends', () => {
    const createMessage = createMessageFactory();

    const result = prepareOutgoingMessage({
      rawValue: '  ola  ',
      isLoading: false,
      quickResponse: true,
      hasMessages: false,
      createMessage,
    });

    expect(result).not.toBeNull();
    expect(result?.content).toBe('ola');
    expect(result?.contentToSend).toBe('ola');
    expect(result?.requestPayload.text).toBe('ola');
    expect(result?.userMessage?.role).toBe('user');
    expect(result?.pendingResponse.messageId).toBe('message-id');
    expect(result?.shouldRefreshConversations).toBe(true);
  });

  it('supports silent resend payloads without adding user message', () => {
    const createMessage = createMessageFactory();

    const result = prepareOutgoingMessage({
      rawValue: 'pergunta',
      isLoading: false,
      quickResponse: false,
      hasMessages: true,
      createMessage,
      options: {
        suppressUserMessage: true,
        responseToMessageId: 'assistant-1',
        forcePayload: {
          contentToSend: 'payload',
          contentToDisplay: 'texto',
          quickResponse: true,
        },
      },
    });

    expect(result?.userMessage).toBeUndefined();
    expect(result?.contentToSend).toBe('payload');
    expect(result?.requestPayload.text).toBe('texto');
    expect(result?.pendingResponse.messageId).toBe('assistant-1');
    expect(result?.pendingResponse.quickResponse).toBe(true);
  });
});

describe('chat-flow helpers', () => {
  it('creates assistant response message linked to pending response', () => {
    const createMessage = createMessageFactory();

    const result = createAssistantResponseMessage({
      text: 'resposta',
      pendingResponse: {
        messageId: 'user-1',
        requestText: 'pergunta',
        requestToSend: 'pergunta',
        quickResponse: false,
      },
      createMessage,
    });

    expect(result.role).toBe('assistant');
    expect(result.responseTo?.messageId).toBe('user-1');
    expect(result.html).toBe('<p>resposta</p>');
  });

  it('builds websocket payload only with relevant flags', () => {
    expect(
      buildWebsocketExtraPayload({
        text: 'txt',
        toSend: 'txt',
        quickResponse: true,
      }),
    ).toEqual({ quickResponse: true });

    expect(
      buildWebsocketExtraPayload({
        text: 'txt',
        toSend: 'txt',
        quickResponse: false,
        isConsultantAgent: true,
        consultantContext: {
          branchId: 'b1',
          branchLabel: 'Branch',
          questionId: 'q1',
          questionLevel: 'L1',
        },
      }),
    ).toEqual({
      quickResponse: false,
      isConsultantAgent: true,
      consultantContext: {
        branchId: 'b1',
        branchLabel: 'Branch',
        questionId: 'q1',
        questionLevel: 'L1',
      },
    });
  });

  it('syncs incoming conversation metadata into sidebar list', () => {
    const result = syncConversationFromIncomingMessage({
      conversations: [{ id: '1', title: 'Antiga', updatedAt: '2026-03-01T00:00:00.000Z' }],
      incomingConversationId: '2',
      incomingConversationTitle: 'Nova',
      nowIsoString: '2026-03-25T10:00:00.000Z',
    });

    expect(result.isNewConversation).toBe(true);
    expect(result.conversations[0]).toEqual({
      id: '2',
      title: 'Nova',
      updatedAt: '2026-03-25T10:00:00.000Z',
    });
    expect(result.activeConversationTitle).toBe('Nova');
  });
});
