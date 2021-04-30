const path = require('path');
const cwd = process.cwd();

const inDev = () => {
  return process.env.NODE_ENV === 'development';
};

const createWebpackAliases = (pAliases) => {
  const lResult = {};
  for(const lAliasName in pAliases) {
    lResult[lAliasName] = path.join(
      cwd,
      pAliases[lAliasName],
    );
  }
  return lResult;
};

module.exports = {
  inDev,
  createWebpackAliases,
};
