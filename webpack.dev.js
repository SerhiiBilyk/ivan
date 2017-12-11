const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');
const webpack = require('webpack');
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');


console.log('development mode')
module.exports = merge(common, {
  //devtool: 'eval',
  devServer: {
    historyApiFallback: true,
    stats: {
      modules: false
    },
    host:'0.0.0.0',//'192.168.3.65', //process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    contentBase: path.join(__dirname, './docs'),
    hot: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': JSON.stringify('development')
        }
      })/*,
      new BrowserSyncPlugin(
  {
    host:'192.168.3.65',
    port:8080,

    proxy:'192.168.3.65:8080'
  },
  {

    reload: false
  }
)*/
   ]
});
