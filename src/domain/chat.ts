import type {
  ConsultantAgentOption,
  ConsultantQuestion,
} from './consultant';

export type ChatRole = 'user' | 'assistant';

export type ConsultantContext = {
  branchId: string | null;
  branchLabel: string | null;
  questionId: string;
  questionLevel: string | null;
};

export type ChatMessageRequest = {
  text: string;
  toSend: string;
  quickResponse: boolean;
  consultantContext?: ConsultantContext | null;
  isConsultantAgent?: boolean;
};

export type ChatMessageResponseTo = {
  messageId: string;
  requestText: string;
  requestToSend: string;
  quickResponse: boolean;
  consultantContext?: ConsultantContext | null;
  isConsultantAgent?: boolean;
};

export type ChatMessage = {
  id: string;
  role: ChatRole;
  text: string;
  html?: string;
  timestamp: number;
  request?: ChatMessageRequest;
  responseTo?: ChatMessageResponseTo;
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

export type PendingResponseState = ChatMessageResponseTo;
