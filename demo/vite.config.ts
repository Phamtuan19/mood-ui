import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
  ],
  root: './demo',
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme'),
      '@components': resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
