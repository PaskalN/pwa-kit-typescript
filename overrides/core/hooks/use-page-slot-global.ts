import {useContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'

import {PageGlobalSlotContext} from '../context'

const usePageSlotGlobal = () => {
    return useContext<UseQueryResult<SiteContent.ContentSlotResult, unknown> | null>(
        PageGlobalSlotContext
    )
}

export default usePageSlotGlobal
