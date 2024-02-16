'use strict'

const WEBPACK_CONFIG = require('@salesforce/pwa-kit-dev/configs/webpack/config')
const {_CONFIGS} = require('./webpack.configs')

const webpackSsrConfig = () => {
    // CLIENT CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.SSR]

    return CONFIG
}

module.exports = {
    webpackSsrConfig: webpackSsrConfig
}