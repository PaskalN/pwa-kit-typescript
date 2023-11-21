import {useCurrentCustomer as useCurrentCustomerLegacy} from '@salesforce/retail-react-app/app/hooks/use-current-customer'
import {UseQueryResult} from '@tanstack/react-query'
import {DataType, ApiClients} from '@salesforce/commerce-sdk-react/hooks/types'
import useCustomerType from '@salesforce/commerce-sdk-react/hooks/useCustomerType'

type Client = ApiClients['shopperCustomers']

type UseCurrentCustomer = UseQueryResult<DataType<Client['getCustomer']>> & {
    data: DataType<Client['getCustomer']> & useCustomerType
}

export const useCurrentCustomer = (): UseCurrentCustomer => {
    return useCurrentCustomerLegacy() as UseCurrentCustomer
}

// Extend modules or replace method below
// Exampe:
// export const method = (...) => type
