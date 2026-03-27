import {
  prepareConsultantQuestionSend,
  reopenConsultantPrompt,
  selectConsultantSubject,
  startConsultantFlow,
  type ConsultantFlowState,
} from '../../application/consultant-flow';
import type { ChatMessage } from '../../domain/chat';
import type { ConsultantAgentOption, ConsultantQuestion } from '../../domain/consultant';

export type ConsultantHost = {
  consultantAgentOptions: ConsultantAgentOption[];
  consultantAgentInitialMessage: string;
  consultantAgentIntro: string;
  messages: ChatMessage[];
  errorMessage: string;
  showNewConversationShortcut: boolean;
  getConsultantFlowState: () => ConsultantFlowState;
  applyConsultantFlowState: (state: ConsultantFlowState) => void;
  createMessage: (
    role: 'user' | 'assistant',
    text: string,
    consultantFollowUp?: ChatMessage['consultantFollowUp'],
    options?: {
      request?: ChatMessage['request'];
      responseTo?: ChatMessage['responseTo'];
      hidden?: boolean;
    },
  ) => ChatMessage;
  processMessage: (rawValue: string, options?: any) => Promise<void>;
  randomId: (length: number) => string;
  bootstrapConsultantAgent: () => Promise<void>;
  requestUpdate: () => void;
  scrollConversationToBottom: () => void;
};

export function handleConsultantAgentOpen(
  host: ConsultantHost,
  defaultInitialMessage: string,
) {
  const result = startConsultantFlow({
    state: host.getConsultantFlowState(),
    consultantAgentOptions: host.consultantAgentOptions,
    consultantAgentInitialMessage: host.consultantAgentInitialMessage,
    defaultInitialMessage,
    createMessage: (role, text, consultantFollowUp, options) =>
      host.createMessage(role, text, consultantFollowUp, options),
  });

  if (!result) {
    return;
  }

  if (result.shouldBootstrapOptions) {
    void host.bootstrapConsultantAgent();
  }

  host.messages = [...host.messages, result.introMessage];
  host.applyConsultantFlowState(result.state);
  void host.processMessage(result.initialPrompt, { suppressUserMessage: true });
}

export function handleConsultantAgentOption(host: ConsultantHost, option: ConsultantAgentOption) {
  const result = selectConsultantSubject({
    option,
    hasMessages: host.messages.length > 0,
    consultantAgentIntro: host.consultantAgentIntro,
    createMessage: (role, text, consultantFollowUp, options) =>
      host.createMessage(role, text, consultantFollowUp, options),
    createId: (length) => host.randomId(length),
    state: host.getConsultantFlowState(),
  });

  if (!result) {
    return;
  }

  host.messages = [...host.messages, ...result.messages];
  host.applyConsultantFlowState(result.state);
  host.errorMessage = '';
  host.showNewConversationShortcut = true;
  host.requestUpdate();
  host.scrollConversationToBottom();
}

export function handleConsultantChooseAnotherSubject(host: ConsultantHost) {
  const result = reopenConsultantPrompt({
    state: host.getConsultantFlowState(),
    consultantAgentOptions: host.consultantAgentOptions,
    createMessage: (role, text, consultantFollowUp, options) =>
      host.createMessage(role, text, consultantFollowUp, options),
    createId: (length) => host.randomId(length),
  });
  if (!result) {
    return;
  }

  host.messages = [...host.messages, result.promptMessage];
  host.applyConsultantFlowState(result.state);
  host.scrollConversationToBottom();
}

export async function handleConsultantFollowUpQuestion(
  host: ConsultantHost,
  question: ConsultantQuestion,
) {
  const prepared = prepareConsultantQuestionSend({
    state: host.getConsultantFlowState(),
    consultantAgentOptions: host.consultantAgentOptions,
    question,
  });

  host.applyConsultantFlowState(prepared.state);
  await host.processMessage(question.prompt, prepared.options);
}
