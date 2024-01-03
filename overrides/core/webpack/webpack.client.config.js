'use strict'

const WEBPACK_CONFIG = require('@salesforce/pwa-kit-dev/configs/webpack/config')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

const {_CONFIGS} = require('./webpack.configs')

const webpackClientConfig = () => {
    // CLIENT CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.CLIENT]

    // Remove existing plugin from the webpack plugins
    // ADD The constructor name in the array EXCLUDE
    const EXCLUDE = []
    const PLUGINS = CONFIG.plugins.filter((plugin) => {
        return !EXCLUDE.includes(plugin.__proto__.constructor.name)
    })

    // ADD NEW PLUGINS
    PLUGINS.push(new ForkTsCheckerWebpackPlugin())

    // REASIGN PLUGINS
    CONFIG.plugins = PLUGINS
    
    return CONFIG
}

module.exports = {
    webpackClientConfig: webpackClientConfig
}