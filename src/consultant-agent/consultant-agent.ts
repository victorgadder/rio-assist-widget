import {
  CONSULTANT_AGENT_INTRO,
  CONSULTANT_AGENT_OPTIONS,
  CONSULTANT_AGENT_FOLLOW_UPS,
  buildConsultantFollowUpText,
  type ConsultantAgentOption,
  type ConsultantFollowUp,
} from './consultant-agent-mocks';

export type ConsultantAgentState = {
  isVisible: boolean;
  introText: string;
  options: ConsultantAgentOption[];
};

export function getConsultantFollowUp(topicId: string, topicLabel: string): ConsultantFollowUp {
  const questions = CONSULTANT_AGENT_FOLLOW_UPS[topicId] ?? [];
  return {
    topicId,
    topicLabel,
    questions,
  };
}

export function createConsultantAgentState(): ConsultantAgentState {
  return {
    isVisible: false,
    introText: CONSULTANT_AGENT_INTRO,
    options: [...CONSULTANT_AGENT_OPTIONS],
  };
}

export async function loadConsultantAgentOptions(): Promise<ConsultantAgentOption[]> {
  // Mantido separado para facilitar a troca para dados vindos do backend futuramente.
  return [...CONSULTANT_AGENT_OPTIONS];
}

export {
  CONSULTANT_AGENT_INTRO,
  CONSULTANT_AGENT_OPTIONS,
  CONSULTANT_AGENT_FOLLOW_UPS,
  buildConsultantFollowUpText,
  type ConsultantAgentOption,
  type ConsultantFollowUp,
};
