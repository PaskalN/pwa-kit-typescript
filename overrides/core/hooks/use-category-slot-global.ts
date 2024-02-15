import {UseQueryResult} from '@tanstack/react-query'
import {useContext} from 'react'

import {CategorySlotContext} from '../context'

const useCategorySlot = () => {
    return useContext<UseQueryResult<SiteContent.ContentSlotResult, unknown> | null>(
        CategorySlotContext
    )
}

export default useCategorySlot
