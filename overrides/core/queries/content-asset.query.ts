import useConfig from '@salesforce/commerce-sdk-react/hooks/useConfig'
import fetch from 'cross-fetch'
import {useQuery, UseQueryResult} from '@tanstack/react-query'

import {
    useCustomAuthorization,
    getCustomQueryKeys,
    generateCustomApisUrl
} from '../utils/custom-apis.utils'

export type QueryContentAssetsParams = {assetIDs: Array<string>}

type ErrorQueryAssets = unknown

export const useQueryContentAssets = (
    params: QueryContentAssetsParams
): UseQueryResult<Record<string, SiteContent.ContentAsset>, ErrorQueryAssets> => {
    const authHeadersHandler = useCustomAuthorization({})
    const config = useConfig()
    const queryKeys = getCustomQueryKeys(
        config.proxy,
        'content',
        'get-assets',
        params?.assetIDs || []
    )

    return useQuery<
        Record<string, SiteContent.ContentAsset>,
        ErrorQueryAssets,
        Record<string, SiteContent.ContentAsset>
    >({
        queryKey: queryKeys,
        queryFn: async () => {
            if (!params.assetIDs || !params?.assetIDs.length) {
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

            const urlPattrernAssets = urlKeys.filter((key) => typeof key === 'string').join('/')
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
                        key: 'c_ids',
                        value: `(${params.assetIDs.join(',')})`
                    }
                ]
            })

            const response = await fetch(url, {
                method: 'GET',
                headers
            })

            const assets =
                (await response.json()) as unknown as Array<SiteContent.ContentAsset> | null
            const result: Record<string, SiteContent.ContentAsset> = {}

            if (Array.isArray(assets)) {
                assets.forEach((asset) => {
                    result[asset.id] = asset
                })
            }

            return result || {}
        }
    })
}
