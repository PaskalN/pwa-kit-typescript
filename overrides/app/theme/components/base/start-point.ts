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
        }
    },
    sizes: {},

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
