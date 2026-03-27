import { describe, expect, it } from 'vitest';
import {
  applyConversationDeletionState,
  applyConversationRenameState,
  createConversationHistoryState,
  createMessageHistoryState,
  createPendingDeleteAction,
  createPendingRenameAction,
  createRetryConversationAction,
  restoreConversationSnapshotState,
  selectConversationState,
} from '../src/application/conversation-state-flow';

describe('conversation-state-flow', () => {
  it('selects conversation title from current list', () => {
    const result = selectConversationState('conv-2', [
      { id: 'conv-1', title: 'Primeira', updatedAt: '2026-03-25T10:00:00.000Z' },
      { id: 'conv-2', title: 'Segunda', updatedAt: '2026-03-25T11:00:00.000Z' },
    ]);

    expect(result).toEqual({
      currentConversationId: 'conv-2',
      activeConversationTitle: 'Segunda',
    });
  });

  it('renames conversation and refreshes active metadata', () => {
    const result = applyConversationRenameState({
      conversations: [
        { id: 'conv-1', title: 'Original', updatedAt: '2026-03-25T10:00:00.000Z' },
      ],
      currentConversationId: 'conv-1',
      conversationId: 'conv-1',
      newTitle: 'Renomeada',
    });

    expect(result.changed).toBe(true);
    expect(result.conversations[0]?.title).toBe('Renomeada');
    expect(result.activeConversationTitle).toBe('Renomeada');
    expect(result.activeConversationUpdatedAt).toBe('2026-03-25T10:00:00.000Z');
  });

  it('deletes active conversation and clears current messages', () => {
    const result = applyConversationDeletionState({
      conversations: [
        { id: 'conv-1', title: 'Original', updatedAt: '2026-03-25T10:00:00.000Z' },
      ],
      currentConversationId: 'conv-1',
      conversationId: 'conv-1',
      messages: [
        {
          id: 'msg-1',
          role: 'assistant',
          text: 'Resposta',
          html: '<p>Resposta</p>',
          timestamp: 1,
        },
      ],
    });

    expect(result.removed).toBe(true);
    expect(result.conversations).toEqual([]);
    expect(result.currentConversationId).toBeNull();
    expect(result.messages).toEqual([]);
    expect(result.activeConversationTitle).toBeNull();
  });

  it('creates pending actions and restores snapshots predictably', () => {
    const deleteAttempt = createPendingDeleteAction({
      target: { id: 'conv-1', title: 'Original', index: 0 },
      conversations: [
        { id: 'conv-1', title: 'Original', updatedAt: '2026-03-25T10:00:00.000Z' },
      ],
      currentConversationId: 'conv-1',
      messages: [
        {
          id: 'msg-1',
          role: 'user',
          text: 'Oi',
          html: '<p>Oi</p>',
          timestamp: 1,
        },
      ],
      nowIsoString: '2026-03-25T12:00:00.000Z',
    });

    const retryAttempt = createRetryConversationAction({
      errorState: {
        ...deleteAttempt,
        message: 'Falhou',
      },
      conversations: [],
      nowIsoString: '2026-03-25T12:00:00.000Z',
    });

    const restored = restoreConversationSnapshotState({
      conversations: [],
      snapshot: retryAttempt.snapshot,
      index: retryAttempt.index,
    });

    expect(deleteAttempt.wasActive).toBe(true);
    expect(retryAttempt.snapshot?.title).toBe('Original');
    expect(restored).toEqual([
      { id: 'conv-1', title: 'Original', updatedAt: '2026-03-25T10:00:00.000Z' },
    ]);
  });

  it('builds normalized state snapshots for history payloads', () => {
    const conversationState = createConversationHistoryState({
      conversations: [
        { id: 'conv-1', title: 'Original', updatedAt: '2026-03-25T10:00:00.000Z' },
      ],
      currentConversationId: 'conv-1',
    });
    const messageState = createMessageHistoryState({
      messages: [
        {
          id: 'msg-1',
          role: 'assistant',
          text: 'Resposta',
          html: '<p>Resposta</p>',
          timestamp: 1,
        },
      ],
      currentConversationId: 'conv-1',
    });
    const renameAttempt = createPendingRenameAction({
      id: 'conv-1',
      title: 'Original',
      index: 0,
      draft: 'Renomeada',
    });

    expect(conversationState.activeConversationTitle).toBe('Original');
    expect(conversationState.conversationHistoryLoading).toBe(false);
    expect(messageState.showNewConversationShortcut).toBe(true);
    expect(messageState.currentConversationId).toBe('conv-1');
    expect(renameAttempt.newTitle).toBe('Renomeada');
  });
});
