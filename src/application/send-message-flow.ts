import {
  buildWebsocketExtraPayload,
  prepareOutgoingMessage,
  type OutgoingMessageOptions,
} from './chat-flow';
import {
  applyOutgoingAttachmentCleanup,
  applyPreparedOutgoingMessageError,
  applyPreparedOutgoingMessageState,
  createSendEventDetail,
} from './outgoing-message-ui-flow';
import type { AttachmentItem } from '../domain/attachment';
import type { ChatMessage } from '../domain/chat';

export function prepareSendMessage(input: {
  rawValue: string;
  isLoading: boolean;
  quickResponse: boolean;
  hasMessages: boolean;
  messages: ChatMessage[];
  apiBaseUrl: string;
  hasToken: boolean;
  tokenPreview: string | null;
  options?: OutgoingMessageOptions<AttachmentItem> | null;
  createMessage: (input: {
    role: 'user' | 'assistant';
    text: string;
    consultantFollowUp?: ChatMessage['consultantFollowUp'];
    request?: ChatMessage['request'];
    responseTo?: ChatMessage['responseTo'];
    hidden?: boolean;
  }) => ChatMessage;
}) {
  const prepared = prepareOutgoingMessage({
    rawValue: input.rawValue,
    isLoading: input.isLoading,
    quickResponse: input.quickResponse,
    hasMessages: input.hasMessages,
    options: input.options,
    createMessage: input.createMessage,
  });

  if (!prepared) {
    return null;
  }

  return {
    prepared,
    sendEventDetail: createSendEventDetail({
      content: prepared.content,
      apiBaseUrl: input.apiBaseUrl,
      hasToken: input.hasToken,
      tokenPreview: input.tokenPreview,
      consultantContext: input.options?.consultantContext ?? null,
      isConsultantAgent: input.options?.isConsultantAgent ?? false,
      quickResponse: prepared.requestPayload.quickResponse,
      attachments: prepared.attachments,
    }),
    uiState: applyPreparedOutgoingMessageState({
      messages: input.messages,
      prepared,
    }),
    websocketExtraPayload: buildWebsocketExtraPayload(prepared.requestPayload),
    resetConversationMeta: true,
  };
}

export function buildSendMessageCleanup(input: {
  selectedFiles: AttachmentItem[];
  sentAttachments: AttachmentItem[];
  voiceAttachmentId: string | null;
}) {
  return applyOutgoingAttachmentCleanup(input);
}

export function buildSendMessageErrorState(error: unknown) {
  return applyPreparedOutgoingMessageError(
    error instanceof Error
      ? error.message
      : 'Nao foi possivel enviar a mensagem para o agente.',
  );
}
