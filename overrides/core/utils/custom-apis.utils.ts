import useAuthContext from '@salesforce/commerce-sdk-react/hooks/useAuthContext'
import {ShopperLoginTypes} from 'commerce-sdk-isomorphic'

export type CustomAuthorization = ShopperLoginTypes.TokenResponse & {
    headers?: Record<string, string>
    parameters?: Record<string, string>
} & Record<string, unknown>

export const useCustomAuthorization = (
    options: Record<string, unknown> & {
        headers?: Record<string, string> & {
            Authorization: string
        }
        parameters?: Record<string, string>
    }
): (() => Promise<CustomAuthorization>) => {
    const auth = useAuthContext()
    return async () => {
        const authResponse = await auth.ready()
        const {access_token} = authResponse
        const token = access_token

        return Promise.resolve({
            ...authResponse,
            ...options,
            headers: {
                Authorization: `Bearer ${token}`,
                ...options.headers
            }
        })
    }
}

export const getCustomQueryKeys = (
    appOrigin: string,
    api: string,
    endpoint: string,
    IDs?: Array<string>
): Array<string> => {
    const version = 'v1'

    const restUrl = [
        appOrigin,
        'custom',
        api,
        version,
        'organizations',
        '{organizationId}',
        endpoint,
        ...(IDs ? [IDs.join(',')] : [])
    ]

    // Use the proxy path when client side request
    return restUrl
}

export const generateCustomApisUrl = (
    urlPattern: string,
    keys: {
        shortCode: string
        organizationId: string
        params?: Array<{
            key: string
            value: string
        }>
    }
): string => {
    const url = urlPattern
        .replace('{shortCode}', keys.shortCode)
        .replace('{organizationId}', keys.organizationId)

    const parameters = keys.params
        ? keys.params.map((param) => `${param.key}=${param.value}`).join('&')
        : ''

    return parameters ? `${url}?${parameters}` : `${url}`
}
