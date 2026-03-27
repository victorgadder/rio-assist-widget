import { LitElement, type PropertyValues } from 'lit';
import { widgetStyles } from './rio-assist.styles';
import { renderRioAssist } from './rio-assist.template';
import {
  RioWebsocketClient,
  type RioIncomingMessage,
} from '../../services/rioWebsocket';
import { VoiceCaptureController } from '../../services/voiceCapture';
import {
  DEFAULT_LOADING_LABEL,
  LoadingGuardController,
} from '../../services/loadingGuard';
import { createMarkdownRenderer } from '../../services/markdownRenderer';
import {
  CONSULTANT_AGENT_INTRO,
  type ConsultantAgentOption,
  type ConsultantQuestion,
  loadConsultantAgentOptions,
} from '../../consultant-agent/consultant-agent';
import {
  addFilesToSelection,
  buildVoiceAttachment,
  MAX_ATTACHMENT_COUNT,
  removeAttachmentById,
  ATTACHMENT_KIND_MAP,
} from '../../application/attachment-flow';
import {
  buildWebsocketExtraPayload,
  createAssistantResponseMessage,
  createChatMessageFactory,
  type OutgoingMessageOptions,
  prepareOutgoingMessage,
  syncConversationFromIncomingMessage,
} from '../../application/chat-flow';
import {
  parseConversationSystemAction,
  resolveConversationActionErrorText,
  shouldIgnoreAssistantPayload,
} from '../../application/conversation-action-flow';
import {
  beginConversationScrollbarDrag,
  calculateConversationScrollbarState,
  createHiddenConversationScrollbarState,
  type ConversationScrollbarDragMetrics,
  updateConversationScrollbarDrag,
} from '../../application/conversation-scrollbar-flow';
import {
  closeConversationsPanelState,
  closeNewConversationConfirmState,
  closePanelState,
  createNewConversationResetState,
  enterFullscreenState,
  exitFullscreenState,
  handleCloseActionState,
  openConversationsPanelState,
  openNewConversationConfirmState,
  toggleConversationsPanelState,
  toggleFromFloatingButton,
  togglePanelState,
  type PanelVisibilityState,
} from '../../application/panel-flow';
import {
  applyConversationDeletionState,
  applyConversationRenameState,
  createConversationHistoryState,
  createMessageHistoryState,
  createPendingDeleteAction,
  createPendingRenameAction,
  createRetryConversationAction,
  restoreConversationSnapshotState,
  selectConversationState,
} from '../../application/conversation-state-flow';
import {
  applyConsultantEffectsAfterAssistantMessage,
  createInitialConsultantFlowState,
  prepareConsultantQuestionSend,
  reopenConsultantPrompt,
  selectConsultantSubject,
  startConsultantFlow,
  suppressConsultantPrompts,
  type ConsultantFlowState,
} from '../../application/consultant-flow';
import {
  extractConversationIdFromPayload,
  extractHistoryEntries,
  isHistoryPayloadMessage,
  isMessageHistoryEntries,
  normalizeConversationHistory,
  normalizeMessageHistory,
} from '../../application/history-flow';
import type {
  AttachmentItem,
} from '../../domain/attachment';
import type {
  ChatMessage,
  ChatRole,
  PendingResponseState,
} from '../../domain/chat';
import type {
  ConversationActionAttempt,
  ConversationActionErrorState,
  ConversationDeleteTarget,
  ConversationItem,
  ConversationRenameTarget,
} from '../../domain/conversation';
import {
  repairConversationId as repairHistoryConversationId,
} from './history-utils';
import { logger } from '../../utils/logger';

export type { ChatMessage } from '../../domain/chat';
const COMPOSER_MAX_HEIGHT_PX = 280;
const console = {
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
};

const DEFAULT_CONSULTANT_AGENT_BUTTON_TEXT = 'Consulte o UptAIme Agent';
const DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE =
  'Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.';

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
    floatingButtonIconUrl: { type: String, attribute: 'data-floating-button-icon-url' },
    floatingButtonLabelIconUrl: { type: String, attribute: 'data-floating-button-label-icon-url' },
    floatingButtonBackgroundIconUrl: { type: String, attribute: 'data-floating-button-background-icon-url' },
    placeholder: { type: String, attribute: 'data-placeholder' },
    accentColor: { type: String, attribute: 'data-accent-color' },
    apiBaseUrl: { type: String, attribute: 'data-api-base-url' },
    wsBaseUrl: { type: String, attribute: 'data-ws-base-url' },
    consultantApiBaseUrl: { type: String, attribute: 'data-consultant-api-base-url' },
    rioToken: { type: String, attribute: 'data-rio-token' },
    suggestionsSource: { type: String, attribute: 'data-suggestions' },
    messages: { state: true },
    isLoading: { type: Boolean, state: true },
    errorMessage: { type: String, state: true },
    showConversations: { type: Boolean, state: true },
    conversationSearch: { type: String, state: true },
    conversationMenuId: { state: true },
    conversationMenuPlacement: { state: true },
    selectedFiles: { attribute: false, state: true },
    attachmentError: { type: String, state: true },
    isRecording: { type: Boolean, state: true },
    isRecordingPaused: { type: Boolean, state: true },
    voiceAttachmentId: { type: String, state: true },
    voiceTranscript: { type: String, state: true },
    voiceCancelDialogOpen: { type: Boolean, state: true },
    voiceCancelDialogMode: { type: String, state: true },
    speechRecognitionAvailable: { type: Boolean, state: true },
  isFullscreen: { type: Boolean, state: true },
  conversationScrollbar: { state: true },
  showNewConversationShortcut: { type: Boolean, state: true },
    conversations: { state: true },
    conversationHistoryLoading: { type: Boolean, state: true },
    activeConversationTitle: { state: true },
    activeConversationUpdatedAt: { state: true },
    conversationHistoryError: { type: String, state: true },
    deleteConversationTarget: { attribute: false },
    renameConversationTarget: { attribute: false },
    quickResponse: { type: Boolean, state: true },
    newConversationConfirmOpen: { type: Boolean, state: true },
    conversationActionError: { attribute: false },
    headerActions: { attribute: false },
    homeUrl: { type: String, attribute: 'data-home-url' },
    floatingButtonOffset: { type: Number, attribute: 'data-floating-offset' },
  consultantAgentVisible: { type: Boolean, state: true },
  consultantAgentIntro: { type: String, state: true },
  consultantAgentButtonText: { type: String, attribute: 'data-consultant-agent-button-text' },
  showConsultantAgentButton: {
    attribute: 'data-show-consultant-agent-button',
    converter: {
      fromAttribute: (value: string | null) => value === null || value === '' || value === 'true',
      toAttribute: (value: boolean) => (value ? 'true' : 'false'),
    },
  },
  consultantAgentInitialMessage: {
    type: String,
    attribute: 'data-consultant-agent-initial-message',
  },
  autoStartConsultantFlow: {
    attribute: 'data-auto-start-consultant-flow',
    converter: {
      fromAttribute: (value: string | null) => value === '' || value === 'true',
      toAttribute: (value: boolean) => (value ? 'true' : 'false'),
    },
  },
  consultantAgentOptions: { attribute: false, state: true },
    showSuggestions: { type: Boolean, state: true },
    activeConsultantFollowUpId: { type: String, state: true },
    activeConsultantBranchId: { type: String, state: true },
    activeConsultantPromptId: { type: String, state: true },
    consultantAgentStage: { type: String, state: true },
    consultantOptionsSuppressed: { type: Boolean, state: true },
    pendingConsultantFollowUpId: { type: String, state: true },
    lastConsultantPromptId: { type: String, state: true },
    lastConsultantFollowUpId: { type: String, state: true },
    lastConsultantFollowUpPayload: { attribute: false },
    copiedMessageId: { type: String, state: true },
    messageReactions: { attribute: false },
  };

  open = false;

  message = '';

  selectedFiles: AttachmentItem[] = [];

  attachmentError = '';

  isRecording = false;

  isRecordingPaused = false;

  voiceAttachmentId: string | null = null;

  voiceTranscript = '';

  voiceCancelDialogOpen = false;

  voiceCancelDialogMode: 'cancel' | 'remove' = 'cancel';

  speechRecognitionAvailable = false;

  titleText = 'UptAIme Assist';

  buttonLabel = 'Uptaime Assist';

  floatingButtonIconUrl = '';

  floatingButtonLabelIconUrl = '';

  floatingButtonBackgroundIconUrl = '';

  placeholder = 'Pergunte alguma coisa';

  accentColor = '#B23672';

  floatingButtonOffset = 32;

  apiBaseUrl = '';

  wsBaseUrl = '';

  consultantApiBaseUrl = '';

  rioToken = '';

  suggestionsSource = '';

  private randomizedSuggestions: string[] = [];

  messages: ChatMessage[] = [];

  isLoading = false;

  errorMessage = '';

  get loadingLabel() {
    return this.loadingLabelInternal;
  }

  showConversations = false;

  conversationSearch = '';

  conversationMenuId: string | null = null;

  conversationMenuPlacement: 'above' | 'below' = 'below';

  isFullscreen = false;

  showNewConversationShortcut = false;

  conversationScrollbar = createHiddenConversationScrollbarState();

  conversationHistoryLoading = false;

  conversationHistoryError = '';

  deleteConversationTarget: ConversationDeleteTarget | null = null;

  renameConversationTarget: ConversationRenameTarget | null = null;

  quickResponse = true;

  newConversationConfirmOpen = false;

  conversationActionError: ConversationActionErrorState | null = null;

  private loadingLabelInternal = DEFAULT_LOADING_LABEL;

  private refreshConversationsAfterResponse = false;

  activeConversationTitle: string | null = null;

  activeConversationUpdatedAt: string | null = null;

  headerActions: HeaderActionConfig[] = [];

  homeUrl = '';

  consultantAgentVisible = false;

  consultantAgentIntro = CONSULTANT_AGENT_INTRO;

  consultantAgentButtonText = DEFAULT_CONSULTANT_AGENT_BUTTON_TEXT;

  showConsultantAgentButton = true;

  consultantAgentInitialMessage = DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE;

  autoStartConsultantFlow = false;

  consultantAgentOptions: ConsultantAgentOption[] = [];

  showSuggestions = true;

  activeConsultantFollowUpId: string | null = null;
  activeConsultantBranchId: string | null = null;
  activeConsultantPromptId: string | null = null;
  consultantAgentStage: 'idle' | 'awaiting' | 'ready' = 'idle';
  consultantOptionsSuppressed = false;
  pendingConsultantFollowUpId: string | null = null;
  lastConsultantPromptId: string | null = null;
  lastConsultantFollowUpId: string | null = null;
  lastConsultantFollowUpPayload:
    | {
        topicId: string;
        topicLabel: string;
        questions: ConsultantQuestion[];
      }
    | null = null;

  private pendingConversationAction: ConversationActionAttempt | null = null;

  private pendingVoiceRemovalId: string | null = null;
  private voiceTranscriptSegments: string[] = [];
  private voiceTranscriptPreview = '';
  private readonly loadingGuard = new LoadingGuardController({
    onLabelChange: (label) => {
      this.loadingLabelInternal = label;
    },
    onRequestUpdate: () => this.requestUpdate(),
  });
  private readonly voiceCapture = new VoiceCaptureController(console);

  private repairConversationId(rawId: string): string {
    return repairHistoryConversationId(rawId);
  }

  private randomId(length: number) {
    const chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i += 1) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  }

  private getTokenPreview(value: string) {
    const token = value.trim();
    if (!token) {
      return null;
    }

    if (token.length <= 10) {
      return `${token.slice(0, 2)}***${token.slice(-2)}`;
    }

    return `${token.slice(0, 6)}***${token.slice(-4)}`;
  }

  private clamp(value: number, min: number, max: number) {
    return Math.min(Math.max(value, min), max);
  }

  private conversationScrollbarRaf: number | null = null;

  private rioClient: RioWebsocketClient | null = null;

  private rioUnsubscribe: (() => void) | null = null;

  copiedMessageId: string | null = null;

  messageReactions: Record<string, 'like' | 'unlike'> = {};

  private copiedMessageTimer: number | null = null;

  private pendingResponseTo: PendingResponseState | null = null;

  private currentConversationId: string | null = null;

  private conversationScrollbarDraggingId: number | null = null;

  private conversationScrollbarDragState: {
    metrics: ConversationScrollbarDragMetrics;
    list: HTMLElement;
  } | null = null;

  private floatingButtonDragState: {
    pointerId: number;
    startY: number;
    startOffset: number;
    buttonHeight: number;
  } | null = null;

  private floatingButtonDragged = false;

  private suppressFloatingButtonClick = false;

  private markdownRenderer = createMarkdownRenderer();

  conversations: ConversationItem[] = [];

  private readonly createChatMessage = createChatMessageFactory({
    createId: () => {
      if (typeof crypto !== 'undefined' && 'randomUUID' in crypto) {
        return crypto.randomUUID();
      }

      return `${Date.now()}-${Math.random()}`;
    },
    now: () => Date.now(),
    renderHtml: (content) => this.renderMarkdown(content),
  });

  get suggestions(): string[] {
    return this.randomizedSuggestions;
  }

  private parseSuggestions(source: string): string[] {
    if (!source) {
      return [];
    }

    return source
      .split('|')
      .map((item) => item.trim())
      .filter(Boolean);
  }

  private pickRandomSuggestions(options: string[], count: number): string[] {
    if (options.length <= count) {
      return [...options];
    }

    const pool = [...options];
    for (let index = pool.length - 1; index > 0; index -= 1) {
      const swapIndex = Math.floor(Math.random() * (index + 1));
      [pool[index], pool[swapIndex]] = [pool[swapIndex], pool[index]];
    }

    return pool.slice(0, count);
  }

  protected willUpdate(changedProperties: PropertyValues): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('suggestionsSource')) {
      this.randomizedSuggestions = this.pickRandomSuggestions(
        this.parseSuggestions(this.suggestionsSource),
        3,
      );
    }
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

    if (
      changedProperties.has('message') ||
      changedProperties.has('isRecording') ||
      changedProperties.has('selectedFiles') ||
      changedProperties.has('isFullscreen') ||
      changedProperties.has('showConversations') ||
      changedProperties.has('open')
    ) {
      this.syncComposerHeight();
      requestAnimationFrame(() => this.syncComposerHeight());
    }
  }

  protected firstUpdated(): void {
    this.enqueueConversationScrollbarMeasure();
    this.syncComposerHeight();
    requestAnimationFrame(() => this.syncComposerHeight());
    void this.bootstrapConsultantAgent();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    if (this.conversationScrollbarRaf !== null) {
      cancelAnimationFrame(this.conversationScrollbarRaf);
      this.conversationScrollbarRaf = null;
    }
    if (this.copiedMessageTimer !== null) {
      window.clearTimeout(this.copiedMessageTimer);
      this.copiedMessageTimer = null;
    }

    this.selectedFiles.forEach((item) => {
      if (item.previewUrl) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });

    this.teardownVoiceRecording();

    this.teardownRioClient();
    this.loadingGuard.clear();
  }

  private getConsultantFlowState(): ConsultantFlowState {
    return {
      showSuggestions: this.showSuggestions,
      consultantAgentVisible: this.consultantAgentVisible,
      activeConsultantFollowUpId: this.activeConsultantFollowUpId,
      activeConsultantBranchId: this.activeConsultantBranchId,
      activeConsultantPromptId: this.activeConsultantPromptId,
      consultantAgentStage: this.consultantAgentStage,
      consultantOptionsSuppressed: this.consultantOptionsSuppressed,
      pendingConsultantFollowUpId: this.pendingConsultantFollowUpId,
      lastConsultantPromptId: this.lastConsultantPromptId,
      lastConsultantFollowUpId: this.lastConsultantFollowUpId,
      lastConsultantFollowUpPayload: this.lastConsultantFollowUpPayload,
    };
  }

  private applyConsultantFlowState(state: ConsultantFlowState) {
    this.showSuggestions = state.showSuggestions;
    this.consultantAgentVisible = state.consultantAgentVisible;
    this.activeConsultantFollowUpId = state.activeConsultantFollowUpId;
    this.activeConsultantBranchId = state.activeConsultantBranchId;
    this.activeConsultantPromptId = state.activeConsultantPromptId;
    this.consultantAgentStage = state.consultantAgentStage;
    this.consultantOptionsSuppressed = state.consultantOptionsSuppressed;
    this.pendingConsultantFollowUpId = state.pendingConsultantFollowUpId;
    this.lastConsultantPromptId = state.lastConsultantPromptId;
    this.lastConsultantFollowUpId = state.lastConsultantFollowUpId;
    this.lastConsultantFollowUpPayload = state.lastConsultantFollowUpPayload;
  }

  private async bootstrapConsultantAgent() {
    try {
      this.consultantAgentOptions = await loadConsultantAgentOptions(this.consultantApiBaseUrl);
    } catch (error) {
      console.error(
        '[RioAssist][consultant] erro ao carregar opções do agente consultor',
        error,
      );
      this.consultantAgentOptions = [];
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

  get hasActiveConversation() {
    return this.messages.length > 0;
  }

  get hasVoiceAttachment() {
    return Boolean(this.voiceAttachmentId);
  }

  get isAttachmentLimitReached() {
    return this.selectedFiles.length >= MAX_ATTACHMENT_COUNT;
  }

  get isVoiceButtonDisabled() {
    return (
      this.isLoading ||
      this.isRecording ||
      this.hasVoiceAttachment ||
      this.isAttachmentLimitReached
    );
  }

  get isFilePickerDisabled() {
    return this.isLoading || this.isRecording || this.isAttachmentLimitReached;
  }

  get isTextInputDisabled() {
    return (
      this.autoStartConsultantFlow ||
      this.isLoading ||
      this.isRecording ||
      this.hasVoiceAttachment
    );
  }

  get filePickerAccept() {
    return Object.values(ATTACHMENT_KIND_MAP)
      .flat()
      .map((ext) => `.${ext}`)
      .join(',');
  }

  handleFloatingButtonClick(event: Event) {
    if (this.suppressFloatingButtonClick) {
      event.preventDefault();
      return;
    }

    const nextState = toggleFromFloatingButton(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.emittedEvent) {
      this.dispatchPanelToggleEvent(nextState.emittedEvent);
    }

    if (this.autoStartConsultantFlow && nextState.willOpenMiniPanel && !this.hasActiveConversation) {
      this.handleConsultantAgentOpen();
    }
  }

  handleFloatingButtonPointerDown(event: PointerEvent) {
    const target = event.currentTarget as HTMLElement;
    target.setPointerCapture(event.pointerId);

    this.floatingButtonDragState = {
      pointerId: event.pointerId,
      startY: event.clientY,
      startOffset: this.floatingButtonOffset,
      buttonHeight: target.getBoundingClientRect().height,
    };

    this.floatingButtonDragged = false;
  }

  handleFloatingButtonPointerMove(event: PointerEvent) {
    if (!this.floatingButtonDragState || this.floatingButtonDragState.pointerId !== event.pointerId) {
      return;
    }

    const { startY, startOffset, buttonHeight } = this.floatingButtonDragState;
    const deltaY = event.clientY - startY;
    const viewportHeight = window.innerHeight || this.getBoundingClientRect().height || 0;
    const margin = 12;
    const maxBottom = Math.max(margin, viewportHeight - buttonHeight - margin);

    this.floatingButtonOffset = this.clamp(startOffset - deltaY, margin, maxBottom);
    this.floatingButtonDragged = this.floatingButtonDragged || Math.abs(deltaY) > 3;
    event.preventDefault();
  }

  handleFloatingButtonPointerUp(event: PointerEvent) {
    this.finishFloatingButtonDrag(event);
  }

  handleFloatingButtonPointerCancel(event: PointerEvent) {
    this.finishFloatingButtonDrag(event);
  }

  private finishFloatingButtonDrag(event: PointerEvent) {
    if (!this.floatingButtonDragState || this.floatingButtonDragState.pointerId !== event.pointerId) {
      return;
    }

    const target = event.currentTarget as HTMLElement | null;
    if (target && target.hasPointerCapture(event.pointerId)) {
      target.releasePointerCapture(event.pointerId);
    }

    if (this.floatingButtonDragged) {
      this.suppressFloatingButtonClick = true;
      window.setTimeout(() => {
        this.suppressFloatingButtonClick = false;
      }, 0);
    }

    this.floatingButtonDragState = null;
    this.floatingButtonDragged = false;
  }

  togglePanel() {
    const nextState = togglePanelState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.emittedEvent) {
      this.dispatchPanelToggleEvent(nextState.emittedEvent);
    }
  }

  closePanel() {
    const nextState = closePanelState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.emittedEvent) {
      this.dispatchPanelToggleEvent(nextState.emittedEvent);
    }
  }

  openConversationsPanel() {
    const nextState = openConversationsPanelState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.shouldRequestHistory) {
      this.requestConversationHistory();
    }
  }

  closeConversationsPanel() {
    this.applyPanelVisibilityState(closeConversationsPanelState(this.getPanelVisibilityState()));
  }

  toggleConversationsPanel() {
    const nextState = toggleConversationsPanelState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.shouldRequestHistory) {
      this.requestConversationHistory();
    }
  }

  toggleNewConversationShortcut() {
    this.showNewConversationShortcut = !this.showNewConversationShortcut;
  }

  toggleQuickResponse() {
    this.quickResponse = !this.quickResponse;
  }

  handleConsultantAgentOpen() {
    const result = startConsultantFlow({
      state: this.getConsultantFlowState(),
      consultantAgentOptions: this.consultantAgentOptions,
      consultantAgentInitialMessage: this.consultantAgentInitialMessage,
      defaultInitialMessage: DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE,
      createMessage: (role, text, consultantFollowUp, options) =>
        this.createMessage(role, text, consultantFollowUp, options),
    });

    if (!result) {
      return;
    }

    if (result.shouldBootstrapOptions) {
      void this.bootstrapConsultantAgent();
    }

    this.messages = [...this.messages, result.introMessage];
    this.applyConsultantFlowState(result.state);

    void this.processMessage(result.initialPrompt, { suppressUserMessage: true });
  }

  handleConsultantAgentOption(option: ConsultantAgentOption) {
    const result = selectConsultantSubject({
      option,
      hasMessages: this.messages.length > 0,
      consultantAgentIntro: this.consultantAgentIntro,
      createMessage: (role, text, consultantFollowUp, options) =>
        this.createMessage(role, text, consultantFollowUp, options),
      createId: (length) => this.randomId(length),
      state: this.getConsultantFlowState(),
    });

    if (!result) {
      return;
    }

    this.messages = [...this.messages, ...result.messages];
    this.applyConsultantFlowState(result.state);
    this.errorMessage = '';
    this.showNewConversationShortcut = true;
    this.requestUpdate();
    this.scrollConversationToBottom();
  }

  handleConsultantChooseAnotherSubject() {
    const result = reopenConsultantPrompt({
      state: this.getConsultantFlowState(),
      consultantAgentOptions: this.consultantAgentOptions,
      createMessage: (role, text, consultantFollowUp, options) =>
        this.createMessage(role, text, consultantFollowUp, options),
      createId: (length) => this.randomId(length),
    });
    if (!result) {
      return;
    }
    this.messages = [...this.messages, result.promptMessage];
    this.applyConsultantFlowState(result.state);
    this.scrollConversationToBottom();
  }

  async handleConsultantFollowUpQuestion(question: ConsultantQuestion) {
    const prepared = prepareConsultantQuestionSend({
      state: this.getConsultantFlowState(),
      consultantAgentOptions: this.consultantAgentOptions,
      question,
    });

    this.applyConsultantFlowState(prepared.state);
    await this.processMessage(question.prompt, prepared.options);
  }

  handleConversationSelect(conversationId: string) {
    if (!conversationId) {
      return;
    }

    const selection = selectConversationState(conversationId, this.conversations);
    this.showConversations = false;
    this.conversationMenuId = null;
    this.errorMessage = '';
    this.currentConversationId = selection.currentConversationId;
    this.activeConversationTitle = selection.activeConversationTitle;

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
    const conversationIndex = this.conversations.findIndex((item) => item.id === id);
    if (conversationIndex === -1) {
      return;
    }

    const conversation = this.conversations[conversationIndex];
    if (action === 'delete') {
      this.deleteConversationTarget = {
        id: conversation.id,
        title: conversation.title,
        index: conversationIndex,
      };
      return;
    }

    this.renameConversationTarget = {
      id: conversation.id,
      title: conversation.title,
      index: conversationIndex,
      draft: conversation.title,
    };
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

  applyConversationRename(id: string, newTitle: string) {
    if (!id || !newTitle) {
      return;
    }

    const result = applyConversationRenameState({
      conversations: this.conversations,
      currentConversationId: this.currentConversationId,
      conversationId: id,
      newTitle,
    });

    if (!result.changed) {
      return;
    }

    this.conversations = result.conversations;
    this.activeConversationTitle = result.activeConversationTitle;
    this.activeConversationUpdatedAt = result.activeConversationUpdatedAt;
  }

  applyConversationDeletion(id: string) {
    if (!id) {
      return;
    }

    const result = applyConversationDeletionState({
      conversations: this.conversations,
      currentConversationId: this.currentConversationId,
      conversationId: id,
      messages: this.messages,
    });

    if (!result.removed) {
      return;
    }

    this.conversations = result.conversations;
    this.currentConversationId = result.currentConversationId;
    this.activeConversationTitle = result.activeConversationTitle;
    this.activeConversationUpdatedAt = result.activeConversationUpdatedAt;
    this.messages = result.messages;
  }

  private restoreConversationSnapshot(snapshot: ConversationItem | undefined, index: number) {
    this.conversations = restoreConversationSnapshotState({
      conversations: this.conversations,
      snapshot,
      index,
    });
  }

  async confirmDeleteConversation() {
    const target = this.deleteConversationTarget;
    if (!target) {
      return;
    }

    this.pendingConversationAction = createPendingDeleteAction({
      target,
      conversations: this.conversations,
      currentConversationId: this.currentConversationId,
      messages: this.messages,
      nowIsoString: new Date().toISOString(),
    });

    const success = await this.dispatchConversationAction(
      'delete',
      { id: target.id, title: target.title },
      target.index,
    );
    if (success) {
      this.deleteConversationTarget = null;
      return;
    }

    this.pendingConversationAction = null;
  }

  cancelDeleteConversation() {
    this.deleteConversationTarget = null;
  }

  handleRenameDraft(event: InputEvent) {
    if (!this.renameConversationTarget) {
      return;
    }

    this.renameConversationTarget = {
      ...this.renameConversationTarget,
      draft: (event.target as HTMLInputElement).value,
    };
  }

  async confirmRenameConversation() {
    const target = this.renameConversationTarget;
    if (!target) {
      return;
    }

    const newTitle = target.draft.trim();
    if (!newTitle) {
      return;
    }

    this.pendingConversationAction = createPendingRenameAction({
      ...target,
      draft: newTitle,
    });

    const success = await this.dispatchConversationAction(
      'rename',
      { id: target.id, title: newTitle },
      target.index,
      newTitle,
    );
    if (success) {
      this.renameConversationTarget = null;
      return;
    }

    this.pendingConversationAction = null;
  }

  cancelRenameConversation() {
    this.renameConversationTarget = null;
  }

  cancelConversationActionError() {
    this.conversationActionError = null;
    this.pendingConversationAction = null;
  }

  async retryConversationAction() {
    const errorState = this.conversationActionError;
    if (!errorState) {
      return;
    }

    this.pendingConversationAction = createRetryConversationAction({
      errorState,
      conversations: this.conversations,
      nowIsoString: new Date().toISOString(),
    });

    this.conversationActionError = null;

    await this.dispatchConversationAction(
      errorState.action,
      { id: errorState.conversationId, title: errorState.newTitle ?? errorState.originalTitle },
      this.pendingConversationAction.index,
      errorState.newTitle,
    );
  }

  private async dispatchConversationAction(
    action: 'rename' | 'delete',
    conversation: Pick<ConversationItem, 'id' | 'title'>,
    index: number,
    newTitle?: string,
  ) {
    const eventName =
      action === 'rename' ? 'rioassist:conversation-rename' : 'rioassist:conversation-delete';
    const detail = {
      id: conversation.id,
      title: conversation.title,
      index,
      action,
    };

    const allowed = this.dispatchEvent(
      new CustomEvent(eventName, {
        detail,
        bubbles: true,
        composed: true,
        cancelable: true,
      }),
    );

    if (!allowed) {
      return false;
    }

    if (action === 'delete') {
      const ok = await this.syncConversationDeleteBackend(conversation.id);
      return ok;
    }

    if (action === 'rename' && newTitle) {
      const ok = await this.syncConversationRenameBackend(conversation.id, newTitle);
      return ok;
    }

    return false;
  }

  private async syncConversationRenameBackend(conversationId: string, newTitle: string) {
    try {
      const client = this.ensureRioClient();
      console.info('[RioAssist][ws] enviando renameConversation', {
        conversationId,
        newTitle,
      });
      await client.renameConversation(conversationId, newTitle);
      this.applyConversationRename(conversationId, newTitle);
      this.conversationHistoryError = '';
      return true;
    } catch (error) {
      console.error('[RioAssist][history] erro ao renomear conversa', error);
      this.conversationHistoryError =
        error instanceof Error && error.message
          ? error.message
          : 'Nao foi possivel renomear a conversa.';
      return false;
    }
  }

  private async syncConversationDeleteBackend(conversationId: string) {
    try {
      const client = this.ensureRioClient();
      await client.deleteConversation(conversationId);
      this.applyConversationDeletion(conversationId);
      this.conversationHistoryError = '';
      return true;
    } catch (error) {
      console.error('[RioAssist][history] erro ao excluir conversa', error);
      this.conversationHistoryError =
        error instanceof Error && error.message
          ? error.message
          : 'Nao foi possivel excluir a conversa.';
      return false;
    }
  }

  private handleConversationSystemAction(message: RioIncomingMessage) {
    const parsed = parseConversationSystemAction(message, (rawId) =>
      this.repairConversationId(rawId),
    );
    if (!parsed) {
      return false;
    }

    if (parsed.kind === 'rename') {
      this.applyConversationRename(parsed.conversationId, parsed.newTitle);
      this.conversationHistoryError = '';
      if (
        this.pendingConversationAction &&
        this.pendingConversationAction.conversationId === parsed.conversationId &&
        this.pendingConversationAction.action === 'rename'
      ) {
        this.pendingConversationAction = null;
        this.conversationActionError = null;
      }
      return true;
    }

    if (parsed.kind === 'delete') {
      this.applyConversationDeletion(parsed.conversationId);
      this.conversationHistoryError = '';
      if (
        this.pendingConversationAction &&
        this.pendingConversationAction.conversationId === parsed.conversationId &&
        this.pendingConversationAction.action === 'delete'
      ) {
        this.pendingConversationAction = null;
        this.conversationActionError = null;
      }
      return true;
    }

    return parsed.kind === 'processing';
  }

  private handleConversationActionError(message: RioIncomingMessage) {
    const errorText = resolveConversationActionErrorText(message);
    if (!errorText) {
      return false;
    }

    const data = message.data as Record<string, unknown>;
    console.error('[RioAssist][ws] erro em acao de conversa recebido do backend', {
      text: message.text,
      data,
      raw: message.raw,
    });

    const pending = this.pendingConversationAction;
    if (pending) {
      if (pending.action === 'rename') {
        this.applyConversationRename(pending.conversationId, pending.originalTitle);
      }

      if (pending.action === 'delete') {
        this.restoreConversationSnapshot(pending.snapshot, pending.index);
        if (pending.wasActive) {
          this.currentConversationId = pending.conversationId;
          this.activeConversationTitle = pending.originalTitle;
          this.activeConversationUpdatedAt = pending.snapshot?.updatedAt ?? null;
          this.messages = pending.messagesSnapshot ?? this.messages;
        }
      }

      this.conversationActionError = {
        ...pending,
        message: errorText,
      };
      this.pendingConversationAction = null;
      this.loadingGuard.clear();
      this.isLoading = false;
      return true;
    }

    this.errorMessage = errorText;
    this.loadingGuard.clear();
    this.isLoading = false;
    return true;
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
    const result = handleCloseActionState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(result.nextState);
    if (result.nextState.emittedEvent) {
      this.dispatchPanelToggleEvent(result.nextState.emittedEvent);
    }
  }

  enterFullscreen() {
    const nextState = enterFullscreenState(this.getPanelVisibilityState());
    this.applyPanelVisibilityState(nextState);
    if (nextState.shouldRequestHistory) {
      this.requestConversationHistory();
    }
  }

  exitFullscreen(restorePanel: boolean) {
    this.applyPanelVisibilityState(
      exitFullscreenState(this.getPanelVisibilityState(), restorePanel),
    );
  }

  handleCreateConversation() {
    if (!this.hasActiveConversation) {
      return;
    }

    if (this.autoStartConsultantFlow) {
      this.startNewConversation();
      this.handleConsultantAgentOpen();
      return;
    }

    this.applyPanelVisibilityState(
      openNewConversationConfirmState(this.getPanelVisibilityState()),
    );
  }

  confirmCreateConversation() {
    if (!this.hasActiveConversation) {
      this.applyPanelVisibilityState(
        closeNewConversationConfirmState(this.getPanelVisibilityState()),
      );
      return;
    }

    this.applyPanelVisibilityState(
      closeNewConversationConfirmState(this.getPanelVisibilityState()),
    );

    this.startNewConversation();
  }

  cancelCreateConversation() {
    this.applyPanelVisibilityState(
      closeNewConversationConfirmState(this.getPanelVisibilityState()),
    );
  }

  private startNewConversation() {
    if (!this.hasActiveConversation) {
      return;
    }

    this.loadingGuard.clear();
    const resetState = createNewConversationResetState();
    this.isLoading = resetState.isLoading;
    this.messages = resetState.messages;
    this.message = resetState.message;
    this.errorMessage = resetState.errorMessage;
    this.showConversations = resetState.showConversations;
    this.teardownRioClient();
    this.currentConversationId = resetState.currentConversationId;
    this.activeConversationTitle = resetState.activeConversationTitle;
    this.activeConversationUpdatedAt = resetState.activeConversationUpdatedAt;
    this.showNewConversationShortcut = resetState.showNewConversationShortcut;
    this.applyConsultantFlowState(createInitialConsultantFlowState());
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
    this.syncConversationScrollbar(target);
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
    const dragStart = beginConversationScrollbarDrag({
      pointerY: event.clientY,
      trackTop: trackRect.top,
      trackHeight: trackRect.height,
      scrollbarHeightPercent: this.conversationScrollbar.height,
      scrollHeight: list.scrollHeight,
      clientHeight: list.clientHeight,
      scrollTop: list.scrollTop,
    });

    if (dragStart.nextScrollTop !== null) {
      list.scrollTop = dragStart.nextScrollTop;
      this.syncConversationScrollbar(list);
    }

    track.setPointerCapture(event.pointerId);
    this.conversationScrollbarDraggingId = event.pointerId;
    this.conversationScrollbarDragState = {
      metrics: dragStart.metrics,
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

    const { metrics, list } = this.conversationScrollbarDragState;
    const nextScrollTop = updateConversationScrollbarDrag({
      metrics,
      pointerY: event.clientY,
      scrollHeight: list.scrollHeight,
      clientHeight: list.clientHeight,
    });

    if (nextScrollTop !== null) {
      list.scrollTop = nextScrollTop;
      this.syncConversationScrollbar(list);
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
      this.syncConversationScrollbar();
    });
  }

  private syncConversationScrollbar(target?: HTMLElement | null) {
    const element =
      target ??
      (this.renderRoot.querySelector(
        '.conversation-list--sidebar',
      ) as HTMLElement | null);

    if (!element) {
      if (this.conversationScrollbar.visible) {
        this.conversationScrollbar = createHiddenConversationScrollbarState();
      }
      return;
    }

    this.conversationScrollbar = calculateConversationScrollbarState({
      scrollHeight: element.scrollHeight,
      clientHeight: element.clientHeight,
      scrollTop: element.scrollTop,
    });
  }

  private getPanelVisibilityState(): PanelVisibilityState {
    return {
      open: this.open,
      isFullscreen: this.isFullscreen,
      showConversations: this.showConversations,
      conversationMenuId: this.conversationMenuId,
      showNewConversationShortcut: this.showNewConversationShortcut,
      newConversationConfirmOpen: this.newConversationConfirmOpen,
    };
  }

  private applyPanelVisibilityState(state: Partial<PanelVisibilityState>) {
    if (typeof state.open === 'boolean') {
      this.open = state.open;
    }
    if (typeof state.isFullscreen === 'boolean') {
      this.isFullscreen = state.isFullscreen;
    }
    if (typeof state.showConversations === 'boolean') {
      this.showConversations = state.showConversations;
    }
    if ('conversationMenuId' in state) {
      this.conversationMenuId = state.conversationMenuId ?? null;
    }
    if (typeof state.showNewConversationShortcut === 'boolean') {
      this.showNewConversationShortcut = state.showNewConversationShortcut;
    }
    if (typeof state.newConversationConfirmOpen === 'boolean') {
      this.newConversationConfirmOpen = state.newConversationConfirmOpen;
    }
  }

  private dispatchPanelToggleEvent(eventName: 'rioassist:open' | 'rioassist:close') {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
      }),
    );
  }

  async onSuggestionClick(suggestion: string) {
    await this.processMessage(suggestion);
  }

  private teardownVoiceRecording() {
    this.voiceCapture.teardown();
    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
    this.isRecording = false;
    this.isRecordingPaused = false;
  }

  private addVoiceAttachment(blob: Blob, transcript: string) {
    const result = buildVoiceAttachment({
      blob,
      existingFiles: this.selectedFiles,
      transcriptSegments: transcript ? [transcript] : [],
      transcriptPreview: transcript,
      createId: () =>
        (typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : this.randomId(12)),
      now: () => Date.now(),
    });

    if (!result) {
      return;
    }

    if ('error' in result) {
      this.attachmentError = result.error ?? '';
      return;
    }

    this.selectedFiles = [...this.selectedFiles, result.item];
    this.voiceAttachmentId = result.voiceAttachmentId;
    this.voiceTranscript = result.voiceTranscript;
    this.attachmentError = '';
  }

  async handleVoiceButtonClick() {
    if (this.isVoiceButtonDisabled) {
      return;
    }

    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
    this.voiceTranscript = '';

    const started = await this.voiceCapture.start({
      onTranscriptPreview: (preview, segments) => {
        this.voiceTranscriptPreview = preview;
        this.voiceTranscriptSegments = segments;
      },
      onSpeechRecognitionAvailabilityChange: (available) => {
        this.speechRecognitionAvailable = available;
      },
      onError: (message) => {
        this.errorMessage = message;
      },
      isRecordingActive: () => this.isRecording,
      isRecordingPaused: () => this.isRecordingPaused,
    });

    if (!started) {
      return;
    }

    this.isRecording = true;
    this.isRecordingPaused = false;
  }

  private pauseVoiceRecording() {
    if (!this.isRecording || this.isRecordingPaused) {
      return;
    }

    this.voiceCapture.pause();
    this.isRecordingPaused = true;
  }

  private resumeVoiceRecording() {
    if (!this.isRecording || !this.isRecordingPaused) {
      return;
    }

    this.voiceCapture.resume({
      onTranscriptPreview: (preview, segments) => {
        this.voiceTranscriptPreview = preview;
        this.voiceTranscriptSegments = segments;
      },
      onSpeechRecognitionAvailabilityChange: (available) => {
        this.speechRecognitionAvailable = available;
      },
      onError: (message) => {
        this.errorMessage = message;
      },
      isRecordingActive: () => this.isRecording,
      isRecordingPaused: () => this.isRecordingPaused,
    });
    this.isRecordingPaused = false;
  }

  async handleVoiceConfirmClick() {
    if (!this.isRecording) {
      return;
    }

    this.isRecording = false;
    this.isRecordingPaused = false;
    this.voiceCancelDialogOpen = false;
    const result = await this.voiceCapture.stop();
    if (result.blob) {
      this.addVoiceAttachment(result.blob, result.transcript);
    }
    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
  }

  private async discardVoiceRecording() {
    this.isRecording = false;
    this.isRecordingPaused = false;
    this.voiceCancelDialogOpen = false;
    await this.voiceCapture.discard();
    this.voiceTranscript = '';
    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
  }

  handleVoiceDialogConfirm() {
    if (this.voiceCancelDialogMode === 'cancel') {
      void this.discardVoiceRecording();
      return;
    }

    const targetId = this.pendingVoiceRemovalId;
    if (targetId) {
      this.selectedFiles = this.selectedFiles.filter((item) => item.id !== targetId);
      if (this.voiceAttachmentId === targetId) {
        this.voiceAttachmentId = null;
        this.voiceTranscript = '';
      }
      this.pendingVoiceRemovalId = null;
    }
    if (this.selectedFiles.length === 0) {
      this.attachmentError = '';
    }
    this.voiceCancelDialogOpen = false;
  }

  handleVoiceDialogContinue() {
    if (this.voiceCancelDialogMode === 'cancel') {
      this.voiceCancelDialogOpen = false;
      this.resumeVoiceRecording();
      return;
    }

    this.voiceCancelDialogOpen = false;
    this.pendingVoiceRemovalId = null;
  }

  handleVoiceAttachmentRemove(id: string) {
    if (this.isRecording) {
      return;
    }

    this.voiceCancelDialogMode = 'remove';
    this.pendingVoiceRemovalId = id;
    this.voiceCancelDialogOpen = true;
  }

  handleFilePickerClick() {
    if (this.isFilePickerDisabled) {
      return;
    }

    const input = this.renderRoot.querySelector('.file-input') as HTMLInputElement | null;
    if (input && !input.disabled) {
      input.click();
    }
  }

  handleFileInputChange(event: Event) {
    const input = event.target as HTMLInputElement | null;
    if (!input) {
      return;
    }

    const previousFiles = this.selectedFiles;
    const files = Array.from(input.files ?? []);
    input.value = '';

    if (files.length === 0) {
      return;
    }

    const result = addFilesToSelection(this.selectedFiles, files, {
      createId: () =>
        (typeof crypto !== 'undefined' && 'randomUUID' in crypto
          ? crypto.randomUUID()
          : this.randomId(12)),
      createPreviewUrl: (file) => URL.createObjectURL(file),
    });

    this.selectedFiles = result.files;
    this.attachmentError = result.error;

    previousFiles.forEach((item) => {
      if (item.previewUrl && !this.selectedFiles.find((entry) => entry.id === item.id)) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });
  }

  handleAttachmentRemove(id: string) {
    const removal = removeAttachmentById(this.selectedFiles, id);
    const removed = removal.removed;
    if (removed?.kind === 'audio') {
      this.handleVoiceAttachmentRemove(id);
      return;
    }
    this.selectedFiles = removal.files;
    if (removed?.previewUrl) {
      URL.revokeObjectURL(removed.previewUrl);
    }
    if (removal.shouldClearError) {
      this.attachmentError = '';
    }
  }

  private dispatchMessageAction(kind: string, message: ChatMessage) {
    this.dispatchEvent(
      new CustomEvent(`rioassist:message-${kind}`, {
        detail: {
          messageId: message.id,
          role: message.role,
          text: message.text,
          conversationId: this.currentConversationId,
          responseTo: message.responseTo ?? null,
        },
        bubbles: true,
        composed: true,
      }),
    );
  }

  private setCopiedMessage(messageId: string) {
    if (this.copiedMessageTimer !== null) {
      window.clearTimeout(this.copiedMessageTimer);
      this.copiedMessageTimer = null;
    }
    this.copiedMessageId = messageId;
    this.copiedMessageTimer = window.setTimeout(() => {
      this.copiedMessageId = null;
      this.copiedMessageTimer = null;
    }, 1200);
  }

  async handleCopyMessage(message: ChatMessage) {
    const content = message.text.trim();
    if (!content) {
      return;
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(content);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = content;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      this.setCopiedMessage(message.id);
      this.dispatchMessageAction('copy', message);
    } catch (error) {
      console.error('[RioAssist] falha ao copiar mensagem', error);
    }
  }

  handleUpdateResponse(message: ChatMessage) {
    if (this.isLoading || !message.responseTo) {
      return;
    }

    this.messages = this.messages.map((entry) =>
      entry.id === message.id ? { ...entry, hidden: true } : entry,
    );

    void this.processMessage(message.responseTo.requestText, {
      suppressUserMessage: true,
      responseToMessageId: message.responseTo.messageId,
      forcePayload: {
        contentToSend: message.responseTo.requestToSend,
        contentToDisplay: message.responseTo.requestText,
        quickResponse: message.responseTo.quickResponse,
      },
      consultantContext: message.responseTo.consultantContext ?? null,
      isConsultantAgent: message.responseTo.isConsultantAgent ?? false,
    });

    this.dispatchMessageAction('update', message);
  }

  handleToggleReaction(kind: 'like' | 'unlike', message: ChatMessage) {
    const current = this.messageReactions[message.id];
    const next = current === kind ? undefined : kind;
    const updated = { ...this.messageReactions };
    if (next) {
      updated[message.id] = next;
    } else {
      delete updated[message.id];
    }
    this.messageReactions = updated;
    this.dispatchMessageAction(kind, message);
  }

  handleMessageAction(kind: 'share' | 'more', message: ChatMessage) {
    this.dispatchMessageAction(kind, message);
  }

  handleComposerKeydown(event: KeyboardEvent) {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) {
      return;
    }

    event.preventDefault();
    void this.submitCurrentMessage();
  }

  handleComposerInput(event: InputEvent) {
    const textarea = event.target as HTMLTextAreaElement | null;
    if (!textarea) {
      return;
    }

    this.message = textarea.value;
    this.resizeComposer(textarea);
  }

  async handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    await this.submitCurrentMessage();
  }

  private async submitCurrentMessage() {
    if (this.isRecording) {
      return;
    }

    this.applyConsultantFlowState(suppressConsultantPrompts(this.getConsultantFlowState()));
    await this.processMessage(this.message, { attachments: this.selectedFiles });
  }

  private resizeComposer(textarea: HTMLTextAreaElement) {
    textarea.style.height = 'auto';
    const nextHeight = Math.min(textarea.scrollHeight, COMPOSER_MAX_HEIGHT_PX);
    textarea.style.height = `${nextHeight}px`;
    textarea.style.overflowY = textarea.scrollHeight > COMPOSER_MAX_HEIGHT_PX ? 'auto' : 'hidden';
  }

  private syncComposerHeight() {
    const textareas = Array.from(
      this.renderRoot.querySelectorAll('.composer-input'),
    ) as HTMLTextAreaElement[];

    if (textareas.length === 0) {
      return;
    }

    textareas.forEach((textarea) => this.resizeComposer(textarea));
  }

  private createMessage(
    role: ChatRole,
    text: string,
    consultantFollowUp?: ChatMessage['consultantFollowUp'],
    options?: {
      request?: ChatMessage['request'];
      responseTo?: ChatMessage['responseTo'];
      hidden?: boolean;
    },
  ): ChatMessage {
    return this.createChatMessage({
      role,
      text,
      consultantFollowUp,
      request: options?.request,
      responseTo: options?.responseTo,
      hidden: options?.hidden,
    });
  }

  private async processMessage(
    rawValue: string,
    options: OutgoingMessageOptions<AttachmentItem> | null = null,
  ) {
    const prepared = prepareOutgoingMessage({
      rawValue,
      isLoading: this.isLoading,
      quickResponse: this.quickResponse,
      hasMessages: this.messages.length > 0,
      options,
      createMessage: (input) => this.createChatMessage(input),
    });

    if (!prepared) {
      return;
    }

    if (!this.currentConversationId) {
      this.currentConversationId = null;
      this.activeConversationTitle = null;
      this.activeConversationUpdatedAt = null;
    }

    this.dispatchEvent(
      new CustomEvent('rioassist:send', {
        detail: {
          message: prepared.content,
          apiBaseUrl: this.apiBaseUrl,
          hasToken: Boolean(this.rioToken.trim()),
          tokenPreview: this.getTokenPreview(this.rioToken),
          consultantContext: options?.consultantContext ?? null,
          isConsultantAgent: options?.isConsultantAgent ?? false,
          quickResponse: prepared.requestPayload.quickResponse,
          attachments: prepared.attachments.map((item) => item.file),
        },
        bubbles: true,
        composed: true,
      }),
    );

    if (prepared.userMessage) {
      this.messages = [...this.messages, prepared.userMessage];
    }
    this.pendingResponseTo = prepared.pendingResponse;

    if (prepared.shouldRefreshConversations) {
      this.showNewConversationShortcut = true;
      this.refreshConversationsAfterResponse = true;
    }
    this.message = '';
    this.errorMessage = '';
    this.isLoading = true;
    this.loadingGuard.start();

    try {
      const client = this.ensureRioClient();
      const extraPayload = buildWebsocketExtraPayload(prepared.requestPayload);
      await client.sendMessage(prepared.contentToSend, this.currentConversationId, extraPayload);
      if (prepared.attachments.length) {
        const hadVoice =
          this.voiceAttachmentId &&
          prepared.attachments.some((item) => item.id === this.voiceAttachmentId);
        this.selectedFiles.forEach((item) => {
          if (item.previewUrl) {
            URL.revokeObjectURL(item.previewUrl);
          }
        });
        this.selectedFiles = [];
        this.attachmentError = '';
        if (hadVoice) {
          this.voiceAttachmentId = null;
          this.voiceTranscript = '';
        }
      }
    } catch (error) {
      this.pendingResponseTo = null;
      this.loadingGuard.clear();
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

    const websocketUrl = this.wsBaseUrl.trim();
    if (!this.rioClient || !this.rioClient.matchesConnection(token, websocketUrl)) {
      this.teardownRioClient();
      this.rioClient = new RioWebsocketClient(token, { websocketUrl });
      this.rioUnsubscribe = this.rioClient.onMessage((incoming) => {
        this.handleIncomingMessage(incoming);
      });
    }

    return this.rioClient;
  }

  private async handleIncomingMessage(message: RioIncomingMessage) {
    if (this.isHistoryPayload(message)) {
      this.logHistoryPayload(message);
      this.handleHistoryPayload(message.data);
      return;
    }

    if (this.handleConversationSystemAction(message)) {
      return;
    }

    if (this.handleConversationActionError(message)) {
      return;
    }

    if (shouldIgnoreAssistantPayload(message.action)) {
      return;
    }

    const incomingConversationId = extractConversationIdFromPayload(
      message.data,
      (rawId) => this.repairConversationId(rawId),
    );
    const incomingConversationTitle = typeof (message.data as any)?.conversationTitle === 'string'
      ? (message.data as any).conversationTitle.trim()
      : '';
    if (incomingConversationId) {
      const syncResult = syncConversationFromIncomingMessage({
        conversations: this.conversations,
        incomingConversationId,
        incomingConversationTitle,
        nowIsoString: new Date().toISOString(),
      });
      this.conversations = syncResult.conversations;
      if (syncResult.activeConversationTitle) {
        this.activeConversationTitle = syncResult.activeConversationTitle;
        this.activeConversationUpdatedAt = syncResult.activeConversationUpdatedAt;
      }
      if (syncResult.isNewConversation) {
        // Force refresh of conversation list for brand new conversations
        this.refreshConversationsAfterResponse = false;
        console.info('[RioAssist][ws] nova conversa detectada, atualizando lista', {
          conversationId: incomingConversationId,
        });
        await this.requestConversationHistory();
      }
      this.currentConversationId = incomingConversationId;
      const state = createConversationHistoryState({
        conversations: this.conversations,
        currentConversationId: this.currentConversationId,
      });
      this.activeConversationTitle = state.activeConversationTitle;
      this.activeConversationUpdatedAt = state.activeConversationUpdatedAt;
    }

    console.info('[RioAssist][ws] resposta de mensagem recebida', {
      action: message.action ?? 'message',
      text: message.text,
      raw: message.raw,
      data: message.data,
    });

    // Handle "processing" type messages - just keep loading state, don't create message
    if (message.action === 'processing') {
      console.info('[RioAssist][ws] processando mensagem - aguardando resposta final');
      // Keep isLoading = true, don't create a message balloon
      return;
    }

    const assistantMessage = createAssistantResponseMessage({
      text: message.text,
      pendingResponse: this.pendingResponseTo,
      createMessage: (input) => this.createChatMessage(input),
    });
    this.messages = [...this.messages, assistantMessage];
    this.pendingResponseTo = null;
    this.loadingGuard.clear();
    this.isLoading = false;

    const consultantEffects = applyConsultantEffectsAfterAssistantMessage({
      state: this.getConsultantFlowState(),
      consultantAgentOptions: this.consultantAgentOptions,
      createMessage: (role, text, consultantFollowUp, options) =>
        this.createMessage(role, text, consultantFollowUp, options),
      createId: (length) => this.randomId(length),
    });

    if (consultantEffects.messages.length > 0) {
      this.messages = [...this.messages, ...consultantEffects.messages];
    }
    this.applyConsultantFlowState(consultantEffects.state);

    if (this.refreshConversationsAfterResponse) {
      this.refreshConversationsAfterResponse = false;
      await this.requestConversationHistory();
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

      this.conversationHistoryError = '';
      this.conversationHistoryLoading = true;
      await client.requestHistory({ conversationId, limit });
    } catch (error) {
      console.error('[RioAssist][history] erro ao solicitar historico', error);
      this.conversationHistoryError =
        error instanceof Error && error.message
          ? error.message
          : 'Nao foi possivel carregar as conversas.';
      this.conversationHistoryLoading = false;
    }
  }

  private handleHistoryPayload(payload: unknown) {
    const entries = extractHistoryEntries(payload);
    const conversationId = extractConversationIdFromPayload(
      payload,
      (rawId) => this.repairConversationId(rawId),
    );

    if (conversationId !== null && conversationId !== undefined) {
      this.applyMessageHistory(entries, conversationId);
      return;
    }

    if (isMessageHistoryEntries(entries)) {
      this.applyMessageHistory(entries);
      return;
    }

    this.applyConversationHistoryFromEntries(entries);

    if (this.refreshConversationsAfterResponse) {
      this.refreshConversationsAfterResponse = false;
    }
  }

  private isHistoryPayload(message: RioIncomingMessage) {
    return isHistoryPayloadMessage(message);
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
      const state = createConversationHistoryState({
        conversations: [],
        currentConversationId: this.currentConversationId,
      });
      this.conversations = state.conversations;
      this.conversationHistoryLoading = state.conversationHistoryLoading;
      this.conversationHistoryError = state.conversationHistoryError;
      this.activeConversationTitle = state.activeConversationTitle;
      this.activeConversationUpdatedAt = state.activeConversationUpdatedAt;
      return;
    }

    entries.forEach((entry) => {
      if (!entry || typeof entry !== 'object') {
        return;
      }

      const rawId =
        (entry as Record<string, unknown>).conversationId ??
        (entry as Record<string, unknown>).conversationUUID ??
        (entry as Record<string, unknown>).conversationUuid ??
        (entry as Record<string, unknown>).uuid ??
        (entry as Record<string, unknown>).id;
      if (rawId) {
        console.info('[RioAssist][history] conversa recebida do backend', {
          rawId,
          normalizedId: this.repairConversationId(String(rawId)),
          entry,
        });
      }
    });

    const conversations = normalizeConversationHistory(
      entries,
      (rawId) => this.repairConversationId(rawId),
    );
    const state = createConversationHistoryState({
      conversations,
      currentConversationId: this.currentConversationId,
    });
    this.conversations = state.conversations;
    this.conversationHistoryLoading = state.conversationHistoryLoading;
    this.conversationHistoryError = state.conversationHistoryError;
    this.activeConversationTitle = state.activeConversationTitle;
    this.activeConversationUpdatedAt = state.activeConversationUpdatedAt;
    console.info('[RioAssist][history] conversas normalizadas', conversations);
  }

  private applyMessageHistory(entries: unknown[], conversationId?: string | null) {
    if (entries.length === 0) {
      console.info('[RioAssist][history] lista de mensagens vazia', { conversationId });
      const state = createMessageHistoryState({
        messages: [],
        currentConversationId: conversationId,
      });
      this.messages = state.messages;
      this.showConversations = state.showConversations;
      this.loadingGuard.clear();
      this.isLoading = state.isLoading;
      this.conversationHistoryLoading = state.conversationHistoryLoading;
      this.showNewConversationShortcut = state.showNewConversationShortcut;
      this.refreshConversationsAfterResponse = state.refreshConversationsAfterResponse;
      if (typeof state.currentConversationId === 'string') {
        this.currentConversationId = state.currentConversationId;
      }
      return;
    }

    const normalized = normalizeMessageHistory(entries, (content) => this.renderMarkdown(content));
    const state = createMessageHistoryState({
      messages: normalized,
      currentConversationId: conversationId,
    });
    this.messages = state.messages;
    this.showConversations = state.showConversations;
    this.loadingGuard.clear();
    this.isLoading = state.isLoading;
    this.showNewConversationShortcut = state.showNewConversationShortcut;
    this.conversationHistoryLoading = state.conversationHistoryLoading;
    this.refreshConversationsAfterResponse = state.refreshConversationsAfterResponse;
    if (typeof state.currentConversationId === 'string') {
      this.currentConversationId = state.currentConversationId;
    }

    console.info('[RioAssist][history] mensagens carregadas', {
      conversationId: conversationId ?? null,
      total: normalized.length,
    });
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
    return this.markdownRenderer.render(content);
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





