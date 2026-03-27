import type { AttachmentItem } from '../domain/attachment';
import type { ChatMessage, PendingResponseState } from '../domain/chat';

export function createSendEventDetail(input: {
  content: string;
  apiBaseUrl: string;
  tokenPreview: string | null;
  hasToken: boolean;
  consultantContext: unknown;
  isConsultantAgent: boolean;
  quickResponse: boolean;
  attachments: AttachmentItem[];
}) {
  return {
    message: input.content,
    apiBaseUrl: input.apiBaseUrl,
    hasToken: input.hasToken,
    tokenPreview: input.tokenPreview,
    consultantContext: input.consultantContext,
    isConsultantAgent: input.isConsultantAgent,
    quickResponse: input.quickResponse,
    attachments: input.attachments.map((item) => item.file),
  };
}

export function applyPreparedOutgoingMessageState(input: {
  messages: ChatMessage[];
  prepared: {
    userMessage?: ChatMessage;
    pendingResponse: PendingResponseState;
    shouldRefreshConversations: boolean;
  };
}) {
  return {
    messages: input.prepared.userMessage
      ? [...input.messages, input.prepared.userMessage]
      : input.messages,
    pendingResponseTo: input.prepared.pendingResponse,
    showNewConversationShortcut: input.prepared.shouldRefreshConversations,
    refreshConversationsAfterResponse: input.prepared.shouldRefreshConversations,
    message: '',
    errorMessage: '',
    isLoading: true,
  };
}

export function applyPreparedOutgoingMessageError(message: string) {
  return {
    pendingResponseTo: null,
    isLoading: false,
    errorMessage: message,
  };
}

export function applyOutgoingAttachmentCleanup(input: {
  selectedFiles: AttachmentItem[];
  sentAttachments: AttachmentItem[];
  voiceAttachmentId: string | null;
}) {
  const hadVoice =
    input.voiceAttachmentId &&
    input.sentAttachments.some((item) => item.id === input.voiceAttachmentId);

  return {
    shouldRevokePreviewUrls: input.selectedFiles
      .filter((item) => Boolean(item.previewUrl))
      .map((item) => item.previewUrl as string),
    selectedFiles: [] as AttachmentItem[],
    attachmentError: '',
    voiceAttachmentId: hadVoice ? null : input.voiceAttachmentId,
    voiceTranscript: hadVoice ? '' : undefined,
  };
}
