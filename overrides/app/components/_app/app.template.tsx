import React from 'react'
import {SiteGlobalSlotProvider, CustomSitePreferencesGlobalProvider} from '../../context'

const AppTemplate: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const GLOBAL_SLOTS = ['footer-column-m', 'best-man']
    return (
        <SiteGlobalSlotProvider slotIDs={GLOBAL_SLOTS}>
            <CustomSitePreferencesGlobalProvider>{children}</CustomSitePreferencesGlobalProvider>
        </SiteGlobalSlotProvider>
    )
}

export default AppTemplate
