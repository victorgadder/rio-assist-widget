const WEBSOCKET_URL = 'wss://ws.volkswagen.latam-sandbox.rio.cloud';
const HEARTBEAT_INTERVAL_MS = 5 * 60_000; // keep-alive before the 10min idle timeout

export type RioIncomingMessage = {
  text: string;
  raw: string;
  data: unknown;
  action?: string;
};

export type RioConnectionStatus =
  | 'idle'
  | 'connecting'
  | 'open'
  | 'reconnecting'
  | 'closed'
  | 'error';

export class RioWebsocketClient {
  readonly token: string;

  private socket: WebSocket | null = null;

  private connectPromise: Promise<void> | null = null;

  private readonly listeners = new Set<(message: RioIncomingMessage) => void>();

  private readonly statusListeners = new Set<(status: RioConnectionStatus) => void>();

  private heartbeatId: number | null = null;

  private reconnectAttempts = 0;

  private reconnectTimer: number | null = null;

  private closedByClient = false;

  constructor(token: string) {
    this.token = token;
  }

  matchesToken(value: string) {
    return this.token === value;
  }

  async sendMessage(message: string, conversationId?: string | null) {
    const socket = await this.ensureConnection();

    const payload = {
      action: 'sendMessage',
      message,
      conversationId: conversationId ?? null,
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

  onStatus(listener: (status: RioConnectionStatus) => void) {
    this.statusListeners.add(listener);
    return () => this.statusListeners.delete(listener);
  }

  close() {
    this.closedByClient = true;
    this.clearReconnectTimer();
    this.stopHeartbeat();
    if (this.socket && this.socket.readyState === WebSocket.OPEN) {
      this.socket.close();
    }

    this.connectPromise = null;
    this.socket = null;
    this.listeners.clear();
    this.emitStatus('closed');
    this.statusListeners.clear();
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

    this.closedByClient = false;
    this.emitStatus(this.reconnectAttempts > 0 ? 'reconnecting' : 'connecting');

    this.socket = new WebSocket(
      `${WEBSOCKET_URL}?token=${encodeURIComponent(this.token)}`,
    );

    this.socket.addEventListener('message', (event) => this.handleMessage(event));
    this.socket.addEventListener('close', (event) => this.handleClose(event));

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
        this.reconnectAttempts = 0;
        this.emitStatus('open');
        resolve();
      };

      const handleError = () => {
        cleanup();
        this.emitStatus('error');
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
    this.clearReconnectTimer();
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

  private handleClose(_event: CloseEvent) {
    this.connectPromise = null;
    this.socket = null;
    this.stopHeartbeat();

    if (this.closedByClient) {
      this.emitStatus('closed');
      return;
    }

    this.emitStatus('closed');
    this.scheduleReconnect();
  }

  private scheduleReconnect() {
    if (this.reconnectTimer !== null || this.closedByClient) {
      return;
    }

    const attempt = this.reconnectAttempts;
    const delay = Math.min(30000, 1000 * 2 ** attempt);
    this.reconnectAttempts += 1;
    this.reconnectTimer = window.setTimeout(async () => {
      this.reconnectTimer = null;
      if (this.closedByClient) {
        return;
      }

      this.emitStatus('reconnecting');
      try {
        await this.ensureConnection();
      } catch (error) {
        console.error('[RioAssist][ws] falha ao reconectar', error);
        this.emitStatus('error');
        this.scheduleReconnect();
      }
    }, delay);
  }

  private clearReconnectTimer() {
    if (this.reconnectTimer !== null) {
      window.clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
  }

  private emitStatus(status: RioConnectionStatus) {
    this.statusListeners.forEach((listener) => listener(status));
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
