import { LitElement, type PropertyValues } from 'lit';
import { widgetStyles } from './rio-assist.styles';
import { renderRioAssist } from './rio-assist.template';
import {
  RioWebsocketClient,
  type RioIncomingMessage,
} from '../../services/rioWebsocket';
import MarkdownIt from 'markdown-it';
import markdownItTaskLists from 'markdown-it-task-lists';
import DOMPurify from 'dompurify';

type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  html?: string;
  timestamp: number;
};

type ConversationItem = {
  id: string;
  title: string;
  updatedAt: string;
};

export type HeaderActionConfig = {
  id?: string;
  iconUrl: string;
  ariaLabel?: string;
  onClick?: () => void;
};

export class RioAssistWidget extends LitElement {
  static styles = widgetStyles;

  static properties = {
    open: { type: Boolean, state: true },
    message: { type: String, state: true },
    titleText: { type: String, attribute: 'data-title' },
    buttonLabel: { type: String, attribute: 'data-button-label' },
    placeholder: { type: String, attribute: 'data-placeholder' },
    accentColor: { type: String, attribute: 'data-accent-color' },
    apiBaseUrl: { type: String, attribute: 'data-api-base-url' },
    rioToken: { type: String, attribute: 'data-rio-token' },
    suggestionsSource: { type: String, attribute: 'data-suggestions' },
    messages: { state: true },
    isLoading: { type: Boolean, state: true },
    errorMessage: { type: String, state: true },
    showConversations: { type: Boolean, state: true },
    conversationSearch: { type: String, state: true },
    conversationMenuId: { state: true },
    conversationMenuPlacement: { state: true },
    isFullscreen: { type: Boolean, state: true },
    conversationScrollbar: { state: true },
    showNewConversationShortcut: { type: Boolean, state: true },
    conversations: { state: true },
    conversationHistoryLoading: { type: Boolean, state: true },
    activeConversationTitle: { state: true },
    headerActions: { attribute: false },
    homeUrl: { type: String, attribute: 'data-home-url' },
  };

  open = false;

  message = '';

  titleText = 'Rio Insight';

  buttonLabel = 'Rio Insight';

  placeholder = 'Pergunte alguma coisa';

  accentColor = '#008B9A';

  apiBaseUrl = '';

  rioToken = '';

  suggestionsSource = '';

  messages: ChatMessage[] = [];

  isLoading = false;

  errorMessage = '';

  showConversations = false;

  conversationSearch = '';

  conversationMenuId: string | null = null;

  conversationMenuPlacement: 'above' | 'below' = 'below';

  isFullscreen = false;

  showNewConversationShortcut = false;

  conversationScrollbar = {
    height: 0,
    top: 0,
    visible: false,
  };

  conversationHistoryLoading = false;

  private refreshConversationsAfterResponse = false;

  activeConversationTitle: string | null = null;

  headerActions: HeaderActionConfig[] = [];

  homeUrl = '';

  private generateConversationId() {
    if (!this.conversationUserId) {
      this.conversationUserId = this.inferUserIdFromToken();
    }

    const userSegment = this.conversationUserId ?? 'user';
    const id = `default-${userSegment}-${this.randomId(8)}`;
    console.info('[RioAssist][conversation] gerando conversationId', id);
    return id;
  }

  private inferUserIdFromToken(): string | null {
    const token = this.rioToken.trim();
    if (!token || !token.includes('.')) {
      return null;
    }

    const [, payload] = token.split('.');
    try {
      const decoded = JSON.parse(atob(payload.replace(/-/g, '+').replace(/_/g, '/')));
      const candidate =
        decoded?.userId ??
        decoded?.user_id ??
        decoded?.sub ??
        decoded?.id ??
        decoded?.email ??
        decoded?.username;

      if (candidate && typeof candidate === 'string') {
        return candidate.replace(/[^a-zA-Z0-9_-]/g, '');
      }
    } catch {
      return null;
    }

    return null;
  }

  private randomId(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private conversationScrollbarRaf: number | null = null;

  private rioClient: RioWebsocketClient | null = null;

  private rioUnsubscribe: (() => void) | null = null;

  private loadingTimer: number | null = null;

  private currentConversationId: string | null = null;

  private conversationCounter = 0;

  private conversationUserId: string | null = null;

  private conversationScrollbarDraggingId: number | null = null;

  private conversationScrollbarDragState: {
    startY: number;
    startThumbTop: number;
    trackHeight: number;
    thumbHeight: number;
    list: HTMLElement;
  } | null = null;

  private markdownRenderer = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  }).use(markdownItTaskLists);

  conversations: ConversationItem[] = [];

  get suggestions(): string[] {
    if (!this.suggestionsSource) {
      return [];
    }

    return this.suggestionsSource
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);
    this.style.setProperty('--accent-color', this.accentColor);

    if (
      changedProperties.has('isFullscreen') ||
      changedProperties.has('showConversations') ||
      changedProperties.has('conversations')
    ) {
      this.enqueueConversationScrollbarMeasure();
    }

    if (
      changedProperties.has('messages') ||
      (changedProperties.has('isLoading') && this.isLoading) ||
      (changedProperties.has('open') && this.open) ||
      (changedProperties.has('isFullscreen') && this.isFullscreen)
    ) {
      this.scrollConversationToBottom();
    }
  }

  protected firstUpdated(): void {
    this.enqueueConversationScrollbarMeasure();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.conversationScrollbarRaf !== null) {
      cancelAnimationFrame(this.conversationScrollbarRaf);
      this.conversationScrollbarRaf = null;
    }

    this.teardownRioClient();
    this.clearLoadingGuard();
  }

  get filteredConversations() {
    const query = this.conversationSearch.trim().toLowerCase();
    if (!query) {
      return this.conversations;
    }

    return this.conversations.filter((conversation) =>
      conversation.title.toLowerCase().includes(query),
    );
  }

  get hasActiveConversation() {
    return this.messages.length > 0;
  }

  togglePanel() {
    if (this.isFullscreen) {
      this.exitFullscreen(false);
      return;
    }

    this.open = !this.open;
    this.dispatchEvent(
      new CustomEvent(this.open ? 'rioassist:open' : 'rioassist:close', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  closePanel() {
    this.isFullscreen = false;
    if (this.open) {
      this.togglePanel();
    }
  }

  openConversationsPanel() {
    this.showConversations = true;
    this.requestConversationHistory();
  }

  closeConversationsPanel() {
    this.showConversations = false;
    this.conversationMenuId = null;
  }

  toggleConversationsPanel() {
    this.showConversations = !this.showConversations;
    if (!this.showConversations) {
      this.conversationMenuId = null;
      return;
    }

    this.requestConversationHistory();
  }

  toggleNewConversationShortcut() {
    this.showNewConversationShortcut = !this.showNewConversationShortcut;
  }

  handleConversationSelect(conversationId: string) {
    if (!conversationId) {
      return;
    }

    this.showConversations = false;
    this.conversationMenuId = null;
    this.errorMessage = '';
    this.currentConversationId = conversationId;
    this.activeConversationTitle = this.lookupConversationTitle(conversationId);

    console.info('[RioAssist][history] carregando conversa', conversationId);
    this.requestConversationHistory(conversationId);
  }

  handleConversationSearch(event: InputEvent) {
    this.conversationSearch = (event.target as HTMLInputElement).value;
  }

  handleConversationMenuToggle(event: Event, id: string) {
    event.stopPropagation();

    if (this.conversationMenuId === id) {
      this.conversationMenuId = null;
      return;
    }

    const button = event.currentTarget as HTMLElement;
    const container = this.renderRoot.querySelector(
      '.conversations-panel__surface',
    ) as HTMLElement | null;

    if (button && container) {
      const buttonRect = button.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const spaceBelow = containerRect.bottom - buttonRect.bottom;
      this.conversationMenuPlacement = spaceBelow < 140 ? 'above' : 'below';
    } else {
      this.conversationMenuPlacement = 'below';
    }

    this.conversationMenuId = id;
  }

  handleConversationsPanelPointer(event: PointerEvent) {
    const target = event.target as HTMLElement;
    if (
      !target.closest('.conversation-menu') &&
      !target.closest('.conversation-menu-button')
    ) {
      this.conversationMenuId = null;
    }
  }

  handleConversationAction(action: 'rename' | 'delete', id: string) {
    this.conversationMenuId = null;
    const conversation = this.conversations.find((item) => item.id === id);
    if (!conversation) {
      return;
    }

    const message = `${
      action === 'rename' ? 'Renomear' : 'Excluir'
    } "${conversation.title}"`;
    console.info(`[Mock] ${message}`);
  }

  handleHomeNavigation() {
    const detail = { url: this.homeUrl || null };
    const allowed = this.dispatchEvent(
      new CustomEvent('rioassist:home', {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );

    if (!allowed) {
      return;
    }

    if (this.homeUrl) {
      window.location.assign(this.homeUrl);
    }
  }

  handleHeaderActionClick(action: HeaderActionConfig, index: number) {
    const detail = {
      index,
      id: action.id ?? null,
      ariaLabel: action.ariaLabel ?? null,
      iconUrl: action.iconUrl,
    };

    const allowed = this.dispatchEvent(
      new CustomEvent('rioassist:header-action', {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );

    if (!allowed) {
      return;
    }

    if (typeof action.onClick === 'function') {
      action.onClick();
    }
  }

  handleCloseAction() {
    if (this.isFullscreen) {
      this.exitFullscreen(true);
      return;
    }

    if (this.showConversations) {
      this.closeConversationsPanel();
    } else {
      this.closePanel();
    }
  }

  enterFullscreen() {
    if (this.isFullscreen) {
      return;
    }

    this.isFullscreen = true;
    this.open = false;
    this.showConversations = false;
  }

  exitFullscreen(restorePanel: boolean) {
    if (!this.isFullscreen) {
      return;
    }

    this.isFullscreen = false;
    this.conversationMenuId = null;
    this.showNewConversationShortcut = false;
    if (restorePanel) {
      this.open = true;
    }
  }

  handleCreateConversation() {
    if (!this.hasActiveConversation) {
      return;
    }

    this.clearLoadingGuard();
    this.isLoading = false;
    this.messages = [];
    this.message = '';
    this.errorMessage = '';
    this.showConversations = false;
    this.teardownRioClient();
    this.currentConversationId = this.generateConversationId();
    this.activeConversationTitle = null;
    this.showNewConversationShortcut = false;
    this.dispatchEvent(
      new CustomEvent('rioassist:new-conversation', {
        bubbles: true,
        composed: true,
      }),
    );
  }

  handleConversationListScroll(event: Event) {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }
    this.updateConversationScrollbar(target);
  }

  handleConversationScrollbarPointerDown(event: PointerEvent) {
    const track = event.currentTarget as HTMLElement | null;
    const list = this.renderRoot.querySelector(
      '.conversation-list--sidebar',
    ) as HTMLElement | null;

    if (!track || !list) {
      return;
    }

    const trackRect = track.getBoundingClientRect();
    const thumbHeight = trackRect.height * (this.conversationScrollbar.height / 100);
    const maxThumbTop = Math.max(trackRect.height - thumbHeight, 0);
    const scrollRange = Math.max(list.scrollHeight - list.clientHeight, 1);
    const currentThumbTop = (list.scrollTop / scrollRange) * maxThumbTop;
    const offsetY = event.clientY - trackRect.top;
    const isOnThumb = offsetY >= currentThumbTop && offsetY <= currentThumbTop + thumbHeight;

    const nextThumbTop = isOnThumb
      ? currentThumbTop
      : Math.min(Math.max(offsetY - thumbHeight / 2, 0), maxThumbTop);

    if (!isOnThumb) {
      list.scrollTop = (nextThumbTop / Math.max(maxThumbTop, 1)) * (list.scrollHeight - list.clientHeight);
      this.updateConversationScrollbar(list);
    }

    track.setPointerCapture(event.pointerId);
    this.conversationScrollbarDraggingId = event.pointerId;
    this.conversationScrollbarDragState = {
      startY: event.clientY,
      startThumbTop: nextThumbTop,
      trackHeight: trackRect.height,
      thumbHeight,
      list,
    };
    event.preventDefault();
  }

  handleConversationScrollbarPointerMove(event: PointerEvent) {
    if (
      this.conversationScrollbarDraggingId === null ||
      this.conversationScrollbarDraggingId !== event.pointerId ||
      !this.conversationScrollbarDragState
    ) {
      return;
    }

    const {
      startY,
      startThumbTop,
      trackHeight,
      thumbHeight,
      list,
    } = this.conversationScrollbarDragState;

    const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
    const deltaY = event.clientY - startY;
    const thumbTop = Math.min(Math.max(startThumbTop + deltaY, 0), maxThumbTop);
    const scrollRange = list.scrollHeight - list.clientHeight;

    if (scrollRange > 0) {
      list.scrollTop = (thumbTop / Math.max(maxThumbTop, 1)) * scrollRange;
      this.updateConversationScrollbar(list);
    }

    event.preventDefault();
  }

  handleConversationScrollbarPointerUp(event: PointerEvent) {
    if (this.conversationScrollbarDraggingId !== event.pointerId) {
      return;
    }

    const track = event.currentTarget as HTMLElement | null;
    track?.releasePointerCapture(event.pointerId);

    this.conversationScrollbarDraggingId = null;
    this.conversationScrollbarDragState = null;
  }

  private enqueueConversationScrollbarMeasure() {
    if (this.conversationScrollbarRaf !== null) {
      return;
    }

    this.conversationScrollbarRaf = requestAnimationFrame(() => {
      this.conversationScrollbarRaf = null;
      this.updateConversationScrollbar();
    });
  }

  private updateConversationScrollbar(target?: HTMLElement | null) {
    const element =
      target ??
      (this.renderRoot.querySelector(
        '.conversation-list--sidebar',
      ) as HTMLElement | null);

    if (!element) {
      if (this.conversationScrollbar.visible) {
        this.conversationScrollbar = { height: 0, top: 0, visible: false };
      }
      return;
    }

    const { scrollHeight, clientHeight, scrollTop } = element;
    if (scrollHeight <= clientHeight + 1) {
      if (this.conversationScrollbar.visible) {
        this.conversationScrollbar = { height: 0, top: 0, visible: false };
      }
      return;
    }

    const ratio = clientHeight / scrollHeight;
    const height = Math.max(ratio * 100, 8);
    const maxTop = 100 - height;
    const top =
      scrollTop / (scrollHeight - clientHeight) * (maxTop > 0 ? maxTop : 0);

    this.conversationScrollbar = {
      height,
      top,
      visible: true,
    };
  }

  async onSuggestionClick(suggestion: string) {
    await this.processMessage(suggestion);
  }

  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    await this.processMessage(this.message);
  }

  private createMessage(role: ChatRole, text: string): ChatMessage {
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

    return {
      id,
      role,
      text,
      html: this.renderMarkdown(text),
      timestamp: Date.now(),
    };
  }

  private async processMessage(rawValue: string) {
    const content = rawValue.trim();
    if (!content || this.isLoading) {
      return;
    }

    if (!this.currentConversationId) {
      this.currentConversationId = this.generateConversationId();
      this.activeConversationTitle = null;
    }

    const wasEmptyConversation = this.messages.length === 0;

    this.dispatchEvent(
      new CustomEvent('rioassist:send', {
        detail: {
          message: content,
          apiBaseUrl: this.apiBaseUrl,
          token: this.rioToken,
        },
        bubbles: true,
        composed: true,
      }),
    );

    const userMessage = this.createMessage('user', content);
    this.messages = [...this.messages, userMessage];
    if (wasEmptyConversation) {
      this.showNewConversationShortcut = true;
      this.refreshConversationsAfterResponse = true;
    }
    this.message = '';
    this.errorMessage = '';
    this.isLoading = true;
    this.startLoadingGuard();

    try {
      const client = this.ensureRioClient();
      await client.sendMessage(content, this.currentConversationId);
    } catch (error) {
      this.clearLoadingGuard();
      this.isLoading = false;
      this.errorMessage = error instanceof Error
        ? error.message
        : 'Nao foi possivel enviar a mensagem para o agente.';
    }
  }

  private ensureRioClient() {
    const token = this.rioToken.trim();
    if (!token) {
      throw new Error(
        'Informe o token RIO em data-rio-token para conectar no websocket do assistente.',
      );
    }

    if (!this.rioClient || !this.rioClient.matchesToken(token)) {
      this.teardownRioClient();
      this.rioClient = new RioWebsocketClient(token);
      this.rioUnsubscribe = this.rioClient.onMessage((incoming) => {
        this.handleIncomingMessage(incoming);
      });
    }

    return this.rioClient;
  }

  private handleIncomingMessage(message: RioIncomingMessage) {
    if (this.isHistoryPayload(message)) {
      this.logHistoryPayload(message);
      this.handleHistoryPayload(message.data);
      return;
    }

    console.info('[RioAssist][ws] resposta de mensagem recebida', {
      action: message.action ?? 'message',
      text: message.text,
      raw: message.raw,
      data: message.data,
    });

    const assistantMessage = this.createMessage('assistant', message.text);
    this.messages = [...this.messages, assistantMessage];
    this.clearLoadingGuard();
    this.isLoading = false;

    if (this.refreshConversationsAfterResponse) {
      this.refreshConversationsAfterResponse = false;
      this.requestConversationHistory();
    }
  }

  private teardownRioClient() {
    if (this.rioUnsubscribe) {
      this.rioUnsubscribe();
      this.rioUnsubscribe = null;
    }

    if (this.rioClient) {
      this.rioClient.close();
      this.rioClient = null;
    }
  }

  async requestConversationHistory(conversationId?: string) {
    try {
      const client = this.ensureRioClient();
      const limit = 50;

      console.info('[RioAssist][history] solicitando historico de conversas', {
        conversationId: conversationId ?? null,
        limit,
      });

      this.conversationHistoryLoading = true;
      await client.requestHistory({ conversationId, limit });
    } catch (error) {
      console.error('[RioAssist][history] erro ao solicitar historico', error);
      this.conversationHistoryLoading = false;
    }
  }

  private handleHistoryPayload(payload: unknown) {
    const entries = this.extractHistoryEntries(payload);
    const conversationId = this.extractConversationId(payload);

    if (conversationId !== null && conversationId !== undefined) {
      this.applyMessageHistory(entries, conversationId);
      return;
    }

    if (this.isMessageHistoryEntries(entries)) {
      this.applyMessageHistory(entries);
      return;
    }

    this.applyConversationHistoryFromEntries(entries);

    if (this.refreshConversationsAfterResponse) {
      this.refreshConversationsAfterResponse = false;
    }
  }

  private isHistoryPayload(message: RioIncomingMessage) {
    if (
      typeof message.action === 'string' &&
      message.action.toLowerCase().includes('history')
    ) {
      return true;
    }

    const data = message.data;
    if (data && typeof data === 'object') {
      const action = (data as any).action;
      if (typeof action === 'string' && action.toLowerCase().includes('history')) {
        return true;
      }

      if (Array.isArray((data as any).history) || Array.isArray((data as any).conversations)) {
        return true;
      }
    }

    return false;
  }

  private logHistoryPayload(message: RioIncomingMessage) {
    const label = '[RioAssist][history] payload recebido do websocket';
    if (message.data !== null && message.data !== undefined) {
      console.info(label, message.data);
      return;
    }

    console.info(label, message.raw);
  }

  private applyConversationHistoryFromEntries(entries: unknown[]) {
    if (entries.length === 0) {
      console.info('[RioAssist][history] payload sem itens para montar lista de conversas');
      this.conversations = [];
      this.conversationHistoryLoading = false;
      return;
    }

    const map = new Map<string, ConversationItem>();

    entries.forEach((entry, index) => {
      if (!entry || typeof entry !== 'object') {
        return;
      }

      const normalized = this.normalizeConversationItem(
        entry as Record<string, unknown>,
        index,
      );

      if (!normalized) {
        return;
      }

      const current = map.get(normalized.id);
      if (!current) {
        map.set(normalized.id, normalized);
        return;
      }

      const currentTime = Date.parse(current.updatedAt);
      const nextTime = Date.parse(normalized.updatedAt);

      if (Number.isFinite(nextTime) && nextTime > currentTime) {
        map.set(normalized.id, normalized);
      }
    });

    const conversations = Array.from(map.values()).sort((a, b) => {
      const order = Date.parse(b.updatedAt) - Date.parse(a.updatedAt);
      return Number.isFinite(order) ? order : 0;
    });

    this.conversations = conversations;
    this.conversationHistoryLoading = false;
    this.syncActiveConversationTitle();
    console.info('[RioAssist][history] conversas normalizadas', conversations);
  }

  private applyMessageHistory(entries: unknown[], conversationId?: string | null) {
    if (entries.length === 0) {
      console.info('[RioAssist][history] lista de mensagens vazia', { conversationId });
      this.messages = [];
      this.showConversations = false;
      this.clearLoadingGuard();
      this.isLoading = false;
      this.conversationHistoryLoading = false;
      return;
    }

    const normalized = entries.flatMap((entry, index) =>
      this.normalizeHistoryMessages(entry as Record<string, unknown>, index),
    );

    if (conversationId) {
      this.currentConversationId = conversationId;
    }

    this.messages = normalized;
    this.showConversations = false;
    this.clearLoadingGuard();
    this.isLoading = false;
    this.showNewConversationShortcut = normalized.length > 0;
    this.conversationHistoryLoading = false;
    this.refreshConversationsAfterResponse = false;

    console.info('[RioAssist][history] mensagens carregadas', {
      conversationId: conversationId ?? null,
      total: normalized.length,
    });
  }

  private extractHistoryEntries(payload: unknown): unknown[] {
    if (Array.isArray(payload)) {
      return payload;
    }

    if (payload && typeof payload === 'object') {
      const record = payload as Record<string, unknown>;
      const candidates = [
        record.history,
        record.conversations,
        record.data,
        record.items,
        record.messages,
      ];

      for (const candidate of candidates) {
        if (Array.isArray(candidate)) {
          return candidate;
        }
      }

      if (record.data && typeof record.data === 'object' && !Array.isArray(record.data)) {
        const nested = this.extractHistoryEntries(record.data);
        if (nested.length > 0) {
          return nested;
        }
      }
    }

    return [];
  }

  private extractConversationId(payload: unknown): string | null | undefined {
    if (payload && typeof payload === 'object') {
      const record = payload as Record<string, unknown>;
      const candidates = [
        record.conversationId,
        record.conversationUUID,
        record.conversationUuid,
        record.uuid,
        record.id,
      ];

      for (const candidate of candidates) {
        if (candidate === null) {
          return null;
        }

        if (candidate !== undefined) {
          return String(candidate);
        }
      }
    }

    return undefined;
  }

  private isMessageHistoryEntries(entries: unknown[]) {
    return entries.some((entry) => this.looksLikeMessageHistoryEntry(entry));
  }

  private looksLikeMessageHistoryEntry(entry: unknown) {
    if (!entry || typeof entry !== 'object') {
      return false;
    }

    const item = entry as Record<string, unknown>;
    const role = item.role ?? item.sender ?? item.from ?? item.author ?? item.type;
    if (typeof role === 'string' && role.trim().length > 0) {
      return true;
    }

    if (
      typeof item.content === 'string' ||
      typeof item.message === 'string' ||
      typeof item.text === 'string' ||
      typeof item.response === 'string'
    ) {
      return true;
    }

    if (Array.isArray(item.parts) && item.parts.length > 0) {
      return true;
    }

    return false;
  }

  private normalizeConversationItem(
    value: Record<string, unknown>,
    index: number,
  ): ConversationItem | null {
    const rawId =
      value.id ??
      value.conversationId ??
      value.conversationUUID ??
      value.conversationUuid ??
      value.uuid;

    const id = rawId !== undefined && rawId !== null ? String(rawId) : `history-${index + 1}`;

    const rawTitle =
      value.title ??
      value.name ??
      value.topic ??
      value.subject ??
      value.question ??
      value.query ??
      value.message;

    const title =
      typeof rawTitle === 'string' && rawTitle.trim().length > 0
        ? rawTitle.trim()
        : `Conversa ${index + 1}`;

    const rawUpdated =
      value.updatedAt ??
      value.updated_at ??
      value.lastMessageAt ??
      value.last_message_at ??
      value.createdAt ??
      value.created_at ??
      value.timestamp ??
      value.date;

    const updatedAt = this.toIsoString(rawUpdated);

    return { id, title, updatedAt };
  }

  private normalizeHistoryMessages(
    value: Record<string, unknown>,
    index: number,
  ): ChatMessage[] {
    const messages: ChatMessage[] = [];

    const rawUserText = value.message ?? value.question ?? value.query ?? value.text ?? value.content;
    const userText = typeof rawUserText === 'string' ? rawUserText.trim() : '';

    const rawResponseText =
      value.response ?? value.answer ?? value.reply ?? value.completion ?? value.body ?? value.preview;
    const responseText = typeof rawResponseText === 'string' ? rawResponseText.trim() : '';

    const rawId = value.id ?? value.messageId ?? value.uuid ?? value.conversationMessageId;
    const baseId = rawId !== undefined && rawId !== null
      ? String(rawId)
      : `history-${index + 1}`;

    const userTimestampValue =
      value.timestamp ??
      value.createdAt ??
      value.created_at ??
      value.date ??
      value.time;
    const assistantTimestampValue =
      value.responseTimestamp ??
      value.responseTime ??
      value.responseDate ??
      value.response_at ??
      value.updatedAt ??
      value.updated_at;

    const userTimestamp = this.parseTimestamp(userTimestampValue);
    const assistantTimestamp = this.parseTimestamp(
      assistantTimestampValue,
      userTimestamp + 1,
    );

    if (responseText) {
      if (userText) {
        messages.push({
          id: `${baseId}-user`,
          role: 'user',
          text: userText,
          html: this.renderMarkdown(userText),
          timestamp: userTimestamp,
        });
      }

      messages.push({
        id: `${baseId}-assistant`,
        role: 'assistant',
        text: responseText,
        html: this.renderMarkdown(responseText),
        timestamp: assistantTimestamp,
      });
    } else if (userText) {
      // Se n�o tiver resposta, n�o exibimos a mensagem do usuario isolada.
      return [];
    }

    if (messages.length > 0) {
      return messages;
    }

    const fallback = this.normalizeSingleHistoryMessage(value, index);
    return fallback ? [fallback] : [];
  }

  private normalizeSingleHistoryMessage(
    value: Record<string, unknown>,
    index: number,
  ): ChatMessage | null {
    const rawText =
      value.text ??
      value.message ??
      value.content ??
      value.response ??
      value.body ??
      value.preview;

    const text = typeof rawText === 'string' && rawText.trim().length > 0
      ? rawText
      : '';

    if (!text) {
      return null;
    }

    const role = this.normalizeRole(
      value.role ??
        value.sender ??
        value.from ??
        value.author ??
        value.type ??
        value.direction,
    );

    const rawId = value.id ?? value.messageId ?? value.uuid ?? value.conversationMessageId;
    const id = rawId !== undefined && rawId !== null
      ? String(rawId)
      : `history-message-${index + 1}`;

    const timestampValue =
      value.timestamp ??
      value.createdAt ??
      value.created_at ??
      value.updatedAt ??
      value.updated_at ??
      value.date ??
      value.time;

    const timestamp = this.parseTimestamp(timestampValue);

    return {
      id,
      role,
      text,
      html: this.renderMarkdown(text),
      timestamp,
    };
  }

  private normalizeRole(value: unknown): ChatRole {
    if (typeof value === 'string') {
      const normalized = value.toLowerCase();
      if (normalized.includes('user') || normalized.includes('client')) {
        return 'user';
      }
      if (normalized.includes('assistant') || normalized.includes('agent') || normalized.includes('bot')) {
        return 'assistant';
      }
    }

    return 'assistant';
  }

  private parseTimestamp(value: unknown, fallback?: number) {
    const parsed = Date.parse(this.toIsoString(value));
    if (Number.isFinite(parsed)) {
      return parsed;
    }

    if (Number.isFinite(fallback ?? NaN)) {
      return fallback as number;
    }

    return Date.now();
  }

  private lookupConversationTitle(conversationId: string | null) {
    if (!conversationId) {
      return null;
    }

    const found = this.conversations.find((item) => item.id === conversationId);
    return found ? found.title : null;
  }

  private syncActiveConversationTitle() {
    if (!this.currentConversationId) {
      return;
    }

    const title = this.lookupConversationTitle(this.currentConversationId);
    if (title) {
      this.activeConversationTitle = title;
    }
  }

  private toIsoString(value: unknown) {
    if (typeof value === 'string' || typeof value === 'number') {
      const date = new Date(value);
      if (!Number.isNaN(date.getTime())) {
        return date.toISOString();
      }
    }

    return new Date().toISOString();
  }

  private startLoadingGuard() {
    this.clearLoadingGuard();
    this.loadingTimer = window.setTimeout(() => {
      this.loadingTimer = null;
      this.isLoading = false;
    }, 15000);
  }

  private clearLoadingGuard() {
    if (this.loadingTimer !== null) {
      window.clearTimeout(this.loadingTimer);
      this.loadingTimer = null;
    }
  }

  private scrollConversationToBottom() {
    const containers = Array.from(
      this.renderRoot.querySelectorAll('.panel-content'),
    ) as HTMLElement[];

    containers.forEach((container) => {
      requestAnimationFrame(() => {
        container.scrollTop = container.scrollHeight;
      });
    });
  }

  private renderMarkdown(content: string) {
    const rendered = this.markdownRenderer.render(content);
    const clean = DOMPurify.sanitize(rendered, {
      ALLOWED_TAGS: [
        'a',
        'p',
        'ul',
        'ol',
        'li',
        'code',
        'pre',
        'strong',
        'em',
        'blockquote',
        'table',
        'thead',
        'tbody',
        'tr',
        'th',
        'td',
        'del',
        'hr',
        'br',
        'img',
        'span',
        'input',
      ],
      ALLOWED_ATTR: [
        'href',
        'title',
        'target',
        'rel',
        'src',
        'alt',
        'class',
        'type',
        'checked',
        'disabled',
        'aria-label',
      ],
      ALLOW_DATA_ATTR: false,
      FORBID_TAGS: ['style', 'script'],
      USE_PROFILES: { html: true },
    });

    const container = document.createElement('div');
    container.innerHTML = clean;

    container.querySelectorAll('a').forEach((anchor) => {
      anchor.setAttribute('target', '_blank');
      anchor.setAttribute('rel', 'noopener noreferrer');
    });

    container.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.setAttribute('disabled', '');
      checkbox.setAttribute('tabindex', '-1');
    });

    return container.innerHTML;
  }

  render() {
    return renderRioAssist(this);
  }

}
declare global {
  interface HTMLElementTagNameMap {
    'rio-assist-widget': RioAssistWidget;
  }
}

if (!customElements.get('rio-assist-widget')) {
  customElements.define('rio-assist-widget', RioAssistWidget);
}
