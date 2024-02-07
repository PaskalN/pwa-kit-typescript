import React from 'react'

// Contexts
import {PageGlobalSlotProvider, ContentAssetsProvider} from '../../context'
import {LocalTranslationProvider} from '../../../core/contexts/local-translation.context'

// Queries
import {useHomePageSlotsQuery, useHomePageAssetsQuery} from './home.queries'

// Others
import {Translations} from './home.tranlsations'

const HomeProviders: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const pageSlotResultQuery = useHomePageSlotsQuery()
    const assetsQuery = useHomePageAssetsQuery()

    return (
        <LocalTranslationProvider resources={Translations}>
            <PageGlobalSlotProvider query={pageSlotResultQuery}>
                <ContentAssetsProvider query={assetsQuery}>{children}</ContentAssetsProvider>
            </PageGlobalSlotProvider>
        </LocalTranslationProvider>
    )
}

export default HomeProviders
