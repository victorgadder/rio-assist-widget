import {
  RioWebsocketClient,
} from './rioWebsocket';
import type {
  RealtimeChatGateway,
  RealtimeIncomingMessage,
} from '../application/ports/realtime-chat-gateway';

type RealtimeChatGatewayFactory = (
  token: string,
  options?: { websocketUrl?: string },
) => RealtimeChatGateway;

export class RioSessionController {
  private client: RealtimeChatGateway | null = null;
  private unsubscribe: (() => void) | null = null;

  constructor(
    private readonly createClient: RealtimeChatGatewayFactory = (token, options) =>
      new RioWebsocketClient(token, options),
  ) {}

  ensureConnection(input: {
    token: string;
    websocketUrl: string;
    onMessage: (message: RealtimeIncomingMessage) => void;
  }) {
    const token = input.token.trim();
    if (!token) {
      throw new Error(
        'Informe o token RIO em data-rio-token para conectar no websocket do assistente.',
      );
    }

    const websocketUrl = input.websocketUrl.trim();
    if (!this.client || !this.client.matchesConnection(token, websocketUrl)) {
      this.teardown();
      this.client = this.createClient(token, { websocketUrl });
      this.unsubscribe = this.client.onMessage(input.onMessage);
    }

    return this.client;
  }

  teardown() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
    }

    if (this.client) {
      this.client.close();
      this.client = null;
    }
  }
}
