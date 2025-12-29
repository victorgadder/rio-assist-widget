const WEBSOCKET_URL = 'wss://ws.volkswagen.latam-sandbox.rio.cloud';
const HEARTBEAT_INTERVAL_MS = 5 * 60_000; // keep-alive before the 10min idle timeout

export type RioIncomingMessage = {
  text: string;
  raw: string;
  data: unknown;
  action?: string;
};

export class RioWebsocketClient {
  readonly token: string;

  private socket: WebSocket | null = null;

  private connectPromise: Promise<void> | null = null;

  private readonly listeners = new Set<(message: RioIncomingMessage) => void>();

  private heartbeatId: number | null = null;

  constructor(token: string) {
    this.token = token;
  }

  matchesToken(value: string) {
    return this.token === value;
  }

  async sendMessage(
    message: string,
    conversationId?: string | null,
    extra?: Record<string, unknown> | null,
  ) {
    const socket = await this.ensureConnection();

    const payload = {
      action: 'sendMessage',
      message,
      conversationId: conversationId ?? null,
      ...(extra ?? {}),
    };

    console.info('[RioAssist][ws] enviando payload de mensagem', payload);
    socket.send(JSON.stringify(payload));
  }

  async requestHistory(options: { conversationId?: string | null; limit?: number } = {}) {
    const socket = await this.ensureConnection();
    const payload: Record<string, unknown> = {
      action: 'getHistory',
      limit: options.limit ?? 50,
      conversationId: options.conversationId ?? null,
    };

    socket.send(JSON.stringify(payload));
  }

  async renameConversation(conversationId: string, newTitle: string) {
    const socket = await this.ensureConnection();
    const payload = {
      action: 'renameConversation',
      conversationId,
      newTitle,
    };

    console.info('[RioAssist][ws] enviando renameConversation', payload);
    socket.send(JSON.stringify(payload));
  }

  async deleteConversation(conversationId: string) {
    const socket = await this.ensureConnection();
    const payload = {
      action: 'deleteConversation',
      conversationId,
    };

    console.info('[RioAssist][ws] enviando deleteConversation', payload);
    socket.send(JSON.stringify(payload));
  }

  onMessage(listener: (message: RioIncomingMessage) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  close() {
    this.stopHeartbeat();
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }

    this.connectPromise = null;
    this.socket = null;
    this.listeners.clear();
  }

  private async ensureConnection(): Promise<WebSocket> {
    if (
      this.socket &&
      (this.socket.readyState === WebSocket.OPEN ||
        this.socket.readyState === WebSocket.CONNECTING)
    ) {
      await this.connectPromise;
      return this.socket;
    }

    this.socket = new WebSocket(
      `${WEBSOCKET_URL}?token=${encodeURIComponent(this.token)}`,
    );

    this.socket.addEventListener('message', (event) => this.handleMessage(event));
    this.socket.addEventListener('close', () => {
      this.connectPromise = null;
      this.socket = null;
      this.stopHeartbeat();
    });

    this.connectPromise = new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Falha ao criar conexão WebSocket.'));
        return;
      }

      const handleOpen = () => {
        cleanup();
        if (this.socket) {
          this.startHeartbeat(this.socket);
        }
        resolve();
      };

      const handleError = () => {
        cleanup();
        this.stopHeartbeat();
        this.socket?.close();
        this.socket = null;
        this.connectPromise = null;
        reject(
          new Error(
            'Não foi possível abrir conexão com o websocket do Rio Insight.',
          ),
        );
      };

      const cleanup = () => {
        this.socket?.removeEventListener('open', handleOpen);
        this.socket?.removeEventListener('error', handleError);
      };

      this.socket.addEventListener('open', handleOpen, { once: true });
      this.socket.addEventListener('error', handleError, { once: true });
    });

    await this.connectPromise;

    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      throw new Error('Conexão WebSocket do Rio Insight não está pronta.');
    }

    return this.socket;
  }

  private startHeartbeat(socket: WebSocket) {
    this.stopHeartbeat();
    this.heartbeatId = window.setInterval(() => {
      if (socket.readyState === WebSocket.OPEN) {
        socket.send(JSON.stringify({ action: 'ping' }));
      }
    }, HEARTBEAT_INTERVAL_MS);
  }

  private stopHeartbeat() {
    if (this.heartbeatId !== null) {
      window.clearInterval(this.heartbeatId);
      this.heartbeatId = null;
    }
  }

  private async handleMessage(event: MessageEvent) {
    const raw = await this.readMessage(event.data);
    let parsed: unknown = null;
    let text = raw;
    let action: string | undefined;

    try {
      parsed = JSON.parse(raw);
      if (typeof parsed === 'object' && parsed !== null) {
        const maybeAction =
          (parsed as any).action ?? (parsed as any).type ?? (parsed as any).event;

        if (typeof maybeAction === 'string') {
          action = maybeAction;
        }

        const maybeText =
          (parsed as any).message ??
          (parsed as any).response ??
          (parsed as any).text ??
          (parsed as any).content;

        if (typeof maybeText === 'string') {
          text = maybeText;
        }
      }
    } catch {
      parsed = null;
    }

    this.listeners.forEach((listener) => listener({ text, raw, data: parsed, action }));
  }

  private async readMessage(
    data: MessageEvent['data'],
  ): Promise<string> {
    if (typeof data === 'string') {
      return data;
    }

    if (data instanceof Blob) {
      return data.text();
    }

    if (data instanceof ArrayBuffer) {
      return new TextDecoder().decode(new Uint8Array(data));
    }

    if (ArrayBuffer.isView(data)) {
      return new TextDecoder().decode(
        new Uint8Array(
          data.buffer,
          data.byteOffset,
          data.byteLength,
        ),
      );
    }

    return String(data ?? '');
  }
}
