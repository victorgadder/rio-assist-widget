export type ChatRole = 'user' | 'assistant';

export function repairConversationId(rawId: string): string {
  if (!rawId || rawId.includes(':')) {
    return rawId;
  }

  const uuidMatch = rawId.match(
    /[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}/,
  );

  if (!uuidMatch || uuidMatch.index === undefined) {
    return rawId;
  }

  const uuid = uuidMatch[0];
  const prefix = rawId.slice(0, uuidMatch.index).replace(/[-:]?$/, '');
  const suffix = rawId.slice(uuidMatch.index + uuid.length);

  const prefixPart = prefix ? `${prefix}:` : '';
  return `${prefixPart}${uuid}${suffix}`;
}

export function normalizeRole(value: unknown): ChatRole {
  if (typeof value === 'string') {
    const normalized = value.toLowerCase();
    if (normalized.includes('user') || normalized.includes('client')) {
      return 'user';
    }
    if (normalized.includes('assistant') || normalized.includes('agent') || normalized.includes('bot')) {
      return 'assistant';
    }
  }

  return 'assistant';
}

export function parseTimestamp(value: unknown, fallback?: number): number {
  if (typeof value === 'number' && Number.isFinite(value)) {
    return value;
  }

  if (typeof value === 'string') {
    const trimmed = value.trim();
    if (trimmed) {
      const numeric = Number(trimmed);
      if (Number.isFinite(numeric)) {
        return numeric;
      }

      const parsed = Date.parse(trimmed);
      if (Number.isFinite(parsed)) {
        return parsed;
      }
    }
  }

  if (Number.isFinite(fallback ?? Number.NaN)) {
    return fallback as number;
  }

  return Date.now();
}

export function toIsoString(value: unknown): string {
  if (typeof value === 'string' || typeof value === 'number') {
    const date = new Date(value);
    if (!Number.isNaN(date.getTime())) {
      return date.toISOString();
    }
  }

  return new Date().toISOString();
}

export function looksLikeMessageHistoryEntry(entry: unknown): boolean {
  if (!entry || typeof entry !== 'object') {
    return false;
  }

  const item = entry as Record<string, unknown>;
  const role = item.role ?? item.sender ?? item.from ?? item.author ?? item.type;
  if (typeof role === 'string' && role.trim().length > 0) {
    return true;
  }

  if (
    typeof item.content === 'string' ||
    typeof item.message === 'string' ||
    typeof item.text === 'string' ||
    typeof item.response === 'string'
  ) {
    return true;
  }

  if (Array.isArray(item.parts) && item.parts.length > 0) {
    return true;
  }

  return false;
}
