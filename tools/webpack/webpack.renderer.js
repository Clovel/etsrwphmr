const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins,
  resolve: {
    extensions: [
      '.js',
      '.ts',
      '.jsx',
      '.tsx',
      '.css',
      '.json',
    ],
    alias: {
      // React Hot Loader Patch
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
};
