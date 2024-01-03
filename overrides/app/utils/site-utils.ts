export * from '../../core/utils/site-utils'

import useMultiSite from '../hooks/use-multi-site'
import useNavigation from '../hooks/use-navigation'

export const useRedirectToPage = () => {
    const multiSite = useMultiSite()
    const {buildUrl, site, locale} = multiSite
    const navigate = useNavigation()

    return (route: string) => {
        navigate(buildUrl(route, site.id, locale.id))
    }
}

// Extend modules or replace method below
// Exampe:
// export const method = (...) => type
