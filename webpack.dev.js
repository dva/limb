const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: '/',
    historyApiFallback: true,
    compress: false,
    overlay: true,
    disableHostCheck: true // FIXME not secure, but due to bug in latest webpack-dev-server
  },
  devtool: 'inline-source-map' // Use 'eval' for best build performance
})
