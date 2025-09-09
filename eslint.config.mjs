// @ts-nocheck
import nextPlugin from '@next/eslint-plugin-next';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';

export default [
  {
    ignores: [
      'dist/**/*',
      '.next/**/*',
      '.astro/**/*',
      'public/**/*',
      '.vite/**/*',
      'node_modules/**/*',
      '.env',
      '.env.*',
      '*.config.js',
      '*.config.cjs',
      '*.config.mjs',
      '*.config.ts',
      '.DS_Store',
      'Thumbs.db',
      '.idea/**/*',
      '.vscode/**/*',
      '!dist/important.js'
    ]
  },
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      parser: tseslint.parser,
      globals: {
        window: 'readonly',
        document: 'readonly'
      }
    },
    plugins: {
      'react-hooks': reactHooks,
      '@next/next': nextPlugin,
      '@typescript-eslint': tseslint.plugin
    },
    rules: {
      ...nextPlugin.configs['core-web-vitals'].rules,
      ...reactHooks.configs.recommended.rules,
      ...(tseslint.configs.recommended.rules || {}),
      'react/no-unescaped-entities': 'off',
      '@next/next/no-page-custom-font': 'off',
      'react-hooks/exhaustive-deps': 'off'
    }
  }
];
