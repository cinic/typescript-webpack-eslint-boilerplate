// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'plugin:import/recommended',
    'plugin:i18next/recommended',
    'plugin:jest-dom/recommended',
    'plugin:testing-library/react',
  ],
  plugins: [
    'react',
    'react-hooks',
    '@typescript-eslint',
    'simple-import-sort',
    'i18next',
    'jest-dom',
    'testing-library',
  ],
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
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Packages. `react` related packages come first.
          [
            '^react',
            '^@?\\w',
            // Internal packages.
            '^(@|@ui|components|utils|config|vendored-lib)(/.*|$)',
            // Side effect imports.
            '^\\u0000',
            // Parent imports. Put `..` last.
            '^\\.\\.(?!/?$)',
            '^\\.\\./?$',
            // Other relative imports. Put same-folder imports and `.` last.
            '^\\./(?=.*/)(?!/?$)',
            '^\\.(?!/?$)',
            '^\\./?$',
            // Style imports.
            '^.+\\.s?css$',
          ],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {variables: false, typedefs: false, ignoreTypeReferences: true},
    ],
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', {argsIgnorePattern: '^_'}],
    'i18next/no-literal-string': ['error', {mode: 'jsx-text-only'}],
  },
  ignorePatterns: ['**/*.d.ts'],
  overrides: [
    {
      files: ['**/?(*.)+(spec|test).ts?(x)'],
      rules: {
        'i18next/no-literal-string': 'off',
      },
    },
  ],
}
