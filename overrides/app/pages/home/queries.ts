import {useQuerySlotGlobal} from '../../../core/queries/slot-global.query'
import {useQueryContentAssets} from '../../../core/queries/content-asset.query'
import {useQuerySitePreferences} from '../../../core/queries/site-preference.query'

// ===========================================
// ================ PAGE SLOTS ===============
// ===========================================

const HOME_PAGE_GLOBAL_SLOTS = ['home-page-slot']

export const useHomePageSlotsQuery = () => {
    const result = useQuerySlotGlobal({
        slotIDs: HOME_PAGE_GLOBAL_SLOTS
    })

    return result
}

// ===========================================
// =============== PAGE ASSETS ===============
// ===========================================

const HOME_PAGE_ASSETS = ['404-callout']

export const useHomePageAssetsQuery = () => {
    const result = useQueryContentAssets({
        assetIDs: HOME_PAGE_ASSETS
    })

    return result
}

// ===========================================
// ======== PAGE CUSTOM PREFERENCES ==========
// ===========================================
export const useHomePageCustomSitePreferences = <T>() => {
    const result = useQuerySitePreferences<T>({
        segment: 'home'
    })

    return result
}
