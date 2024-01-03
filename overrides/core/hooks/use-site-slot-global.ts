import {useContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'

import {SiteGlobalSlotContext} from '../context'

const useSiteSlotGlobal = () => {
    return useContext<UseQueryResult<SiteContent.ContentSlotResult, unknown> | null>(
        SiteGlobalSlotContext
    )
}

export default useSiteSlotGlobal
