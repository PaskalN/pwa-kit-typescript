import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'
import TextSizes from '../../presets/text.sizes'

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
    }
}

export default {
    baseStyle: {
        lineHeight: '1',
        fontFamily: 'OpenSansRegular',
        letterSpacing: '0.0625rem',
        color: 'dark',
        transition: '0.3s'
    },
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        },
        light: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontFamily: 'OpenSansLight'
            }
        },
        medium: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontFamily: 'OpenSansMedium',
                fontWeight: 'bold'
            }
        },
        heavy: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontFamily: 'OpenSansSemiBold'
            }
        },
        heavy_xl: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontFamily: 'OpenSansExtraBold'
            }
        }
    },
    sizes: {
        ...TextSizes
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
