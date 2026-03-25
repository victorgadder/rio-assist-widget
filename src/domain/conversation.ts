import type { ChatMessage } from './chat';

export type ConversationItem = {
  id: string;
  title: string;
  updatedAt: string;
};

export type ConversationDeleteTarget = {
  id: string;
  title: string;
  index: number;
};

export type ConversationRenameTarget = {
  id: string;
  title: string;
  index: number;
  draft: string;
};

export type ConversationActionKind = 'rename' | 'delete';

export type ConversationActionAttempt = {
  action: ConversationActionKind;
  conversationId: string;
  originalTitle: string;
  index: number;
  newTitle?: string;
  snapshot?: ConversationItem;
  messagesSnapshot?: ChatMessage[];
  wasActive?: boolean;
};

export type ConversationActionErrorState = ConversationActionAttempt & {
  message: string;
};
