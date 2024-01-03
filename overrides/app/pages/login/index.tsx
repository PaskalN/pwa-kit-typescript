import React, {useEffect} from 'react'
import {useDisclosure, UseDisclosureReturn} from '@chakra-ui/react'

// Components
import LoginPageContent from './login.content'

// Hooks
import {useRedirectToPage} from '../../utils/site-utils'
import {useCustomerType} from '@salesforce/commerce-sdk-react'
import {Resources} from './login.tranlsations'

// Others
import {_ROUTERS} from '../../constants'
import {MessageDescriptor} from 'react-intl'

// Providers
import {LocalTranslationProvider} from '../../../core/contexts/local-translation.context'
import {LocalDisclosureProvider} from '../../../core/contexts/disclosure.context'

const Login: React.FC & {
    getTemplateName: () => string
} = () => {
    const redirectToPage = useRedirectToPage()
    const {isRegistered} = useCustomerType()

    useEffect(() => {
        if (isRegistered) {
            redirectToPage(_ROUTERS.ACCOUNT)
        }
    }, [isRegistered])

    const disclosures: Disclosers.LoginPage<UseDisclosureReturn> = {
        RESER_PASSWORD: useDisclosure()
    }

    return (
        <LocalTranslationProvider
            resources={Resources as unknown as Record<string, MessageDescriptor>}
        >
            <LocalDisclosureProvider disclosures={disclosures}>
                <LoginPageContent />
            </LocalDisclosureProvider>
        </LocalTranslationProvider>
    )
}

Login.getTemplateName = () => 'Login'

export default Login
