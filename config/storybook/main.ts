import type {StorybookConfig} from '@storybook/core-common'
import path from 'path'
import {buildWebpackConfig} from '../build/webpack'
const mode = 'development'
const port = 3001
const isDev = mode === 'development'
const paths = {
  entry: '',
  build: '',
  html: '',
  src: path.resolve(__dirname, '..', '..', 'src'),
}
const custom = buildWebpackConfig({
  mode,
  isDev,
  paths,
  port,
})
const config: StorybookConfig = {
  stories: ['../../src/**/*.stories.@(js|jsx|ts|tsx)', '../../src/**/stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react',
    options: {
      builder: {
        lazyCompilation: true,
        fsCache: true,
      },
    },
  },
  core: {
    builder: 'webpack5',
    disableTelemetry: true,
  },
  // Закоментировано для нормальной работы Loki тестов
  // features: {
  //   storyStoreV7: true,
  // },
  typescript: {
    check: false,
    checkOptions: {},
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      propFilter: (prop: {parent: {fileName: string}}) =>
        prop.parent ? !/node_modules/.test(prop.parent.fileName) : true,
      compilerOptions: {
        allowSyntheticDefaultImports: false,
        esModuleInterop: false,
      },
    },
  },
  webpackFinal: async (config) => {
    return {
      ...config,
      module: {
        ...config.module,
        rules: custom.module?.rules,
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          ...custom.resolve?.alias,
        },
        modules: custom.resolve?.modules,
      },
    }
  },
}
module.exports = config
