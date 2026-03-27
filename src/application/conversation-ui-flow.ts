import type {
  ConversationDeleteTarget,
  ConversationItem,
  ConversationRenameTarget,
} from '../domain/conversation';

export function selectConversationMenuState(input: {
  currentMenuId: string | null;
  targetId: string;
  buttonRect?: DOMRect | null;
  containerRect?: DOMRect | null;
}) {
  if (input.currentMenuId === input.targetId) {
    return {
      conversationMenuId: null,
      conversationMenuPlacement: 'below' as const,
    };
  }

  const buttonRect = input.buttonRect;
  const containerRect = input.containerRect;
  const conversationMenuPlacement: 'above' | 'below' =
    buttonRect && containerRect && containerRect.bottom - buttonRect.bottom < 140
      ? 'above'
      : 'below';

  return {
    conversationMenuId: input.targetId,
    conversationMenuPlacement,
  };
}

export function shouldCloseConversationMenu(target: HTMLElement | null) {
  if (!target) {
    return true;
  }

  return !target.closest('.conversation-menu') && !target.closest('.conversation-menu-button');
}

export function createConversationActionTarget(input: {
  action: 'rename' | 'delete';
  id: string;
  conversations: ConversationItem[];
}) {
  const conversationIndex = input.conversations.findIndex((item) => item.id === input.id);
  if (conversationIndex === -1) {
    return null;
  }

  const conversation = input.conversations[conversationIndex];
  if (input.action === 'delete') {
    return {
      deleteConversationTarget: {
        id: conversation.id,
        title: conversation.title,
        index: conversationIndex,
      } satisfies ConversationDeleteTarget,
      renameConversationTarget: null,
    };
  }

  return {
    deleteConversationTarget: null,
    renameConversationTarget: {
      id: conversation.id,
      title: conversation.title,
      index: conversationIndex,
      draft: conversation.title,
    } satisfies ConversationRenameTarget,
  };
}

export function updateRenameDraft(target: ConversationRenameTarget, draft: string) {
  return {
    ...target,
    draft,
  };
}
