import type { RioIncomingMessage } from '../services/rioWebsocket';

export type ParsedConversationSystemAction =
  | { kind: 'rename'; conversationId: string; newTitle: string }
  | { kind: 'delete'; conversationId: string }
  | { kind: 'processing' }
  | null;

export function parseConversationSystemAction(
  message: RioIncomingMessage,
  repairConversationId: (rawId: string) => string,
): ParsedConversationSystemAction {
  const action = (message.action ?? '').toLowerCase();
  if (action === 'conversationrenamed') {
    const data = message.data as Record<string, unknown>;
    const conversationId = repairConversationId(
      extractString(data, ['conversationId', 'id']) ?? '',
    );
    const newTitle = extractString(data, ['newTitle', 'title']);
    if (conversationId && newTitle) {
      return { kind: 'rename', conversationId, newTitle };
    }
    return { kind: 'processing' };
  }

  if (action === 'conversationdeleted') {
    const data = message.data as Record<string, unknown>;
    const conversationId = repairConversationId(
      extractString(data, ['conversationId', 'id']) ?? '',
    );
    if (conversationId) {
      return { kind: 'delete', conversationId };
    }
    return { kind: 'processing' };
  }

  if (action === 'processing') {
    return { kind: 'processing' };
  }

  return null;
}

export function resolveConversationActionErrorText(message: RioIncomingMessage): string | null {
  const action = (message.action ?? '').toLowerCase();
  if (action !== 'error') {
    return null;
  }

  const data = message.data as Record<string, unknown>;
  return (
    extractString(data, ['error', 'message', 'detail', 'description']) ||
    (typeof message.text === 'string' && message.text.trim()
      ? message.text
      : 'O agente retornou um erro ao processar a conversa.')
  );
}

export function shouldIgnoreAssistantPayload(action?: string) {
  if (!action) {
    return false;
  }

  const normalized = action.toLowerCase();
  return (
    normalized === 'processing' ||
    normalized === 'conversationrenamed' ||
    normalized === 'conversationdeleted'
  );
}

function extractString(
  data: Record<string, unknown> | undefined,
  keys: string[],
): string | null {
  if (!data || typeof data !== 'object') {
    return null;
  }

  for (const key of keys) {
    const value = data[key];
    if (typeof value === 'string' && value.trim()) {
      return value;
    }
  }

  return null;
}
