import React, {createContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'
import useQuerySiteSlotsGlobal from '../queries/site-slots-global.query'

// Context
export const SiteGlobalSlotContext = createContext<UseQueryResult<
    SiteContent.ContentSlotResult,
    unknown
> | null>(null)

// Provider
export const SiteGlobalSlotProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    slotIDs?: Array<string>
}> = (props) => {
    const {children, slotIDs = []} = props
    const result = useQuerySiteSlotsGlobal(slotIDs)

    return (
        <SiteGlobalSlotContext.Provider value={result}>{children}</SiteGlobalSlotContext.Provider>
    )
}
