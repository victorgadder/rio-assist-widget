export type AttachmentKind = 'text' | 'sheet' | 'pdf' | 'image' | 'audio';

export type AttachmentItem = {
  id: string;
  file: File;
  name: string;
  typeLabel: string;
  kind: AttachmentKind;
  previewUrl?: string;
};
