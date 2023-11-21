'use strict'

import WEBPACK_CONFIG from '@salesforce/pwa-kit-dev/configs/webpack/config'
import {_CONFIGS} from './webpack.configs'

export const webpackRendererConfig = () => {
    // RENDERER CONFIG
    const CONFIG = WEBPACK_CONFIG[_CONFIGS.RENDERER]

    return CONFIG
}
