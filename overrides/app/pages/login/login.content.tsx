import React from 'react'
import {useIntl} from 'react-intl'

// Components
import {Box, Flex, Text, Heading, Button, UseDisclosureReturn} from '@chakra-ui/react'
import LoginForm from '../../components/ecommerce/login-form'
import Modal from '../../components/project/modal'
import SimpleCard from '../../components/project/simple-card'
import ResetPasswordForm from '../../components/ecommerce/rest-password-form'

// Hooks
import {useLocalTranslations} from '../../../core/hooks/use-translation'
import {useRedirectToPage} from '../../utils/site-utils'
import {useLocalDiscloser} from '../../../core/hooks/use-disclosure'

// Others
import {_ROUTERS} from '../../constants'
import {TranslationsType} from './login.tranlsations'

const LoginPageContent: React.FC = () => {
    const resources = useLocalTranslations<TranslationsType>()
    const redirectToPage = useRedirectToPage()
    const disclosures = useLocalDiscloser<Disclosers.LoginPage<UseDisclosureReturn>>()

    const intl = useIntl()

    return (
        <Box layerStyle="page-frame" paddingTop="10rem">
            {intl.formatMessage(
                {
                    id: 'sys_test',
                    defaultMessage: 'Hello {name}!'
                },
                {
                    name: 'John'
                }
            )}
            <Box layerStyle="page-segment">
                <Heading
                    as="h1"
                    size="lg"
                    variant="heavy"
                    w="100%"
                    textAlign="center"
                    textTransform="uppercase"
                >
                    {resources.sys_login_page_form_title}
                </Heading>
            </Box>
            <Box layerStyle="page-segment">
                <Flex gap="2rem" w="100%" alignItems="flex-start">
                    <SimpleCard variant="light_shadow" gap="1rem" w="100%" p="2.5rem">
                        <Heading
                            as="h3"
                            size="lg"
                            variant="heavy"
                            w="100%"
                            textTransform="uppercase"
                        >
                            {resources.sys_login_page_form_title}
                        </Heading>
                        <Text>{resources.sys_login_page_form_description}</Text>
                        <LoginForm />
                    </SimpleCard>

                    <SimpleCard variant="light_shadow" gap="1rem" w="100%" p="2.5rem">
                        <Heading
                            as="h3"
                            size="lg"
                            variant="heavy"
                            w="100%"
                            textTransform="uppercase"
                        >
                            {resources.sys_login_page_no_account_title}
                        </Heading>
                        <Text>{resources.sys_login_page_no_account_description}</Text>
                        <Button
                            onClick={() => redirectToPage(_ROUTERS.REGISTRATION)}
                            colorScheme="login"
                        >
                            <Text color="white">
                                {resources.sys_form_input_account_create_title}
                            </Text>
                        </Button>
                    </SimpleCard>
                </Flex>
            </Box>

            <Modal
                isOpen={disclosures.RESER_PASSWORD.isOpen}
                onClose={disclosures.RESER_PASSWORD.onClose}
            >
                <SimpleCard maxW="40rem" variant="light_shadow" gap="1rem" w="100%" p="2.5rem">
                    <Heading as="h3" size="lg" variant="heavy" w="100%" textTransform="uppercase">
                        {resources.sys_form_input_reset_password_title}
                    </Heading>
                    <Text>{resources.sys_form_input_reset_password_description}</Text>
                    <ResetPasswordForm />
                </SimpleCard>
            </Modal>
        </Box>
    )
}

export default LoginPageContent
