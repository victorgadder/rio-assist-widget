import { describe, expect, it } from 'vitest';
import {
  createConversationActionTarget,
  selectConversationMenuState,
  shouldCloseConversationMenu,
  updateRenameDraft,
} from '../src/application/conversation-ui-flow';

describe('conversation-ui-flow', () => {
  it('toggles conversation menu and calculates placement', () => {
    const state = selectConversationMenuState({
      currentMenuId: null,
      targetId: 'conv-1',
      buttonRect: {
        bottom: 180,
      } as DOMRect,
      containerRect: {
        bottom: 300,
      } as DOMRect,
    });

    expect(state).toEqual({
      conversationMenuId: 'conv-1',
      conversationMenuPlacement: 'above',
    });

    expect(
      selectConversationMenuState({
        currentMenuId: 'conv-1',
        targetId: 'conv-1',
      }),
    ).toEqual({
      conversationMenuId: null,
      conversationMenuPlacement: 'below',
    });
  });

  it('creates rename/delete targets and updates draft', () => {
    expect(
      createConversationActionTarget({
        action: 'delete',
        id: 'conv-1',
        conversations: [{ id: 'conv-1', title: 'Conversa', updatedAt: '2026-03-27T12:00:00.000Z' }],
      }),
    ).toMatchObject({
      deleteConversationTarget: {
        id: 'conv-1',
        title: 'Conversa',
        index: 0,
      },
      renameConversationTarget: null,
    });

    expect(
      updateRenameDraft(
        {
          id: 'conv-1',
          title: 'Conversa',
          index: 0,
          draft: 'Conversa',
        },
        'Novo titulo',
      ),
    ).toMatchObject({
      draft: 'Novo titulo',
    });
  });

  it('closes menu only when clicking outside menu controls', () => {
    const target = {
      closest: (selector: string) => (selector === '.conversation-menu' ? {} : null),
    } as HTMLElement;

    expect(shouldCloseConversationMenu(target)).toBe(false);
    expect(shouldCloseConversationMenu(null)).toBe(true);
  });
});
