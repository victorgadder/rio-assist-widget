import { describe, expect, it, vi } from 'vitest';
import { RioSessionController } from '../src/services/rioSession';
import { RioWebsocketClient } from '../src/services/rioWebsocket';

vi.mock('../src/services/rioWebsocket', () => {
  class FakeRioWebsocketClient {
    token: string;
    websocketUrl: string;
    close = vi.fn();
    onMessage = vi.fn(() => vi.fn());

    constructor(token: string, options?: { websocketUrl?: string }) {
      this.token = token;
      this.websocketUrl = options?.websocketUrl?.trim() || '';
    }

    matchesConnection(token: string, websocketUrl?: string) {
      return this.token === token && this.websocketUrl === (websocketUrl?.trim() || '');
    }
  }

  return {
    RioWebsocketClient: FakeRioWebsocketClient,
  };
});

describe('rio-session', () => {
  it('creates and reuses websocket client for same connection', () => {
    const session = new RioSessionController();
    const onMessage = vi.fn();

    const first = session.ensureConnection({
      token: 'abc',
      websocketUrl: 'wss://example.test',
      onMessage,
    });
    const second = session.ensureConnection({
      token: 'abc',
      websocketUrl: 'wss://example.test',
      onMessage,
    });

    expect(first).toBe(second);
    expect(first).toBeInstanceOf(RioWebsocketClient);
  });

  it('rejects empty token and tears down connection', () => {
    const session = new RioSessionController();

    expect(() =>
      session.ensureConnection({
        token: '   ',
        websocketUrl: 'wss://example.test',
        onMessage: vi.fn(),
      }),
    ).toThrow('Informe o token RIO');

    const client = session.ensureConnection({
      token: 'abc',
      websocketUrl: 'wss://example.test',
      onMessage: vi.fn(),
    }) as unknown as { close: ReturnType<typeof vi.fn> };

    session.teardown();
    expect(client.close).toHaveBeenCalled();
  });
});
