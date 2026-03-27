import { LitElement, type PropertyValues } from 'lit';
import { widgetStyles } from './rio-assist.styles';
import { renderRioAssist } from './rio-assist.template';
import * as conversationController from './conversation-controller';
import * as consultantController from './consultant-controller';
import * as mediaController from './media-controller';
import {
  RioWebsocketClient,
  type RioIncomingMessage,
} from '../../services/rioWebsocket';
import { RioSessionController } from '../../services/rioSession';
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
  buildSendMessageCleanup,
  buildSendMessageErrorState,
  prepareSendMessage,
} from '../../application/send-message-flow';
import {
  clearCopiedMessageState,
  createCopiedMessageState,
  createMessageActionDetail,
  hideMessageForRefresh,
  toggleMessageReaction,
} from '../../application/message-action-flow';
import {
  applyVoiceAttachmentResult,
  closeVoiceDialog,
  closeVoiceDialogAndResume,
  confirmVoiceRemovalState,
  createVoiceRecordingDiscardedState,
  createVoiceRecordingFinishedState,
  createVoiceRecordingPausedState,
  createVoiceRecordingResumedState,
  createVoiceRecordingStartedState,
  finalizeAttachmentRemovalState,
  openVoiceRemovalDialog,
  resetVoiceCaptureDraftState,
} from '../../application/media-ui-flow';
import {
  applyOutgoingAttachmentCleanup,
  applyPreparedOutgoingMessageError,
  applyPreparedOutgoingMessageState,
  createSendEventDetail,
} from '../../application/outgoing-message-ui-flow';
import { buildIncomingAssistantState } from '../../application/incoming-message-flow';
import {
  applyConversationActionErrorState,
  applyConversationSystemActionState,
  createConversationActionEventDetail,
  createConversationActionEventName,
  createConversationActionFailureMessage,
  createConversationActionSuccessState,
} from '../../application/conversation-backend-flow';
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
  createConversationActionTarget,
  selectConversationMenuState,
  shouldCloseConversationMenu,
  updateRenameDraft,
} from '../../application/conversation-ui-flow';
import {
  buildAttachmentRemoval,
  prepareFileSelection,
} from '../../application/file-selection-flow';
import {
  finishFloatingButtonDrag as finishFloatingButtonDragState,
  startFloatingButtonDrag,
  type FloatingButtonDragState,
  updateFloatingButtonDrag,
} from '../../application/floating-button-flow';
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

  private conversationScrollbarRaf: number | null = null;

  private rioClient: RioWebsocketClient | null = null;
  private readonly rioSession = new RioSessionController();

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

  private floatingButtonDragState: FloatingButtonDragState | null = null;

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

    this.floatingButtonDragState = startFloatingButtonDrag({
      pointerId: event.pointerId,
      startY: event.clientY,
      startOffset: this.floatingButtonOffset,
      buttonHeight: target.getBoundingClientRect().height,
    });

    this.floatingButtonDragged = false;
  }

  handleFloatingButtonPointerMove(event: PointerEvent) {
    if (!this.floatingButtonDragState || this.floatingButtonDragState.pointerId !== event.pointerId) {
      return;
    }

    const viewportHeight = window.innerHeight || this.getBoundingClientRect().height || 0;
    const nextState = updateFloatingButtonDrag({
      dragState: this.floatingButtonDragState,
      pointerY: event.clientY,
      viewportHeight,
    });

    this.floatingButtonOffset = nextState.offset;
    this.floatingButtonDragged = this.floatingButtonDragged || nextState.dragged;
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

    if (finishFloatingButtonDragState(this.floatingButtonDragged).shouldSuppressClick) {
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
    consultantController.handleConsultantAgentOpen(
      this.getConsultantControllerHost(),
      DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE,
    );
  }

  handleConsultantAgentOption(option: ConsultantAgentOption) {
    consultantController.handleConsultantAgentOption(
      this.getConsultantControllerHost(),
      option,
    );
  }

  handleConsultantChooseAnotherSubject() {
    consultantController.handleConsultantChooseAnotherSubject(
      this.getConsultantControllerHost(),
    );
  }

  async handleConsultantFollowUpQuestion(question: ConsultantQuestion) {
    await consultantController.handleConsultantFollowUpQuestion(
      this.getConsultantControllerHost(),
      question,
    );
  }

  handleConversationSelect(conversationId: string) {
    return conversationController.handleConversationSelect(
      this.getConversationControllerHost(),
      conversationId,
    );
  }

  handleConversationSearch(event: InputEvent) {
    this.conversationSearch = conversationController.handleConversationSearch(event);
  }

  handleConversationMenuToggle(event: Event, id: string) {
    conversationController.handleConversationMenuToggle(
      this.getConversationControllerHost(),
      event,
      id,
      this.renderRoot,
    );
  }

  handleConversationsPanelPointer(event: PointerEvent) {
    conversationController.handleConversationsPanelPointer(
      this.getConversationControllerHost(),
      event,
    );
  }

  handleConversationAction(action: 'rename' | 'delete', id: string) {
    conversationController.handleConversationAction(
      this.getConversationControllerHost(),
      action,
      id,
    );
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
    await conversationController.confirmDeleteConversation(this.getConversationControllerHost());
  }

  cancelDeleteConversation() {
    conversationController.cancelDeleteConversation(this.getConversationControllerHost());
  }

  handleRenameDraft(event: InputEvent) {
    conversationController.handleRenameDraft(this.getConversationControllerHost(), event);
  }

  async confirmRenameConversation() {
    await conversationController.confirmRenameConversation(this.getConversationControllerHost());
  }

  cancelRenameConversation() {
    conversationController.cancelRenameConversation(this.getConversationControllerHost());
  }

  cancelConversationActionError() {
    conversationController.cancelConversationActionError(this.getConversationControllerHost());
  }

  async retryConversationAction() {
    await conversationController.retryConversationAction(this.getConversationControllerHost());
  }

  private handleConversationSystemAction(message: RioIncomingMessage) {
    return conversationController.handleConversationSystemAction(
      this.getConversationControllerHost(),
      message,
    );
  }

  private handleConversationActionError(message: RioIncomingMessage) {
    return conversationController.handleConversationActionError(
      this.getConversationControllerHost(),
      message,
    );
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

  private getConversationControllerHost() {
    return this as unknown as conversationController.ConversationHost;
  }

  private getConsultantControllerHost() {
    return this as unknown as consultantController.ConsultantHost;
  }

  private getMediaControllerHost() {
    return this as unknown as mediaController.MediaHost;
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
    mediaController.teardownVoiceRecording(this.getMediaControllerHost());
  }

  private addVoiceAttachment(blob: Blob, transcript: string) {
    mediaController.addVoiceAttachment(this.getMediaControllerHost(), blob, transcript);
  }

  async handleVoiceButtonClick() {
    await mediaController.handleVoiceButtonClick(this.getMediaControllerHost());
  }

  private pauseVoiceRecording() {
    mediaController.pauseVoiceRecording(this.getMediaControllerHost());
  }

  private resumeVoiceRecording() {
    mediaController.resumeVoiceRecording(this.getMediaControllerHost());
  }

  async handleVoiceConfirmClick() {
    await mediaController.handleVoiceConfirmClick(this.getMediaControllerHost());
  }

  private async discardVoiceRecording() {
    await mediaController.discardVoiceRecording(this.getMediaControllerHost());
  }

  handleVoiceDialogConfirm() {
    if (this.voiceCancelDialogMode === 'cancel') {
      void this.discardVoiceRecording();
      return;
    }
    mediaController.handleVoiceDialogConfirm(this.getMediaControllerHost());
  }

  handleVoiceDialogContinue() {
    mediaController.handleVoiceDialogContinue(this.getMediaControllerHost());
  }

  handleVoiceAttachmentRemove(id: string) {
    mediaController.handleVoiceAttachmentRemove(this.getMediaControllerHost(), id);
  }

  handleFilePickerClick() {
    mediaController.handleFilePickerClick(this.getMediaControllerHost());
  }

  handleFileInputChange(event: Event) {
    mediaController.handleFileInputChange(this.getMediaControllerHost(), event);
  }

  handleAttachmentRemove(id: string) {
    mediaController.handleAttachmentRemove(this.getMediaControllerHost(), id);
  }

  private dispatchMessageAction(kind: string, message: ChatMessage) {
    this.dispatchEvent(
      new CustomEvent(`rioassist:message-${kind}`, {
        detail: createMessageActionDetail(message, this.currentConversationId),
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
    const nextState = createCopiedMessageState(messageId);
    this.copiedMessageId = nextState.copiedMessageId;
    this.copiedMessageTimer = window.setTimeout(() => {
      this.copiedMessageId = clearCopiedMessageState().copiedMessageId;
      this.copiedMessageTimer = null;
    }, nextState.timeoutMs);
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

    this.messages = hideMessageForRefresh(this.messages, message.id);

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
    this.messageReactions = toggleMessageReaction(this.messageReactions, kind, message.id);
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
    const sendState = prepareSendMessage({
      rawValue,
      isLoading: this.isLoading,
      quickResponse: this.quickResponse,
      hasMessages: this.messages.length > 0,
      messages: this.messages,
      apiBaseUrl: this.apiBaseUrl,
      hasToken: Boolean(this.rioToken.trim()),
      tokenPreview: this.getTokenPreview(this.rioToken),
      options,
      createMessage: (input) => this.createChatMessage(input),
    });

    if (!sendState) {
      return;
    }

    if (sendState.resetConversationMeta && !this.currentConversationId) {
      this.currentConversationId = null;
      this.activeConversationTitle = null;
      this.activeConversationUpdatedAt = null;
    }

    this.dispatchEvent(
      new CustomEvent('rioassist:send', {
        detail: sendState.sendEventDetail,
        bubbles: true,
        composed: true,
      }),
    );

    const nextState = sendState.uiState;
    this.messages = nextState.messages;
    this.pendingResponseTo = nextState.pendingResponseTo;
    this.showNewConversationShortcut = nextState.showNewConversationShortcut;
    this.refreshConversationsAfterResponse = nextState.refreshConversationsAfterResponse;
    this.message = nextState.message;
    this.errorMessage = nextState.errorMessage;
    this.isLoading = nextState.isLoading;
    this.loadingGuard.start();

    try {
      const client = this.ensureRioClient();
      await client.sendMessage(
        sendState.prepared.contentToSend,
        this.currentConversationId,
        sendState.websocketExtraPayload,
      );
      if (sendState.prepared.attachments.length) {
        const cleanupState = buildSendMessageCleanup({
          selectedFiles: this.selectedFiles,
          sentAttachments: sendState.prepared.attachments,
          voiceAttachmentId: this.voiceAttachmentId,
        });
        cleanupState.shouldRevokePreviewUrls.forEach((url) => URL.revokeObjectURL(url));
        this.selectedFiles = cleanupState.selectedFiles;
        this.attachmentError = cleanupState.attachmentError;
        this.voiceAttachmentId = cleanupState.voiceAttachmentId;
        if (typeof cleanupState.voiceTranscript === 'string') {
          this.voiceTranscript = cleanupState.voiceTranscript;
        }
      }
    } catch (error) {
      const errorState = buildSendMessageErrorState(error);
      this.pendingResponseTo = errorState.pendingResponseTo;
      this.loadingGuard.clear();
      this.isLoading = errorState.isLoading;
      this.errorMessage = errorState.errorMessage;
    }
  }

  private ensureRioClient() {
    this.rioClient = this.rioSession.ensureConnection({
      token: this.rioToken,
      websocketUrl: this.wsBaseUrl,
      onMessage: (incoming) => {
        this.handleIncomingMessage(incoming);
      },
    });
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

    const incomingState = buildIncomingAssistantState({
      message,
      conversations: this.conversations,
      pendingResponseTo: this.pendingResponseTo,
      consultantState: this.getConsultantFlowState(),
      consultantAgentOptions: this.consultantAgentOptions,
      nowIsoString: new Date().toISOString(),
      repairConversationId: (rawId) => this.repairConversationId(rawId),
      createMessage: (input) => this.createChatMessage(input),
      createConsultantMessage: (role, text, consultantFollowUp, options) =>
        this.createMessage(role, text, consultantFollowUp, options),
      createId: (length) => this.randomId(length),
    });

    this.conversations = incomingState.conversationSync.conversations;
    this.currentConversationId = incomingState.incomingConversationId ?? this.currentConversationId;
    this.activeConversationTitle = incomingState.conversationMetaState.activeConversationTitle;
    this.activeConversationUpdatedAt = incomingState.conversationMetaState.activeConversationUpdatedAt;

    if (incomingState.conversationSync.isNewConversation && incomingState.incomingConversationId) {
      this.refreshConversationsAfterResponse = false;
      console.info('[RioAssist][ws] nova conversa detectada, atualizando lista', {
        conversationId: incomingState.incomingConversationId,
      });
      await this.requestConversationHistory();
    }

    console.info('[RioAssist][ws] resposta de mensagem recebida', {
      action: message.action ?? 'message',
      text: message.text,
      raw: message.raw,
      data: message.data,
    });

    // Handle "processing" type messages - just keep loading state, don't create message
    if (incomingState.shouldKeepLoading) {
      console.info('[RioAssist][ws] processando mensagem - aguardando resposta final');
      return;
    }

    if (incomingState.assistantMessage) {
      this.messages = [...this.messages, incomingState.assistantMessage];
    }
    this.pendingResponseTo = null;
    this.loadingGuard.clear();
    this.isLoading = false;

    if (incomingState.consultantEffects) {
      if (incomingState.consultantEffects.messages.length > 0) {
        this.messages = [...this.messages, ...incomingState.consultantEffects.messages];
      }
      this.applyConsultantFlowState(incomingState.consultantEffects.state);
    }

    if (this.refreshConversationsAfterResponse) {
      this.refreshConversationsAfterResponse = false;
      await this.requestConversationHistory();
    }
  }

  private teardownRioClient() {
    this.rioSession.teardown();
    this.rioClient = null;
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





