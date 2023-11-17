import {ThemeObject} from './theme.interfaces'

export const getColorScheme = (scheme?: string, colorScheme?: ThemeObject): ThemeObject | {} => {
    if (!scheme || !colorScheme) return {}

    const selectedColorScheme = colorScheme[scheme]

    return selectedColorScheme || {}
}
