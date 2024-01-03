import {ThemeObject, ThemeVariantProps} from '../theme.interfaces'
import {getColorScheme} from '../themeTools'

export const getTextVariants = (colorScheme: ThemeObject) => {
    return {
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
                fontWeight: '300'
            }
        },
        regular: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontWeight: '400'
            }
        },
        medium: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontWeight: '500'
            }
        },
        heavy: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontWeight: '700'
            }
        },
        heavy_xl: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme,
                fontWeight: '900'
            }
        }
    }
}

export default getTextVariants
