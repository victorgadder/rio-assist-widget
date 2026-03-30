import {
  createAssistantResponseMessage,
  syncConversationFromIncomingMessage,
} from './chat-flow';
import { createConversationHistoryState } from './conversation-state-flow';
import { applyConsultantEffectsAfterAssistantMessage, type ConsultantFlowState } from './consultant-flow';
import { extractConversationIdFromPayload } from './history-flow';
import type { RealtimeIncomingMessage } from './ports/realtime-chat-gateway';
import type { ChatMessage, PendingResponseState } from '../domain/chat';
import type { ConsultantAgentOption } from '../domain/consultant';
import type { ConversationItem } from '../domain/conversation';

export function buildIncomingAssistantState(input: {
  message: RealtimeIncomingMessage;
  conversations: ConversationItem[];
  pendingResponseTo: PendingResponseState | null;
  consultantState: ConsultantFlowState;
  consultantAgentOptions: ConsultantAgentOption[];
  nowIsoString: string;
  repairConversationId: (rawId: string) => string;
  createMessage: (input: {
    role: 'user' | 'assistant';
    text: string;
    consultantFollowUp?: ChatMessage['consultantFollowUp'];
    request?: ChatMessage['request'];
    responseTo?: ChatMessage['responseTo'];
    hidden?: boolean;
  }) => ChatMessage;
  createConsultantMessage: (
    role: 'user' | 'assistant',
    text: string,
    consultantFollowUp?: ChatMessage['consultantFollowUp'],
    options?: {
      request?: ChatMessage['request'];
      responseTo?: ChatMessage['responseTo'];
      hidden?: boolean;
    },
  ) => ChatMessage;
  createId: (length: number) => string;
}) {
  const incomingConversationId = extractConversationIdFromPayload(
    input.message.data,
    input.repairConversationId,
  );
  const incomingConversationTitle =
    typeof (input.message.data as any)?.conversationTitle === 'string'
      ? (input.message.data as any).conversationTitle.trim()
      : '';

  const syncResult = incomingConversationId
    ? syncConversationFromIncomingMessage({
        conversations: input.conversations,
        incomingConversationId,
        incomingConversationTitle,
        nowIsoString: input.nowIsoString,
      })
    : {
        conversations: input.conversations,
        activeConversationTitle: null,
        activeConversationUpdatedAt: null,
        isNewConversation: false,
      };

  const conversationMetaState = createConversationHistoryState({
    conversations: syncResult.conversations,
    currentConversationId: incomingConversationId ?? null,
  });

  if (input.message.action === 'processing') {
    return {
      incomingConversationId,
      conversationSync: syncResult,
      conversationMetaState,
      assistantMessage: null,
      consultantEffects: null,
      shouldKeepLoading: true,
    };
  }

  const assistantMessage = createAssistantResponseMessage({
    text: input.message.text,
    pendingResponse: input.pendingResponseTo,
    createMessage: input.createMessage,
  });

  const consultantEffects = applyConsultantEffectsAfterAssistantMessage({
    state: input.consultantState,
    consultantAgentOptions: input.consultantAgentOptions,
    createMessage: input.createConsultantMessage,
    createId: input.createId,
  });

  return {
    incomingConversationId,
    conversationSync: syncResult,
    conversationMetaState,
    assistantMessage,
    consultantEffects,
    shouldKeepLoading: false,
  };
}
