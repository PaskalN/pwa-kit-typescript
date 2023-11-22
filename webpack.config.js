'use strict'
const WEBPACK_CONFIG = require('@salesforce/pwa-kit-dev/configs/webpack/config')
const {_CONFIGS} = require('./overrides/core/webpack/webpack.configs')
const {webpackClientConfig} = require('./overrides/core/webpack/webpack.client.config')
const {webpackClientOptionalConfig} = require('./overrides/core/webpack/webpack.client.optional.config')
const {webpackRendererConfig} = require('./overrides/core/webpack/webpack.renderer')
const {webpackSsrConfig} = require('./overrides/core/webpack/webpack.ssr.config')

// CLIENT CONFIGS
WEBPACK_CONFIG[_CONFIGS.CLIENT] = webpackClientConfig()
WEBPACK_CONFIG[_CONFIGS.SSR] = webpackSsrConfig()
WEBPACK_CONFIG[_CONFIGS.CLIENT_OPTIONAL] = webpackClientOptionalConfig()
WEBPACK_CONFIG[_CONFIGS.RENDERER] = webpackRendererConfig()

// EXPORT THE CONFIG
module.exports = WEBPACK_CONFIG
