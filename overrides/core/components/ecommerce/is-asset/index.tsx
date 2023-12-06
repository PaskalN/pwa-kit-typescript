import React, {useEffect, useState} from 'react'

import {AssetProvider} from '../../../context'

import useContentAssets from '../../../hooks/use-content-assets'

const getAsset = (
    slotId: string,
    assetsData: Record<string, SiteContent.ContentAsset> | null
): SiteContent.ContentAsset | null => {
    if (assetsData) {
        const result = assetsData[slotId] || null
        return result
    }

    return null
}

const IsAsset: React.FC<{
    assetId: string
    children?: React.ReactNode | Array<React.ReactNode>
    loadingAs?: React.ReactNode
}> = (props) => {
    const {children, assetId, loadingAs} = props

    const queryContentAssets = useContentAssets()

    const assetsData = !queryContentAssets?.data?.error ? queryContentAssets?.data || {} : {}
    const isContentAssetsLoading = !!queryContentAssets?.isLoading

    const serverAssets = getAsset(assetId, assetsData)

    const [loading, setLoading] = useState<boolean>(!!isContentAssetsLoading)
    const [asset, setAsset] = useState<SiteContent.ContentAsset | null>(serverAssets)

    useEffect(() => {
        if (asset) return
        setLoading(isContentAssetsLoading)
        if (!isContentAssetsLoading) {
            const asset = getAsset(assetId, assetsData)
            setAsset(asset)
        }
    }, [assetsData, isContentAssetsLoading])

    if (loading) return <>{loadingAs}</>

    return <AssetProvider asset={asset}>{children}</AssetProvider>
}

export default IsAsset
