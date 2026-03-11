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
import {
  CONSULTANT_AGENT_INTRO,
  type ConsultantAgentOption,
  type ConsultantQuestion,
  buildConsultantFollowUpText,
  loadConsultantAgentOptions,
} from '../../consultant-agent/consultant-agent';
import {
  looksLikeMessageHistoryEntry as isMessageHistoryEntry,
  normalizeRole as normalizeHistoryRole,
  parseTimestamp as parseHistoryTimestamp,
  repairConversationId as repairHistoryConversationId,
  toIsoString as toHistoryIsoString,
} from './history-utils';
import { logger } from '../../utils/logger';

type ChatRole = 'user' | 'assistant';
const COMPOSER_MAX_HEIGHT_PX = 280;
const console = {
  info: logger.info,
  warn: logger.warn,
  error: logger.error,
};

type AttachmentKind = 'text' | 'sheet' | 'pdf' | 'image' | 'audio';

type AttachmentItem = {
  id: string;
  file: File;
  name: string;
  typeLabel: string;
  kind: AttachmentKind;
  previewUrl?: string;
};

const MAX_ATTACHMENT_COUNT = 3;
const MAX_ATTACHMENT_SIZE_BYTES = 10 * 1024 * 1024;
const ATTACHMENT_KIND_MAP: Record<AttachmentKind, string[]> = {
  text: ['txt', 'doc', 'docx'],
  sheet: ['xls', 'xlsx', 'csv'],
  pdf: ['pdf'],
  image: ['jpg', 'jpeg', 'png'],
  audio: ['wav', 'mp3', 'm4a', 'ogg', 'webm'],
};
const ATTACHMENT_KIND_LABEL: Record<AttachmentKind, string> = {
  text: 'Documento de Texto',
  sheet: 'Planilha',
  pdf: 'Documento PDF',
  image: 'Imagem',
  audio: 'Mensagem de audio',
};
const DEFAULT_CONSULTANT_AGENT_BUTTON_TEXT = 'Consulte o UptAIme Agent';
const DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE =
  'Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Para iniciar, estou te enviando o resumo da sua frota.';

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  html?: string;
  timestamp: number;
  request?: {
    text: string;
    toSend: string;
    quickResponse: boolean;
    consultantContext?: {
      branchId: string | null;
      branchLabel: string | null;
      questionId: string;
      questionLevel: string | null;
    } | null;
    isConsultantAgent?: boolean;
  };
  responseTo?: {
    messageId: string;
    requestText: string;
    requestToSend: string;
    quickResponse: boolean;
    consultantContext?: {
      branchId: string | null;
      branchLabel: string | null;
      questionId: string;
      questionLevel: string | null;
    } | null;
    isConsultantAgent?: boolean;
  };
  hidden?: boolean;
  consultantPrompt?: {
    id: string;
    text: string;
    options: ConsultantAgentOption[];
  };
  consultantFollowUp?: {
    id: string;
    topicId: string;
    topicLabel: string;
    questions: ConsultantQuestion[];
  };
};

type ConversationItem = {
  id: string;
  title: string;
  updatedAt: string;
};

type ConversationDeleteTarget = {
  id: string;
  title: string;
  index: number;
};

type ConversationRenameTarget = {
  id: string;
  title: string;
  index: number;
  draft: string;
};

type ConversationActionKind = 'rename' | 'delete';

type ConversationActionAttempt = {
  action: ConversationActionKind;
  conversationId: string;
  originalTitle: string;
  index: number;
  newTitle?: string;
  snapshot?: ConversationItem;
  messagesSnapshot?: ChatMessage[];
  wasActive?: boolean;
};

type ConversationActionErrorState = ConversationActionAttempt & {
  message: string;
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

  conversationScrollbar = {
    height: 0,
    top: 0,
    visible: false,
  };

  conversationHistoryLoading = false;

  conversationHistoryError = '';

  deleteConversationTarget: ConversationDeleteTarget | null = null;

  renameConversationTarget: ConversationRenameTarget | null = null;

  quickResponse = true;

  newConversationConfirmOpen = false;

  conversationActionError: ConversationActionErrorState | null = null;

  private loadingLabelInternal = 'UptAIme Assist está respondendo...';
  private loadingTimerSlow: number | null = null;
  private loadingTimerLong: number | null = null;
  private loadingTimerVeryLong: number | null = null;

  private refreshConversationsAfterResponse = false;

  activeConversationTitle: string | null = null;

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

  private voiceRecorder: MediaRecorder | null = null;
  private voiceRecordingStream: MediaStream | null = null;
  private voiceRecordingChunks: BlobPart[] = [];
  private speechRecognizer: any | null = null;
  private voiceTranscriptSegments: string[] = [];
  private voiceTranscriptPreview = '';
  private pendingVoiceRemovalId: string | null = null;
  private microphonePermissionGranted = false;

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
        return candidate.replace(/[^a-zA-Z0-9_:-]/g, '');
      }
    } catch {
      return null;
    }

    return null;
  }

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

  private getFileExtension(filename: string) {
    const parts = filename.split('.');
    if (parts.length < 2) {
      return '';
    }

    return parts[parts.length - 1].toLowerCase();
  }

  private resolveAttachmentKind(extension: string): AttachmentKind | null {
    const normalized = extension.toLowerCase();
    const entries = Object.entries(ATTACHMENT_KIND_MAP) as [AttachmentKind, string[]][];

    for (const [kind, extensions] of entries) {
      if (extensions.includes(normalized)) {
        return kind;
      }
    }

    return null;
  }

  private buildAttachmentItem(file: File): { item?: AttachmentItem; error?: string } {
    if (file.size > MAX_ATTACHMENT_SIZE_BYTES) {
      return { error: `O arquivo ${file.name} excede 10 MB.` };
    }

    const extension = this.getFileExtension(file.name);
    const kind = this.resolveAttachmentKind(extension);
    if (!kind) {
      return { error: `Formato nao suportado: ${file.name}.` };
    }

    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : this.randomId(12);

    return {
      item: {
        id,
        file,
        name: file.name,
        typeLabel: ATTACHMENT_KIND_LABEL[kind],
        kind,
        previewUrl: kind === 'image' ? URL.createObjectURL(file) : undefined,
      },
    };
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

  private pendingResponseTo:
    | {
        messageId: string;
        requestText: string;
        requestToSend: string;
        quickResponse: boolean;
        consultantContext?: {
          branchId: string | null;
          branchLabel: string | null;
          questionId: string;
          questionLevel: string | null;
        } | null;
        isConsultantAgent?: boolean;
      }
    | null = null;

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

  private floatingButtonDragState: {
    pointerId: number;
    startY: number;
    startOffset: number;
    buttonHeight: number;
  } | null = null;

  private floatingButtonDragged = false;

  private suppressFloatingButtonClick = false;

  private markdownRenderer = new MarkdownIt({
    html: false,
    linkify: true,
    breaks: true,
  }).use(markdownItTaskLists);

  conversations: ConversationItem[] = [];

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
    this.clearLoadingGuard();
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

  private isSpeechRecognitionSupported() {
    return Boolean(
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition,
    );
  }

  handleFloatingButtonClick(event: Event) {
    if (this.suppressFloatingButtonClick) {
      event.preventDefault();
      return;
    }

    const willOpenMiniPanel = !this.open && !this.isFullscreen;
    this.togglePanel();

    if (this.autoStartConsultantFlow && willOpenMiniPanel && !this.hasActiveConversation) {
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

  toggleQuickResponse() {
    this.quickResponse = !this.quickResponse;
  }

  handleConsultantAgentOpen() {
    if (this.consultantAgentStage === 'awaiting') {
      return;
    }

    this.showSuggestions = false;
    this.consultantOptionsSuppressed = false;

    if (this.consultantAgentOptions.length === 0) {
      void this.bootstrapConsultantAgent();
    }

    const introMessage = this.createMessage(
      'assistant',
      this.consultantAgentInitialMessage.trim() || DEFAULT_CONSULTANT_AGENT_INITIAL_MESSAGE,
    );
    this.messages = [...this.messages, introMessage];
    this.consultantAgentStage = 'awaiting';
    this.activeConsultantPromptId = null;
    this.pendingConsultantFollowUpId = null;
    this.activeConsultantFollowUpId = null;

    void this.processMessage('Resumo da Frota', { suppressUserMessage: true });
  }

  handleConsultantAgentOption(option: ConsultantAgentOption) {
    const label = option.label.trim();
    if (!label) {
      return;
    }

    const questions =
      option.questions?.filter(
        (item) => item && typeof item.prompt === 'string' && typeof item.questionId === 'string',
      ) ?? [];

    if (this.messages.length === 0) {
      const introMessage = this.createMessage('assistant', this.consultantAgentIntro);
      this.messages = [...this.messages, introMessage];
    }

    const userMessage = this.createMessage('user', label);

    const followUpId = this.randomId(12);

    const followUpMessage = this.createMessage(
      'assistant',
      buildConsultantFollowUpText(label),
      {
        id: followUpId,
        topicId: option.branchId ?? option.id,
        topicLabel: label,
        questions,
      },
    );

    this.messages = [...this.messages, userMessage, followUpMessage];
    this.consultantAgentVisible = false;
    this.errorMessage = '';
    this.showNewConversationShortcut = true;
    this.showSuggestions = false;
    this.activeConsultantFollowUpId = followUpId;
    this.activeConsultantBranchId = option.branchId ?? option.id;
    this.activeConsultantPromptId = null;
    this.consultantOptionsSuppressed = false;
    this.pendingConsultantFollowUpId = null;
    this.lastConsultantFollowUpId = followUpId;
    this.lastConsultantFollowUpPayload = {
      topicId: option.branchId ?? option.id,
      topicLabel: label,
      questions,
    };
    this.requestUpdate();
    this.scrollConversationToBottom();
  }

  handleConsultantChooseAnotherSubject() {
    if (this.consultantOptionsSuppressed) {
      return;
    }

    const promptId = this.randomId(12);
    const promptMessage: ChatMessage = {
      ...this.createMessage('assistant', 'Em qual assunto posso ajudar você hoje?'),
      consultantPrompt: {
        id: promptId,
        text: 'Em qual assunto posso ajudar você hoje?',
        options: [...this.consultantAgentOptions],
      },
    };
    this.messages = [...this.messages, promptMessage];
    this.lastConsultantPromptId = promptId;
    this.activeConsultantPromptId = promptId;
    this.activeConsultantFollowUpId = null;
    this.pendingConsultantFollowUpId = null;
    this.activeConsultantBranchId = null;
    this.lastConsultantFollowUpId = null;
    this.lastConsultantFollowUpPayload = null;
    this.consultantAgentStage = 'ready';
    this.scrollConversationToBottom();
  }

  async handleConsultantFollowUpQuestion(question: ConsultantQuestion) {
    this.pendingConsultantFollowUpId =
      this.activeConsultantFollowUpId ?? this.lastConsultantFollowUpId;
    this.activeConsultantFollowUpId = null;

    const branchId = this.activeConsultantBranchId;
    const payload = {
      consultantContext: {
        branchId: branchId ?? null,
        branchLabel: this.lookupConsultantBranchLabel(branchId),
        questionId: question.questionId,
        questionLevel: question.level ?? null,
      },
      isConsultantAgent: true,
    };

    await this.processMessage(question.prompt, payload);
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

    let changed = false;
    this.conversations = this.conversations.map((conversation) => {
      if (conversation.id === id) {
        changed = true;
        return { ...conversation, title: newTitle };
      }
      return conversation;
    });

    if (!changed) {
      return;
    }

    if (this.currentConversationId === id) {
      this.activeConversationTitle = newTitle;
    }
  }

  applyConversationDeletion(id: string) {
    if (!id) {
      return;
    }

    const wasActive = this.currentConversationId === id;
    const next = this.conversations.filter((conversation) => conversation.id !== id);

    if (next.length === this.conversations.length) {
      return;
    }

    this.conversations = next;

    if (wasActive) {
      this.currentConversationId = null;
      this.activeConversationTitle = null;
      this.messages = [];
    }
  }

  private restoreConversationSnapshot(snapshot: ConversationItem | undefined, index: number) {
    if (!snapshot) {
      return;
    }

    const exists = this.conversations.some((conversation) => conversation.id === snapshot.id);
    if (exists) {
      return;
    }

    const next = [...this.conversations];
    const position = index >= 0 && index <= next.length ? index : next.length;
    next.splice(position, 0, snapshot);
    this.conversations = next;
  }

  async confirmDeleteConversation() {
    const target = this.deleteConversationTarget;
    if (!target) {
      return;
    }

    const snapshot =
      this.conversations[target.index] ??
      this.conversations.find((item) => item.id === target.id) ?? {
        id: target.id,
        title: target.title,
        updatedAt: new Date().toISOString(),
      };
    const isActive = this.currentConversationId === target.id;
    this.pendingConversationAction = {
      action: 'delete',
      conversationId: target.id,
      originalTitle: target.title,
      index: target.index,
      snapshot,
      messagesSnapshot: isActive ? [...this.messages] : undefined,
      wasActive: isActive,
    };

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

    this.pendingConversationAction = {
      action: 'rename',
      conversationId: target.id,
      originalTitle: target.title,
      index: target.index,
      newTitle,
    };

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

    const indexFromState =
      typeof errorState.index === 'number' ? errorState.index : this.conversations.findIndex(
        (item) => item.id === errorState.conversationId,
      );
    const safeIndex =
      indexFromState >= 0
        ? indexFromState
        : this.conversations.length > 0
          ? this.conversations.length - 1
          : 0;

    const snapshot =
      errorState.snapshot ??
      this.conversations.find((item) => item.id === errorState.conversationId) ?? {
        id: errorState.conversationId,
        title: errorState.originalTitle,
        updatedAt: new Date().toISOString(),
      };

    this.pendingConversationAction = {
      action: errorState.action,
      conversationId: errorState.conversationId,
      originalTitle: errorState.originalTitle,
      index: safeIndex,
      newTitle: errorState.newTitle,
      snapshot,
      messagesSnapshot: errorState.messagesSnapshot,
      wasActive: errorState.wasActive,
    };

    this.conversationActionError = null;

    await this.dispatchConversationAction(
      errorState.action,
      { id: errorState.conversationId, title: errorState.newTitle ?? errorState.originalTitle },
      safeIndex,
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
    const action = (message.action ?? '').toLowerCase();
    if (action === 'conversationrenamed') {
      const data = message.data as Record<string, unknown>;
      const id = this.repairConversationId(
        this.extractString(data, ['conversationId', 'id']) ?? '',
      );
      const newTitle = this.extractString(data, ['newTitle', 'title']);
      if (id && newTitle) {
        this.applyConversationRename(id, newTitle);
        this.conversationHistoryError = '';
        if (
          this.pendingConversationAction &&
          this.pendingConversationAction.conversationId === id &&
          this.pendingConversationAction.action === 'rename'
        ) {
          this.pendingConversationAction = null;
          this.conversationActionError = null;
        }
      }
      return true;
    }

    if (action === 'conversationdeleted') {
      const data = message.data as Record<string, unknown>;
      const id = this.repairConversationId(
        this.extractString(data, ['conversationId', 'id']) ?? '',
      );
      if (id) {
        this.applyConversationDeletion(id);
        this.conversationHistoryError = '';
        if (
          this.pendingConversationAction &&
          this.pendingConversationAction.conversationId === id &&
          this.pendingConversationAction.action === 'delete'
        ) {
          this.pendingConversationAction = null;
          this.conversationActionError = null;
        }
      }
      return true;
    }

    if (action === 'processing') {
      return true;
    }

    return false;
  }

  private handleConversationActionError(message: RioIncomingMessage) {
    const action = (message.action ?? '').toLowerCase();
    if (action !== 'error') {
      return false;
    }

    const data = message.data as Record<string, unknown>;
    console.error('[RioAssist][ws] erro em acao de conversa recebido do backend', {
      text: message.text,
      data,
      raw: message.raw,
    });
    const errorText =
      this.extractString(data, ['error', 'message', 'detail', 'description']) ||
      (typeof message.text === 'string' && message.text.trim()
        ? message.text
        : 'O agente retornou um erro ao processar a conversa.');

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
          this.messages = pending.messagesSnapshot ?? this.messages;
        }
      }

      this.conversationActionError = {
        ...pending,
        message: errorText,
      };
      this.pendingConversationAction = null;
      this.clearLoadingGuard();
      this.isLoading = false;
      return true;
    }

    this.errorMessage = errorText;
    this.clearLoadingGuard();
    this.isLoading = false;
    return true;
  }

  private shouldIgnoreAssistantPayload(action?: string) {
    if (!action) {
      return false;
    }
    const normalized = action.toLowerCase();
    return (
      normalized === 'processing' ||
      normalized === 'conversationrenamed' ||
      normalized === 'conversationdeleted'
    );
  }

  private extractString(
    data: Record<string, unknown> | undefined,
    keys: string[],
  ): string | null {
    if (!data || typeof data !== 'object') {
      return null;
    }
    for (const key of keys) {
      const value = data[key];
      if (typeof value === 'string' && value.trim()) {
        return value;
      }
    }
    return null;
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
    this.requestConversationHistory();
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

    if (this.autoStartConsultantFlow) {
      this.startNewConversation();
      this.handleConsultantAgentOpen();
      return;
    }

    this.newConversationConfirmOpen = true;
  }

  confirmCreateConversation() {
    if (!this.hasActiveConversation) {
      this.newConversationConfirmOpen = false;
      return;
    }

    this.newConversationConfirmOpen = false;

    this.startNewConversation();
  }

  cancelCreateConversation() {
    this.newConversationConfirmOpen = false;
  }

  private startNewConversation() {
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
    this.currentConversationId = null;
    this.activeConversationTitle = null;
    this.showNewConversationShortcut = false;
    this.showSuggestions = true;
    this.consultantAgentVisible = false;
    this.activeConsultantFollowUpId = null;
    this.activeConsultantBranchId = null;
    this.activeConsultantPromptId = null;
    this.consultantAgentStage = 'idle';
    this.consultantOptionsSuppressed = false;
    this.pendingConsultantFollowUpId = null;
    this.lastConsultantPromptId = null;
    this.lastConsultantFollowUpId = null;
    this.lastConsultantFollowUpPayload = null;
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

  private getAudioExtension(mimeType: string) {
    const normalized = mimeType.toLowerCase();
    if (normalized.includes('ogg')) {
      return 'ogg';
    }
    if (normalized.includes('mpeg') || normalized.includes('mp3')) {
      return 'mp3';
    }
    if (normalized.includes('wav')) {
      return 'wav';
    }
    if (normalized.includes('mp4') || normalized.includes('m4a')) {
      return 'm4a';
    }
    if (normalized.includes('webm')) {
      return 'webm';
    }
    return 'webm';
  }

  private createAudioFile(blob: Blob) {
    const extension = this.getAudioExtension(blob.type || 'audio/webm');
    const filename = `mensagem-voz-${Date.now()}.${extension}`;
    return new File([blob], filename, { type: blob.type || 'audio/webm' });
  }

  private clearVoiceRecorder() {
    this.voiceRecordingChunks = [];
    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
    if (this.voiceRecorder) {
      this.voiceRecorder.ondataavailable = null;
      this.voiceRecorder.onstop = null;
      this.voiceRecorder = null;
    }
  }

  private cleanupVoiceStream() {
    if (this.voiceRecordingStream) {
      this.voiceRecordingStream.getTracks().forEach((track) => track.stop());
      this.voiceRecordingStream = null;
    }
  }

  private teardownVoiceRecording() {
    if (this.voiceRecorder && this.voiceRecorder.state !== 'inactive') {
      this.voiceRecorder.stop();
    }
    this.stopSpeechRecognition();
    this.cleanupVoiceStream();
    this.clearVoiceRecorder();
    this.isRecording = false;
    this.isRecordingPaused = false;
  }

  private async requestMicrophoneStream() {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
      this.errorMessage = 'Seu navegador nao suporta gravacao de audio.';
      return null;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      this.microphonePermissionGranted = true;
      return stream;
    } catch (error) {
      this.microphonePermissionGranted = false;
      console.error('[RioAssist][voice] erro ao acessar microfone', error);
      this.errorMessage = 'Nao foi possivel acessar o microfone.';
      return null;
    }
  }

  private createVoiceRecorder(stream: MediaStream) {
    const candidates = [
      'audio/webm;codecs=opus',
      'audio/webm',
      'audio/ogg;codecs=opus',
      'audio/ogg',
      'audio/mp4',
    ];
    const supported = candidates.find((type) =>
      typeof MediaRecorder !== 'undefined' && MediaRecorder.isTypeSupported(type),
    );

    return supported ? new MediaRecorder(stream, { mimeType: supported }) : new MediaRecorder(stream);
  }

  private startSpeechRecognition() {
    const SpeechRecognitionCtor =
      (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SpeechRecognitionCtor) {
      this.speechRecognitionAvailable = false;
      return;
    }

    this.stopSpeechRecognition();
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = 'pt-BR';
    recognition.continuous = true;
    recognition.interimResults = true;
    recognition.onresult = (event: any) => {
      let interim = '';
      for (let i = event.resultIndex; i < event.results.length; i += 1) {
        const result = event.results[i];
        const transcript = result[0]?.transcript ?? '';
        if (result.isFinal) {
          this.voiceTranscriptSegments.push(transcript.trim());
        } else {
          interim += transcript;
        }
      }
      this.voiceTranscriptPreview = [...this.voiceTranscriptSegments, interim.trim()]
        .filter(Boolean)
        .join(' ')
        .trim();
      if (this.voiceTranscriptPreview) {
        console.info('[RioAssist][voice] transcricao parcial', this.voiceTranscriptPreview);
      }
    };
    recognition.onstart = () => {
      console.info('[RioAssist][voice] reconhecimento iniciado');
    };
    recognition.onaudiostart = () => {
      console.info('[RioAssist][voice] audio captado (inicio)');
    };
    recognition.onaudioend = () => {
      console.info('[RioAssist][voice] audio captado (fim)');
    };
    recognition.onsoundstart = () => {
      console.info('[RioAssist][voice] som detectado');
    };
    recognition.onsoundend = () => {
      console.info('[RioAssist][voice] som terminou');
    };
    recognition.onspeechstart = () => {
      console.info('[RioAssist][voice] fala detectada');
    };
    recognition.onspeechend = () => {
      console.info('[RioAssist][voice] fala terminou');
    };
    recognition.onnomatch = (event: any) => {
      console.warn('[RioAssist][voice] fala nao reconhecida', event);
    };
    recognition.onend = () => {
      console.info('[RioAssist][voice] reconhecimento encerrado', {
        isRecording: this.isRecording,
        isRecordingPaused: this.isRecordingPaused,
      });
      if (this.isRecording && !this.isRecordingPaused) {
        try {
          recognition.start();
        } catch (error) {
          console.warn('[RioAssist][voice] falha ao reiniciar reconhecimento', error);
        }
      }
    };
    recognition.onerror = (event: any) => {
      const error = (event && event.error) || '';
      console.error('[RioAssist][voice] erro no reconhecimento de voz', {
        error,
        message: event?.message ?? null,
        event,
      });
      if (
        error === 'not-allowed' ||
        error === 'service-not-allowed' ||
        error === 'not-supported'
      ) {
        this.speechRecognitionAvailable = false;
      }
    };
    try {
      recognition.start();
      this.speechRecognizer = recognition;
      this.speechRecognitionAvailable = true;
    } catch (error) {
      console.warn('[RioAssist][voice] nao foi possivel iniciar reconhecimento', error);
      this.speechRecognizer = null;
      this.speechRecognitionAvailable = false;
    }
  }

  private stopSpeechRecognition() {
    if (!this.speechRecognizer) {
      return;
    }

    try {
      this.speechRecognizer.onresult = null;
      this.speechRecognizer.onerror = null;
      this.speechRecognizer.onend = null;
      this.speechRecognizer.stop();
    } catch (error) {
      console.warn('[RioAssist][voice] erro ao interromper reconhecimento', error);
    }
    this.speechRecognizer = null;
  }

  private stopVoiceRecorder() {
    return new Promise<Blob | null>((resolve) => {
      const recorder = this.voiceRecorder;
      if (!recorder) {
        resolve(null);
        return;
      }

      const finalize = () => {
        recorder.removeEventListener('stop', finalize);
        const mimeType = recorder.mimeType || 'audio/webm';
        const blob =
          this.voiceRecordingChunks.length > 0
            ? new Blob(this.voiceRecordingChunks, { type: mimeType })
            : null;
        resolve(blob);
      };

      recorder.addEventListener('stop', finalize);
      if (recorder.state !== 'inactive') {
        recorder.stop();
      } else {
        finalize();
      }
    });
  }

  private addVoiceAttachment(blob: Blob) {
    if (!blob || blob.size === 0) {
      return;
    }
    if (this.isAttachmentLimitReached) {
      this.attachmentError = 'Voce pode anexar no maximo 3 arquivos.';
      return;
    }

    const file = this.createAudioFile(blob);
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : this.randomId(12);

    const transcript = this.voiceTranscriptSegments.join(' ').trim() || this.voiceTranscriptPreview;

    const item: AttachmentItem = {
      id,
      file,
      name: file.name,
      typeLabel: ATTACHMENT_KIND_LABEL.audio,
      kind: 'audio',
    };

    this.selectedFiles = [...this.selectedFiles, item];
    this.voiceAttachmentId = id;
    this.voiceTranscript = transcript.trim();
    this.attachmentError = '';
  }

  async handleVoiceButtonClick() {
    if (this.isVoiceButtonDisabled) {
      return;
    }

    const stream = await this.requestMicrophoneStream();
    if (!stream) {
      return;
    }

    this.voiceRecordingStream = stream;
    this.voiceRecordingChunks = [];
    this.voiceTranscriptSegments = [];
    this.voiceTranscriptPreview = '';
    this.voiceTranscript = '';

    const recorder = this.createVoiceRecorder(stream);
    this.voiceRecorder = recorder;
    recorder.ondataavailable = (event) => {
      if (event.data && event.data.size > 0) {
        this.voiceRecordingChunks.push(event.data);
      }
    };
    recorder.onstop = () => {
      this.cleanupVoiceStream();
    };

    recorder.start();
    this.isRecording = true;
    this.isRecordingPaused = false;
    this.startSpeechRecognition();
  }

  private pauseVoiceRecording() {
    if (!this.voiceRecorder || !this.isRecording || this.isRecordingPaused) {
      return;
    }

    if (this.voiceRecorder.state === 'recording') {
      this.voiceRecorder.pause();
    }
    this.isRecordingPaused = true;
    this.stopSpeechRecognition();
  }

  private resumeVoiceRecording() {
    if (!this.voiceRecorder || !this.isRecording || !this.isRecordingPaused) {
      return;
    }

    if (this.voiceRecorder.state === 'paused') {
      this.voiceRecorder.resume();
    }
    this.isRecordingPaused = false;
    this.startSpeechRecognition();
  }

  handleVoiceCancelClick() {
    if (!this.isRecording) {
      return;
    }

    this.pauseVoiceRecording();
    this.voiceCancelDialogMode = 'cancel';
    this.pendingVoiceRemovalId = null;
    this.voiceCancelDialogOpen = true;
  }

  async handleVoiceConfirmClick() {
    if (!this.isRecording) {
      return;
    }

    this.isRecording = false;
    this.isRecordingPaused = false;
    this.voiceCancelDialogOpen = false;
    this.stopSpeechRecognition();
    const blob = await this.stopVoiceRecorder();
    this.cleanupVoiceStream();
    if (blob) {
      this.addVoiceAttachment(blob);
    }
    this.clearVoiceRecorder();
  }

  private async discardVoiceRecording() {
    this.isRecording = false;
    this.isRecordingPaused = false;
    this.voiceCancelDialogOpen = false;
    this.stopSpeechRecognition();
    await this.stopVoiceRecorder();
    this.cleanupVoiceStream();
    this.clearVoiceRecorder();
    this.voiceTranscript = '';
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

    const next = [...this.selectedFiles];
    let error = '';

    for (const file of files) {
      if (next.length >= MAX_ATTACHMENT_COUNT) {
        error = 'Voce pode anexar no maximo 3 arquivos.';
        break;
      }

      const { item, error: itemError } = this.buildAttachmentItem(file);
      if (itemError) {
        error = itemError;
        continue;
      }

      if (item) {
        next.push(item);
      }
    }

    this.selectedFiles = next;
    this.attachmentError = error;

    previousFiles.forEach((item) => {
      if (item.previewUrl && !this.selectedFiles.find((entry) => entry.id === item.id)) {
        URL.revokeObjectURL(item.previewUrl);
      }
    });
  }

  handleAttachmentRemove(id: string) {
    const removed = this.selectedFiles.find((item) => item.id === id);
    if (removed?.kind === 'audio') {
      this.handleVoiceAttachmentRemove(id);
      return;
    }
    this.selectedFiles = this.selectedFiles.filter((item) => item.id !== id);
    if (removed?.previewUrl) {
      URL.revokeObjectURL(removed.previewUrl);
    }
    if (this.selectedFiles.length === 0) {
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

    this.consultantOptionsSuppressed = true;
    this.activeConsultantFollowUpId = null;
    this.activeConsultantPromptId = null;
    this.pendingConsultantFollowUpId = null;
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
    const id = typeof crypto !== 'undefined' && 'randomUUID' in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random()}`;

    return {
      id,
      role,
      text,
      html: this.renderMarkdown(text),
      timestamp: Date.now(),
      request: options?.request,
      responseTo: options?.responseTo,
      hidden: options?.hidden,
      consultantFollowUp,
    };
  }

  private async processMessage(
    rawValue: string,
    options: {
      consultantContext?: {
        branchId: string | null;
        branchLabel: string | null;
        questionId: string;
        questionLevel: string | null;
      } | null;
      isConsultantAgent?: boolean;
      suppressUserMessage?: boolean;
      responseToMessageId?: string;
      forcePayload?: {
        contentToSend: string;
        contentToDisplay: string;
        quickResponse: boolean;
      };
      attachments?: AttachmentItem[];
    } | null = null,
  ) {
    const content = rawValue.trim();
    if (!content || this.isLoading) {
      return;
    }

    const quickResponse = options?.forcePayload?.quickResponse ?? this.quickResponse;
    const contentToSend = options?.forcePayload?.contentToSend ?? content;
    const contentToDisplay = options?.forcePayload?.contentToDisplay ?? content;

    if (!this.currentConversationId) {
      this.currentConversationId = null;
      this.activeConversationTitle = null;
    }

    const wasEmptyConversation = this.messages.length === 0;

    this.dispatchEvent(
      new CustomEvent('rioassist:send', {
        detail: {
          message: content,
          apiBaseUrl: this.apiBaseUrl,
          hasToken: Boolean(this.rioToken.trim()),
          tokenPreview: this.getTokenPreview(this.rioToken),
          consultantContext: options?.consultantContext ?? null,
          isConsultantAgent: options?.isConsultantAgent ?? false,
          quickResponse,
          attachments: options?.attachments?.map((item) => item.file) ?? [],
        },
        bubbles: true,
        composed: true,
      }),
    );

    const requestPayload: ChatMessage['request'] = {
      text: contentToDisplay,
      toSend: contentToSend,
      quickResponse,
      consultantContext: options?.consultantContext ?? null,
      isConsultantAgent: options?.isConsultantAgent ?? false,
    };

    if (!options?.suppressUserMessage) {
      const userMessage = this.createMessage('user', contentToDisplay, undefined, {
        request: requestPayload,
      });
      this.messages = [...this.messages, userMessage];
      this.pendingResponseTo = {
        messageId: userMessage.id,
        requestText: requestPayload.text,
        requestToSend: requestPayload.toSend,
        quickResponse: requestPayload.quickResponse,
        consultantContext: requestPayload.consultantContext ?? null,
        isConsultantAgent: requestPayload.isConsultantAgent ?? false,
      };
    } else {
      this.pendingResponseTo = {
        messageId: options?.responseToMessageId ?? 'resend',
        requestText: requestPayload.text,
        requestToSend: requestPayload.toSend,
        quickResponse: requestPayload.quickResponse,
        consultantContext: requestPayload.consultantContext ?? null,
        isConsultantAgent: requestPayload.isConsultantAgent ?? false,
      };
    }
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
      const extraPayload = {
        quickResponse,
        ...(options && (options.consultantContext || options.isConsultantAgent)
          ? {
              isConsultantAgent: Boolean(options.isConsultantAgent),
              consultantContext: options.consultantContext ?? null,
            }
          : {}),
      };
      await client.sendMessage(contentToSend, this.currentConversationId, extraPayload);
      if (options?.attachments?.length) {
        const hadVoice =
          this.voiceAttachmentId &&
          options.attachments.some((item) => item.id === this.voiceAttachmentId);
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

    if (this.shouldIgnoreAssistantPayload(message.action)) {
      return;
    }

    const incomingConversationId = this.extractConversationId(message.data);
    const incomingConversationTitle = typeof (message.data as any)?.conversationTitle === 'string'
      ? (message.data as any).conversationTitle.trim()
      : '';
    if (incomingConversationId) {
      const existingIndex = this.conversations.findIndex(
        (conv) => conv.id === incomingConversationId,
      );
      // Check if this is a NEW conversation that's not in the sidebar yet
      const isNewConversation = existingIndex === -1;

      if (incomingConversationTitle) {
        const updatedAt = new Date().toISOString();
        if (isNewConversation) {
          this.conversations = [
            { id: incomingConversationId, title: incomingConversationTitle, updatedAt },
            ...this.conversations,
          ];
        } else {
          const existing = this.conversations[existingIndex];
          const next = [...this.conversations];
          next.splice(existingIndex, 1);
          next.unshift({
            ...existing,
            title: incomingConversationTitle,
            updatedAt,
          });
          this.conversations = next;
        }
        this.activeConversationTitle = incomingConversationTitle;
      }
      if (isNewConversation) {
        // Force refresh of conversation list for brand new conversations
        this.refreshConversationsAfterResponse = false;
        console.info('[RioAssist][ws] nova conversa detectada, atualizando lista', {
          conversationId: incomingConversationId,
        });
        await this.requestConversationHistory();
      }
      this.currentConversationId = incomingConversationId;
      this.syncActiveConversationTitle();
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

    const responseTo = this.pendingResponseTo
      ? {
          messageId: this.pendingResponseTo.messageId,
          requestText: this.pendingResponseTo.requestText,
          requestToSend: this.pendingResponseTo.requestToSend,
          quickResponse: this.pendingResponseTo.quickResponse,
          consultantContext: this.pendingResponseTo.consultantContext ?? null,
          isConsultantAgent: this.pendingResponseTo.isConsultantAgent ?? false,
        }
      : undefined;
    const assistantMessage = this.createMessage('assistant', message.text, undefined, {
      responseTo,
    });
    this.messages = [...this.messages, assistantMessage];
    this.pendingResponseTo = null;
    this.clearLoadingGuard();
    this.isLoading = false;

    if (this.consultantAgentStage === 'awaiting') {
      const promptId = this.randomId(12);
      const promptMessage: ChatMessage = {
        ...this.createMessage('assistant', 'Em qual assunto posso ajudar você hoje?'),
        consultantPrompt: {
          id: promptId,
          text: 'Em qual assunto posso ajudar você hoje?',
          options: [...this.consultantAgentOptions],
        },
      };
      this.messages = [...this.messages, promptMessage];
      this.consultantAgentStage = 'ready';
      this.activeConsultantPromptId = promptId;
      this.lastConsultantPromptId = promptId;
    }

    if (
      !this.consultantOptionsSuppressed &&
      this.lastConsultantFollowUpPayload &&
      (this.pendingConsultantFollowUpId || this.lastConsultantFollowUpId)
    ) {
      const followUpId = this.randomId(12);
      const followUpMessage = this.createMessage(
        'assistant',
        buildConsultantFollowUpText(this.lastConsultantFollowUpPayload.topicLabel),
        {
          id: followUpId,
          topicId: this.lastConsultantFollowUpPayload.topicId,
          topicLabel: this.lastConsultantFollowUpPayload.topicLabel,
          questions: this.lastConsultantFollowUpPayload.questions,
        },
      );

      this.messages = [...this.messages, followUpMessage];
      this.activeConsultantFollowUpId = followUpId;
      this.pendingConsultantFollowUpId = null;
      this.lastConsultantFollowUpId = followUpId;
    }

    // BUGFIX 2026-01-12: Adicionar await para evitar race condition
    // Sem await, a flag era resetada antes da resposta chegar,
    // fazendo novas conversas não aparecerem na lista
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
      this.conversationHistoryError = '';
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

      const rawId =
        (entry as Record<string, unknown>).conversationId ??
        (entry as Record<string, unknown>).conversationUUID ??
        (entry as Record<string, unknown>).conversationUuid ??
        (entry as Record<string, unknown>).uuid ??
        (entry as Record<string, unknown>).id;
      if (rawId) {
        console.info('[RioAssist][history] conversa recebida do backend', {
          rawId,
          normalizedId: normalized?.id ?? null,
          entry,
        });
      }

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
    this.conversationHistoryError = '';
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
          return this.repairConversationId(String(candidate));
        }
      }
    }

    return undefined;
  }

  private isMessageHistoryEntries(entries: unknown[]) {
    return entries.some((entry) => this.looksLikeMessageHistoryEntry(entry));
  }

  private looksLikeMessageHistoryEntry(entry: unknown) {
    return isMessageHistoryEntry(entry);
  }

  private normalizeConversationItem(
    value: Record<string, unknown>,
    index: number,
  ): ConversationItem | null {
    const rawId =
      value.conversationId ??
      value.conversationUUID ??
      value.conversationUuid ??
      value.uuid ??
      value.id;

    const idRaw = rawId !== undefined && rawId !== null ? String(rawId) : `history-${index + 1}`;
    const id = this.repairConversationId(idRaw);

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
      // Se não tiver resposta, não exibimos a mensagem do usuário isolada.
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
    return normalizeHistoryRole(value);
  }

  private parseTimestamp(value: unknown, fallback?: number) {
    return parseHistoryTimestamp(value, fallback);
  }

  private lookupConversationTitle(conversationId: string | null) {
    if (!conversationId) {
      return null;
    }

    const found = this.conversations.find((item) => item.id === conversationId);
    return found ? found.title : null;
  }

  private lookupConsultantBranchLabel(branchId: string | null): string | null {
    if (!branchId) {
      return null;
    }

    const found = this.consultantAgentOptions.find(
      (item) => item.branchId === branchId || item.id === branchId,
    );

    return found ? found.label : null;
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
    return toHistoryIsoString(value);
  }

  private startLoadingGuard() {
    this.clearLoadingGuard();
    this.loadingLabelInternal = 'UptAIme Assist está respondendo';

    // Após 20s, mensagem de processamento prolongado.
    this.loadingTimerSlow = window.setTimeout(() => {
      this.loadingLabelInternal = 'UptAIme Assist continua respondendo';
      this.requestUpdate();
    }, 20000);

    // Após 60s, aviso de demora maior.
    this.loadingTimerLong = window.setTimeout(() => {
      this.loadingLabelInternal =
        'UptAIme Assist ainda está processando sua resposta. Peço que aguarde um pouco mais';
      this.requestUpdate();
    }, 60000);

    // Após 120s, novo aviso de demora maior.
    this.loadingTimerVeryLong = window.setTimeout(() => {
      this.loadingLabelInternal =
        'Essa solicitação está demorando um pouco mais que o esperado. Pode favor, aguarde mais um pouco';
      this.requestUpdate();
    }, 120000);
  }

  private clearLoadingGuard() {
    if (this.loadingTimerSlow !== null) {
      window.clearTimeout(this.loadingTimerSlow);
      this.loadingTimerSlow = null;
    }

    if (this.loadingTimerLong !== null) {
      window.clearTimeout(this.loadingTimerLong);
      this.loadingTimerLong = null;
    }

    if (this.loadingTimerVeryLong !== null) {
      window.clearTimeout(this.loadingTimerVeryLong);
      this.loadingTimerVeryLong = null;
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

