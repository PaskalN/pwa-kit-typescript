import {useContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'
import {ContentAssetsContext} from '../context'

const useContentAssets = () => {
    return useContext<UseQueryResult<Record<string, SiteContent.ContentAsset>, unknown> | null>(
        ContentAssetsContext
    )
}

export default useContentAssets
