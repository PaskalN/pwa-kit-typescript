export * from '@salesforce/retail-react-app/app/utils/url'

// Extend modules or replace method below
// Exampe:
// export const method = (...) => type

/**
 * Given a product and the current locale returns an href to the product detail page.
 *
 * @param {Object} product
 * @returns {string}
 */
export const productUrlBuilder = (product: CommerceSDK.ShopperSearchTypes.SuggestedProduct) =>
    encodeURI(`/product/${product.productId}`)
