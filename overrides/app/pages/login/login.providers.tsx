import React from 'react'

// Provider
import {LocalTranslationProvider} from '../../../core/contexts/local-translation.context'
import {LocalDisclosureProvider} from '../../../core/contexts/disclosure.context'

// Others
import {useDisclosure, UseDisclosureReturn} from '@chakra-ui/react'
import {Translations} from './login.tranlsations'

const LoginProviders: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const disclosures: Disclosers.LoginPage<UseDisclosureReturn> = {
        RESER_PASSWORD: useDisclosure()
    }

    return (
        <LocalTranslationProvider resources={Translations}>
            <LocalDisclosureProvider disclosures={disclosures}>{children}</LocalDisclosureProvider>
        </LocalTranslationProvider>
    )
}

export default LoginProviders
