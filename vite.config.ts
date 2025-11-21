import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      name: 'RioAssist',
      entry: 'src/main.ts',
      fileName: () => 'rio-assist.js',
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
