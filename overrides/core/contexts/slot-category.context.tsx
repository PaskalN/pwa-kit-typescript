import {UseQueryResult} from '@tanstack/react-query'
import React, {createContext} from 'react'

// Context
export const CategorySlotContext = createContext<UseQueryResult<
    SiteContent.ContentSlotResult,
    unknown
> | null>(null)

// Provider
export const CategorySlotProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    query: UseQueryResult<SiteContent.ContentSlotResult, unknown> | null
}> = (props) => {
    const {children, query = null} = props

    return <CategorySlotContext.Provider value={query}>{children}</CategorySlotContext.Provider>
}
