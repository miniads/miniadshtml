const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    compress: true,
    liveReload: true,
    hot: true,
    open: true,
    static: ['./'],
    port: '8080',
    allowedHosts: [
      'all'
    ]
  }

});
