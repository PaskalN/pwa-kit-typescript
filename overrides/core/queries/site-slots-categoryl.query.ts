import {useQuerySlotCategory} from './slot-category.query'

const useQuerySiteSlotsCategory = (categoryID: string, slotIDs: Array<string>) => {
    const result = useQuerySlotCategory({
        slotIDs,
        categoryID
    })

    return result
}

export default useQuerySiteSlotsCategory
