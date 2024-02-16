import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'

const colorScheme: ThemeObject = {
    light: {
        bg: 'rgba(255, 255, 255, 0)',
        _hover: {
            bg: 'rgba(255, 255, 255, 0.15)'
        }
    },

    login: {
        bg: 'blue.30',
        _hover: {
            bg: 'blue.40'
        },
        _active: {
            bg: 'blue.50'
        },
        _disabled: {
            bg: 'blue.50',
            opacity: '0.8'
        }
    }
}

export default {
    baseStyle: {},
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                p: '0.85rem',
                borderRadius: 'iconButton',
                transition: '0.3s',

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
                    opacity: 0.5,
                    bg: 'rgba(0, 0, 0, 0.15)'
                },

                ...scheme
            }
        }
    },
    sizes: {
        icon_sm: {
            w: '2.25rem',
            h: '2.25rem'
        }
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
