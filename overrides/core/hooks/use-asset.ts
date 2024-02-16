import {useContext} from 'react'
import {AssetContext} from '../context'

const useAsset = () => {
    return useContext<SiteContent.ContentAsset | null>(AssetContext)
}

export default useAsset
