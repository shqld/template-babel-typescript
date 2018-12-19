const path = require('path')
const babelConfig = require('./.babelrc.js')

module.exports = {
  mode: 'development',
  entry: {
    client: path.resolve('client/index.ts'),
    worker: path.resolve('./worker/index.ts'),
  },
  output: {
    path: path.resolve('dist'),
    filename: '[name].js',
    publicPath: '/assets/',
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'babel-loader',
        options: babelConfig,
      },
    ],
  },
}
