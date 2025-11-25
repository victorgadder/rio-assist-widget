import { LitElement, type PropertyValues } from 'lit';
import { widgetStyles } from './rio-assist.styles';
import { renderRioAssist } from './rio-assist.template';
import {
  RioWebsocketClient,
  type RioIncomingMessage,
} from '../../services/rioWebsocket';

type ChatRole = 'user' | 'assistant';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  timestamp: number;
};

type ConversationItem = {
  id: string;
  title: string;
  updatedAt: string;
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
  };

  open = false;

  message = '';

  titleText = 'RIO Assist';

  buttonLabel = 'RIO Assist';

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

  conversationScrollbar = {
    height: 0,
    top: 0,
    visible: false,
  };

  private conversationScrollbarRaf: number | null = null;

  private rioClient: RioWebsocketClient | null = null;

  private rioUnsubscribe: (() => void) | null = null;

  private loadingTimer: number | null = null;

  conversations: ConversationItem[] = Array.from({ length: 20 }).map(
    (_, index) => ({
      id: `${index + 1}`,
      title: [
        'CaminhÃµes com problema na frota de veÃ­culos.',
        'PrÃ³ximas manutenÃ§Ãµes periÃ³dicas preventivas.',
        'Quais revisÃµes meu plano inclui?',
        'Como automatizar preenchimento de odÃ´metro.',
        'Valor das peÃ§as da prÃ³xima revisÃ£o.',
        'O que Ã© revisÃ£o de assentamento?',
        'Alertas crÃ­ticos ativos.',
        'VeÃ­culo superaquecendo, causas e recomendaÃ§Ãµes.',
        'Calibragem recomendada nos pneus do e-Delivery.',
        'Quantos mil km trocar o Ã³leo do motor.',
        'Qual a vida Ãºtil da bateria Moura M100HE.',
      ][index % 11],
      updatedAt: new Date(Date.now() - index * 3600_000).toISOString(),
    }),
  );

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
  }

  closeConversationsPanel() {
    this.showConversations = false;
    this.conversationMenuId = null;
  }

  toggleConversationsPanel() {
    this.showConversations = !this.showConversations;
    if (!this.showConversations) {
      this.conversationMenuId = null;
    }
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
    if (restorePanel) {
      this.open = true;
    }
  }

  handleCreateConversation() {
    console.info('[Mock] Criar nova conversa');
  }

  handleConversationListScroll(event: Event) {
    const target = event.currentTarget as HTMLElement | null;
    if (!target) {
      return;
    }
    this.updateConversationScrollbar(target);
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
      timestamp: Date.now(),
    };
  }

  private async processMessage(rawValue: string) {
    const content = rawValue.trim();
    if (!content || this.isLoading) {
      return;
    }

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
    this.message = '';
    this.errorMessage = '';
    this.isLoading = true;
    this.startLoadingGuard();

    try {
      const client = this.ensureRioClient();
      await client.sendMessage(content);
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
    const assistantMessage = this.createMessage('assistant', message.text);
    this.messages = [...this.messages, assistantMessage];
    this.clearLoadingGuard();
    this.isLoading = false;
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




