import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import { resolve } from 'path';

export default defineConfig(({ command }) => ({
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

  build: command === 'build' ? {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MoodUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'assets/[name][extname]',
      },
    },
    cssCodeSplit: true,
    sourcemap: true,
    minify: false,
    reportCompressedSize: true,
  } : undefined,

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

  css: {
    modules: {
      localsConvention: 'camelCase',
    },
  },
}));
