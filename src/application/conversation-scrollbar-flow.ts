export type ConversationScrollbarState = {
  height: number;
  top: number;
  visible: boolean;
};

export type ConversationScrollbarDragMetrics = {
  startY: number;
  startThumbTop: number;
  trackHeight: number;
  thumbHeight: number;
};

type ScrollbarGeometry = {
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
};

export function createHiddenConversationScrollbarState(): ConversationScrollbarState {
  return {
    height: 0,
    top: 0,
    visible: false,
  };
}

export function calculateConversationScrollbarState(
  geometry: ScrollbarGeometry,
): ConversationScrollbarState {
  const { scrollHeight, clientHeight, scrollTop } = geometry;
  if (scrollHeight <= clientHeight + 1) {
    return createHiddenConversationScrollbarState();
  }

  const ratio = clientHeight / scrollHeight;
  const height = Math.max(ratio * 100, 8);
  const maxTop = 100 - height;
  const top = (scrollTop / (scrollHeight - clientHeight)) * (maxTop > 0 ? maxTop : 0);

  return {
    height,
    top,
    visible: true,
  };
}

function getThumbMetrics(input: {
  trackHeight: number;
  scrollbarHeightPercent: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
}) {
  const { trackHeight, scrollbarHeightPercent, scrollHeight, clientHeight, scrollTop } = input;
  const thumbHeight = trackHeight * (scrollbarHeightPercent / 100);
  const maxThumbTop = Math.max(trackHeight - thumbHeight, 0);
  const scrollRange = Math.max(scrollHeight - clientHeight, 1);
  const currentThumbTop = (scrollTop / scrollRange) * maxThumbTop;

  return {
    thumbHeight,
    maxThumbTop,
    currentThumbTop,
  };
}

export function beginConversationScrollbarDrag(input: {
  pointerY: number;
  trackTop: number;
  trackHeight: number;
  scrollbarHeightPercent: number;
  scrollHeight: number;
  clientHeight: number;
  scrollTop: number;
}): {
  nextScrollTop: number | null;
  metrics: ConversationScrollbarDragMetrics;
} {
  const {
    pointerY,
    trackTop,
    trackHeight,
    scrollbarHeightPercent,
    scrollHeight,
    clientHeight,
    scrollTop,
  } = input;
  const { thumbHeight, maxThumbTop, currentThumbTop } = getThumbMetrics({
    trackHeight,
    scrollbarHeightPercent,
    scrollHeight,
    clientHeight,
    scrollTop,
  });
  const offsetY = pointerY - trackTop;
  const isOnThumb = offsetY >= currentThumbTop && offsetY <= currentThumbTop + thumbHeight;
  const nextThumbTop = isOnThumb
    ? currentThumbTop
    : Math.min(Math.max(offsetY - thumbHeight / 2, 0), maxThumbTop);
  const nextScrollTop = isOnThumb
    ? null
    : (nextThumbTop / Math.max(maxThumbTop, 1)) * (scrollHeight - clientHeight);

  return {
    nextScrollTop,
    metrics: {
      startY: pointerY,
      startThumbTop: nextThumbTop,
      trackHeight,
      thumbHeight,
    },
  };
}

export function updateConversationScrollbarDrag(input: {
  metrics: ConversationScrollbarDragMetrics;
  pointerY: number;
  scrollHeight: number;
  clientHeight: number;
}): number | null {
  const { metrics, pointerY, scrollHeight, clientHeight } = input;
  const maxThumbTop = Math.max(metrics.trackHeight - metrics.thumbHeight, 0);
  const deltaY = pointerY - metrics.startY;
  const thumbTop = Math.min(Math.max(metrics.startThumbTop + deltaY, 0), maxThumbTop);
  const scrollRange = scrollHeight - clientHeight;

  if (scrollRange <= 0) {
    return null;
  }

  return (thumbTop / Math.max(maxThumbTop, 1)) * scrollRange;
}
