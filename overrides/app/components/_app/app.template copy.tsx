import React, {useState} from 'react'
import {useHistory, useLocation} from 'react-router-dom'
import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'
import {getAppOrigin} from '@salesforce/pwa-kit-react-sdk/utils/url'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {useQueries} from '@tanstack/react-query'

import {
    useAccessToken,
    useCategory,
    useCommerceApi,
    useCustomerType
} from '@salesforce/commerce-sdk-react'
import * as queryKeyHelpers from '@salesforce/commerce-sdk-react/hooks/ShopperProducts/queryKeyHelpers'

// Chakra
import {Box, useDisclosure, useMultiStyleConfig} from '@chakra-ui/react'
import {SkipNavLink, SkipNavContent} from '@chakra-ui/skip-nav'

// Local Project Components
// import Header from '@salesforce/retail-react-app/app/components/header'
import Header from '../header'
import OfflineBanner from '@salesforce/retail-react-app/app/components/offline-banner'
import OfflineBoundary from '@salesforce/retail-react-app/app/components/offline-boundary'
import AboveHeader from '@salesforce/retail-react-app/app/components/_app/partials/above-header'
import Footer from '@salesforce/retail-react-app/app/components/footer'

// import CheckoutHeader
import CheckoutFooter from '@salesforce/retail-react-app/app/pages/checkout/partials/checkout-footer'
import DrawerMenu from '@salesforce/retail-react-app/app/components/drawer-menu'
import ListMenu from '@salesforce/retail-react-app/app/components/list-menu'
import {HideOnDesktop, HideOnMobile} from '@salesforce/retail-react-app/app/components/responsive'
import CheckoutHeader from '@salesforce/retail-react-app/app/pages/checkout/partials/checkout-header'

// Hooks
import {AuthModal, useAuthModal} from '@salesforce/retail-react-app/app/hooks/use-auth-modal'
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'
import {AddToCartModalProvider} from '../../hooks/use-add-to-cart-modal'

// Others
import {flatten, mergeMatchedItems} from '@salesforce/retail-react-app/app/utils/utils'

import {
    DEFAULT_SITE_TITLE,
    HOME_HREF,
    THEME_COLOR,
    CAT_MENU_DEFAULT_NAV_SSR_DEPTH,
    CAT_MENU_DEFAULT_ROOT_CATEGORY
} from '../../constants'

import Seo from '@salesforce/retail-react-app/app/components/seo'
import ScrollToTop from '@salesforce/retail-react-app/app/components/scroll-to-top'

const onClient = typeof window !== 'undefined'

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

const useLazyLoadCategories = () => {
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

const AppTemplate: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    const {data: categoriesTree} = useLazyLoadCategories()
    const categories = flatten(categoriesTree || {}, 'categories')

    const appOrigin = getAppOrigin()

    const history = useHistory()
    const location = useLocation()
    const authModal = useAuthModal()
    const {isRegistered} = useCustomerType()
    const {site, buildUrl} = useMultiSite()

    const [isOnline] = useState(true)
    const styles = useMultiStyleConfig('App')

    const {isOpen, onOpen, onClose} = useDisclosure()

    // Used to conditionally render header/footer for checkout page
    const isCheckout = /\/checkout$/.test(location?.pathname)

    const onLogoClick = () => {
        // Goto the home page.
        const path = buildUrl(HOME_HREF)

        history.push(path)

        // Close the drawer.
        onClose()
    }

    const onCartClick = () => {
        const path = buildUrl('/cart')
        history.push(path)

        // Close the drawer.
        onClose()
    }

    const onAccountClick = () => {
        // Link to account page for registered customer, open auth modal otherwise
        if (isRegistered) {
            const path = buildUrl('/account')
            history.push(path)
        } else {
            // if they already are at the login page, do not show login modal
            if (new RegExp(`^/login$`).test(location.pathname)) return
            authModal.onOpen()
        }
    }

    const onWishlistClick = () => {
        const path = buildUrl('/account/wishlist')
        history.push(path)
    }

    return (
        <>
            <Seo>
                <meta name="theme-color" content={THEME_COLOR} />
                <meta name="apple-mobile-web-app-title" content={DEFAULT_SITE_TITLE} />
                <link
                    rel="apple-touch-icon"
                    href={getAssetUrl('static/img/global/apple-touch-icon.png')}
                />
                <link rel="manifest" href={getAssetUrl('static/manifest.json')} />

                {/* Urls for all localized versions of this page (including current page)
                            For more details on hrefLang, see https://developers.google.com/search/docs/advanced/crawling/localized-versions */}
                {site.l10n?.supportedLocales.map((locale) => (
                    <link
                        rel="alternate"
                        hrefLang={locale.id.toLowerCase()}
                        href={`${appOrigin}${buildUrl(location.pathname)}`}
                        key={locale.id}
                    />
                ))}
                {/* A general locale as fallback. For example: "en" if default locale is "en-GB" */}
                <link
                    rel="alternate"
                    hrefLang={site.l10n.defaultLocale.slice(0, 2)}
                    href={`${appOrigin}${buildUrl(location.pathname)}`}
                />
                {/* A wider fallback for user locales that the app does not support */}
                <link rel="alternate" hrefLang="x-default" href={`${appOrigin}/`} />
            </Seo>

            <ScrollToTop />

            <Box id="app" display="flex" flexDirection="column" flex={1}>
                <SkipNavLink zIndex="skipLink">Skip to Content</SkipNavLink>

                <Box __css={{...styles.headerWrapper}}>
                    {!isCheckout ? (
                        <>
                            <AboveHeader />
                            <Header
                                onMenuClick={onOpen}
                                onLogoClick={onLogoClick}
                                onMyCartClick={onCartClick}
                                onMyAccountClick={onAccountClick}
                                onWishlistClick={onWishlistClick}
                            >
                                <HideOnDesktop>
                                    <DrawerMenu
                                        isOpen={isOpen}
                                        onClose={onClose}
                                        onLogoClick={onLogoClick}
                                        root={categories?.[CAT_MENU_DEFAULT_ROOT_CATEGORY]}
                                    />
                                </HideOnDesktop>

                                <HideOnMobile>
                                    <ListMenu root={categories?.[CAT_MENU_DEFAULT_ROOT_CATEGORY]} />
                                </HideOnMobile>
                            </Header>
                        </>
                    ) : (
                        <CheckoutHeader />
                    )}
                </Box>

                {!isOnline && <OfflineBanner />}
                <AddToCartModalProvider>
                    <SkipNavContent
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            flex: 1,
                            outline: 0
                        }}
                    >
                        <Box
                            as="main"
                            id="app-main"
                            role="main"
                            display="flex"
                            flexDirection="column"
                            flex="1"
                        >
                            <OfflineBoundary isOnline={false}>{children}</OfflineBoundary>
                        </Box>
                    </SkipNavContent>

                    {!isCheckout ? <Footer /> : <CheckoutFooter />}

                    <AuthModal {...authModal} />
                </AddToCartModalProvider>
            </Box>
        </>
    )
}

export default AppTemplate
