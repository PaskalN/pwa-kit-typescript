import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'
import TextSizes from '../../presets/text.sizes'

const colorScheme: ThemeObject = {
    input_invalid: {
        field: {
            borderColor: 'carminepink.100',

            _focus: {
                borderColor: 'carminepink.100'
            },

            _hover: {
                borderColor: 'carminepink.100'
            }
        }
    }
}

export default {
    baseStyle: {
        field: {
            fontFamily: 'Roboto',

            lineHeight: '1',
            w: '100%',
            p: '0.65rem',
            paddingRight: '3rem',

            color: 'base.dark',
            bg: 'transparent',

            borderStyle: 'solid',
            borderWidth: '1px',
            borderColor: 'monochromatic.50',

            appearance: 'none',

            _focus: {
                outline: 'none',
                borderColor: 'monochromatic.100'
            },

            _hover: {
                borderColor: 'monochromatic.100'
            },

            _placeholder: {
                color: 'monochromatic.50',
                fontStyle: 'italic'
            },

            _disabled: {
                opacity: '0.6'
            }
        },
        icon: {
            right: '1rem',
            bottm: 0,
            top: 0,
            margin: 'auto'
        }
    },
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme).field
            return {
                field: {
                    ...(scheme || {})
                }
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
