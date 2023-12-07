export const siteCustomPreferenceUtil = (incPreferences: Record<string, unknown>) => {
    const preferences = incPreferences || {}

    return {
        getPreferences: <T = Record<string, unknown>>() => preferences as T,
        get: <T = string>(preferenceID: string): T | null => {
            const result = preferences[preferenceID]

            if (result) return result as T

            return null
        }
    }
}
