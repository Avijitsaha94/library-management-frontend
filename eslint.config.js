import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tsPlugin from '@typescript-eslint/eslint-plugin'  // এখানে ঠিক করলাম
import { globalIgnores } from 'eslint/config'

export default [
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: '@typescript-eslint/parser',  // parser সেট করতে হবে (যদি আলাদা করা না থাকে)
      ecmaVersion: 2020,
      globals: globals.browser,
      parserOptions: {
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    extends: [
      js.configs.recommended,
      tsPlugin.configs.recommended,
      reactHooks.configs['recommended'],
      reactRefresh.configs.vite,
    ],
    rules: {
       
    "@typescript-eslint/no-explicit-any": "error"
  
    },
  },
]
