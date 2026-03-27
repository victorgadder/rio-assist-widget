import { describe, expect, it } from 'vitest';
import {
  buildAttachmentRemoval,
  prepareFileSelection,
} from '../src/application/file-selection-flow';

describe('file-selection-flow', () => {
  it('prepares selected files through attachment flow', () => {
    const file = {
      name: 'arquivo.pdf',
      size: 1024,
    } as File;

    const result = prepareFileSelection({
      currentFiles: [],
      incomingFiles: [file],
      createId: () => 'file-1',
      createPreviewUrl: () => 'blob:preview',
    });

    expect(result.files).toHaveLength(1);
    expect(result.files[0]?.id).toBe('file-1');
    expect(result.error).toBe('');
  });

  it('builds attachment removal state', () => {
    const result = buildAttachmentRemoval({
      currentFiles: [
        {
          id: 'file-1',
          file: {} as File,
          name: 'arquivo.pdf',
          typeLabel: 'Documento PDF',
          kind: 'pdf',
        },
      ],
      id: 'file-1',
    });

    expect(result.files).toEqual([]);
    expect(result.removed?.id).toBe('file-1');
    expect(result.shouldClearError).toBe(true);
  });
});
