import { defineConfig } from 'vite';

export default defineConfig({
  root: '.',
  base: '/BBVA-Countries-Project-Bayes/',
  build: {
    outDir: 'dist',
  },
  server: {
    open: true,
  },
});
