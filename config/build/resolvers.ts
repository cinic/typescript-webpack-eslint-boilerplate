import path from 'path'
import type {ResolveOptions} from 'webpack'
import type {BuildOptions} from './types/config'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [options.paths.src, 'node_modules'],
    alias: {
      // buffer: 'buffer',
      '@app': path.resolve(options.paths.src, 'app'),
      '@shared': path.resolve(options.paths.src, 'shared'),
      '@entities': path.resolve(options.paths.src, 'entities'),
      '@features': path.resolve(options.paths.src, 'features'),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
      '@pages': path.resolve(options.paths.src, 'pages'),
    },
  }
}
