import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'

const colorScheme: ThemeObject = {}

export default {
    baseStyle: {},
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        },
        icon: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                bg: 'rgba(0, 0, 0, 0)',
                borderRadius: 'iconButton',
                transition: '0.3s',

                _hover: {
                    bg: 'rgba(0, 0, 0, 0.15)'
                },

                _disabled: {
                    bg: 'red'
                },

                ...scheme
            }
        }
    },
    sizes: {
        sm: {
            w: '2.25rem',
            h: '2.25rem'
        }
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
