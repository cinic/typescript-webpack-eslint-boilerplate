import path from 'path'
import {BuildEnv} from './config/build/types/config'
import {buildWebpackConfig} from './config/build/webpack'

export default (env: BuildEnv) => {
  const mode = env.mode || 'development'
  const port = env.port || 3001
  const isDev = mode === 'development'
  const paths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  }

  return buildWebpackConfig({
    mode,
    isDev,
    paths,
    port,
  })
}
