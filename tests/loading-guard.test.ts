import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import {
  DEFAULT_LOADING_LABEL,
  LoadingGuardController,
} from '../src/services/loadingGuard';

describe('loading-guard', () => {
  const originalWindow = globalThis.window;

  beforeEach(() => {
    vi.useFakeTimers();
    vi.stubGlobal('window', globalThis);
  });

  afterEach(() => {
    vi.useRealTimers();
    if (originalWindow) {
      vi.stubGlobal('window', originalWindow);
      return;
    }

    vi.unstubAllGlobals();
  });

  it('updates labels over time and clears timers', () => {
    const labels: string[] = [DEFAULT_LOADING_LABEL];
    const controller = new LoadingGuardController({
      onLabelChange: (label) => labels.push(label),
    });

    controller.start();
    expect(labels.at(-1)).toBe('UptAIme Assist está respondendo');

    vi.advanceTimersByTime(20000);
    expect(labels.at(-1)).toBe('UptAIme Assist continua respondendo');

    vi.advanceTimersByTime(40000);
    expect(labels.at(-1)).toContain('ainda está processando');

    controller.clear();
    vi.advanceTimersByTime(60000);
    expect(labels.at(-1)).toContain('ainda está processando');
  });
});
