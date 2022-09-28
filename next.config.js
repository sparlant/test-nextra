const withNextra = require('nextra')({
    theme: 'nextra-theme-docs',
    themeConfig: './theme.config.js',
    basePath: '/test-nextra',
    assetPrefix: '/test-nextra'
})
module.exports = withNextra()