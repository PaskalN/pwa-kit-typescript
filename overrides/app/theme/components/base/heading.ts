import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'
import TextSizes from '../../presets/text.sizes'

const colorScheme: ThemeObject = {}

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
