'use strict'

const WEBPACK_CONFIG = require('@salesforce/pwa-kit-dev/configs/webpack/config')
const {_CONFIGS} = require('./webpack.configs')

const webpackClientOptionalConfig = () => {
    // CLIENT OPTIONAL CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.CLIENT_OPTIONAL]

    return CONFIG
}

module.exports = {
    webpackClientOptionalConfig: webpackClientOptionalConfig
}
