import { describe, expect, it } from 'vitest';
import {
  beginConversationScrollbarDrag,
  calculateConversationScrollbarState,
  createHiddenConversationScrollbarState,
  updateConversationScrollbarDrag,
} from '../src/application/conversation-scrollbar-flow';

describe('conversation-scrollbar-flow', () => {
  it('creates hidden state for non-scrollable lists', () => {
    expect(createHiddenConversationScrollbarState()).toEqual({
      height: 0,
      top: 0,
      visible: false,
    });

    expect(
      calculateConversationScrollbarState({
        scrollHeight: 100,
        clientHeight: 100,
        scrollTop: 0,
      }),
    ).toEqual({
      height: 0,
      top: 0,
      visible: false,
    });
  });

  it('calculates visible scrollbar metrics and drag movement', () => {
    const state = calculateConversationScrollbarState({
      scrollHeight: 1000,
      clientHeight: 250,
      scrollTop: 250,
    });

    expect(state.visible).toBe(true);
    expect(state.height).toBeCloseTo(25);
    expect(state.top).toBeCloseTo(25);

    const start = beginConversationScrollbarDrag({
      pointerY: 120,
      trackTop: 0,
      trackHeight: 200,
      scrollbarHeightPercent: state.height,
      scrollHeight: 1000,
      clientHeight: 250,
      scrollTop: 250,
    });

    expect(start.metrics.thumbHeight).toBeCloseTo(50);

    const moved = updateConversationScrollbarDrag({
      metrics: start.metrics,
      pointerY: 170,
      scrollHeight: 1000,
      clientHeight: 250,
    });

    expect(moved).not.toBeNull();
    expect((moved ?? 0) > 250).toBe(true);
  });
});
