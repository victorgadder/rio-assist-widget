import {
  CONSULTANT_AGENT_INTRO,
  CONSULTANT_AGENT_OPTIONS,
  buildConsultantFollowUpText,
  type ConsultantAgentOption,
  type ConsultantFollowUp,
  type ConsultantQuestion,
} from './consultant-agent-mocks';

export type ConsultantAgentState = {
  isVisible: boolean;
  introText: string;
  options: ConsultantAgentOption[];
};

const CONSULTANT_AGENT_API_BASE =
  'http://consultant-agent-alb-306464826.eu-west-1.elb.amazonaws.com/consultant/api/v1';

export function getConsultantFollowUp(topicId: string, topicLabel: string): ConsultantFollowUp {
  return {
    topicId,
    topicLabel,
    questions: [],
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
  try {
    const response = await fetch(`${CONSULTANT_AGENT_API_BASE}/branches`, {
      headers: { Accept: 'application/json' },
    });

    if (!response.ok) {
      throw new Error(`Erro ao buscar branches do consultor: ${response.status}`);
    }

    const data = (await response.json()) as unknown;
    if (!Array.isArray(data)) {
      throw new Error('Formato inesperado da API de branches do consultor.');
    }

    const options = data
      .map((item, index) => normalizeBranch(item, index))
      .filter((option): option is ConsultantAgentOption => Boolean(option));

    if (options.length === 0) {
      return [...CONSULTANT_AGENT_OPTIONS];
    }

    return options.sort((a, b) => {
      const order = (a.order ?? 0) - (b.order ?? 0);
      if (order !== 0) return order;
      return a.label.localeCompare(b.label);
    });
  } catch (error) {
    console.error('[ConsultantAgent] Falha ao carregar branches, usando mocks.', error);
    return [...CONSULTANT_AGENT_OPTIONS];
  }
}

export {
  CONSULTANT_AGENT_INTRO,
  CONSULTANT_AGENT_OPTIONS,
  buildConsultantFollowUpText,
  type ConsultantAgentOption,
  type ConsultantFollowUp,
  type ConsultantQuestion,
};

function normalizeBranch(value: unknown, index: number): ConsultantAgentOption | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const record = value as Record<string, unknown>;
  const active = record.active !== false;
  if (!active) return null;

  const branchId = typeof record.branchId === 'string' ? record.branchId : '';
  const label = typeof record.label === 'string' ? record.label : '';
  if (!branchId || !label) return null;

  const questionsRaw = Array.isArray(record.questions) ? record.questions : [];
  const questions = questionsRaw
    .map((q) => normalizeQuestion(q))
    .filter((q): q is ConsultantQuestion => Boolean(q));

  return {
    id: typeof record.id === 'string' && record.id ? record.id : branchId,
    branchId,
    label,
    businessObjective:
      typeof record.businessObjective === 'string' ? record.businessObjective : undefined,
    order:
      typeof record.order === 'number'
        ? record.order
        : typeof record.order === 'string'
          ? Number(record.order)
          : index + 1,
    active: true,
    questions,
  };
}

function normalizeQuestion(value: unknown): ConsultantQuestion | null {
  if (!value || typeof value !== 'object') {
    return null;
  }

  const record = value as Record<string, unknown>;
  const active = record.active !== false;
  if (!active) return null;

  const questionId = typeof record.questionId === 'string' ? record.questionId : '';
  const prompt = typeof record.prompt === 'string' ? record.prompt : '';
  if (!questionId || !prompt) return null;

  return {
    questionId,
    prompt,
    level: typeof record.level === 'string' ? record.level : undefined,
    levelLabel: typeof record.levelLabel === 'string' ? record.levelLabel : undefined,
    expectedResponse:
      typeof record.expectedResponse === 'string' ? record.expectedResponse : undefined,
    order:
      typeof record.order === 'number'
        ? record.order
        : typeof record.order === 'string'
          ? Number(record.order)
          : undefined,
    active: true,
  };
}
