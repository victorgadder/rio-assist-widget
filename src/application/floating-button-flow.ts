export type FloatingButtonDragState = {
  pointerId: number;
  startY: number;
  startOffset: number;
  buttonHeight: number;
};

export function startFloatingButtonDrag(input: FloatingButtonDragState): FloatingButtonDragState {
  return input;
}

function clamp(value: number, min: number, max: number) {
  return Math.min(Math.max(value, min), max);
}

export function updateFloatingButtonDrag(input: {
  dragState: FloatingButtonDragState;
  pointerY: number;
  viewportHeight: number;
  margin?: number;
  dragThreshold?: number;
}): {
  offset: number;
  dragged: boolean;
} {
  const { dragState, pointerY, viewportHeight, margin = 12, dragThreshold = 3 } = input;
  const deltaY = pointerY - dragState.startY;
  const maxBottom = Math.max(margin, viewportHeight - dragState.buttonHeight - margin);

  return {
    offset: clamp(dragState.startOffset - deltaY, margin, maxBottom),
    dragged: Math.abs(deltaY) > dragThreshold,
  };
}

export function finishFloatingButtonDrag(dragged: boolean) {
  return {
    shouldSuppressClick: dragged,
  };
}
