const rules = require('./webpack.rules');
const plugins = require('./webpack.plugins');

module.exports = {
  module: {
    rules,
  },
  plugins: plugins.filter(Boolean),
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
      'react-dom': '@hot-loader/react-dom',
      // Custom Aliases
      ...require('./webpack.aliases'),
    },
  },
};
