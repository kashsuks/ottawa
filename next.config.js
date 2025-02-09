const withMDX = require('@next/mdx')({ extension: /\.mdx?$/ })
module.exports = {
  output: 'export',
  trailingSlash: true,
  basePath: '',
  assetPrefix: './',
};