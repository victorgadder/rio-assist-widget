import type {
  ChatMessage,
  ChatMessageRequest,
  ChatMessageResponseTo,
  ChatRole,
  ConsultantContext,
  PendingResponseState,
} from '../domain/chat';
import type { ConversationItem } from '../domain/conversation';

type CreateMessageInput = {
  role: ChatRole;
  text: string;
  consultantFollowUp?: ChatMessage['consultantFollowUp'];
  request?: ChatMessageRequest;
  responseTo?: ChatMessageResponseTo;
  hidden?: boolean;
};

export type OutgoingMessageOptions<TAttachment> = {
  consultantContext?: ConsultantContext | null;
  isConsultantAgent?: boolean;
  suppressUserMessage?: boolean;
  responseToMessageId?: string;
  forcePayload?: {
    contentToSend: string;
    contentToDisplay: string;
    quickResponse: boolean;
  };
  attachments?: TAttachment[];
};

export type PrepareOutgoingMessageInput<TAttachment> = {
  rawValue: string;
  isLoading: boolean;
  quickResponse: boolean;
  hasMessages: boolean;
  options?: OutgoingMessageOptions<TAttachment> | null;
  createMessage: (input: CreateMessageInput) => ChatMessage;
};

export type PrepareOutgoingMessageResult<TAttachment> = {
  content: string;
  contentToSend: string;
  contentToDisplay: string;
  requestPayload: ChatMessageRequest;
  pendingResponse: PendingResponseState;
  userMessage?: ChatMessage;
  shouldRefreshConversations: boolean;
  attachments: TAttachment[];
};

export function prepareOutgoingMessage<TAttachment>(
  input: PrepareOutgoingMessageInput<TAttachment>,
): PrepareOutgoingMessageResult<TAttachment> | null {
  const content = input.rawValue.trim();
  if (!content || input.isLoading) {
    return null;
  }

  const quickResponse = input.options?.forcePayload?.quickResponse ?? input.quickResponse;
  const contentToSend = input.options?.forcePayload?.contentToSend ?? content;
  const contentToDisplay = input.options?.forcePayload?.contentToDisplay ?? content;

  const requestPayload: ChatMessageRequest = {
    text: contentToDisplay,
    toSend: contentToSend,
    quickResponse,
    consultantContext: input.options?.consultantContext ?? null,
    isConsultantAgent: input.options?.isConsultantAgent ?? false,
  };

  const attachments = input.options?.attachments ?? [];

  if (!input.options?.suppressUserMessage) {
    const userMessage = input.createMessage({
      role: 'user',
      text: contentToDisplay,
      request: requestPayload,
    });

    return {
      content,
      contentToSend,
      contentToDisplay,
      requestPayload,
      pendingResponse: {
        messageId: userMessage.id,
        requestText: requestPayload.text,
        requestToSend: requestPayload.toSend,
        quickResponse: requestPayload.quickResponse,
        consultantContext: requestPayload.consultantContext ?? null,
        isConsultantAgent: requestPayload.isConsultantAgent ?? false,
      },
      userMessage,
      shouldRefreshConversations: !input.hasMessages,
      attachments,
    };
  }

  return {
    content,
    contentToSend,
    contentToDisplay,
    requestPayload,
    pendingResponse: {
      messageId: input.options?.responseToMessageId ?? 'resend',
      requestText: requestPayload.text,
      requestToSend: requestPayload.toSend,
      quickResponse: requestPayload.quickResponse,
      consultantContext: requestPayload.consultantContext ?? null,
      isConsultantAgent: requestPayload.isConsultantAgent ?? false,
    },
    shouldRefreshConversations: !input.hasMessages,
    attachments,
  };
}

export function buildWebsocketExtraPayload(
  request: ChatMessageRequest,
): Record<string, unknown> {
  return {
    quickResponse: request.quickResponse,
    ...(request.consultantContext || request.isConsultantAgent
      ? {
          isConsultantAgent: Boolean(request.isConsultantAgent),
          consultantContext: request.consultantContext ?? null,
        }
      : {}),
  };
}

export function createChatMessageFactory(deps: {
  createId: () => string;
  now: () => number;
  renderHtml: (content: string) => string;
}) {
  return (input: CreateMessageInput): ChatMessage => ({
    id: deps.createId(),
    role: input.role,
    text: input.text,
    html: deps.renderHtml(input.text),
    timestamp: deps.now(),
    request: input.request,
    responseTo: input.responseTo,
    hidden: input.hidden,
    consultantFollowUp: input.consultantFollowUp,
  });
}

export function createAssistantResponseMessage(input: {
  text: string;
  pendingResponse: PendingResponseState | null;
  createMessage: (input: CreateMessageInput) => ChatMessage;
}) {
  return input.createMessage({
    role: 'assistant',
    text: input.text,
    responseTo: input.pendingResponse ?? undefined,
  });
}

export function syncConversationFromIncomingMessage(input: {
  conversations: ConversationItem[];
  incomingConversationId: string | null | undefined;
  incomingConversationTitle: string;
  nowIsoString: string;
}) {
  const { incomingConversationId, incomingConversationTitle } = input;
  if (!incomingConversationId) {
    return {
      conversations: input.conversations,
      activeConversationTitle: null,
      activeConversationUpdatedAt: null,
      isNewConversation: false,
    };
  }

  const existingIndex = input.conversations.findIndex(
    (conversation) => conversation.id === incomingConversationId,
  );
  const isNewConversation = existingIndex === -1;
  let conversations = input.conversations;
  let activeConversationTitle: string | null = null;
  let activeConversationUpdatedAt: string | null = null;

  if (incomingConversationTitle) {
    activeConversationTitle = incomingConversationTitle;
    activeConversationUpdatedAt = input.nowIsoString;

    if (isNewConversation) {
      conversations = [
        { id: incomingConversationId, title: incomingConversationTitle, updatedAt: input.nowIsoString },
        ...input.conversations,
      ];
    } else {
      const existing = input.conversations[existingIndex];
      const next = [...input.conversations];
      next.splice(existingIndex, 1);
      next.unshift({
        ...existing,
        title: incomingConversationTitle,
        updatedAt: input.nowIsoString,
      });
      conversations = next;
    }
  }

  return {
    conversations,
    activeConversationTitle,
    activeConversationUpdatedAt,
    isNewConversation,
  };
}
