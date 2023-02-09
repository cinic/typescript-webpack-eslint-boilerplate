module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
  ],
  plugins: ['@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
      node: {},
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // semi: ['error', 'never'],
  },
}
