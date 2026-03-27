import { describe, expect, it } from 'vitest';
import { buildIncomingAssistantState } from '../src/application/incoming-message-flow';
import { createChatMessageFactory } from '../src/application/chat-flow';
import { createInitialConsultantFlowState } from '../src/application/consultant-flow';

const createMessage = createChatMessageFactory({
  createId: () => 'assistant-1',
  now: () => 1,
  renderHtml: (content) => `<p>${content}</p>`,
});

describe('incoming-message-flow', () => {
  it('keeps loading on processing payloads while syncing conversation meta', () => {
    const result = buildIncomingAssistantState({
      message: {
        text: '',
        raw: '',
        data: {
          conversationId: 'conv-1',
          conversationTitle: 'Conversa 1',
        },
        action: 'processing',
      },
      conversations: [],
      pendingResponseTo: null,
      consultantState: createInitialConsultantFlowState(),
      consultantAgentOptions: [],
      nowIsoString: '2026-03-27T12:00:00.000Z',
      repairConversationId: (raw) => raw,
      createMessage,
      createConsultantMessage: (role, text, consultantFollowUp, options) =>
        createMessage({ role, text, consultantFollowUp, ...options }),
      createId: () => 'id-1',
    });

    expect(result.shouldKeepLoading).toBe(true);
    expect(result.conversationSync.isNewConversation).toBe(true);
    expect(result.conversationMetaState.activeConversationTitle).toBe('Conversa 1');
    expect(result.assistantMessage).toBeNull();
  });

  it('creates assistant response and consultant effects for final payloads', () => {
    const result = buildIncomingAssistantState({
      message: {
        text: 'Resposta final',
        raw: '',
        data: {
          conversationId: 'conv-1',
          conversationTitle: 'Conversa 1',
        },
        action: 'message',
      },
      conversations: [],
      pendingResponseTo: {
        messageId: 'user-1',
        requestText: 'Pergunta',
        requestToSend: 'Pergunta',
        quickResponse: true,
      },
      consultantState: {
        ...createInitialConsultantFlowState(),
        consultantAgentStage: 'awaiting',
      },
      consultantAgentOptions: [],
      nowIsoString: '2026-03-27T12:00:00.000Z',
      repairConversationId: (raw) => raw,
      createMessage,
      createConsultantMessage: (role, text, consultantFollowUp, options) =>
        createMessage({ role, text, consultantFollowUp, ...options }),
      createId: () => 'id-1',
    });

    expect(result.shouldKeepLoading).toBe(false);
    expect(result.assistantMessage?.text).toBe('Resposta final');
    expect(result.assistantMessage?.responseTo?.messageId).toBe('user-1');
    expect(result.consultantEffects?.state.consultantAgentStage).toBe('ready');
  });
});
