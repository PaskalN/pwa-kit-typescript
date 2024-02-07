import React from 'react'
import {UseDisclosureReturn} from '@chakra-ui/react'

// Components
import Modal from '../../project/modal'
import CountrySelector from '../modal-content/country-selector'
import GlobalLoading from '../modal-content/global-loading'

// Hooks
import {useGlobalDiscloser} from '../../../../core/hooks/use-disclosure'

const GlobalModals: React.FC = () => {
    const globalDiscloser = useGlobalDiscloser<Disclosers.GLOBAL<UseDisclosureReturn>>()

    return (
        <>
            {/* Country Selector */}
            <Modal
                isOpen={globalDiscloser.COUNTRY_SELECTOR.isOpen}
                onClose={globalDiscloser.COUNTRY_SELECTOR.onClose}
            >
                <CountrySelector />
            </Modal>

            {/* Global Loading */}
            <Modal isOpen={globalDiscloser.GLOBAL_LODING.isOpen} onClose={() => {}}>
                <GlobalLoading />
            </Modal>
        </>
    )
}

export default GlobalModals
