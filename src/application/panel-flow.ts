export type PanelVisibilityState = {
  open: boolean;
  isFullscreen: boolean;
  showConversations: boolean;
  conversationMenuId: string | null;
  showNewConversationShortcut: boolean;
  newConversationConfirmOpen?: boolean;
};

export type PanelStateChangeResult = PanelVisibilityState & {
  emittedEvent: 'rioassist:open' | 'rioassist:close' | null;
  shouldRequestHistory?: boolean;
};

export type FloatingButtonToggleResult = PanelStateChangeResult & {
  willOpenMiniPanel: boolean;
};

export type NewConversationResetResult = {
  isLoading: boolean;
  messages: [];
  message: string;
  errorMessage: string;
  showConversations: boolean;
  currentConversationId: null;
  activeConversationTitle: null;
  activeConversationUpdatedAt: null;
  showNewConversationShortcut: boolean;
};

export function togglePanelState(state: PanelVisibilityState): PanelStateChangeResult {
  if (state.isFullscreen) {
    return exitFullscreenState(state, false);
  }

  const open = !state.open;
  return {
    ...state,
    open,
    emittedEvent: open ? 'rioassist:open' : 'rioassist:close',
  };
}

export function toggleFromFloatingButton(state: PanelVisibilityState): FloatingButtonToggleResult {
  const willOpenMiniPanel = !state.open && !state.isFullscreen;
  const nextState = togglePanelState(state);

  return {
    ...nextState,
    willOpenMiniPanel,
  };
}

export function closePanelState(state: PanelVisibilityState): PanelStateChangeResult {
  if (!state.open) {
    return {
      ...state,
      isFullscreen: false,
      emittedEvent: null,
    };
  }

  return {
    ...state,
    open: false,
    isFullscreen: false,
    emittedEvent: 'rioassist:close',
  };
}

export function openConversationsPanelState(state: PanelVisibilityState): PanelStateChangeResult {
  return {
    ...state,
    showConversations: true,
    emittedEvent: null,
    shouldRequestHistory: true,
  };
}

export function closeConversationsPanelState(state: PanelVisibilityState): PanelStateChangeResult {
  return {
    ...state,
    showConversations: false,
    conversationMenuId: null,
    emittedEvent: null,
  };
}

export function toggleConversationsPanelState(state: PanelVisibilityState): PanelStateChangeResult {
  const showConversations = !state.showConversations;
  return {
    ...state,
    showConversations,
    conversationMenuId: showConversations ? state.conversationMenuId : null,
    emittedEvent: null,
    shouldRequestHistory: showConversations,
  };
}

export function handleCloseActionState(state: PanelVisibilityState): {
  nextState: PanelStateChangeResult;
  action: 'exit-fullscreen' | 'close-conversations' | 'close-panel';
} {
  if (state.isFullscreen) {
    return {
      nextState: exitFullscreenState(state, true),
      action: 'exit-fullscreen',
    };
  }

  if (state.showConversations) {
    return {
      nextState: closeConversationsPanelState(state),
      action: 'close-conversations',
    };
  }

  return {
    nextState: closePanelState(state),
    action: 'close-panel',
  };
}

export function enterFullscreenState(state: PanelVisibilityState): PanelStateChangeResult {
  if (state.isFullscreen) {
    return {
      ...state,
      emittedEvent: null,
      shouldRequestHistory: false,
    };
  }

  return {
    ...state,
    isFullscreen: true,
    open: false,
    showConversations: false,
    emittedEvent: null,
    shouldRequestHistory: true,
  };
}

export function exitFullscreenState(
  state: PanelVisibilityState,
  restorePanel: boolean,
): PanelStateChangeResult {
  if (!state.isFullscreen) {
    return {
      ...state,
      emittedEvent: null,
    };
  }

  return {
    ...state,
    isFullscreen: false,
    conversationMenuId: null,
    showNewConversationShortcut: false,
    open: restorePanel ? true : state.open,
    emittedEvent: null,
  };
}

export function openNewConversationConfirmState(
  state: PanelVisibilityState,
): PanelStateChangeResult {
  return {
    ...state,
    newConversationConfirmOpen: true,
    emittedEvent: null,
  };
}

export function closeNewConversationConfirmState(
  state: PanelVisibilityState,
): PanelStateChangeResult {
  return {
    ...state,
    newConversationConfirmOpen: false,
    emittedEvent: null,
  };
}

export function createNewConversationResetState(): NewConversationResetResult {
  return {
    isLoading: false,
    messages: [],
    message: '',
    errorMessage: '',
    showConversations: false,
    currentConversationId: null,
    activeConversationTitle: null,
    activeConversationUpdatedAt: null,
    showNewConversationShortcut: false,
  };
}
