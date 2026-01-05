export type ConsultantQuestion = {
  questionId: string;
  prompt: string;
  level?: string;
  levelLabel?: string;
  expectedResponse?: string;
  order?: number;
  active?: boolean;
};

export type ConsultantAgentOption = {
  id: string;
  branchId: string;
  label: string;
  businessObjective?: string;
  order?: number;
  active?: boolean;
  questions: ConsultantQuestion[];
};

export type ConsultantFollowUp = {
  topicId: string;
  topicLabel: string;
  questions: ConsultantQuestion[];
};

export const CONSULTANT_AGENT_INTRO =
  'Sou o Uptime Agent, especializado em otimizar seu tempo de operação. Em qual assunto posso ajudar você hoje?';

export const CONSULTANT_AGENT_OPTIONS: ConsultantAgentOption[] = [
  {
    id: 'process-efficiency',
    branchId: 'process-efficiency',
    label: 'Eficiência de Processo',
    order: 1,
    active: true,
    questions: [],
  },
  {
    id: 'failure-modes',
    branchId: 'failure-modes',
    label: 'Modos de Falha',
    order: 2,
    active: true,
    questions: [],
  },
  {
    id: 'network-performance',
    branchId: 'network-performance',
    label: 'Performance de Rede',
    order: 3,
    active: true,
    questions: [],
  },
  {
    id: 'tactical-management-aging',
    branchId: 'tactical-management-aging',
    label: 'Gestão tática (Aging)',
    order: 4,
    active: true,
    questions: [],
  },
];

export const buildConsultantFollowUpText = (topicLabel: string) =>
  `Certo! Reuni abaixo as principais dúvidas sobre ${topicLabel}. Escolha uma delas ou faça sua pergunta.`;
