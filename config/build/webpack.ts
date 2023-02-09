import type {BuildOptions} from './types/config'
import webpack from 'webpack'
import {buildPlugins} from './plugins'
import {buildLoaders} from './loaders'
import {buildResolvers} from './resolvers'
import {buildDevServer} from './dev-server'

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
    resolve: buildResolvers(),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
