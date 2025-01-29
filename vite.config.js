// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/Vyooh/',
  build: {
    rollupOptions: {
      input: 'index.html',
    },
  },
  server: {
    fs: {
      strict: false,
    },
  },
});
