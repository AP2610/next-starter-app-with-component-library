import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { FlatCompat } from '@eslint/eslintrc';
import typescript from '@typescript-eslint/parser';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// This allows using older plugin configurations with the new ESLint flat config system
const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const baseConfig = [
  // Extend recommended configurations from TypeScript ESLint and Prettier plugins
  ...compat.extends('plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'plugin:turbo/recommended'),
  {
    languageOptions: {
      parser: typescript, // Use TypeScript parser instead of default JavaScript parser
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module', // Treat files as ES modules (allows import/export)
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'prettier/prettier': 'warn',
      'turbo/no-undeclared-env-vars': 'warn',
    },
  },
];

export default baseConfig;
