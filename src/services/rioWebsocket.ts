const WEBSOCKET_URL = 'wss://ws.volkswagen.latam-sandbox.rio.cloud';
const DEFAULT_AGENT_MODEL = 'eu.amazon.nova-pro-v1:0';

export type RioIncomingMessage = {
  text: string;
  raw: string;
  data: unknown;
};

export class RioWebsocketClient {
  readonly token: string;

  private socket: WebSocket | null = null;

  private connectPromise: Promise<void> | null = null;

  private readonly listeners = new Set<(message: RioIncomingMessage) => void>();

  constructor(token: string) {
    this.token = token;
  }

  matchesToken(value: string) {
    return this.token === value;
  }

  async sendMessage(message: string) {
    const socket = await this.ensureConnection();

    const payload = {
      action: 'sendMessage',
      message,
      agentModel: DEFAULT_AGENT_MODEL,
    };

    socket.send(JSON.stringify(payload));
  }

  onMessage(listener: (message: RioIncomingMessage) => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  close() {
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
    });

    this.connectPromise = new Promise((resolve, reject) => {
      if (!this.socket) {
        reject(new Error('Falha ao criar conexão WebSocket.'));
        return;
      }

      const handleOpen = () => {
        cleanup();
        resolve();
      };

      const handleError = () => {
        cleanup();
        this.socket?.close();
        this.socket = null;
        this.connectPromise = null;
        reject(
          new Error(
            'Não foi possível abrir conexão com o websocket do RIO Assist.',
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
      throw new Error('Conexão WebSocket do RIO Assist não está pronta.');
    }

    return this.socket;
  }

  private async handleMessage(event: MessageEvent) {
    const raw = await this.readMessage(event.data);
    let parsed: unknown = null;
    let text = raw;

    try {
      parsed = JSON.parse(raw);
      if (typeof parsed === 'object' && parsed !== null) {
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

    this.listeners.forEach((listener) => listener({ text, raw, data: parsed }));
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
