import { buildConsultantFollowUpText } from '../consultant-agent/consultant-agent';
import type { ChatMessage, ConsultantContext } from '../domain/chat';
import type {
  ConsultantAgentOption,
  ConsultantFollowUp,
  ConsultantQuestion,
} from '../domain/consultant';

export type ConsultantStage = 'idle' | 'awaiting' | 'ready';

export type ConsultantFlowState = {
  showSuggestions: boolean;
  consultantAgentVisible: boolean;
  activeConsultantFollowUpId: string | null;
  activeConsultantBranchId: string | null;
  activeConsultantPromptId: string | null;
  consultantAgentStage: ConsultantStage;
  consultantOptionsSuppressed: boolean;
  pendingConsultantFollowUpId: string | null;
  lastConsultantPromptId: string | null;
  lastConsultantFollowUpId: string | null;
  lastConsultantFollowUpPayload: ConsultantFollowUp | null;
};

type CreateMessage = (
  role: 'user' | 'assistant',
  text: string,
  consultantFollowUp?: ChatMessage['consultantFollowUp'],
  options?: {
    request?: ChatMessage['request'];
    responseTo?: ChatMessage['responseTo'];
    hidden?: boolean;
  },
) => ChatMessage;

export function createInitialConsultantFlowState(): ConsultantFlowState {
  return {
    showSuggestions: true,
    consultantAgentVisible: false,
    activeConsultantFollowUpId: null,
    activeConsultantBranchId: null,
    activeConsultantPromptId: null,
    consultantAgentStage: 'idle',
    consultantOptionsSuppressed: false,
    pendingConsultantFollowUpId: null,
    lastConsultantPromptId: null,
    lastConsultantFollowUpId: null,
    lastConsultantFollowUpPayload: null,
  };
}

export function startConsultantFlow(input: {
  state: ConsultantFlowState;
  consultantAgentOptions: ConsultantAgentOption[];
  consultantAgentInitialMessage: string;
  defaultInitialMessage: string;
  createMessage: CreateMessage;
}) {
  if (input.state.consultantAgentStage === 'awaiting') {
    return null;
  }

  return {
    introMessage: input.createMessage(
      'assistant',
      input.consultantAgentInitialMessage.trim() || input.defaultInitialMessage,
    ),
    shouldBootstrapOptions: input.consultantAgentOptions.length === 0,
    initialPrompt: 'Resumo da Frota',
    state: {
      ...input.state,
      showSuggestions: false,
      consultantOptionsSuppressed: false,
      consultantAgentStage: 'awaiting' as ConsultantStage,
      activeConsultantPromptId: null,
      pendingConsultantFollowUpId: null,
      activeConsultantFollowUpId: null,
    },
  };
}

export function selectConsultantSubject(input: {
  option: ConsultantAgentOption;
  hasMessages: boolean;
  consultantAgentIntro: string;
  createMessage: CreateMessage;
  createId: (length: number) => string;
  state: ConsultantFlowState;
}) {
  const label = input.option.label.trim();
  if (!label) {
    return null;
  }

  const questions =
    input.option.questions?.filter(
      (item) => item && typeof item.prompt === 'string' && typeof item.questionId === 'string',
    ) ?? [];

  const messages: ChatMessage[] = [];
  if (!input.hasMessages) {
    messages.push(input.createMessage('assistant', input.consultantAgentIntro));
  }

  messages.push(input.createMessage('user', label));

  const followUpId = input.createId(12);
  messages.push(
    input.createMessage('assistant', buildConsultantFollowUpText(label), {
      id: followUpId,
      topicId: input.option.branchId ?? input.option.id,
      topicLabel: label,
      questions,
    }),
  );

  return {
    messages,
    state: {
      ...input.state,
      consultantAgentVisible: false,
      showSuggestions: false,
      activeConsultantFollowUpId: followUpId,
      activeConsultantBranchId: input.option.branchId ?? input.option.id,
      activeConsultantPromptId: null,
      consultantOptionsSuppressed: false,
      pendingConsultantFollowUpId: null,
      lastConsultantFollowUpId: followUpId,
      lastConsultantFollowUpPayload: {
        topicId: input.option.branchId ?? input.option.id,
        topicLabel: label,
        questions,
      },
    },
  };
}

export function reopenConsultantPrompt(input: {
  state: ConsultantFlowState;
  consultantAgentOptions: ConsultantAgentOption[];
  createMessage: CreateMessage;
  createId: (length: number) => string;
}) {
  if (input.state.consultantOptionsSuppressed) {
    return null;
  }

  const promptId = input.createId(12);
  const promptText = 'Em qual assunto posso ajudar você hoje?';
  const promptMessage: ChatMessage = {
    ...input.createMessage('assistant', promptText),
    consultantPrompt: {
      id: promptId,
      text: promptText,
      options: [...input.consultantAgentOptions],
    },
  };

  return {
    promptMessage,
    state: {
      ...input.state,
      lastConsultantPromptId: promptId,
      activeConsultantPromptId: promptId,
      activeConsultantFollowUpId: null,
      pendingConsultantFollowUpId: null,
      activeConsultantBranchId: null,
      lastConsultantFollowUpId: null,
      lastConsultantFollowUpPayload: null,
      consultantAgentStage: 'ready' as ConsultantStage,
    },
  };
}

export function prepareConsultantQuestionSend(input: {
  state: ConsultantFlowState;
  consultantAgentOptions: ConsultantAgentOption[];
  question: ConsultantQuestion;
}) {
  const branchId = input.state.activeConsultantBranchId;

  return {
    state: {
      ...input.state,
      pendingConsultantFollowUpId:
        input.state.activeConsultantFollowUpId ?? input.state.lastConsultantFollowUpId,
      activeConsultantFollowUpId: null,
    },
    message: input.question.prompt,
    options: {
      consultantContext: {
        branchId: branchId ?? null,
        branchLabel: lookupConsultantBranchLabel(input.consultantAgentOptions, branchId),
        questionId: input.question.questionId,
        questionLevel: input.question.level ?? null,
      } satisfies ConsultantContext,
      isConsultantAgent: true,
    },
  };
}

export function applyConsultantEffectsAfterAssistantMessage(input: {
  state: ConsultantFlowState;
  consultantAgentOptions: ConsultantAgentOption[];
  createMessage: CreateMessage;
  createId: (length: number) => string;
}) {
  const messages: ChatMessage[] = [];
  let nextState = { ...input.state };

  if (input.state.consultantAgentStage === 'awaiting') {
    const promptResult = reopenConsultantPrompt({
      state: input.state,
      consultantAgentOptions: input.consultantAgentOptions,
      createMessage: input.createMessage,
      createId: input.createId,
    });

    if (promptResult) {
      messages.push(promptResult.promptMessage);
      nextState = { ...nextState, ...promptResult.state };
    }
  }

  if (
    !nextState.consultantOptionsSuppressed &&
    nextState.lastConsultantFollowUpPayload &&
    (nextState.pendingConsultantFollowUpId || nextState.lastConsultantFollowUpId)
  ) {
    const followUpId = input.createId(12);
    messages.push(
      input.createMessage(
        'assistant',
        buildConsultantFollowUpText(nextState.lastConsultantFollowUpPayload.topicLabel),
        {
          id: followUpId,
          topicId: nextState.lastConsultantFollowUpPayload.topicId,
          topicLabel: nextState.lastConsultantFollowUpPayload.topicLabel,
          questions: nextState.lastConsultantFollowUpPayload.questions,
        },
      ),
    );

    nextState = {
      ...nextState,
      activeConsultantFollowUpId: followUpId,
      pendingConsultantFollowUpId: null,
      lastConsultantFollowUpId: followUpId,
    };
  }

  return { messages, state: nextState };
}

export function suppressConsultantPrompts(state: ConsultantFlowState): ConsultantFlowState {
  return {
    ...state,
    consultantOptionsSuppressed: true,
    activeConsultantFollowUpId: null,
    activeConsultantPromptId: null,
    pendingConsultantFollowUpId: null,
  };
}

function lookupConsultantBranchLabel(
  options: ConsultantAgentOption[],
  branchId: string | null,
): string | null {
  if (!branchId) {
    return null;
  }

  const found = options.find((item) => item.branchId === branchId || item.id === branchId);
  return found ? found.label : null;
}
