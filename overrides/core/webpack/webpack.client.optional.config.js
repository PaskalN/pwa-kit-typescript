'use strict'

import WEBPACK_CONFIG from '@salesforce/pwa-kit-dev/configs/webpack/config'
import {_CONFIGS} from './webpack.configs'

export const webpackClientOptionalConfig = () => {
    // CLIENT OPTIONAL CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.CLIENT_OPTIONAL]

    return CONFIG
}
