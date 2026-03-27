import {
  applyConversationActionErrorState,
  applyConversationSystemActionState,
  createConversationActionEventDetail,
  createConversationActionEventName,
  createConversationActionFailureMessage,
  createConversationActionSuccessState,
} from '../../application/conversation-backend-flow';
import {
  createConversationActionTarget,
  selectConversationMenuState,
  shouldCloseConversationMenu,
  updateRenameDraft,
} from '../../application/conversation-ui-flow';
import {
  createPendingDeleteAction,
  createPendingRenameAction,
  createRetryConversationAction,
  restoreConversationSnapshotState,
  selectConversationState,
} from '../../application/conversation-state-flow';
import {
  parseConversationSystemAction,
  resolveConversationActionErrorText,
} from '../../application/conversation-action-flow';
import type { ChatMessage } from '../../domain/chat';
import type {
  ConversationActionAttempt,
  ConversationActionErrorState,
  ConversationDeleteTarget,
  ConversationItem,
  ConversationRenameTarget,
} from '../../domain/conversation';
import type { RioIncomingMessage, RioWebsocketClient } from '../../services/rioWebsocket';

export type ConversationHost = {
  showConversations: boolean;
  conversationMenuId: string | null;
  conversationMenuPlacement: 'above' | 'below';
  errorMessage: string;
  currentConversationId: string | null;
  activeConversationTitle: string | null;
  activeConversationUpdatedAt: string | null;
  conversations: ConversationItem[];
  messages: ChatMessage[];
  deleteConversationTarget: ConversationDeleteTarget | null;
  renameConversationTarget: ConversationRenameTarget | null;
  pendingConversationAction: ConversationActionAttempt | null;
  conversationActionError: ConversationActionErrorState | null;
  conversationHistoryError: string;
  isLoading: boolean;
  repairConversationId: (rawId: string) => string;
  requestConversationHistory: (conversationId?: string) => Promise<void>;
  ensureRioClient: () => RioWebsocketClient;
  applyConversationRename: (id: string, newTitle: string) => void;
  applyConversationDeletion: (id: string) => void;
  loadingGuard: { clear: () => void };
};

export function handleConversationSelect(host: ConversationHost, conversationId: string) {
  if (!conversationId) {
    return;
  }

  const selection = selectConversationState(conversationId, host.conversations);
  host.showConversations = false;
  host.conversationMenuId = null;
  host.errorMessage = '';
  host.currentConversationId = selection.currentConversationId;
  host.activeConversationTitle = selection.activeConversationTitle;

  return host.requestConversationHistory(conversationId);
}

export function handleConversationSearch(event: InputEvent) {
  return (event.target as HTMLInputElement).value;
}

export function handleConversationMenuToggle(
  host: ConversationHost,
  event: Event,
  id: string,
  renderRoot: ParentNode,
) {
  event.stopPropagation();
  const button = event.currentTarget as HTMLElement;
  const container = renderRoot.querySelector(
    '.conversations-panel__surface',
  ) as HTMLElement | null;
  const nextState = selectConversationMenuState({
    currentMenuId: host.conversationMenuId,
    targetId: id,
    buttonRect: button?.getBoundingClientRect() ?? null,
    containerRect: container?.getBoundingClientRect() ?? null,
  });
  host.conversationMenuId = nextState.conversationMenuId;
  host.conversationMenuPlacement = nextState.conversationMenuPlacement;
}

export function handleConversationsPanelPointer(host: ConversationHost, event: PointerEvent) {
  const target = event.target as HTMLElement;
  if (shouldCloseConversationMenu(target)) {
    host.conversationMenuId = null;
  }
}

export function handleConversationAction(
  host: ConversationHost,
  action: 'rename' | 'delete',
  id: string,
) {
  host.conversationMenuId = null;
  const targetState = createConversationActionTarget({
    action,
    id,
    conversations: host.conversations,
  });
  if (!targetState) {
    return;
  }
  host.deleteConversationTarget = targetState.deleteConversationTarget;
  host.renameConversationTarget = targetState.renameConversationTarget;
}

export async function confirmDeleteConversation(host: ConversationHost) {
  const target = host.deleteConversationTarget;
  if (!target) {
    return;
  }

  host.pendingConversationAction = createPendingDeleteAction({
    target,
    conversations: host.conversations,
    currentConversationId: host.currentConversationId,
    messages: host.messages,
    nowIsoString: new Date().toISOString(),
  });

  const success = await dispatchConversationAction(
    host,
    'delete',
    { id: target.id, title: target.title },
    target.index,
  );
  if (success) {
    host.deleteConversationTarget = null;
    return;
  }

  host.pendingConversationAction = null;
}

export function cancelDeleteConversation(host: ConversationHost) {
  host.deleteConversationTarget = null;
}

export function handleRenameDraft(host: ConversationHost, event: InputEvent) {
  if (!host.renameConversationTarget) {
    return;
  }

  host.renameConversationTarget = updateRenameDraft(
    host.renameConversationTarget,
    (event.target as HTMLInputElement).value,
  );
}

export async function confirmRenameConversation(host: ConversationHost) {
  const target = host.renameConversationTarget;
  if (!target) {
    return;
  }

  const newTitle = target.draft.trim();
  if (!newTitle) {
    return;
  }

  host.pendingConversationAction = createPendingRenameAction({
    ...target,
    draft: newTitle,
  });

  const success = await dispatchConversationAction(
    host,
    'rename',
    { id: target.id, title: newTitle },
    target.index,
    newTitle,
  );
  if (success) {
    host.renameConversationTarget = null;
    return;
  }

  host.pendingConversationAction = null;
}

export function cancelRenameConversation(host: ConversationHost) {
  host.renameConversationTarget = null;
}

export function cancelConversationActionError(host: ConversationHost) {
  host.conversationActionError = null;
  host.pendingConversationAction = null;
}

export async function retryConversationAction(host: ConversationHost) {
  const errorState = host.conversationActionError;
  if (!errorState) {
    return;
  }

  host.pendingConversationAction = createRetryConversationAction({
    errorState,
    conversations: host.conversations,
    nowIsoString: new Date().toISOString(),
  });

  host.conversationActionError = null;

  await dispatchConversationAction(
    host,
    errorState.action,
    { id: errorState.conversationId, title: errorState.newTitle ?? errorState.originalTitle },
    host.pendingConversationAction.index,
    errorState.newTitle,
  );
}

async function dispatchConversationAction(
  host: ConversationHost,
  action: 'rename' | 'delete',
  conversation: Pick<ConversationItem, 'id' | 'title'>,
  index: number,
  newTitle?: string,
) {
  const eventName = createConversationActionEventName(action);
  const detail = createConversationActionEventDetail({
    action,
    conversation,
    index,
  });

  const allowed = (host as unknown as EventTarget).dispatchEvent(
    new CustomEvent(eventName, {
      detail,
      bubbles: true,
      composed: true,
      cancelable: true,
    }),
  );

  if (!allowed) {
    return false;
  }

  if (action === 'delete') {
    return syncConversationDeleteBackend(host, conversation.id);
  }

  if (action === 'rename' && newTitle) {
    return syncConversationRenameBackend(host, conversation.id, newTitle);
  }

  return false;
}

async function syncConversationRenameBackend(
  host: ConversationHost,
  conversationId: string,
  newTitle: string,
) {
  try {
    const client = host.ensureRioClient();
    await client.renameConversation(conversationId, newTitle);
    host.applyConversationRename(conversationId, newTitle);
    host.conversationHistoryError = createConversationActionSuccessState().conversationHistoryError;
    return true;
  } catch (error) {
    host.conversationHistoryError = createConversationActionFailureMessage('rename', error);
    return false;
  }
}

async function syncConversationDeleteBackend(host: ConversationHost, conversationId: string) {
  try {
    const client = host.ensureRioClient();
    await client.deleteConversation(conversationId);
    host.applyConversationDeletion(conversationId);
    host.conversationHistoryError = createConversationActionSuccessState().conversationHistoryError;
    return true;
  } catch (error) {
    host.conversationHistoryError = createConversationActionFailureMessage('delete', error);
    return false;
  }
}

export function handleConversationSystemAction(
  host: ConversationHost,
  message: RioIncomingMessage,
) {
  const parsed = parseConversationSystemAction(message, (rawId) =>
    host.repairConversationId(rawId),
  );
  if (!parsed) {
    return false;
  }

  if (parsed.kind === 'rename') {
    host.applyConversationRename(parsed.conversationId, parsed.newTitle);
    const nextState = applyConversationSystemActionState({
      pendingConversationAction: host.pendingConversationAction,
      conversationId: parsed.conversationId,
      action: 'rename',
    });
    host.conversationHistoryError = nextState.conversationHistoryError;
    host.pendingConversationAction = nextState.pendingConversationAction;
    if (nextState.conversationActionError === null) {
      host.conversationActionError = null;
    }
    return true;
  }

  if (parsed.kind === 'delete') {
    host.applyConversationDeletion(parsed.conversationId);
    const nextState = applyConversationSystemActionState({
      pendingConversationAction: host.pendingConversationAction,
      conversationId: parsed.conversationId,
      action: 'delete',
    });
    host.conversationHistoryError = nextState.conversationHistoryError;
    host.pendingConversationAction = nextState.pendingConversationAction;
    if (nextState.conversationActionError === null) {
      host.conversationActionError = null;
    }
    return true;
  }

  return parsed.kind === 'processing';
}

export function handleConversationActionError(
  host: ConversationHost,
  message: RioIncomingMessage,
) {
  const errorText = resolveConversationActionErrorText(message);
  if (!errorText) {
    return false;
  }

  const pending = host.pendingConversationAction;
  if (pending) {
    if (pending.action === 'rename') {
      host.applyConversationRename(pending.conversationId, pending.originalTitle);
    }

    if (pending.action === 'delete') {
      host.conversations = restoreConversationSnapshotState({
        conversations: host.conversations,
        snapshot: pending.snapshot,
        index: pending.index,
      });
      if (pending.wasActive) {
        host.currentConversationId = pending.conversationId;
        host.activeConversationTitle = pending.originalTitle;
        host.activeConversationUpdatedAt = pending.snapshot?.updatedAt ?? null;
        host.messages = pending.messagesSnapshot ?? host.messages;
      }
    }

    host.conversationActionError = applyConversationActionErrorState(pending, errorText);
    host.pendingConversationAction = null;
    host.loadingGuard.clear();
    host.isLoading = false;
    return true;
  }

  host.errorMessage = errorText;
  host.loadingGuard.clear();
  host.isLoading = false;
  return true;
}
