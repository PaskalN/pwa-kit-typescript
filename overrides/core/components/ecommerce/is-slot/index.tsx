import React, {useEffect, useState} from 'react'

import useSiteSlotGlobal from '../../../hooks/use-site-slot-global'
import usePageSlotGlobal from '../../../hooks/use-page-slot-global'

import {SlotProvider} from '../../../context'

const getSlot = (
    slotId: string,
    context: string,
    siteSlotData?: SiteContent.ContentSlotResult | null,
    pageSlotData?: SiteContent.ContentSlotResult | null
): SiteContent.ContentSlot | null => {
    if (Object.keys(siteSlotData || {}).length || Object.keys(pageSlotData || {}).length) {
        const siteResult = siteSlotData ? siteSlotData[slotId] : null
        const pageResult = pageSlotData ? pageSlotData[slotId] : null

        if (context === 'global') {
            if (siteResult) return siteResult

            if (pageResult) return pageResult

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

    const siteSlotData = !siteSlots?.data?.error ? siteSlots?.data : null
    const isSiteSlotsLoading = !!siteSlots?.isLoading

    const pageSlotData = !pageSlots?.data?.error ? pageSlots?.data : null
    const isPageSlotsLoading = !!pageSlots?.isLoading
    const serverSlot = getSlot(slotId, context, siteSlotData, pageSlotData)

    const [loading, setLoading] = useState<boolean>(!!isPageSlotsLoading || !!isSiteSlotsLoading)
    const [slot, setSlot] = useState<SiteContent.ContentSlot | null>(serverSlot)

    useEffect(() => {
        if (slot) return
        setLoading(isPageSlotsLoading || isSiteSlotsLoading)
        if (!isSiteSlotsLoading && !isPageSlotsLoading) {
            const slot = getSlot(slotId, context, siteSlotData, pageSlotData)
            setSlot(slot)
        }
    }, [siteSlotData, isSiteSlotsLoading, pageSlotData, isPageSlotsLoading])

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
