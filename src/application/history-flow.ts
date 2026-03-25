import type { ChatMessage, ChatRole } from '../domain/chat';
import type { ConversationItem } from '../domain/conversation';
import {
  looksLikeMessageHistoryEntry,
  normalizeRole,
  parseTimestamp,
  toIsoString,
} from '../shared/history-utils';

export function isHistoryPayloadMessage(message: {
  action?: string;
  data: unknown;
}) {
  if (
    typeof message.action === 'string' &&
    message.action.toLowerCase().includes('history')
  ) {
    return true;
  }

  const data = message.data;
  if (data && typeof data === 'object') {
    const action = (data as Record<string, unknown>).action;
    if (typeof action === 'string' && action.toLowerCase().includes('history')) {
      return true;
    }

    if (
      Array.isArray((data as Record<string, unknown>).history) ||
      Array.isArray((data as Record<string, unknown>).conversations)
    ) {
      return true;
    }
  }

  return false;
}

export function extractHistoryEntries(payload: unknown): unknown[] {
  if (Array.isArray(payload)) {
    return payload;
  }

  if (payload && typeof payload === 'object') {
    const record = payload as Record<string, unknown>;
    const candidates = [
      record.history,
      record.conversations,
      record.data,
      record.items,
      record.messages,
    ];

    for (const candidate of candidates) {
      if (Array.isArray(candidate)) {
        return candidate;
      }
    }

    if (record.data && typeof record.data === 'object' && !Array.isArray(record.data)) {
      const nested = extractHistoryEntries(record.data);
      if (nested.length > 0) {
        return nested;
      }
    }
  }

  return [];
}

export function extractConversationIdFromPayload(
  payload: unknown,
  repairConversationId: (rawId: string) => string,
): string | null | undefined {
  if (payload && typeof payload === 'object') {
    const record = payload as Record<string, unknown>;
    const candidates = [
      record.conversationId,
      record.conversationUUID,
      record.conversationUuid,
      record.uuid,
      record.id,
    ];

    for (const candidate of candidates) {
      if (candidate === null) {
        return null;
      }

      if (candidate !== undefined) {
        return repairConversationId(String(candidate));
      }
    }
  }

  return undefined;
}

export function isMessageHistoryEntries(entries: unknown[]) {
  return entries.some((entry) => looksLikeMessageHistoryEntry(entry));
}

export function normalizeConversationHistory(
  entries: unknown[],
  repairConversationId: (rawId: string) => string,
): ConversationItem[] {
  if (entries.length === 0) {
    return [];
  }

  const map = new Map<string, ConversationItem>();

  entries.forEach((entry, index) => {
    if (!entry || typeof entry !== 'object') {
      return;
    }

    const normalized = normalizeConversationItem(
      entry as Record<string, unknown>,
      index,
      repairConversationId,
    );

    if (!normalized) {
      return;
    }

    const current = map.get(normalized.id);
    if (!current) {
      map.set(normalized.id, normalized);
      return;
    }

    const currentTime = Date.parse(current.updatedAt);
    const nextTime = Date.parse(normalized.updatedAt);

    if (Number.isFinite(nextTime) && nextTime > currentTime) {
      map.set(normalized.id, normalized);
    }
  });

  return Array.from(map.values()).sort((a, b) => {
    const order = Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
    return Number.isFinite(order) ? order : 0;
  });
}

export function normalizeMessageHistory(
  entries: unknown[],
  renderMessageHtml: (text: string) => string,
): ChatMessage[] {
  if (entries.length === 0) {
    return [];
  }

  return entries.flatMap((entry, index) =>
    normalizeHistoryMessages(entry as Record<string, unknown>, index, renderMessageHtml),
  );
}

function normalizeConversationItem(
  value: Record<string, unknown>,
  index: number,
  repairConversationId: (rawId: string) => string,
): ConversationItem | null {
  const rawId =
    value.conversationId ??
    value.conversationUUID ??
    value.conversationUuid ??
    value.uuid ??
    value.id;

  const idRaw = rawId !== undefined && rawId !== null ? String(rawId) : `history-${index + 1}`;
  const id = repairConversationId(idRaw);

  const rawTitle =
    value.title ??
    value.name ??
    value.topic ??
    value.subject ??
    value.question ??
    value.query ??
    value.message;

  const title =
    typeof rawTitle === 'string' && rawTitle.trim().length > 0
      ? rawTitle.trim()
      : `Conversa ${index + 1}`;

  const rawUpdated =
    value.updatedAt ??
    value.updated_at ??
    value.lastMessageAt ??
    value.last_message_at ??
    value.createdAt ??
    value.created_at ??
    value.timestamp ??
    value.date;

  const updatedAt = toIsoString(rawUpdated);

  return { id, title, updatedAt };
}

function normalizeHistoryMessages(
  value: Record<string, unknown>,
  index: number,
  renderMessageHtml: (text: string) => string,
): ChatMessage[] {
  const messages: ChatMessage[] = [];

  const rawUserText = value.message ?? value.question ?? value.query ?? value.text ?? value.content;
  const userText = typeof rawUserText === 'string' ? rawUserText.trim() : '';

  const rawResponseText =
    value.response ?? value.answer ?? value.reply ?? value.completion ?? value.body ?? value.preview;
  const responseText = typeof rawResponseText === 'string' ? rawResponseText.trim() : '';

  const rawId = value.id ?? value.messageId ?? value.uuid ?? value.conversationMessageId;
  const baseId = rawId !== undefined && rawId !== null
    ? String(rawId)
    : `history-${index + 1}`;

  const userTimestampValue =
    value.timestamp ??
    value.createdAt ??
    value.created_at ??
    value.date ??
    value.time;
  const assistantTimestampValue =
    value.responseTimestamp ??
    value.responseTime ??
    value.responseDate ??
    value.response_at ??
    value.updatedAt ??
    value.updated_at;

  const userTimestamp = parseTimestamp(userTimestampValue);
  const assistantTimestamp = parseTimestamp(assistantTimestampValue, userTimestamp + 1);

  if (responseText) {
    if (userText) {
      messages.push({
        id: `${baseId}-user`,
        role: 'user',
        text: userText,
        html: renderMessageHtml(userText),
        timestamp: userTimestamp,
      });
    }

    messages.push({
      id: `${baseId}-assistant`,
      role: 'assistant',
      text: responseText,
      html: renderMessageHtml(responseText),
      timestamp: assistantTimestamp,
    });
  } else if (userText) {
    return [];
  }

  if (messages.length > 0) {
    return messages;
  }

  const fallback = normalizeSingleHistoryMessage(value, index, renderMessageHtml);
  return fallback ? [fallback] : [];
}

function normalizeSingleHistoryMessage(
  value: Record<string, unknown>,
  index: number,
  renderMessageHtml: (text: string) => string,
): ChatMessage | null {
  const rawText =
    value.text ??
    value.message ??
    value.content ??
    value.response ??
    value.body ??
    value.preview;

  const text = typeof rawText === 'string' && rawText.trim().length > 0
    ? rawText
    : '';

  if (!text) {
    return null;
  }

  const role: ChatRole = normalizeRole(
    value.role ??
      value.sender ??
      value.from ??
      value.author ??
      value.type ??
      value.direction,
  );

  const rawId = value.id ?? value.messageId ?? value.uuid ?? value.conversationMessageId;
  const id = rawId !== undefined && rawId !== null
    ? String(rawId)
    : `history-message-${index + 1}`;

  const timestampValue =
    value.timestamp ??
    value.createdAt ??
    value.created_at ??
    value.updatedAt ??
    value.updated_at ??
    value.date ??
    value.time;

  const timestamp = parseTimestamp(timestampValue);

  return {
    id,
    role,
    text,
    html: renderMessageHtml(text),
    timestamp,
  };
}
