import globals from 'globals';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintReact from 'eslint-plugin-react';
import eslintReactHooks from 'eslint-plugin-react-hooks';
import eslintReactRefresh from 'eslint-plugin-react-refresh';
import prettierPlugin from 'eslint-plugin-prettier';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules', 'coverage', 'eslint.config.js', 'vite.config.ts'],
  },
  {
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      react: eslintReact,
      'react-hooks': eslintReactHooks,
      'react-refresh': eslintReactRefresh,
      prettier: prettierPlugin,
    },
  },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2022,
      },
      parserOptions: {
        project: ['tsconfig.json', 'tsconfig.app.json', 'tsconfig.node.json'],
        ecmaVersion: 2022,
      },
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    rules: {
      ...prettierPlugin.configs.recommended.rules,
      ...eslintConfigPrettier.rules,




      'react/destructuring-assignment': 'off',
      'react/jsx-props-no-spreading': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': 'warn',
      'react/sort-comp': 'warn',
      'react/no-array-index-key': 'warn',
      'react/state-in-constructor': ['warn', 'never'],
      'react/jsx-curly-brace-presence': 'warn',
      'react/jsx-pascal-case': 'warn',
      'react/jsx-no-bind': [
        'warn',
        {
          allowArrowFunctions: true,
        },
      ],

      'react/no-access-state-in-setstate': 'error',
      'react/no-deprecated': 'error',
      'react/no-direct-mutation-state': 'error',
      'react/no-typos': 'error',
      'react/no-unsafe': 'error',
      'react/no-unknown-property': 'error',
      'react/style-prop-object': 'error',
      'react/jsx-key': 'error',
      'react/jsx-no-undef': 'error',


      'react-hooks/rules-of-hooks': 'error',

      'prettier/prettier': [
        'warn',
        {
          endOfLine: 'auto',
        },
      ],


      'no-useless-constructor': 'off',


      '@typescript-eslint/adjacent-overload-signatures': 'warn',
      '@typescript-eslint/consistent-type-assertions': 'warn',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-array-constructor': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-extra-non-null-assertion': 'warn',
      '@typescript-eslint/no-for-in-array': 'warn',
      '@typescript-eslint/no-unnecessary-condition': 'warn',
      '@typescript-eslint/no-useless-constructor': 'warn',
      '@typescript-eslint/prefer-for-of': 'warn',
      '@typescript-eslint/prefer-includes': 'warn',
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/prefer-string-starts-ends-with': 'warn',
      '@typescript-eslint/return-await': ['error', 'in-try-catch'],
      '@typescript-eslint/naming-convention': [
        'warn',
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE', 'PascalCase'],
          leadingUnderscore: 'allow',
        },
        {
          selector: 'parameter',
          format: ['camelCase'],
          leadingUnderscore: 'allow',

          filter: {
            regex: '.*Component$',
            match: false,
          },
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        },
      ],
      '@typescript-eslint/no-inferrable-types': 'error',
    },
  },
);
