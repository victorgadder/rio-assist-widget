import { describe, expect, it } from 'vitest';
import {
  applyConsultantEffectsAfterAssistantMessage,
  createInitialConsultantFlowState,
  prepareConsultantQuestionSend,
  reopenConsultantPrompt,
  selectConsultantSubject,
  startConsultantFlow,
  suppressConsultantPrompts,
} from '../src/application/consultant-flow';
import type { ChatMessage } from '../src/domain/chat';
import type { ConsultantAgentOption } from '../src/domain/consultant';

const createMessage = (
  role: 'user' | 'assistant',
  text: string,
  consultantFollowUp?: ChatMessage['consultantFollowUp'],
) => ({
  id: `${role}-${text}`,
  role,
  text,
  timestamp: 1,
  consultantFollowUp,
});

const consultantOptions: ConsultantAgentOption[] = [
  {
    id: 'fleet',
    branchId: 'fleet',
    label: 'Resumo da Frota',
    questions: [{ questionId: 'q1', prompt: 'Como está a frota?' }],
  },
];

describe('consultant-flow', () => {
  it('starts consultant flow with intro and awaiting state', () => {
    const result = startConsultantFlow({
      state: createInitialConsultantFlowState(),
      consultantAgentOptions: consultantOptions,
      consultantAgentInitialMessage: 'Intro customizada',
      defaultInitialMessage: 'Default',
      createMessage,
    });

    expect(result).not.toBeNull();
    expect(result?.introMessage.text).toBe('Intro customizada');
    expect(result?.initialPrompt).toBe('Resumo da Frota');
    expect(result?.state.consultantAgentStage).toBe('awaiting');
    expect(result?.state.showSuggestions).toBe(false);
  });

  it('selects a subject and creates follow-up message', () => {
    const result = selectConsultantSubject({
      option: consultantOptions[0],
      hasMessages: false,
      consultantAgentIntro: 'Introdução',
      createMessage,
      createId: () => 'follow-1',
      state: createInitialConsultantFlowState(),
    });

    expect(result?.messages).toHaveLength(3);
    expect(result?.messages[1].role).toBe('user');
    expect(result?.state.activeConsultantBranchId).toBe('fleet');
    expect(result?.state.lastConsultantFollowUpPayload?.topicLabel).toBe('Resumo da Frota');
  });

  it('reopens prompt with available consultant options', () => {
    const result = reopenConsultantPrompt({
      state: createInitialConsultantFlowState(),
      consultantAgentOptions: consultantOptions,
      createMessage,
      createId: () => 'prompt-1',
    });

    expect(result?.promptMessage.consultantPrompt?.id).toBe('prompt-1');
    expect(result?.promptMessage.consultantPrompt?.options).toHaveLength(1);
    expect(result?.state.consultantAgentStage).toBe('ready');
  });

  it('prepares consultant question send with context', () => {
    const result = prepareConsultantQuestionSend({
      state: {
        ...createInitialConsultantFlowState(),
        activeConsultantBranchId: 'fleet',
        activeConsultantFollowUpId: 'follow-1',
      },
      consultantAgentOptions: consultantOptions,
      question: consultantOptions[0].questions[0],
    });

    expect(result.options.consultantContext).toEqual({
      branchId: 'fleet',
      branchLabel: 'Resumo da Frota',
      questionId: 'q1',
      questionLevel: null,
    });
    expect(result.state.pendingConsultantFollowUpId).toBe('follow-1');
  });

  it('applies consultant effects after assistant message and can suppress prompts', () => {
    const baseState = {
      ...createInitialConsultantFlowState(),
      consultantAgentStage: 'awaiting' as const,
      lastConsultantFollowUpId: 'follow-1',
      lastConsultantFollowUpPayload: {
        topicId: 'fleet',
        topicLabel: 'Resumo da Frota',
        questions: consultantOptions[0].questions,
      },
    };

    const result = applyConsultantEffectsAfterAssistantMessage({
      state: baseState,
      consultantAgentOptions: consultantOptions,
      createMessage,
      createId: () => 'generated-id',
    });

    expect(result.messages.length).toBeGreaterThan(0);
    expect(result.state.consultantAgentStage).toBe('ready');

    const suppressed = suppressConsultantPrompts(result.state);
    expect(suppressed.consultantOptionsSuppressed).toBe(true);
    expect(suppressed.activeConsultantPromptId).toBeNull();
  });
});
