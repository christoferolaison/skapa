module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    node: true,
  },
  parser: 'babel-eslint',
  plugins: [
    'react',
    'react-hooks',
    'flowtype',
    'import',
    'jsx-a11y',
    'jest',
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:flowtype/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jsx-a11y/recommended',
    'plugin:jest/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'error',
    'flowtype/newline-after-flow-annotation': [
      'error',
      'always',
    ],
    'flowtype/sort-keys': [
      'error',
      'asc',
      {
        caseSensitive: true,
        natural: false,
      },
    ],
    'import/order': [
      'error',
      { 'newlines-between': 'always' },
    ],
    'import/first': 'error',
    'import/no-extraneous-dependencies': 'error',
  },
}
