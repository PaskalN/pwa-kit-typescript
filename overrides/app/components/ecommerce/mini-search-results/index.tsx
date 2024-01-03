import React, {useEffect} from 'react'

// Components
import {Flex} from '@chakra-ui/react'

// Hooks
import {useProducts} from '@salesforce/commerce-sdk-react'
import useMultiSite from '../../../hooks/use-multi-site'

// Others
import {SearchSuggestions} from '../../../../core/utils/search.utils'
import {formatSuggestions} from '../../../../core/utils/search.utils'

type Results = ReturnType<typeof formatSuggestions>

const MiniSeachResults: React.FC<{
    searchresult: Results
}> = (props) => {
    const {searchresult} = props

    const products = searchresult.productSuggestions || []
    const IDs = products.map((products) => products.productId)

    const {site, locale} = useMultiSite()

    const productResult = useProducts({
        parameters: {
            ids: IDs.join(','),
            locale: locale.id,
            siteId: site.id
        }
    })

    useEffect(() => {
        if (productResult.data) console.log(productResult.data)
    }, [productResult.data])

    return <Flex></Flex>
}

export default MiniSeachResults
