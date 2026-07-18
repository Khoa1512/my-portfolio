import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';

/*
  Modern ESLint flat config (no legacy .eslintrc / FlatCompat).
  - js + typescript-eslint recommended for the language base
  - @next/eslint-plugin-next for Next.js best practices (core-web-vitals)
  - react-hooks for the rules-of-hooks + exhaustive-deps safety net
*/
export default tseslint.config(
  { ignores: ['.next/**', 'node_modules/**', 'next-env.d.ts', 'coverage/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    plugins: {
      '@next/next': nextPlugin,
      'react-hooks': reactHooks,
    },
    rules: {
      ...nextPlugin.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      // The mount-guard pattern (read localStorage / set a `mounted` flag in an
      // effect to avoid hydration mismatches) is the canonical exception to this
      // rule — keep it visible as a warning rather than a hard error.
      'react-hooks/set-state-in-effect': 'warn',
    },
  },
);
