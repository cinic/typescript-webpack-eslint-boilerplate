import webpack from 'webpack'
import type {BuildOptions} from './types/config'
import {buildDevServer} from './dev-server'
import {buildLoaders} from './loaders'
import {buildPlugins} from './plugins'
import {buildResolvers} from './resolvers'

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const {mode, paths, isDev} = options

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: '[name].[contenthash].js',
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
