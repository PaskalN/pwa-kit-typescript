import useConfig from '@salesforce/commerce-sdk-react/hooks/useConfig'
import fetch from 'cross-fetch'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

import {
    useCustomAuthorization,
    getCustomQueryKeys,
    generateCustomApisUrl
} from '../utils/custom-apis.utils'

export type QuerySitePreferenceParams = {segment: string}

type ErrorQuerySitePreference = unknown

export function useQuerySitePreferences<T>(
    params: QuerySitePreferenceParams
): UseQueryResult<T, ErrorQuerySitePreference> {
    const authHeadersHandler = useCustomAuthorization({})
    const config = useConfig()
    const queryKeys = getCustomQueryKeys(config.proxy, 'site', 'get-preferences', [params.segment])

    return useQuery<T, ErrorQuerySitePreference, T>({
        queryKey: queryKeys,
        queryFn: async () => {
            if (!params.segment) {
                return Promise.resolve({})
            }

            const urlKeys = queryKeys
            delete urlKeys[7]

            const authHeaders = await authHeadersHandler()
            const {shortCode, organizationId, locale, siteId} = config
            const headers = {
                Authorization: `Bearer ${authHeaders.access_token}`
            }

            const urlPattrernAssets = queryKeys.filter((key) => typeof key === 'string').join('/')
            const url = generateCustomApisUrl(urlPattrernAssets, {
                shortCode,
                organizationId,
                params: [
                    {
                        key: 'siteId',
                        value: siteId
                    },
                    {
                        key: 'locale',
                        value: locale
                    },
                    {
                        key: 'c_segment',
                        value: params.segment
                    }
                ]
            })

            const response = await fetch(url, {
                method: 'GET',
                headers
            })

            const preferences = await response.json()

            return preferences || {}
        }
    })
}
