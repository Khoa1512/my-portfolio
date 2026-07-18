import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    // jsdom gives us a browser-like DOM so React Testing Library can render.
    environment: 'jsdom',
    globals: true,
    setupFiles: ['./vitest.setup.ts'],
    include: ['**/*.{test,spec}.{ts,tsx}'],
  },
  resolve: {
    // Mirror the `@/*` -> project root alias from tsconfig.json so imports
    // work the same way inside tests as they do in the app.
    alias: {
      '@': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
});
