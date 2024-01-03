import {ThemeObject} from '../../theme.interfaces'
import TextSizes from '../../presets/text.sizes'
import getTextVariants from '../../presets/text.variants'

const colorScheme: ThemeObject = {
    nav_item: {
        color: 'gunmetal.80',

        _hover: {
            color: 'gunmetal.60'
        },

        _active: {
            color: 'gunmetal.90'
        }
    },
    nav_item_selected: {
        color: 'carminepink.100',

        _hover: {
            color: 'carminepink.80'
        },

        _active: {
            color: 'carminepink.90'
        }
    },
    link: {
        color: 'blue.20',

        _hover: {
            color: 'blue.30'
        },

        _active: {
            color: 'blue.40'
        }
    }
}

const textVariants = getTextVariants(colorScheme)

export default {
    baseStyle: {
        lineHeight: '1',
        fontFamily: 'Roboto',
        color: 'dark',
        fontWeight: 'normal',
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
