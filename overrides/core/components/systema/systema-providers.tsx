import React from 'react'
import {SiteGlobalSlotProvider, CustomSitePreferencesGlobalProvider} from '../../context'

const SystemaProviders: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
    globalSlotsIds?: Array<string>
}> = (props) => {
    const {children, globalSlotsIds = []} = props

    return (
        <SiteGlobalSlotProvider slotIDs={globalSlotsIds}>
            <CustomSitePreferencesGlobalProvider>{children}</CustomSitePreferencesGlobalProvider>
        </SiteGlobalSlotProvider>
    )
}

export default SystemaProviders
