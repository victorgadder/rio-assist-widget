const isDev = typeof import.meta !== 'undefined' && Boolean(import.meta.env?.DEV);

export const logger = {
  info: (...args: unknown[]) => {
    if (isDev) {
      console.info(...args);
    }
  },
  warn: (...args: unknown[]) => {
    if (isDev) {
      console.warn(...args);
    }
  },
  error: (message: unknown, ...args: unknown[]) => {
    if (isDev) {
      console.error(message, ...args);
      return;
    }

    if (typeof message === 'string') {
      console.error(message);
      return;
    }

    console.error('RioAssist error');
  },
};
