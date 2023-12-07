import {extendBaseTheme} from '@chakra-ui/react'

// Foundational style
import colors from './foundations/colors'
import sizes from './foundations/sizes'
import fonts from './foundations/fonts'
import breakpoints from './foundations/breakpoints'
import shadows from './foundations/shadows'
import layerStyles from './foundations/layer-styles'
import radii from './foundations/radius'

// Base component style
import Text from './components/base/text'
import Heading from './components/base/heading'
import Button from './components/base/button'

// Project Component
import SimpleCard from './components/project/simple-card'

const themeExt = {
    /**
     * Foundations
     */
    colors,

    sizes,

    fonts,

    breakpoints,

    shadows,

    radii,

    layerStyles,

    /**
     * Components
     */
    components: {
        // Base
        Text,

        Heading,

        Button,

        // Project
        SimpleCard
    }
}

export const themeDefault = extendBaseTheme({...themeExt})

// console.log(themeDefault)
