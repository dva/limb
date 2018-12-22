const merge = require('webpack-merge')
const CleanWebpackPlugin = require('clean-webpack-plugin')

const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map', // Avoid inline-*** and eval-***
  plugins: [
    new CleanWebpackPlugin(['dist'])
  ]
})
