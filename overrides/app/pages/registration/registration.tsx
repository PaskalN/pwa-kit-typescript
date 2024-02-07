import React, {useEffect} from 'react'

// Components
import RegistrationPageContent from './registration.content'
import RegistrationProviders from './registration.providers'

// Hooks
import {useRedirectToPage} from '../../utils/site-utils'
import {useCustomerType} from '@salesforce/commerce-sdk-react'

// Others
import {_ROUTERS} from '../../constants'

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
        <RegistrationProviders>
            <RegistrationPageContent />
        </RegistrationProviders>
    )
}

Registration.getTemplateName = () => 'Registration'

export default Registration
