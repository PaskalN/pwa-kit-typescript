declare namespace RetailReactAppHooks {
    type useVariationAttributeValueType = {
        name: string
        orderable: boolean
        value: string
        href: string
        image?: {
            alt: string
            disBaseLink: string
            link: string
            title: string
        }
    }

    type useVariationAttributesType = {
        id: string
        name: string
        values: Array<useVariationAttributeValueType>
    }
}

declare namespace ConfigureRoutes {
    type Options = {
        ignoredRoutes: Array<string>
    }
}

// ==============================================================
// ========================= HOOKS ==============================
// ==============================================================

declare module '@salesforce/retail-react-app/app/hooks/use-auth-modal' {
    export const AuthModal: (props: {
        initialView?: string
        onLoginSuccess?: () => void
        onRegistrationSuccess: () => void

        onLoginSuccess?: () => void
        onRegistrationSuccess?: () => void

        isOpen: boolean
        onOpen: () => void
        onClose: () => void
    }) => React.JSX.Element

    export const useAuthModal: (_initialView?: string) => {
        initialView: string
        isOpen: boolean
        onOpen: () => void
        onClose: () => void
    }
}

declare module '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal' {
    export const AddToCartModal: () => React.JSX.Element
    export type UseAddToCartModalReturn = {
        product: CommerceSDK.Product$0
        variant: CommerceSDK.Variant$0
        quantity: number
        isOpen: boolean
        onClose: () => void
        children: React.ReactNode | Array<React.ReactNode>
    }
    export const useAddToCartModal: () => UseAddToCartModalReturn

    export type AddToCartModalProviderPropsType = {
        children: React.ReactNode | Array<React.ReactNode>
    }
    export const AddToCartModalProvider: (
        props: AddToCartModalProviderPropsType
    ) => React.JSX.Element

    export type AddToCartModalContextType = React.Context<UseAddToCartModalReturn | null>
    export const AddToCartModalContext: () => AddToCartModalContextType | null
    export const useAddToCartModalContext: () => React.Context<AddToCartModalContextType | null>
}

declare module '@salesforce/retail-react-app/app/hooks/use-current-customer' {
    export const useCurrentCustomer: () => unknown
}

declare module '@salesforce/retail-react-app/app/hooks/use-current-basket' {
    export const useCurrentBasket: (_params: unknown) => unknown
}

declare module '@salesforce/retail-react-app/app/hooks/use-multi-site' {
    const useMultiSite: () => {
        site: PWAKitRuntime.SiteConfig
        locale: PWAKitRuntime.Locale
        buildUrl: PWAKitRuntime.BuildUrl
    }
    export default useMultiSite
}

declare module '@salesforce/retail-react-app/app/hooks/use-derived-products' {
    export const useCurrency: () => React.Context<string> | never
}

declare module '@salesforce/retail-react-app/app/hooks/use-variation-attributes' {
    export const useVariationAttributes: (
        _product?: CommerceSDK.Product$0 | Record<string, unknown>,
        _isProductPartOfSet?: boolean
    ) => useVariationAttributesType
}

declare module '@salesforce/retail-react-app/app/hooks/use-variation-params' {
    export const useVariationParams: (
        _product?: CommerceSDK.Product$0 | Record<string, unknown>,
        _isProductPartOfSet?: boolean
    ) => Array<string>
}

declare module '@salesforce/retail-react-app/app/hooks/use-variant' {
    export const useVariant: (
        _product?: CommerceSDK.Product$0 | Record<string, unknown>,
        _isProductPartOfSet?: boolean
    ) => CommerceSDK.Variant$0 | undefined
}

declare module '@salesforce/retail-react-app/app/hooks/use-currency' {
    export const useCurrency: (
        _products: CommerceSDK.Product$0,
        _isProductPartOfSet?: boolean
    ) => {
        showLoading: boolean
        showInventoryMessage: boolean
        inventoryMessage: string
        variationAttributes: RetailReactAppHooks.useVariationAttributesType
        quantity: number
        minOrderQuantity: number
        stepQuantity: number
        variationParams: Array<string>
        setQuantity: React.Dispatch<React.SetStateAction<number>>
        variant: CommerceSDK.Variant$0 | undefined
        stockLevel: number
    }
}

declare module '@salesforce/retail-react-app/app/hooks/use-toast' {
    type UseToastType = {
        title: string
        status: string
        action: React.JSX.Element | string
        position?: string
        duration?: number
        variant?: string
        isClosable?: boolean
    }
    export const useToast: (_props: UseToastType) => React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/hooks/use-sort-urls' {
    type UseSortUrlsType = {
        options: Array<{
            id: string
        }>
    }
    export const useSortUrls: (_props: UseSortUrlsType) => Array<string>
}

declare module '@salesforce/retail-react-app/app/hooks/use-search-parameters' {
    type SearchparamsType = {
        limit: number
        offset: number
        sort: string
        refine: Record<string, unknown> | Array<string | unknown>
    }

    export const parse: (
        _searchParamsStr?: string,
        _parseRefine?: boolean
    ) => CommerceSDK.ShopperSearchQueryParameters

    export const stringify: (_searchParamsObj?: CommerceSDK.ShopperSearchQueryParameters) => string

    type UseSearchParamsType = {
        options: Array<{
            id: string
        }>
    }
    export const useSearchParams: (
        _searchParams?: unknown,
        _parseRefine?: boolean
    ) => [
        CommerceSDK.ShopperSearchQueryParameters & {searchParams: unknown},
        {
            stringify: (_searchParamsObj?: CommerceSDK.ShopperSearchQueryParameters) => string
            parse: (
                _searchParamsStr?: string,
                _parseRefine?: boolean
            ) => CommerceSDK.ShopperSearchQueryParameters
        }
    ]
}

declare module '@salesforce/retail-react-app/app/hooks/use-product-view-modal' {
    export const useProductViewModal: (_props: CommerceSDK.Product$0) => {
        product: CommerceSDK.Product$0
        variant: CommerceSDK.Variant$0
        isFetching: boolean
    }
}

declare module '@salesforce/retail-react-app/app/hooks/use-pdp-search-params' {
    export const usePDPSearchParams: (
        _productId: string
    ) => [allParams: URLSearchParams, productParams: URLSearchParams]
}

declare module '@salesforce/retail-react-app/app/hooks/use-page-urls' {
    export const usePageUrls: (_props: {total: number; limit?: number}) => Array<string>
}

declare module '@salesforce/retail-react-app/app/hooks/use-navigation' {
    export const useNavigation: () => (_path: string, action?: string, ...args: unknown) => void
}

declare module '@salesforce/retail-react-app/app/hooks/use-limit-urls' {
    export const useLimitUrls: () => Array<string>
}

declare module '@salesforce/retail-react-app/app/hooks/use-intersection-observer' {
    export const useIntersectionObserver: (
        _ref: React.Ref,
        _options: {useOnce?: boolean} & Record<string, unknown>
    ) => boolean
}

declare module '@salesforce/retail-react-app/app/hooks/use-wishlist' {
    export type UseWishListProps = {listId: string}
    export const useWishList: (_props?: UseWishListProps) => unknown
}

// Einstein hook in @retail-react-app
