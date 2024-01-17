module.exports = {
  root: true,
  extends: ['eslint:recommended', 'next'],
  env: {
    browser: true,
    node: true,
    es2022: true,
    jest: false,
  },
  overrides: [
    {
      files: ['**/*.ts', '**/*.tsx', '**/*.mts'],
      extends: [
        'eslint:recommended',
        'plugin:perfectionist/recommended-natural',
        'plugin:@typescript-eslint/strict-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        'airbnb',
        'airbnb-typescript',
        'next',
        'prettier',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: ['tsconfig.json'],
        tsconfigRootDir: __dirname,
      },
      plugins: ['@typescript-eslint', 'prettier'],
      rules: {
        'react/jsx-props-no-spreading': 'off',
        'import/first': 'error',
        'import/newline-after-import': 'error',
        'import/no-duplicates': 'error',
        '@typescript-eslint/consistent-type-imports': 'error',
        'prettier/prettier': 'error',
        'import/order': 'off',
        'import/prefer-default-export': 'off',
        'no-console': 'off',
        'react/no-unused-prop-types': 'off',
        'react/require-default-props': 'off',
        '@typescript-eslint/consistent-type-definitions': 'off'
      },
      settings: {
        'import/resolver': {
          typescript: true,
          node: true,
        },
      },
    },
  ],
};
