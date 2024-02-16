import React, {useEffect} from 'react'

// Components
import RegistrationPageContent from './registration.content'

// Hooks
import {useRedirectToPage} from '../../utils/site-utils'
import {useCustomerType} from '@salesforce/commerce-sdk-react'
import {Resources} from './registration.translations'

// Others
import {_ROUTERS} from '../../constants'
import {MessageDescriptor} from 'react-intl'

// Providers
import {LocalTranslationProvider} from '../../../core/contexts/local-translation.context'

const Registration: React.FC & {
    getTemplateName: () => string
} = () => {
    const redirectToPage = useRedirectToPage()
    const {isRegistered} = useCustomerType()

    useEffect(() => {
        if (isRegistered) {
            redirectToPage(_ROUTERS.ACCOUNT)
        }
    }, [isRegistered])

    return (
        <LocalTranslationProvider
            resources={Resources as unknown as Record<string, MessageDescriptor>}
        >
            <RegistrationPageContent />
        </LocalTranslationProvider>
    )
}

Registration.getTemplateName = () => 'Registration'

export default Registration
