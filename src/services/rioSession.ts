import {
  RioWebsocketClient,
  type RioIncomingMessage,
} from './rioWebsocket';

export class RioSessionController {
  private client: RioWebsocketClient | null = null;
  private unsubscribe: (() => void) | null = null;

  ensureConnection(input: {
    token: string;
    websocketUrl: string;
    onMessage: (message: RioIncomingMessage) => void;
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
      this.client = new RioWebsocketClient(token, { websocketUrl });
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
