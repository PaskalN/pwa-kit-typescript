import React, {useEffect} from 'react'

// Components
import {Box, Flex, Text, Heading} from '@chakra-ui/react'
import RegistrationForm from '../../components/ecommerce/registration-form'
import SimpleCard from '../../components/project/simple-card'

// Hooks
import {useRedirectToPage} from '../../utils/site-utils'
import {useCustomerType} from '@salesforce/commerce-sdk-react'

// Hooks
import {useLocalTranslations} from '../../../core/hooks/use-translation'

// Others
import {_ROUTERS} from '../../constants'
import {TranslationsType} from './registration.translations'

const RegistrationPageContent: React.FC = () => {
    // Hooks
    const redirectToPage = useRedirectToPage()
    const {isRegistered} = useCustomerType()

    const resources = useLocalTranslations<TranslationsType>()

    // Others
    useEffect(() => {
        if (isRegistered) {
            redirectToPage(_ROUTERS.ACCOUNT)
        }
    }, [isRegistered])

    return (
        <Box layerStyle="page-frame" paddingTop="10rem">
            <Box layerStyle="page-segment">
                <Heading
                    as="h1"
                    size="lg"
                    variant="heavy"
                    w="100%"
                    textAlign="center"
                    textTransform="uppercase"
                >
                    {resources.sys_label_create_account}
                </Heading>
            </Box>
            <Box layerStyle="page-segment">
                <Flex gap="2rem" w="100%" alignItems="flex-start">
                    <SimpleCard variant="light_shadow" gap="1rem" w="100%" p="2.5rem">
                        <Text>{resources.sys_create_account_page_form_description}</Text>
                        <RegistrationForm />
                    </SimpleCard>
                </Flex>
            </Box>
        </Box>
    )
}

export default RegistrationPageContent
