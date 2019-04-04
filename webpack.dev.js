const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
    compress: false,
    overlay: true
  },
  devtool: 'inline-source-map' // Use 'eval' for best build performance
})
