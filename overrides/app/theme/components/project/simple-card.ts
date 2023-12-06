import {ThemeVariantProps} from '../../theme.interfaces'
import {ThemeObject} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'

const colorScheme: ThemeObject = {}

export default {
    baseStyle: {
        backgroundColor: 'white',
        w: '100%',
        maxWidth: '100%',
        display: 'flex',
        flexDir: 'column'
    },
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        },
        light_shadow: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                boxShadow: '12'
            }
        }
    },
    sizes: {
        md: {
            padding: '1rem'
        }
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
