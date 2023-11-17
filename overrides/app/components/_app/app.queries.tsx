import {useAccessToken, useCommerceApi} from '@salesforce/commerce-sdk-react'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'
import * as queryKeyHelpers from '@salesforce/commerce-sdk-react/hooks/ShopperProducts/queryKeyHelpers'
import {useQueries} from '@tanstack/react-query'

export const useCategoryBulk = (
    ids: Array<string> = [],
    queryOptions: {
        enabled?: boolean
    }
) => {
    const api = useCommerceApi()
    const {getTokenWhenReady} = useAccessToken()
    const {
        app: {commerceAPI}
    } = getConfig()
    const {
        parameters: {organizationId}
    } = commerceAPI
    const {site} = useMultiSite()

    const queries = ids.map((id) => {
        return {
            queryKey: queryKeyHelpers.getCategory.queryKey({
                id,
                levels: 2,
                organizationId,
                siteId: site.id
            }),
            queryFn: async () => {
                const token = await getTokenWhenReady()
                const res = await api.shopperProducts.getCategory({
                    parameters: {id, levels: 2},
                    headers: {
                        authorization: `Bearer ${token}`
                    }
                })
                return res
            },
            ...queryOptions,
            enabled: queryOptions.enabled !== false && Boolean(id)
        }
    })
    const res = useQueries({queries})
    return res
}
