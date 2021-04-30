const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const { inDev } = require('./webpack.helpers');

module.exports = [
  inDev && new ForkTsCheckerWebpackPlugin(),
];
