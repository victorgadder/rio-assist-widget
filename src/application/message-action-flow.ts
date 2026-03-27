import type { ChatMessage } from '../domain/chat';

export type MessageReactionState = Record<string, 'like' | 'unlike'>;

export type MessageActionDetail = {
  messageId: string;
  role: ChatMessage['role'];
  text: string;
  conversationId: string | null;
  responseTo: ChatMessage['responseTo'] | null;
};

export function createMessageActionDetail(
  message: ChatMessage,
  conversationId: string | null,
): MessageActionDetail {
  return {
    messageId: message.id,
    role: message.role,
    text: message.text,
    conversationId,
    responseTo: message.responseTo ?? null,
  };
}

export function createCopiedMessageState(messageId: string) {
  return {
    copiedMessageId: messageId,
    timeoutMs: 1200,
  };
}

export function clearCopiedMessageState() {
  return {
    copiedMessageId: null,
  };
}

export function toggleMessageReaction(
  reactions: MessageReactionState,
  kind: 'like' | 'unlike',
  messageId: string,
) {
  const current = reactions[messageId];
  const next = current === kind ? undefined : kind;
  const updated = { ...reactions };

  if (next) {
    updated[messageId] = next;
  } else {
    delete updated[messageId];
  }

  return updated;
}

export function hideMessageForRefresh(messages: ChatMessage[], messageId: string) {
  return messages.map((entry) =>
    entry.id === messageId ? { ...entry, hidden: true } : entry,
  );
}
