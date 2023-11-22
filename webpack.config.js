'use strict'
import WEBPACK_CONFIG from '@salesforce/pwa-kit-dev/configs/webpack/config'

import { webpackClientConfig } from './overrides/core/webpack/webpack.client.config'
import { webpackClientOptionalConfig } from './overrides/core/webpack/webpack.client.optional.config'
import { webpackRendererConfig } from './overrides/core/webpack/webpack.renderer'
import { webpackSsrConfig } from './overrides/core/webpack/webpack.ssr.config'

// ALL CONFIGS IN PWA KIT WEBPACK
const _CONFIGS = {
    CLIENT: 0,
    SSR: 1,
    RENDERER: 2,
    CLIENT_OPTIONAL: 3,
    REQUEST_PROCESSOR: 4
}

// CLIENT CONFIGS
WEBPACK_CONFIG[_CONFIGS.CLIENT] = webpackClientConfig()
WEBPACK_CONFIG[_CONFIGS.SSR] = webpackSsrConfig()
WEBPACK_CONFIG[_CONFIGS.CLIENT_OPTIONAL] = webpackClientOptionalConfig()
WEBPACK_CONFIG[_CONFIGS.RENDERER] = webpackRendererConfig()

// EXPORT THE CONFIG
module.exports = WEBPACK_CONFIG

