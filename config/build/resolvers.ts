import path from 'path'
import type {ResolveOptions} from 'webpack'
import type {BuildOptions} from './types/config'

export function buildResolvers({paths}: {paths: BuildOptions['paths']}): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    alias: {
      // buffer: 'buffer',
      '@app': path.resolve(paths.src, 'app'),
      '@shared': path.resolve(paths.src, 'shared'),
      '@entities': path.resolve(paths.src, 'entities'),
      '@features': path.resolve(paths.src, 'features'),
      '@widgets': path.resolve(paths.src, 'widgets'),
      '@pages': path.resolve(paths.src, 'pages'),
    },
  }
}
