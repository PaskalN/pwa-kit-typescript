import {DataType, ApiClients} from '@salesforce/commerce-sdk-react/hooks/types'
import {productUrlBuilder, searchUrlBuilder, categoryUrlBuilder} from './urls'
import {capitalize, boldString} from './utils'

type Client = ApiClients['shopperSearch']
export type SearchSuggestions = DataType<Client['getSearchSuggestions']> | undefined

export function formatSuggestions(searchSuggestions: SearchSuggestions, input?: string) {
    return {
        categorySuggestions: searchSuggestions?.categorySuggestions?.categories?.map(
            (suggestion) => {
                return {
                    type: 'category',
                    id: suggestion.id,
                    link: categoryUrlBuilder({id: suggestion.id}),
                    name: boldString(suggestion.name, capitalize(input || ''))
                }
            }
        ),
        productSuggestions: searchSuggestions?.productSuggestions?.products?.map((product) => {
            product.id = product.productId
            return {
                type: 'product',
                currency: product.currency,
                price: product.price,
                productId: product.productId,
                name: boldString(product.productName, capitalize(input || '')),
                link: productUrlBuilder(product)
            }
        }),
        phraseSuggestions: searchSuggestions?.categorySuggestions?.suggestedPhrases?.map(
            (phrase) => {
                return {
                    type: 'phrase',
                    name: boldString(phrase.phrase, capitalize(input || '')),
                    link: searchUrlBuilder(phrase.phrase)
                }
            }
        )
    }
}
