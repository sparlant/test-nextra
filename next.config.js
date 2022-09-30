const withNextra = require('nextra')({
    theme: './layout',
    themeConfig: './theme.config.js'
})
module.exports = withNextra({
    basePath: process.env.DEV_ENV ? '' : '/test-nextra',
    assetPrefix: process.env.DEV_ENV ? '' : '/test-nextra'
})