import {
    UseWishListProps,
    useWishList as useWishListLegacy
} from '@salesforce/retail-react-app/app/hooks/use-wishlist'
import {UseQueryResult} from '@tanstack/react-query'

import {DataType, ApiClients} from '@salesforce/commerce-sdk-react/hooks/types'
type Client = ApiClients['shopperCustomers']

export const useWishList = (
    _props: UseWishListProps
): UseQueryResult<DataType<Client['getCustomerProductLists']>> => {
    return useWishListLegacy(_props) as UseQueryResult<DataType<Client['getCustomerProductLists']>>
}
