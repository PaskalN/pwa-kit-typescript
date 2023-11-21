import {ThemeObject} from './theme.interfaces'

export const getColorScheme = (
    scheme?: string,
    colorScheme?: ThemeObject
): ThemeObject | Record<string, unknown> => {
    if (!scheme || !colorScheme) return {}

    const selectedColorScheme = colorScheme[scheme] as Record<string, unknown>

    return selectedColorScheme || {}
}
