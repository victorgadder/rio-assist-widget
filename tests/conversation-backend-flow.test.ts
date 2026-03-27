import { describe, expect, it } from 'vitest';
import {
  applyConversationActionErrorState,
  applyConversationSystemActionState,
  createConversationActionEventDetail,
  createConversationActionEventName,
  createConversationActionFailureMessage,
  createConversationActionSuccessState,
} from '../src/application/conversation-backend-flow';

describe('conversation-backend-flow', () => {
  it('builds event names and details for backend actions', () => {
    expect(createConversationActionEventName('rename')).toBe('rioassist:conversation-rename');
    expect(createConversationActionEventName('delete')).toBe('rioassist:conversation-delete');

    expect(
      createConversationActionEventDetail({
        action: 'rename',
        conversation: {
          id: 'conv-1',
          title: 'Conversa',
        },
        index: 2,
      }),
    ).toEqual({
      id: 'conv-1',
      title: 'Conversa',
      index: 2,
      action: 'rename',
    });
  });

  it('creates success and failure messages predictably', () => {
    expect(createConversationActionSuccessState()).toEqual({
      conversationHistoryError: '',
    });

    expect(
      createConversationActionFailureMessage('rename', new Error('Falha especifica')),
    ).toBe('Falha especifica');
    expect(createConversationActionFailureMessage('delete', null)).toBe(
      'Nao foi possivel excluir a conversa.',
    );
  });

  it('applies pending clear and error state transformations', () => {
    const pending = {
      action: 'rename' as const,
      conversationId: 'conv-1',
      originalTitle: 'Antigo',
      index: 0,
      newTitle: 'Novo',
    };

    expect(
      applyConversationSystemActionState({
        pendingConversationAction: pending,
        conversationId: 'conv-1',
        action: 'rename',
      }),
    ).toEqual({
      conversationHistoryError: '',
      pendingConversationAction: null,
      conversationActionError: null,
    });

    expect(applyConversationActionErrorState(pending, 'Falhou')).toEqual({
      ...pending,
      message: 'Falhou',
    });
  });
});
