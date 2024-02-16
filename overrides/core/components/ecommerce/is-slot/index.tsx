import React, {useEffect, useState} from 'react'

import useCategorySlot from '../../../hooks/use-category-slot-global'
import usePageSlotGlobal from '../../../hooks/use-page-slot-global'
import useSiteSlotGlobal from '../../../hooks/use-site-slot-global'

import {SlotProvider} from '../../../context'

const getSlot = (
    slotId: string,
    context: string,
    siteSlotData?: SiteContent.ContentSlotResult | null,
    pageSlotData?: SiteContent.ContentSlotResult | null,
    categorySlotData?: SiteContent.ContentSlotResult | null
): SiteContent.ContentSlot | null => {
    if (context === 'global') {
        if (Object.keys(siteSlotData || {}).length || Object.keys(pageSlotData || {}).length) {
            const siteResult = siteSlotData ? siteSlotData[slotId] : null
            const pageResult = pageSlotData ? pageSlotData[slotId] : null

            if (siteResult) return siteResult

            if (pageResult) return pageResult

            return null
        }
    }

    if (context === 'category') {
        if (Object.keys(categorySlotData || {}).length) {
            const categoryResult = categorySlotData ? categorySlotData[slotId] : null

            if (categoryResult) return categoryResult

            return null
        }
    }

    return null
}

const IsSlot: React.FC<{
    slotId: string
    context?: 'global' | 'category'
    children?: React.ReactNode | Array<React.ReactNode>
    loadingAs?: React.ReactNode
}> = (props) => {
    const {children, slotId, context = 'global', loadingAs} = props

    const siteSlots = useSiteSlotGlobal()
    const pageSlots = usePageSlotGlobal()
    const categorySlots = useCategorySlot()

    const siteSlotData = !siteSlots?.data?.error ? siteSlots?.data : null
    const isSiteSlotsLoading = !!siteSlots?.isLoading

    const pageSlotData = !pageSlots?.data?.error ? pageSlots?.data : null
    const isPageSlotsLoading = !!pageSlots?.isLoading

    const categorySlotData = !categorySlots?.data?.error ? categorySlots?.data : null
    const isCategorySlotsLoading = !!categorySlots?.isLoading

    const serverSlot = getSlot(slotId, context, siteSlotData, pageSlotData, categorySlotData)

    const [loading, setLoading] = useState<boolean>(
        !!isPageSlotsLoading || !!isSiteSlotsLoading || !!isCategorySlotsLoading
    )
    const [slot, setSlot] = useState<SiteContent.ContentSlot | null>(serverSlot)

    useEffect(() => {
        if (context === 'global') {
            if (slot) return
            setLoading(isPageSlotsLoading || isSiteSlotsLoading)
            if (!isSiteSlotsLoading && !isPageSlotsLoading) {
                const slot = getSlot(slotId, context, siteSlotData, pageSlotData)
                setSlot(slot)
            }
        } else {
            setLoading(isCategorySlotsLoading)
            if (!isCategorySlotsLoading) {
                const slot = getSlot(slotId, context, undefined, undefined, categorySlotData)
                setSlot(slot)
            }
        }
    }, [
        siteSlotData,
        isSiteSlotsLoading,
        pageSlotData,
        isPageSlotsLoading,
        categorySlotData,
        isCategorySlotsLoading
    ])

    if (loading) return <>{loadingAs}</>

    return slot && slot?.length ? (
        <>
            {slot?.map((configuration, index) => {
                return (
                    <SlotProvider key={index} configuration={configuration}>
                        {children}
                    </SlotProvider>
                )
            })}
        </>
    ) : null
}

export default IsSlot
