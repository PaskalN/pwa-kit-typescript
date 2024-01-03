import {useQuerySlotGlobal} from '../../../core/queries/slot-global.query'

const SAMPLE_PAGE_GLOBAL_SLOTS = ['header-banner-m', 'noresults-help']

const useSamplePageSlots = () => {
    const result = useQuerySlotGlobal({
        slotIDs: SAMPLE_PAGE_GLOBAL_SLOTS
    })

    return result
}

export default useSamplePageSlots
