import type { ChatMessage } from '../domain/chat';
import type {
  ConversationActionAttempt,
  ConversationActionErrorState,
  ConversationDeleteTarget,
  ConversationItem,
  ConversationRenameTarget,
} from '../domain/conversation';

type ActiveConversationMeta = {
  activeConversationTitle: string | null;
  activeConversationUpdatedAt: string | null;
};

export type ConversationSelectionResult = {
  currentConversationId: string;
  activeConversationTitle: string | null;
};

export type ConversationRenameResult = {
  conversations: ConversationItem[];
  changed: boolean;
} & ActiveConversationMeta;

export type ConversationDeletionResult = {
  conversations: ConversationItem[];
  removed: boolean;
  currentConversationId: string | null;
  messages: ChatMessage[];
} & ActiveConversationMeta;

export type RestoreConversationSnapshotInput = {
  conversations: ConversationItem[];
  snapshot?: ConversationItem;
  index: number;
};

export type PendingDeleteActionInput = {
  target: ConversationDeleteTarget;
  conversations: ConversationItem[];
  currentConversationId: string | null;
  messages: ChatMessage[];
  nowIsoString: string;
};

export type RetryConversationActionInput = {
  errorState: ConversationActionErrorState;
  conversations: ConversationItem[];
  nowIsoString: string;
};

export type MessageHistoryStateResult = {
  messages: ChatMessage[];
  showConversations: boolean;
  isLoading: boolean;
  conversationHistoryLoading: boolean;
  showNewConversationShortcut: boolean;
  refreshConversationsAfterResponse: boolean;
  currentConversationId?: string;
};

export type ConversationHistoryStateResult = {
  conversations: ConversationItem[];
  conversationHistoryLoading: boolean;
  conversationHistoryError: string;
} & ActiveConversationMeta;

function resolveActiveConversationMeta(
  conversations: ConversationItem[],
  currentConversationId: string | null,
): ActiveConversationMeta {
  if (!currentConversationId) {
    return {
      activeConversationTitle: null,
      activeConversationUpdatedAt: null,
    };
  }

  const conversation = conversations.find((item) => item.id === currentConversationId) ?? null;
  return {
    activeConversationTitle: conversation?.title ?? null,
    activeConversationUpdatedAt: conversation?.updatedAt ?? null,
  };
}

export function selectConversationState(
  conversationId: string,
  conversations: ConversationItem[],
): ConversationSelectionResult {
  return {
    currentConversationId: conversationId,
    activeConversationTitle:
      conversations.find((item) => item.id === conversationId)?.title ?? null,
  };
}

export function applyConversationRenameState(input: {
  conversations: ConversationItem[];
  currentConversationId: string | null;
  conversationId: string;
  newTitle: string;
}): ConversationRenameResult {
  const { conversations, currentConversationId, conversationId, newTitle } = input;
  let changed = false;
  const nextConversations = conversations.map((conversation) => {
    if (conversation.id !== conversationId) {
      return conversation;
    }

    changed = true;
    return {
      ...conversation,
      title: newTitle,
    };
  });

  const nextMeta = changed
    ? resolveActiveConversationMeta(nextConversations, currentConversationId)
    : resolveActiveConversationMeta(conversations, currentConversationId);

  return {
    conversations: nextConversations,
    changed,
    ...nextMeta,
  };
}

export function applyConversationDeletionState(input: {
  conversations: ConversationItem[];
  currentConversationId: string | null;
  conversationId: string;
  messages: ChatMessage[];
}): ConversationDeletionResult {
  const { conversations, currentConversationId, conversationId, messages } = input;
  const wasActive = currentConversationId === conversationId;
  const nextConversations = conversations.filter((conversation) => conversation.id !== conversationId);
  const removed = nextConversations.length !== conversations.length;

  if (!removed) {
    const currentMeta = resolveActiveConversationMeta(conversations, currentConversationId);
    return {
      conversations,
      removed: false,
      currentConversationId,
      messages,
      ...currentMeta,
    };
  }

  const nextConversationId = wasActive ? null : currentConversationId;
  const nextMeta = resolveActiveConversationMeta(nextConversations, nextConversationId);

  return {
    conversations: nextConversations,
    removed: true,
    currentConversationId: nextConversationId,
    messages: wasActive ? [] : messages,
    ...nextMeta,
  };
}

export function restoreConversationSnapshotState(
  input: RestoreConversationSnapshotInput,
): ConversationItem[] {
  const { conversations, snapshot, index } = input;
  if (!snapshot) {
    return conversations;
  }

  const exists = conversations.some((conversation) => conversation.id === snapshot.id);
  if (exists) {
    return conversations;
  }

  const next = [...conversations];
  const position = index >= 0 && index <= next.length ? index : next.length;
  next.splice(position, 0, snapshot);
  return next;
}

export function createPendingDeleteAction(
  input: PendingDeleteActionInput,
): ConversationActionAttempt {
  const { target, conversations, currentConversationId, messages, nowIsoString } = input;
  const snapshot =
    conversations[target.index] ??
    conversations.find((item) => item.id === target.id) ?? {
      id: target.id,
      title: target.title,
      updatedAt: nowIsoString,
    };
  const isActive = currentConversationId === target.id;

  return {
    action: 'delete',
    conversationId: target.id,
    originalTitle: target.title,
    index: target.index,
    snapshot,
    messagesSnapshot: isActive ? [...messages] : undefined,
    wasActive: isActive,
  };
}

export function createPendingRenameAction(
  target: ConversationRenameTarget,
): ConversationActionAttempt {
  return {
    action: 'rename',
    conversationId: target.id,
    originalTitle: target.title,
    index: target.index,
    newTitle: target.draft.trim(),
  };
}

export function createRetryConversationAction(
  input: RetryConversationActionInput,
): ConversationActionAttempt {
  const { errorState, conversations, nowIsoString } = input;
  const indexFromState =
    typeof errorState.index === 'number'
      ? errorState.index
      : conversations.findIndex((item) => item.id === errorState.conversationId);
  const safeIndex =
    indexFromState >= 0 ? indexFromState : conversations.length > 0 ? conversations.length - 1 : 0;

  const snapshot =
    errorState.snapshot ??
    conversations.find((item) => item.id === errorState.conversationId) ?? {
      id: errorState.conversationId,
      title: errorState.originalTitle,
      updatedAt: nowIsoString,
    };

  return {
    action: errorState.action,
    conversationId: errorState.conversationId,
    originalTitle: errorState.originalTitle,
    index: safeIndex,
    newTitle: errorState.newTitle,
    snapshot,
    messagesSnapshot: errorState.messagesSnapshot,
    wasActive: errorState.wasActive,
  };
}

export function createConversationHistoryState(input: {
  conversations: ConversationItem[];
  currentConversationId: string | null;
}): ConversationHistoryStateResult {
  const { conversations, currentConversationId } = input;
  return {
    conversations,
    conversationHistoryLoading: false,
    conversationHistoryError: '',
    ...resolveActiveConversationMeta(conversations, currentConversationId),
  };
}

export function createMessageHistoryState(input: {
  messages: ChatMessage[];
  currentConversationId?: string | null;
}): MessageHistoryStateResult {
  const { messages, currentConversationId } = input;
  const result: MessageHistoryStateResult = {
    messages,
    showConversations: false,
    isLoading: false,
    conversationHistoryLoading: false,
    showNewConversationShortcut: messages.length > 0,
    refreshConversationsAfterResponse: false,
  };

  if (currentConversationId) {
    result.currentConversationId = currentConversationId;
  }

  return result;
}
