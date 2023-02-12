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
          ['@app', path.resolve(__dirname, 'src', 'app')],
          ['@shared', path.resolve(__dirname, 'src', 'shared')],
          ['@entities', path.resolve(__dirname, 'src', 'entities')],
          ['@features', path.resolve(__dirname, 'src', 'features')],
          ['@widgets', path.resolve(__dirname, 'src', 'widgets')],
          ['@pages', path.resolve(__dirname, 'src', 'pages')],
        ],
        extensions: ['.ts', '.js', '.tsx', '.json', '.css'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  rules: {
    // semi: ['error', 'never'],
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {variables: false, typedefs: false, ignoreTypeReferences: true},
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
  },
  ignorePatterns: ['**/*.d.ts'],
}
