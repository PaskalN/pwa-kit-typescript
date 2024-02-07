import React, {useEffect} from 'react'

// Components
import LoginPageContent from './login.content'
import LoginProviders from './login.providers'

// Hooks
import {useRedirectToPage} from '../../utils/site-utils'
import {useCustomerType} from '@salesforce/commerce-sdk-react'

// Others
import {_ROUTERS} from '../../constants'

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

    return (
        <LoginProviders>
            <LoginPageContent />
        </LoginProviders>
    )
}

Login.getTemplateName = () => 'Login'

export default Login
