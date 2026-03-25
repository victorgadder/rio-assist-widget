import { describe, expect, it } from 'vitest';
import {
  extractConversationIdFromPayload,
  extractHistoryEntries,
  isHistoryPayloadMessage,
  isMessageHistoryEntries,
  normalizeConversationHistory,
  normalizeMessageHistory,
} from '../src/application/history-flow';

describe('history-flow', () => {
  it('detects history payloads by action or data shape', () => {
    expect(isHistoryPayloadMessage({ action: 'getHistory', data: null })).toBe(true);
    expect(isHistoryPayloadMessage({ data: { conversations: [] } })).toBe(true);
    expect(isHistoryPayloadMessage({ action: 'message', data: {} })).toBe(false);
  });

  it('extracts nested entries and repaired conversation ids', () => {
    expect(
      extractHistoryEntries({
        data: {
          messages: [{ id: 1 }],
        },
      }),
    ).toEqual([{ id: 1 }]);

    expect(
      extractConversationIdFromPayload(
        { conversationId: 'conta-123e4567-e89b-12d3-a456-426614174000' },
        (raw) => raw.replace('conta-', 'conta:'),
      ),
    ).toBe('conta:123e4567-e89b-12d3-a456-426614174000');
  });

  it('normalizes conversation history and keeps latest item', () => {
    const result = normalizeConversationHistory(
      [
        { conversationId: '1', title: 'Primeira', updatedAt: '2026-03-10T10:00:00.000Z' },
        { conversationId: '1', title: 'Primeira nova', updatedAt: '2026-03-10T11:00:00.000Z' },
        { conversationId: '2', title: 'Segunda', updatedAt: '2026-03-11T09:00:00.000Z' },
      ],
      (raw) => raw,
    );

    expect(result).toEqual([
      { id: '2', title: 'Segunda', updatedAt: '2026-03-11T09:00:00.000Z' },
      { id: '1', title: 'Primeira nova', updatedAt: '2026-03-10T11:00:00.000Z' },
    ]);
  });

  it('normalizes message history using provided html renderer', () => {
    const result = normalizeMessageHistory(
      [
        {
          id: 'abc',
          message: 'Pergunta',
          response: 'Resposta',
          timestamp: '2026-03-10T10:00:00.000Z',
        },
      ],
      (text) => `<p>${text}</p>`,
    );

    expect(result).toHaveLength(2);
    expect(result[0]).toMatchObject({
      id: 'abc-user',
      role: 'user',
      html: '<p>Pergunta</p>',
    });
    expect(result[1]).toMatchObject({
      id: 'abc-assistant',
      role: 'assistant',
      html: '<p>Resposta</p>',
    });
  });

  it('identifies message-like history entries', () => {
    expect(isMessageHistoryEntries([{ role: 'user', text: 'Oi' }])).toBe(true);
    expect(isMessageHistoryEntries([{ foo: 'bar' }])).toBe(false);
  });
});
