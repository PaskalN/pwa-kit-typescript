import React from 'react'

// Providers
import {GlobalTranslationProvider} from '../../../core/contexts/global-translation.context'
import SystemaProviders from '../../../core/components/systema/systema-providers'
import {GlobalDisclosureProvider} from '../../../core/contexts/disclosure.context'

// Components
import GlobalModals from '../../components/ecommerce/global-modals'

// Others
import {useDisclosure} from '@chakra-ui/react'
import {GlobalTranslations} from './app-wrapper.tranlsations'

const AppWrapperProviders: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    // CONTENT SLOTS
    const GLOBAL_SLOTS = ['header-top-banner', 'footer-column-m', 'best-man']

    // MODALS & DRAWERS
    const GLOBAL_DISCLOSURES = {
        COUNTRY_SELECTOR: useDisclosure(),
        GLOBAL_LODING: useDisclosure()
    }

    return (
        <GlobalTranslationProvider resources={GlobalTranslations}>
            <SystemaProviders globalSlotsIds={GLOBAL_SLOTS}>
                <GlobalDisclosureProvider disclosures={GLOBAL_DISCLOSURES}>
                    {children}
                    <GlobalModals />
                </GlobalDisclosureProvider>
            </SystemaProviders>
        </GlobalTranslationProvider>
    )
}

export default AppWrapperProviders
