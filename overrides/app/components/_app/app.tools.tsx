// CONSTANTS
import {CAT_MENU_DEFAULT_NAV_SSR_DEPTH, CAT_MENU_DEFAULT_ROOT_CATEGORY} from '../../constants'

// SDK HOOKS
import {useCategory} from '@salesforce/commerce-sdk-react'

// PROVIDERS
import {useCategoryBulk} from './app.providers'

// UTILS
import {mergeMatchedItems} from '../../utils/utils'

const onClient = typeof window !== 'undefined'

export const useLazyLoadCategories = () => {
    const itemsKey = 'categories'

    const levelZeroCategoriesQuery = useCategory({
        parameters: {id: CAT_MENU_DEFAULT_ROOT_CATEGORY, levels: CAT_MENU_DEFAULT_NAV_SSR_DEPTH}
    })

    const ids = levelZeroCategoriesQuery.data?.[itemsKey]?.map((category) => category.id)
    const queries = useCategoryBulk(ids, {
        enabled: onClient && ids && ids?.length > 0
    })
    const dataArray = queries.map((query) => query.data).filter(Boolean)
    const isLoading = queries.some((query) => query.isLoading)
    const isError = queries.some((query) => query.isError)
    return {
        isLoading,
        isError,
        data: {
            ...levelZeroCategoriesQuery.data,
            [itemsKey]: mergeMatchedItems(
                levelZeroCategoriesQuery.data?.categories || [],
                dataArray
            )
        }
    }
}
