module.exports = {
  presets: [
    ['@babel/preset-env', {targets: {node: 'current'}}],
    '@babel/preset-typescript',
    [
      '@babel/preset-react',
      {
        runtime: 'automatic',
      },
    ],
  ],
  plugins: [
    [
      'effector/babel-plugin',
      {
        importName: '@shared/lib/state',
        addLoc: true,
        addNames: true,
      },
    ],
  ]
}
