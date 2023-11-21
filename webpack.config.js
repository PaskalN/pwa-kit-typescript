'use strict'
import WEBPACK_CONFIG from '@salesforce/pwa-kit-dev/configs/webpack/config'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'

// ALL CONFIGS IN PWA KIT WEBPACK
const _CONFIGS = {
    CLIENT: 0,
    SSR: 1,
    RENDERER: 2,
    CLIENT_OPTIONAL: 3,
    REQUEST_PROCESSOR: 4
}

// CLIENT CONFIG
const CLIENT_CONFIG = WEBPACK_CONFIG[_CONFIGS.CLIENT]

// Remove existing plugin from the webpack plugins
// ADD The constructor name in the array EXCLUDE
const EXCLUDE = []
const PLUGINS = CLIENT_CONFIG.plugins.filter(plugin => {
    return !EXCLUDE.includes(plugin.__proto__.constructor.name)
})

// ADD NEW PLUGINS
PLUGINS.push(new ForkTsCheckerWebpackPlugin())

// REASIGN PLUGINS
CLIENT_CONFIG.plugins = PLUGINS
WEBPACK_CONFIG[_CONFIGS.CLIENT] = CLIENT_CONFIG

// EXPORT THE CONFIG
module.exports = WEBPACK_CONFIG

