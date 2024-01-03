type _Item = CommerceSDK.Variant<{quantity?: number}>

type EinsteinProduct = {
    id: string
    sku: string
    altId?: string
    altIdType?: string
}

declare namespace Einstein {
    // type EinsteinReturn = Promise<unknown>
    type EinsteinReturn = void // Einstein returns promise, but in this case we don't expect a response. It is simple void

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=getRecommenders
    type GetRecommendationsReturn = Promise<{
        recoUUID: string
        recommenderName: string
        recs: Array<CommerceSDK.Product$0>
    } | null>

    type GetRecommendations = (
        _recommenderName: string,
        _products?: Array<CommerceSDK.Product$0>,
        _args?: {
            categories?: Array<{
                id: string
            }>
            rules?: Array<{
                type: string
                field: string
                operator: string
                values: Array<number | string | boolean | bigint>
            }>
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => GetRecommendationsReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=getRecommenders
    type GetRecommendersReturn = Promise<{
        recommenders: Array<{
            name: string
            description: string
            recommenderType: string
        }>
    } | null>

    type GetRecommenders = () => GetRecommendersReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=getZoneRecommendations
    type GetZoneRecommendationsReturn = Promise<{
        displayMessage: string
        recommenderName: string
        recoUUID: string
        recs: Array<CommerceSDK.Product$0>
    }>

    type GetZoneRecommendations = (
        _zoneName: string,
        _products?: Array<CommerceSDK.Product$0>,
        _args?: {
            categories?: Array<{
                id: string
            }>
            rules?: Array<{
                type: string
                field: string
                operator: string
                values: Array<number | string | boolean | bigint>
            }>
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => GetZoneRecommendationsReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=sendViewProduct
    type SendViewProduct = (
        _product: CommerceSDK.Product$0,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => EinsteinReturn
    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=sendViewReco
    type SendViewRecommendation = (
        _recommenderDetails: {recommenderName: string; __recoUUID: string} | undefined,
        _products?: Array<EinsteinProduct> | undefined,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=sendClickReco
    type SendClickRecommendation = (
        _recommenderDetails: {recommenderName: string; __recoUUID: string} | undefined,
        _product: EinsteinProduct,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-recommendations?meta=sendClickReco
    type SendAddToCart = (
        _item: _Item,
        _args?: {
            source?: string
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendViewSearch
    type SendViewSearch = (
        _searchText: string,
        _searchResults: CommerceSDK.ShopperSearchTypes.ProductSearchResult,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
            sortingRule?: Array<{
                attribute: string
                direction: string
            }>
            itemRange?: {
                start: number
            }
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendClickSearch
    type SendClickSearch = (
        _searchText: string,
        _product: CommerceSDK.Product$0,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
            sortingRule?: Array<{
                attribute: string
                direction: string
            }>
            itemRange?: {
                start: number
            }
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendViewPage
    type SendViewPage = (
        _path: string,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendViewCategory
    type SendViewCategory = (
        _category: CommerceSDK.Category,
        _searchResults: CommerceSDK.ShopperSearchTypes.ProductSearchResult,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
            sortingRule?: Array<{
                attribute: string
                direction: string
            }>
            itemRange?: {
                start: number
            }
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendClickCategory
    type SendClickCategory = (
        _category: CommerceSDK.Category,
        _product: CommerceSDK.Product$0,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendBeginCheckout
    type SendBeginCheckout = (
        _basket: CommerceSDK.Basket$0,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
        }
    ) => EinsteinReturn

    // https://developer.salesforce.com/docs/commerce/einstein-api/references/einstein-activities?meta=sendCheckoutStep
    type SendCheckoutStep = (
        _stepName: string,
        _stepNumber: string,
        _basket: CommerceSDK.Basket$0,
        _args?: {
            userId?: string
            cookieId?: string
            clientIp?: string
            clientUserAgent?: string
            realm?: string
            correlationId?: string
        }
    ) => EinsteinReturn

    interface Definition {
        sendViewProduct: SendViewProduct
        sendViewSearch: SendViewSearch
        sendViewCategory: SendViewCategory
        sendViewReco: SendViewRecommendation
        sendViewPage: SendViewPage
        sendClickSearch: SendClickSearch
        sendClickCategory: SendClickCategory
        sendClickReco: SendClickRecommendation
        sendAddToCart: SendAddToCart
        sendBeginCheckout: SendBeginCheckout
        sendCheckoutStep: SendCheckoutStep

        getRecommenders: GetRecommenders
        getRecommendations: GetRecommendations
        getZoneRecommendations: GetZoneRecommendations
    }
}

declare module '@salesforce/retail-react-app/app/hooks/use-einstein' {
    export class EinsteinAPI {
        constructor(_props: {
            host: string
            einsteinId: string
            siteId: string
            isProduction: boolean
        })

        _buildBody: (_params: Record<string, unknown>) => Record<string, unknown>

        _constructEinsteinProduct: (_product: CommerceSDK.Product$0) => {
            id: string
            sku: string
            altId: string
            altIdType: string
        }

        _constructEinsteinItem: (_item: _Item) => {
            id: string
            sku: string
            price: string
            quantity: number
        }

        sendViewProduct: SendViewProduct
        sendViewSearch: SendViewSearch
        sendViewCategory: SendViewCategory
        sendViewReco: SendViewRecommendation
        sendViewPage: SendViewPage
        sendClickSearch: SendClickSearch
        sendClickCategory: SendClickCategory
        sendClickReco: SendClickRecommendation
        sendAddToCart: SendAddToCart
        sendBeginCheckout: SendBeginCheckout
        sendCheckoutStep: SendCheckoutStep

        getRecommenders: GetRecommenders
        getRecommendations: GetRecommendations
        getZoneRecommendations: GetZoneRecommendations
    }

    const useEinstein: () => Einstein.Definition

    export default useEinstein
}
