module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    semi: ['error', 'never'],
    indent: ['error', 2],
    'react/jsx-filename-extension': ['off'],
    'no-use-before-define': ['off'],
    '@typescript-eslint/no-use-before-define': ['error'],
    'import/no-unresolved': ['off'],
    'react/jsx-max-props-per-line': ['error', { maximum: 3 }],
    'jsx-a11y/anchor-is-valid': ['off'],
    'object-curly-newline': ['error', {
      ObjectExpression: { multiline: true },
      ObjectPattern: 'never',
    }],
  },
}
