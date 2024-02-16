import {ThemeObject} from '../../theme.interfaces'
import TextSizes from '../../presets/text.sizes'
import getTextVariants from '../../presets/text.variants'

const colorScheme: ThemeObject = {}

const textVariants = getTextVariants(colorScheme)

export default {
    baseStyle: {
        lineHeight: '1',
        color: 'dark',
        transition: '0.3s'
    },
    variants: {
        ...textVariants
    },
    sizes: {
        ...TextSizes
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
