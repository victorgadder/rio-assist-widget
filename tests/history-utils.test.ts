import { describe, expect, it } from 'vitest';
import {
  looksLikeMessageHistoryEntry,
  normalizeRole,
  parseTimestamp,
  repairConversationId,
  toIsoString,
} from '../src/components/rio-assist/history-utils';
 

describe('repairConversationId', () => {
  it('adds separator before uuid when backend omits it', () => {
    const raw = 'conta-123e4567-e89b-12d3-a456-426614174000';
    const repaired = repairConversationId(raw);
    expect(repaired).toBe('conta:123e4567-e89b-12d3-a456-426614174000');
  });

  it('keeps already valid ids unchanged', () => {
    const raw = 'conta:123e4567-e89b-12d3-a456-426614174000';
    expect(repairConversationId(raw)).toBe(raw);
  });
});

describe('history utils', () => {
  it('normalizes role safely', () => {
    expect(normalizeRole('USER')).toBe('user');
    expect(normalizeRole('agent')).toBe('assistant');
    expect(normalizeRole(undefined)).toBe('assistant');
  });

  it('parses timestamp from iso string and uses fallback when invalid', () => {
    const iso = '2026-03-10T12:00:00.000Z';
    expect(parseTimestamp(iso)).toBe(Date.parse(iso));
    expect(parseTimestamp('invalid-value', 123)).toBe(123);
  });

  it('formats to iso string with fallback to now', () => {
    expect(toIsoString('2026-03-10T12:00:00.000Z')).toBe('2026-03-10T12:00:00.000Z');
    expect(Number.isNaN(Date.parse(toIsoString('invalid-value')))).toBe(false);
  });

  it('detects message-like entries', () => {
    expect(looksLikeMessageHistoryEntry({ role: 'user' })).toBe(true);
    expect(looksLikeMessageHistoryEntry({ response: 'ok' })).toBe(true);
    expect(looksLikeMessageHistoryEntry({ foo: 'bar' })).toBe(false);
  });
});
