const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const SizePlugin = require('size-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Avoid inline-*** and eval-***
  optimization: {
    splitChunks: {
      chunks: 'all'
      // maxSize: 250000 // Try to split chunks bigger than size
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new SizePlugin()
  ]
})
