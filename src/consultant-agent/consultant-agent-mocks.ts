export type ConsultantAgentOption = {
  id: string;
  label: string;
};

export type ConsultantFollowUp = {
  topicId: string;
  topicLabel: string;
  questions: string[];
};

export const CONSULTANT_AGENT_INTRO =
  'Olá! Sou o Agente Consultor. Em qual assunto posso ajudar você hoje?';

export const CONSULTANT_AGENT_OPTIONS: ConsultantAgentOption[] = [
  { id: 'process-efficiency', label: 'Eficiência de Processo' },
  { id: 'failure-modes', label: 'Modos de Falha' },
  { id: 'network-performance', label: 'Performance de Rede' },
  { id: 'tactical-management-aging', label: 'Gestão tática (Aging)' },
];

export const CONSULTANT_AGENT_FOLLOW_UPS: Record<string, string[]> = {
  'process-efficiency': [
    'Qual é o gargalo médio de tempo antes do mecânico tocar no veículo?',
    'Por que temos uma média alta de 6,1 dias na abertura?',
    'O tempo de aprovação do cliente é alto. O que isso indica?',
  ],
  'failure-modes': [
    'Qual é o componente nº 1 em volume de falhas?',
    'Como aplicar a estratégia de "ação massiva e acelerada" para Motor?',
    'O tempo de diagnóstico de Motor é alto. Qual a causa provável?',
  ],
  'network-performance': [
    'Qual a diferença principal entre os problemas do Grupo Resende e Grupo Mônaco?',
    "Onde o problema de 'Peças em Trânsito' é mais grave?",
    'Como identificar concessionárias com falta de boxes físicos?',
  ],
  'tactical-management-aging': [
    'Quantos veículos estão parados por falta de peça há mais de 8 dias?',
    "Quais casos de 'Aguardando Diagnóstico' são prioritários?",
    'Qual a proporção de chamados proativos vs. reativos?',
  ],
};

export const buildConsultantFollowUpText = (topicLabel: string) =>
  `Certo! Reuni abaixo as principais dúvidas sobre ${topicLabel}. Escolha uma delas ou faça sua pergunta.`;
