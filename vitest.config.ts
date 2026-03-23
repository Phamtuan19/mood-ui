/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    vanillaExtractPlugin(),
  ],

  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@theme': resolve(__dirname, './src/theme'),
      '@components': resolve(__dirname, './src/components'),
    },
  },

  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    include: ['src/**/*.test.ts', 'src/**/*.test.tsx'],
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'tests/', 'vite.config.ts'],
    },
  },
});
