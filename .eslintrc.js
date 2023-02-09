// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

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
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json', './tsconfig.eslint.json'],
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true,
    },
  },
  root: true,
  settings: {
    'import/resolver': {
      typescript: {},
      alias: {
        map: [
          ['@lib', path.resolve(__dirname, 'src', 'shared', 'lib')],
          ['@ui', path.resolve(__dirname, 'src', 'shared', 'ui')],
          ['@entities', path.resolve(__dirname, 'src', 'entities')],
          ['@features', path.resolve(__dirname, 'src', 'features')],
          ['@widgets', path.resolve(__dirname, 'src', 'widgets')],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // semi: ['error', 'never'],
  },
  ignorePatterns: ['**/*.d.ts'],
}
