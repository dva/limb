const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'public/'),
    port: 3000,
    publicPath: 'http://localhost:3000/dist/',
    historyApiFallback: true,
    compress: true,
    overlay: true,
  },
  devtool: 'inline-source-map', // Use 'eval' for best build performance
});
