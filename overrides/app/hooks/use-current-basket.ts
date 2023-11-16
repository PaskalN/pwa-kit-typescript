import {useCurrentBasket as useCurrentBasketLegacy} from '@salesforce/retail-react-app/app/hooks/use-current-basket'
import {UseQueryResult} from '@tanstack/react-query'
import {DataType, ApiClients} from '@salesforce/commerce-sdk-react/hooks/types'

type Client = ApiClients['shopperCustomers']

type UseCurrentBasket = UseQueryResult<DataType<Client['getCustomerBaskets']>> & {
    data: CommerceSDK.Basket$0 | null
    derivedData: {
        hasBasket: boolean
        totalItems: number
    }
}

export const useCurrentBasket = (props?: Record<string, unknown>): UseCurrentBasket => {
    return useCurrentBasketLegacy(props) as UseCurrentBasket
}
