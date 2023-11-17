import React, {useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {useQuery, useQueries} from '@tanstack/react-query'

import {
    useAccessToken,
    useCommerceApi,
    useCustomerBaskets,
    useShopperBasketsMutation
} from '@salesforce/commerce-sdk-react'
import * as queryKeyHelpers from '@salesforce/commerce-sdk-react/hooks/ShopperProducts/queryKeyHelpers'

// Chakra
import {useDisclosure} from '@chakra-ui/react'

// Contexts
import {CurrencyProvider} from '@salesforce/retail-react-app/app/contexts'
import {CategoryProvider} from '../../context'

// Hooks
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'
import {useCurrentCustomer} from '../../hooks/use-current-customer'
import {useCurrentBasket} from '../../hooks/use-current-basket'
// Localization
import {IntlProvider} from 'react-intl'

// Others
import {watchOnlineStatus, isServer} from '@salesforce/retail-react-app/app/utils/utils'

import {getTargetLocale, fetchTranslations} from '@salesforce/retail-react-app/app/utils/locale'
import {DEFAULT_LOCALE} from '../../constants'

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

const AppProviders: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const location = useLocation()
    const {site, locale} = useMultiSite()

    const [, setIsOnline] = useState(true)

    const {onClose} = useDisclosure()

    const targetLocale = getTargetLocale({
        getUserPreferredLocales: () => {
            // CONFIG: This function should return an array of preferred locales. They can be
            // derived from various sources. Below are some examples of those:
            //
            // - client side: window.navigator.languages
            // - the page URL they're on (example.com/en-GB/home)
            // - cookie (if their previous preference is saved there)
            //
            // If this function returns an empty array (e.g. there isn't locale in the page url),
            // then the app would use the default locale as the fallback.

            // NOTE: Your implementation may differ, this is just what we did.
            return [locale?.id || DEFAULT_LOCALE]
        },
        l10nConfig: site.l10n
    })

    // If the translation file exists, it'll be served directly from static folder (and won't reach this code here).
    // However, if the file is missing, the App would render a 404 page.
    const is404ForMissingTranslationFile = /\/static\/translations\/compiled\/[^.]+\.json$/.test(
        location?.pathname
    )

    // Fetch the translation message data using the target locale.
    const {data: messages} = useQuery({
        queryKey: ['app', 'translations', 'messages', targetLocale],
        queryFn: () => {
            if (is404ForMissingTranslationFile) {
                // Return early to prevent an infinite loop
                // Otherwise, it'll continue to fetch the missing translation file again
                return {}
            }
            return fetchTranslations(targetLocale)
        },
        enabled: isServer
    })

    const {l10n} = site
    // Get the current currency to be used through out the app
    const currency = locale.preferredCurrency || l10n.defaultCurrency

    // Handle creating a new basket if there isn't one already assigned to the current
    // customer.
    const {data: customer} = useCurrentCustomer()
    const {data: baskets} = useCustomerBaskets(
        {parameters: {customerId: customer.customerId || ''}},
        {enabled: !!customer.customerId && !isServer}
    )
    const {data: basket} = useCurrentBasket()

    const createBasket = useShopperBasketsMutation('createBasket')
    const updateBasket = useShopperBasketsMutation('updateBasket')
    const updateCustomerForBasket = useShopperBasketsMutation('updateCustomerForBasket')

    useEffect(() => {
        // Create a new basket if the current customer doesn't have one.
        if (baskets?.total === 0) {
            createBasket.mutate({
                body: {}
            })
        }
    }, [baskets])

    useEffect(() => {
        // update the basket currency if it doesn't match the current locale currency
        if (basket?.currency && basket?.currency !== currency) {
            updateBasket.mutate({
                parameters: {basketId: basket.basketId},
                body: {currency}
            })
        }
    }, [basket?.currency])

    useEffect(() => {
        // update the basket customer email
        if (
            basket &&
            customer?.isRegistered &&
            customer?.email &&
            customer?.email !== basket?.customerInfo?.email
        ) {
            updateCustomerForBasket.mutate({
                parameters: {basketId: basket.basketId},
                body: {
                    email: customer.email
                }
            })
        }
    }, [customer?.isRegistered, customer?.email, basket?.customerInfo?.email])

    useEffect(() => {
        // Listen for online status changes.
        watchOnlineStatus((isOnline) => {
            setIsOnline(!!isOnline)
        })
    }, [])

    useEffect(() => {
        // Lets automatically close the mobile navigation when the
        // location path is changed.
        onClose()
    }, [location])

    return (
        <IntlProvider
            onError={(err) => {
                if (!messages) {
                    // During the ssr prepass phase the messages object has not loaded, so we can suppress
                    // errors during this time.
                    return
                }
                if (err.code === 'MISSING_TRANSLATION') {
                    // NOTE: Remove the console error for missing translations during development,
                    // as we knew translations would be added later.
                    console.warn('Missing translation', err.message)
                    return
                }
                throw err
            }}
            locale={targetLocale}
            messages={messages}
            // For react-intl, the _default locale_ refers to the locale that the inline `defaultMessage`s are written for.
            // NOTE: if you update this value, please also update the following npm scripts in `template-retail-react-app/package.json`:
            // - "extract-default-translations"
            // - "compile-translations:pseudo"
            defaultLocale={DEFAULT_LOCALE}
        >
            <CurrencyProvider currency={currency}>
                <CategoryProvider>{children}</CategoryProvider>
            </CurrencyProvider>
        </IntlProvider>
    )
}

export default AppProviders
