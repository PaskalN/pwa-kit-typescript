import useConfig from '@salesforce/commerce-sdk-react/hooks/useConfig'
import {useQuery, UseQueryResult} from '@tanstack/react-query'
import fetch from 'cross-fetch'

import {
    generateCustomApisUrl,
    getCustomQueryKeys,
    useCustomAuthorization
} from '../utils/custom-apis.utils'

export type QueryGlobalSlotParams = {slotIDs: Array<string>; useToken?: boolean}

type ErrorQuerySlot = unknown

export const useQuerySlotGlobal = (
    params: QueryGlobalSlotParams
): UseQueryResult<SiteContent.ContentSlotResult, ErrorQuerySlot> => {
    const authHeadersHandler = useCustomAuthorization({})
    const config = useConfig()
    const queryKeys = getCustomQueryKeys(
        config.proxy,
        'content',
        'get-slots',
        params?.slotIDs || []
    )

    return useQuery<SiteContent.ContentSlotResult, ErrorQuerySlot, SiteContent.ContentSlotResult>({
        queryKey: queryKeys,
        queryFn: async () => {
            if (!params.slotIDs || !params?.slotIDs.length) {
                return Promise.resolve({})
            }

            const authHeaders = await authHeadersHandler()
            const {shortCode, organizationId, locale, siteId} = config
            const headers = {
                Authorization: `Bearer ${authHeaders.access_token}`,
                'shopper-token': `Bearer ${authHeaders.access_token}`
            }

            const urlKeys = queryKeys
            delete urlKeys[7]
            delete urlKeys[8]

            const urlPattrernAssets = urlKeys.filter((key) => typeof key === 'string').join('/')

            const parameters = [
                {
                    key: 'siteId',
                    value: siteId
                },
                {
                    key: 'locale',
                    value: locale
                },
                {
                    key: 'c_ids',
                    value: `(${params.slotIDs.join(',')})`
                }
            ]

            if (params.useToken) {
                parameters.push({
                    key: 'c_shopper_token',
                    value: `Bearer ${authHeaders.access_token}`
                })
            }

            const url = generateCustomApisUrl(urlPattrernAssets, {
                shortCode,
                organizationId,
                params: parameters
            })

            const response = await fetch(url, {
                method: 'GET',
                headers
            })

            const slots = await response.json()

            return slots || {}
        }
    })
}
