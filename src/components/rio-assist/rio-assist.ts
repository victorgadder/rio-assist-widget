import { LitElement, type PropertyValues } from 'lit';
import { widgetStyles } from './rio-assist.styles';
import { renderRioAssist } from './rio-assist.template';
import { invokeAgentRuntime } from '../../services/bedrockAgentRuntime';

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
    suggestionsSource: { type: String, attribute: 'data-suggestions' },
    messages: { state: true },
    sessionId: { state: true },
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

  suggestionsSource = '';

  messages: ChatMessage[] = [];

  sessionId?: string;

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

  conversations: ConversationItem[] = Array.from({ length: 20 }).map(
    (_, index) => ({
      id: `${index + 1}`,
      title: [
        'Caminhões com problema na frota de veículos.',
        'Próximas manutenções periódicas preventivas.',
        'Quais revisões meu plano inclui?',
        'Como automatizar preenchimento de odômetro.',
        'Valor das peças da próxima revisão.',
        'O que é revisão de assentamento?',
        'Alertas críticos ativos.',
        'Veículo superaquecendo, causas e recomendações.',
        'Calibragem recomendada nos pneus do e-Delivery.',
        'Quantos mil km trocar o óleo do motor.',
        'Qual a vida útil da bateria Moura M100HE.',
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

    try {
      const result = await invokeAgentRuntime(content, this.sessionId);
      if (result.sessionId) {
        this.sessionId = result.sessionId;
      }

      if (result.text) {
        const assistantMessage = this.createMessage('assistant', result.text);
        this.messages = [...this.messages, assistantMessage];
      }
    } catch (error) {
      this.errorMessage = error instanceof Error
        ? error.message
        : 'Não foi possível obter resposta do agente.';
    } finally {
      this.isLoading = false;
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
