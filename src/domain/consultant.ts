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
