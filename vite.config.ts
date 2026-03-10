import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'RioAssist',
      entry: 'src/main.ts',
      fileName: (format) => (format === 'es' ? 'rio-assist.es.js' : 'rio-assist.js'),
      formats: ['es', 'iife'],
    },
    rollupOptions: {
      output: {
        globals: {
          lit: 'lit',
        },
      },
    },
  },
});
