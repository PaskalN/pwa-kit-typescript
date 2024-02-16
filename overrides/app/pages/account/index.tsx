import React, {useEffect} from 'react'

// Components
import {Box, Heading, Button} from '@chakra-ui/react'

// Hooks
import {AuthHelpers, useAuthHelper} from '@salesforce/commerce-sdk-react'
import {useCustomerType} from '@salesforce/commerce-sdk-react'
import {useRedirectToPage} from '../../utils/site-utils'

// Others
import {_ROUTERS} from '../../constants'

const Account: React.FC & {
    getTemplateName: () => string
} = () => {
    // Hooks
    const logout = useAuthHelper(AuthHelpers.Logout)
    const redirectToPage = useRedirectToPage()
    const {isRegistered} = useCustomerType()

    // Handlers
    const logoutHandler = async () => {
        await logout.mutateAsync()
    }

    // Others
    useEffect(() => {
        if (!isRegistered) {
            redirectToPage(_ROUTERS.LOGIN)
        }
    }, [isRegistered])

    return (
        <Box layerStyle="page-frame" paddingTop="10rem">
            <Box layerStyle="page-segment">
                <Heading as="h1" size="lg" variant="heavy" w="100%" textAlign="center">
                    MY ACCOUNT
                </Heading>
            </Box>
            <Box layerStyle="page-segment">
                {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
                <Button colorScheme="login" onClick={logoutHandler}>
                    Logout
                </Button>
            </Box>
        </Box>
    )
}

Account.getTemplateName = () => 'Account'

export default Account
