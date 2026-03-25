import { describe, expect, it } from 'vitest';
import {
  addFilesToSelection,
  buildAttachmentItem,
  buildVoiceAttachment,
  createAudioFile,
  getAudioExtension,
  removeAttachmentById,
  resolveAttachmentKind,
} from '../src/application/attachment-flow';

describe('attachment-flow', () => {
  it('resolves supported attachment kinds', () => {
    expect(resolveAttachmentKind('pdf')).toBe('pdf');
    expect(resolveAttachmentKind('png')).toBe('image');
    expect(resolveAttachmentKind('unknown')).toBeNull();
  });

  it('builds attachment items and rejects unsupported files', () => {
    const image = new File(['x'], 'foto.png', { type: 'image/png' });
    const built = buildAttachmentItem(image, {
      createId: () => 'att-1',
      createPreviewUrl: () => 'blob://preview',
    });

    expect(built.item).toMatchObject({
      id: 'att-1',
      kind: 'image',
      previewUrl: 'blob://preview',
    });

    const unsupported = buildAttachmentItem(
      new File(['x'], 'arquivo.exe', { type: 'application/octet-stream' }),
      {
        createId: () => 'att-2',
        createPreviewUrl: () => 'blob://preview',
      },
    );

    expect(unsupported.error).toContain('Formato nao suportado');
  });

  it('adds files to selection respecting limit and validation', () => {
    const files = [
      new File(['a'], 'a.pdf', { type: 'application/pdf' }),
      new File(['b'], 'b.csv', { type: 'text/csv' }),
    ];

    const result = addFilesToSelection([], files, {
      createId: () => Math.random().toString(),
      createPreviewUrl: () => 'blob://preview',
    });

    expect(result.files).toHaveLength(2);
    expect(result.error).toBe('');
  });

  it('creates audio file and voice attachment with transcript', () => {
    const blob = new Blob(['audio'], { type: 'audio/webm' });
    const file = createAudioFile(blob, () => 123);
    expect(file.name).toBe('mensagem-voz-123.webm');
    expect(getAudioExtension('audio/mp4')).toBe('m4a');

    const result = buildVoiceAttachment({
      blob,
      existingFiles: [],
      transcriptSegments: ['ola', 'mundo'],
      transcriptPreview: '',
      createId: () => 'voice-1',
      now: () => 123,
    });

    expect(result).toMatchObject({
      voiceAttachmentId: 'voice-1',
      voiceTranscript: 'ola mundo',
    });
  });

  it('removes attachments by id', () => {
    const files = [
      {
        id: '1',
        file: new File(['a'], 'a.pdf'),
        name: 'a.pdf',
        typeLabel: 'Documento PDF',
        kind: 'pdf' as const,
      },
      {
        id: '2',
        file: new File(['b'], 'b.png'),
        name: 'b.png',
        typeLabel: 'Imagem',
        kind: 'image' as const,
        previewUrl: 'blob://x',
      },
    ];

    const result = removeAttachmentById(files, '2');
    expect(result.removed?.id).toBe('2');
    expect(result.files).toHaveLength(1);
    expect(result.shouldClearError).toBe(false);
  });
});
