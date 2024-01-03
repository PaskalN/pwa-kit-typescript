import {useQuerySitePreferences} from './site-preference.query'

function useQueryCustomSitePreferenceGlobal<T>(segment?: string) {
    const result = useQuerySitePreferences<T>({
        segment: segment || 'global'
    })

    return result || {}
}

export default useQueryCustomSitePreferenceGlobal
