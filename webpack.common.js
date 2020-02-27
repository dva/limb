// @ts-check
const path = require('path')
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackBar = require('webpackbar')
const PreloadWebpackPlugin = require('preload-webpack-plugin')
const PnpWebpackPlugin = require('pnp-webpack-plugin')

module.exports = {
  entry: ['./src/index.tsx', './src/styles/index.scss'],
  module: {
    rules: [
      {
        test: /\.(js|ts|tsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom'
    },
    extensions: ['.js', '.ts', '.tsx'],
    plugins: [
      PnpWebpackPlugin,
    ]
  },
  resolveLoader: {
    plugins: [
      PnpWebpackPlugin.moduleLoader(module)
    ]
  },
  output: {
    filename: '[name].[hash].js',
    chunkFilename: '[name].[hash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/'
  },
  plugins: [
    new WebpackBar(),
    new CaseSensitivePathsPlugin(),
    new LodashModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new PreloadWebpackPlugin({
      include: 'initial'
    })
  ]
}
