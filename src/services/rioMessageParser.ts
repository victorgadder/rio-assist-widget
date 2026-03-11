export type ParsedIncomingMessage = {
  parsed: unknown;
  text: string;
  action?: string;
};

export function parseIncomingMessage(raw: string): ParsedIncomingMessage {
  let parsed: unknown = null;
  let text = raw;
  let action: string | undefined;

  try {
    parsed = JSON.parse(raw);
    if (typeof parsed === 'object' && parsed !== null) {
      const record = parsed as Record<string, unknown>;
      const maybeAction = record.action ?? record.type ?? record.event;
      if (typeof maybeAction === 'string') {
        action = maybeAction;
      }

      const maybeText = record.message ?? record.response ?? record.text ?? record.content;
      if (typeof maybeText === 'string') {
        text = maybeText;
      }
    }
  } catch {
    parsed = null;
  }

  return { parsed, text, action };
}
