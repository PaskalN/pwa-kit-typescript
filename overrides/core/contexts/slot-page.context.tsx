import React, {createContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'

// Context
export const PageGlobalSlotContext = createContext<UseQueryResult<
    SiteContent.ContentSlotResult,
    unknown
> | null>(null)

// Provider
export const PageGlobalSlotProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    query: UseQueryResult<SiteContent.ContentSlotResult, unknown> | null
}> = (props) => {
    const {children, query = null} = props

    return <PageGlobalSlotContext.Provider value={query}>{children}</PageGlobalSlotContext.Provider>
}
