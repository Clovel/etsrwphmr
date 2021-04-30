const { createWebpackAliases } = require('./webpack.helpers');

// Export aliases
module.exports = createWebpackAliases(
  {
    assets: 'assets',
    src: 'src',
    client: 'src/client',
    server: 'src/server',
    imports: 'src/imports',
    helpers: 'src/imports/helpers',
  },
);
