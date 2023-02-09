import type {ResolveOptions} from 'webpack'
import type {BuildOptions} from './types/config'
import path from 'path'

export function buildResolvers(options: BuildOptions): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      // buffer: 'buffer',
      '@lib': path.resolve(options.paths.src, 'shared', 'lib'),
      '@ui': path.resolve(options.paths.src, 'shared', 'ui'),
      '@entities': path.resolve(options.paths.src, 'entities'),
      '@features': path.resolve(options.paths.src, 'features'),
      '@widgets': path.resolve(options.paths.src, 'widgets'),
    },
  }
}
