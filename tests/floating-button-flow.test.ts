import { describe, expect, it } from 'vitest';
import {
  finishFloatingButtonDrag,
  startFloatingButtonDrag,
  updateFloatingButtonDrag,
} from '../src/application/floating-button-flow';

describe('floating-button-flow', () => {
  it('stores drag start state', () => {
    expect(
      startFloatingButtonDrag({
        pointerId: 1,
        startY: 200,
        startOffset: 32,
        buttonHeight: 56,
      }),
    ).toEqual({
      pointerId: 1,
      startY: 200,
      startOffset: 32,
      buttonHeight: 56,
    });
  });

  it('updates offset and drag state within viewport bounds', () => {
    const result = updateFloatingButtonDrag({
      dragState: {
        pointerId: 1,
        startY: 200,
        startOffset: 32,
        buttonHeight: 56,
      },
      pointerY: 150,
      viewportHeight: 500,
    });

    expect(result.offset).toBe(82);
    expect(result.dragged).toBe(true);
  });

  it('suppresses click only when a drag actually happened', () => {
    expect(finishFloatingButtonDrag(true)).toEqual({ shouldSuppressClick: true });
    expect(finishFloatingButtonDrag(false)).toEqual({ shouldSuppressClick: false });
  });
});
