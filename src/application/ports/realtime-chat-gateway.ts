export type RealtimeIncomingMessage = {
  text: string;
  raw: string;
  data: unknown;
  action?: string;
};

export interface RealtimeChatGateway {
  token: string;
  websocketUrl: string;
  matchesConnection(token: string, websocketUrl?: string): boolean;
  sendMessage(
    message: string,
    conversationId?: string | null,
    extra?: Record<string, unknown> | null,
  ): Promise<void>;
  requestHistory(options?: { conversationId?: string | null; limit?: number }): Promise<void>;
  renameConversation(conversationId: string, newTitle: string): Promise<void>;
  deleteConversation(conversationId: string): Promise<void>;
  onMessage(listener: (message: RealtimeIncomingMessage) => void): () => void;
  close(): void;
}
