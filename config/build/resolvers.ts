import type {ResolveOptions} from 'webpack'

export function buildResolvers(): ResolveOptions {
  return {
    extensions: ['.ts', '.tsx', '.js'],
  }
}
