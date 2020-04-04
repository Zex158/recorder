const webpackConfigCreator = require('./webpack.common');
const merge = require('webpack-merge');
const path = require('path');
const apiMocker = require('webpack-api-mocker');
const port = process.env.port;
const config = {
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    hot: true,
    inline: true,
    port: port,
    before(app) {
      apiMocker(app, path.resolve(__dirname, '../mock/index.js'));
    },
  },
};

const options = {
  mode: 'development',
};

module.exports = merge(webpackConfigCreator(options), config);
