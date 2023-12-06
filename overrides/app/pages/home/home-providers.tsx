import React from 'react'

import {PageGlobalSlotProvider, ContentAssetsProvider} from '../../context'
import {useHomePageSlotsQuery, useHomePageAssetsQuery} from './queries'

const HomeProviders: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const pageSlotResultQuery = useHomePageSlotsQuery()
    const assetsQuery = useHomePageAssetsQuery()

    return (
        <PageGlobalSlotProvider query={pageSlotResultQuery}>
            <ContentAssetsProvider query={assetsQuery}>{children}</ContentAssetsProvider>
        </PageGlobalSlotProvider>
    )
}

export default HomeProviders
