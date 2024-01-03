import {useQuerySlotGlobal} from './slot-global.query'

const useQuerySiteSlotsGlobal = (slotIDs: Array<string>) => {
    const result = useQuerySlotGlobal({
        slotIDs
    })

    return result
}

export default useQuerySiteSlotsGlobal
