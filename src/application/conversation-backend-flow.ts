import type {
  ConversationActionAttempt,
  ConversationActionErrorState,
  ConversationActionKind,
  ConversationItem,
} from '../domain/conversation';

export function createConversationActionEventDetail(input: {
  action: ConversationActionKind;
  conversation: Pick<ConversationItem, 'id' | 'title'>;
  index: number;
}) {
  return {
    id: input.conversation.id,
    title: input.conversation.title,
    index: input.index,
    action: input.action,
  };
}

export function createConversationActionEventName(action: ConversationActionKind) {
  return action === 'rename'
    ? 'rioassist:conversation-rename'
    : 'rioassist:conversation-delete';
}

export function createConversationActionSuccessState() {
  return {
    conversationHistoryError: '',
  };
}

export function createConversationActionFailureMessage(
  action: ConversationActionKind,
  error: unknown,
) {
  if (error instanceof Error && error.message) {
    return error.message;
  }

  return action === 'rename'
    ? 'Nao foi possivel renomear a conversa.'
    : 'Nao foi possivel excluir a conversa.';
}

export function applyConversationSystemActionState(input: {
  pendingConversationAction: ConversationActionAttempt | null;
  conversationId: string;
  action: ConversationActionKind;
}) {
  const shouldClearPending = Boolean(
    input.pendingConversationAction &&
      input.pendingConversationAction.conversationId === input.conversationId &&
      input.pendingConversationAction.action === input.action,
  );

  return {
    conversationHistoryError: '',
    pendingConversationAction: shouldClearPending ? null : input.pendingConversationAction,
    conversationActionError: shouldClearPending ? null : undefined,
  };
}

export function applyConversationActionErrorState(
  pending: ConversationActionAttempt,
  message: string,
): ConversationActionErrorState {
  return {
    ...pending,
    message,
  };
}
