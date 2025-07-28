import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import reactRefreshPlugin from 'eslint-plugin-react-refresh';
import jsxA11yPlugin from 'eslint-plugin-jsx-a11y';
import regexpPlugin from 'eslint-plugin-regexp';
import storybookPlugin from 'eslint-plugin-storybook';

export default [
  {
    ignores: ['apps/web/dist/', 'apps/web/storybook-static/', 'node_modules/'],
  },
  {
    files: ['apps/web/**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: './apps/web/tsconfig.eslint.json',
        tsconfigRootDir: process.cwd(),
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: { jsx: true },
      },
      globals: { window: 'readonly', document: 'readonly' },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      react: reactPlugin,
      'react-hooks': reactHooksPlugin,
      'react-refresh': reactRefreshPlugin,
      'jsx-a11y': jsxA11yPlugin,
      regexp: regexpPlugin,
      storybook: storybookPlugin,
    },
    rules: {
      ...reactHooksPlugin.configs.recommended.rules,
      'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
      '@typescript-eslint/restrict-template-expressions': 'error',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      'jsx-a11y/anchor-has-content': 'error',
      'regexp/no-dupe-characters-character-class': 'error',
      'regexp/strict': 'error',
    },
    settings: { react: { version: 'detect' } },
  },
];