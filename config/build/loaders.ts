import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import type {RuleSetRule} from 'webpack'
import type {BuildOptions} from './types/config'

export function buildLoaders(options: BuildOptions): RuleSetRule[] {
  const cssLoader = {
    test: /\.css$/i,
    use: [
      options.isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          esModule: false,
          modules: {
            localIdentName: options.isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:5]',
          },
          sourceMap: options.isDev,
          importLoaders: 1,
        },
      },
      'postcss-loader',
    ],
  }
  const tsLoader = {
    test: /\.tsx?$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  }

  return [tsLoader, cssLoader]
}
