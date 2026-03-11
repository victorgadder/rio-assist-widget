import { describe, expect, it } from 'vitest';
import { parseIncomingMessage } from '../src/services/rioMessageParser';

describe('parseIncomingMessage', () => {
  it('extracts action and text from standard payload', () => {
    const raw = JSON.stringify({
      action: 'message',
      message: 'olá',
      extra: 123,
    });

    const result = parseIncomingMessage(raw);

    expect(result.action).toBe('message');
    expect(result.text).toBe('olá');
    expect(result.parsed).toEqual({
      action: 'message',
      message: 'olá',
      extra: 123,
    });
  });

  it('supports alternative fields for action and text', () => {
    const raw = JSON.stringify({
      type: 'processing',
      response: 'aguardando',
    });

    const result = parseIncomingMessage(raw);

    expect(result.action).toBe('processing');
    expect(result.text).toBe('aguardando');
  });

  it('returns raw text for non-json payloads', () => {
    const raw = 'texto puro';
    const result = parseIncomingMessage(raw);

    expect(result.parsed).toBeNull();
    expect(result.action).toBeUndefined();
    expect(result.text).toBe('texto puro');
  });
});
