module.exports = {
  root: true,
  extends: ['@react', 'plugin:@typescript-eslint/eslint-recommended'],
  plugins: ['unused-imports'],
  parser: '@typescript-eslint/parser',
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parserOptions: {
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
      },
      rules: {
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
        '@typescript-eslint/no-unused-vars': 'off',
        'unused-imports/no-unused-imports': 'error',
        'no-useless-escape': 'error',
        'no-bitwise': 'off',
        'no-catch-shadow': 'error',
        'no-throw-literal': 'error',
        'no-unused-vars': 'error',
        'prefer-promise-reject-errors': 'error',
        'prettier/prettier': 'error',
        'jest/no-identical-title': 'error',
        'func-call-spacing': 'off',
        'no-spaced-func': 'off',
        '@typescript-eslint/func-call-spacing': 'error',
        'react/no-unstable-nested-components': ['warn', { allowAsProps: true }],
        'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
      },
    },
  ],
  globals: {
    Response: false,
    RequestInit: false,
    PopStateEvent: false,
  },
};
