export const siteCustomPreferenceUtil = (incPreferences: Record<string, unknown>) => {
    const preferences = incPreferences || {}

    return {
        get: <T>(preferenceID: string): T | null => {
            const result = preferences[preferenceID]

            if (result) return result as T

            return null
        }
    }
}
