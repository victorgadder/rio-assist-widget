import { describe, expect, it } from 'vitest';
import {
  closeConversationsPanelState,
  closeNewConversationConfirmState,
  closePanelState,
  createNewConversationResetState,
  enterFullscreenState,
  exitFullscreenState,
  handleCloseActionState,
  openConversationsPanelState,
  openNewConversationConfirmState,
  toggleConversationsPanelState,
  toggleFromFloatingButton,
  togglePanelState,
} from '../src/application/panel-flow';

const baseState = {
  open: false,
  isFullscreen: false,
  showConversations: false,
  conversationMenuId: null,
  showNewConversationShortcut: true,
  newConversationConfirmOpen: false,
};

describe('panel-flow', () => {
  it('toggles panel visibility and emits proper event', () => {
    expect(togglePanelState(baseState)).toMatchObject({
      open: true,
      emittedEvent: 'rioassist:open',
    });

    expect(togglePanelState({ ...baseState, open: true })).toMatchObject({
      open: false,
      emittedEvent: 'rioassist:close',
    });
  });

  it('opens mini panel from floating button and reports intent', () => {
    expect(toggleFromFloatingButton(baseState)).toMatchObject({
      open: true,
      emittedEvent: 'rioassist:open',
      willOpenMiniPanel: true,
    });
  });

  it('manages conversations panel visibility and history request flag', () => {
    expect(openConversationsPanelState(baseState)).toMatchObject({
      showConversations: true,
      shouldRequestHistory: true,
    });

    expect(
      toggleConversationsPanelState({ ...baseState, showConversations: true, conversationMenuId: 'abc' }),
    ).toMatchObject({
      showConversations: false,
      conversationMenuId: null,
      shouldRequestHistory: false,
    });

    expect(
      closeConversationsPanelState({ ...baseState, showConversations: true, conversationMenuId: 'abc' }),
    ).toMatchObject({
      showConversations: false,
      conversationMenuId: null,
    });
  });

  it('transitions fullscreen and close action paths predictably', () => {
    const fullscreen = enterFullscreenState({ ...baseState, open: true });
    expect(fullscreen).toMatchObject({
      isFullscreen: true,
      open: false,
      showConversations: false,
      shouldRequestHistory: true,
    });

    expect(exitFullscreenState(fullscreen, true)).toMatchObject({
      isFullscreen: false,
      open: true,
      showNewConversationShortcut: false,
    });

    expect(handleCloseActionState({ ...baseState, showConversations: true }).action).toBe(
      'close-conversations',
    );
    expect(handleCloseActionState({ ...baseState, isFullscreen: true }).action).toBe(
      'exit-fullscreen',
    );
    expect(handleCloseActionState({ ...baseState, open: true }).action).toBe('close-panel');
  });

  it('handles new conversation confirm state and reset payload', () => {
    expect(openNewConversationConfirmState(baseState)).toMatchObject({
      newConversationConfirmOpen: true,
    });

    expect(
      closeNewConversationConfirmState({ ...baseState, newConversationConfirmOpen: true }),
    ).toMatchObject({
      newConversationConfirmOpen: false,
    });

    expect(closePanelState({ ...baseState, open: true })).toMatchObject({
      open: false,
      emittedEvent: 'rioassist:close',
    });

    expect(createNewConversationResetState()).toEqual({
      isLoading: false,
      messages: [],
      message: '',
      errorMessage: '',
      showConversations: false,
      currentConversationId: null,
      activeConversationTitle: null,
      activeConversationUpdatedAt: null,
      showNewConversationShortcut: false,
    });
  });
});
