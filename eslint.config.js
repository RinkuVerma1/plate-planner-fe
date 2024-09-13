import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    ignores: ['dist'], // Ignore build directories
    files: ['**/*.{ts,tsx,js,jsx}'], // Apply ESLint to relevant files
    languageOptions: {
      parser: tsParser, // TypeScript parser
      ecmaVersion: 2021, // ES2021 features
      sourceType: 'module', // Use ES Modules
    },
    plugins: {
      '@typescript-eslint': tsPlugin, // Use TypeScript plugin
    },
    rules: {
      // Core rules
      'no-unused-vars': 'warn',
      'prefer-const': 'error',

      // TypeScript-specific rules
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-empty-function': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
    },
  },
];
