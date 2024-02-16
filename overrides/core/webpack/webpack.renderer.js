'use strict'

const WEBPACK_CONFIG = require('@salesforce/pwa-kit-dev/configs/webpack/config')
const {_CONFIGS} = require('./webpack.configs')

const webpackRendererConfig = () => {
    // RENDERER CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.RENDERER]

    return CONFIG
}

module.exports = {
    webpackRendererConfig: webpackRendererConfig
}
