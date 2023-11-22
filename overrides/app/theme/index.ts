import {extendBaseTheme} from '@chakra-ui/react'

// Foundational style
import colors from './foundations/colors'
import sizes from './foundations/sizes'
import fonts from './foundations/fonts'
import breakpoints from './foundations/breakpoints'
import shadows from './foundations/shadows'
import layerStyles from './foundations/layerStyles'

// Base component style
import Text from './components/base/text'
import Heading from './components/base/heading'

// Project Component

const themeExt = {
    /**
     * Foundations
     */
    colors,

    sizes,

    fonts,

    breakpoints,

    shadows,

    layerStyles,

    /**
     * Components
     */
    components: {
        // Base
        Text,

        Heading
    }
}

export const themeDefault = extendBaseTheme({...themeExt})

// console.log(themeDefault)
