import React, {createContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'

// Context
export const ContentAssetsContext = createContext<UseQueryResult<
    Record<string, SiteContent.ContentAsset>,
    unknown
> | null>(null)

// Provider
export const ContentAssetsProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    query: UseQueryResult<Record<string, SiteContent.ContentAsset>, unknown> | null
}> = (props) => {
    const {children, query = null} = props

    return <ContentAssetsContext.Provider value={query}>{children}</ContentAssetsContext.Provider>
}
