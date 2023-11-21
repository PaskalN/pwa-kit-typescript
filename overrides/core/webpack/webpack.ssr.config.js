'use strict'

import WEBPACK_CONFIG from '@salesforce/pwa-kit-dev/configs/webpack/config'
import {_CONFIGS} from './webpack.configs'

export const webpackSsrConfig = () => {
    // CLIENT CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.SSR]

    return CONFIG
}
