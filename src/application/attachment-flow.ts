import type { AttachmentItem, AttachmentKind } from '../domain/attachment';

export const MAX_ATTACHMENT_COUNT = 3;
export const MAX_ATTACHMENT_SIZE_BYTES = 10 * 1024 * 1024;

export const ATTACHMENT_KIND_MAP: Record<AttachmentKind, string[]> = {
  text: ['txt', 'doc', 'docx'],
  sheet: ['xls', 'xlsx', 'csv'],
  pdf: ['pdf'],
  image: ['jpg', 'jpeg', 'png'],
  audio: ['wav', 'mp3', 'm4a', 'ogg', 'webm'],
};

export const ATTACHMENT_KIND_LABEL: Record<AttachmentKind, string> = {
  text: 'Documento de Texto',
  sheet: 'Planilha',
  pdf: 'Documento PDF',
  image: 'Imagem',
  audio: 'Mensagem de audio',
};

export function getFileExtension(filename: string) {
  const parts = filename.split('.');
  if (parts.length < 2) {
    return '';
  }

  return parts[parts.length - 1].toLowerCase();
}

export function resolveAttachmentKind(extension: string): AttachmentKind | null {
  const normalized = extension.toLowerCase();
  const entries = Object.entries(ATTACHMENT_KIND_MAP) as [AttachmentKind, string[]][];

  for (const [kind, extensions] of entries) {
    if (extensions.includes(normalized)) {
      return kind;
    }
  }

  return null;
}

export function buildAttachmentItem(
  file: File,
  deps: {
    createId: () => string;
    createPreviewUrl: (file: File) => string;
  },
): { item?: AttachmentItem; error?: string } {
  if (file.size > MAX_ATTACHMENT_SIZE_BYTES) {
    return { error: `O arquivo ${file.name} excede 10 MB.` };
  }

  const extension = getFileExtension(file.name);
  const kind = resolveAttachmentKind(extension);
  if (!kind) {
    return { error: `Formato nao suportado: ${file.name}.` };
  }

  return {
    item: {
      id: deps.createId(),
      file,
      name: file.name,
      typeLabel: ATTACHMENT_KIND_LABEL[kind],
      kind,
      previewUrl: kind === 'image' ? deps.createPreviewUrl(file) : undefined,
    },
  };
}

export function addFilesToSelection(
  currentFiles: AttachmentItem[],
  files: File[],
  deps: {
    createId: () => string;
    createPreviewUrl: (file: File) => string;
  },
) {
  const next = [...currentFiles];
  let error = '';

  for (const file of files) {
    if (next.length >= MAX_ATTACHMENT_COUNT) {
      error = 'Voce pode anexar no maximo 3 arquivos.';
      break;
    }

    const { item, error: itemError } = buildAttachmentItem(file, deps);
    if (itemError) {
      error = itemError;
      continue;
    }

    if (item) {
      next.push(item);
    }
  }

  return { files: next, error };
}

export function getAudioExtension(mimeType: string) {
  const normalized = mimeType.toLowerCase();
  if (normalized.includes('ogg')) {
    return 'ogg';
  }
  if (normalized.includes('mpeg') || normalized.includes('mp3')) {
    return 'mp3';
  }
  if (normalized.includes('wav')) {
    return 'wav';
  }
  if (normalized.includes('mp4') || normalized.includes('m4a')) {
    return 'm4a';
  }
  if (normalized.includes('webm')) {
    return 'webm';
  }
  return 'webm';
}

export function createAudioFile(blob: Blob, now: () => number) {
  const extension = getAudioExtension(blob.type || 'audio/webm');
  const filename = `mensagem-voz-${now()}.${extension}`;
  return new File([blob], filename, { type: blob.type || 'audio/webm' });
}

export function buildVoiceAttachment(input: {
  blob: Blob;
  existingFiles: AttachmentItem[];
  transcriptSegments: string[];
  transcriptPreview: string;
  createId: () => string;
  now: () => number;
}) {
  if (!input.blob || input.blob.size === 0) {
    return null;
  }

  if (input.existingFiles.length >= MAX_ATTACHMENT_COUNT) {
    return { error: 'Voce pode anexar no maximo 3 arquivos.' };
  }

  const file = createAudioFile(input.blob, input.now);
  const id = input.createId();
  const transcript = input.transcriptSegments.join(' ').trim() || input.transcriptPreview;

  const item: AttachmentItem = {
    id,
    file,
    name: file.name,
    typeLabel: ATTACHMENT_KIND_LABEL.audio,
    kind: 'audio',
  };

  return {
    item,
    voiceAttachmentId: id,
    voiceTranscript: transcript.trim(),
  };
}

export function removeAttachmentById(files: AttachmentItem[], id: string) {
  const removed = files.find((item) => item.id === id) ?? null;
  const nextFiles = files.filter((item) => item.id !== id);

  return {
    removed,
    files: nextFiles,
    shouldClearError: nextFiles.length === 0,
  };
}
