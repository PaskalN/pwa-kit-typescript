import React, {createContext} from 'react'

// Context
export const AssetContext = createContext<SiteContent.ContentAsset | null>(null)

// Provider
export const AssetProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    asset: SiteContent.ContentAsset | null
}> = (props) => {
    const {children, asset = null} = props

    return <AssetContext.Provider value={asset}>{children}</AssetContext.Provider>
}
