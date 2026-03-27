import { addFilesToSelection, removeAttachmentById } from './attachment-flow';
import type { AttachmentItem } from '../domain/attachment';

export function prepareFileSelection(input: {
  currentFiles: AttachmentItem[];
  incomingFiles: File[];
  createId: () => string;
  createPreviewUrl: (file: File) => string;
}) {
  return addFilesToSelection(input.currentFiles, input.incomingFiles, {
    createId: input.createId,
    createPreviewUrl: input.createPreviewUrl,
  });
}

export function buildAttachmentRemoval(input: {
  currentFiles: AttachmentItem[];
  id: string;
}) {
  return removeAttachmentById(input.currentFiles, input.id);
}
