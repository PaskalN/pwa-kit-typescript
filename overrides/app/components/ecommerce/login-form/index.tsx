import React, {useState} from 'react'
import {UseDisclosureReturn} from '@chakra-ui/react'

// Hooks
import {useForm, SubmitHandler} from 'react-hook-form'
import {AuthHelpers, useAuthHelper} from '@salesforce/commerce-sdk-react'
import {useLocalDiscloser} from '../../../../core/hooks/use-disclosure'

// Components
import {Flex, Button, Text} from '@chakra-ui/react'
import InputText from '../../project/fields/input.text'
import InputPassword from '../../project/fields/input.password'
import {IconLoading} from '../../project/icons'
import SimpleCard from '../../project/simple-card'
import {useLocalTranslations} from '../../../../core/hooks/use-translation'

// Others
import {_REGEX} from '../../../constants'
import {TranslationsType} from '../../../pages/login/login.tranlsations'

// Types
type FormInputs = {
    email: string
    password: string
}

// Component
const LoginForm: React.FC = () => {
    // hooks
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
    const form = useForm<FormInputs>()
    const login = useAuthHelper(AuthHelpers.LoginRegisteredUserB2C)
    const resources = useLocalTranslations<TranslationsType>()
    const disclosures = useLocalDiscloser<Disclosers.LoginPage<UseDisclosureReturn>>()

    // Props
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    // Handlers
    const handler: SubmitHandler<FormInputs> = async (data) => {
        try {
            await login.mutateAsync({username: data.email, password: data.password})
        } catch (err) {
            // form.setError
            setFailedSubmit(true)
        }
    }

    // Form Filed Settings
    const inputSettings = {
        email: {
            required: resources.sys_form_input_email_require_message,
            pattern: {
                value: _REGEX.EMAIL,
                message: resources.sys_form_input_email_error_message
            }
        },
        password: {
            required: resources.sys_form_input_password_require_message
        }
    }

    return (
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        <form onSubmit={handleSubmit(handler)} style={{width: '100%'}}>
            <Flex flexDir="column" gap="1rem">
                {failedSubmit && (
                    <SimpleCard variant="error">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
                        distinctio minima! Quo itaque, ducimus inventore soluta porro quos iusto
                        eaque deleniti facere corporis ipsam quod. Eligendi cum quod neque
                        asperiores?
                    </SimpleCard>
                )}
                <InputText
                    silentRequire={true}
                    label={resources.sys_form_input_email_label}
                    type="email"
                    id="email"
                    placeholder={resources.sys_form_input_email_placeholder}
                    error={errors.email}
                    {...register('email', inputSettings.email)}
                    isDisabled={formState.isSubmitting}
                />

                <InputPassword
                    silentRequire={true}
                    label={resources.sys_form_input_email_label}
                    type="password"
                    id="password"
                    placeholder={resources.sys_form_input_password_placeholder}
                    error={errors.password}
                    {...register('password', inputSettings.password)}
                    isDisabled={formState.isSubmitting}
                />

                <Flex alignItems="center" justifyContent="center">
                    <Button
                        onClick={() => {
                            disclosures.RESER_PASSWORD.onOpen()
                        }}
                    >
                        <Text as="span" colorScheme="link" letterSpacing="0">
                            {resources.sys_label_forgot_password}
                        </Text>
                    </Button>
                </Flex>

                <Button type="submit" colorScheme="login" isDisabled={formState.isSubmitting}>
                    <Text color="white">
                        {resources.sys_form_input_login_title}{' '}
                        {formState.isSubmitting && <IconLoading />}
                    </Text>
                </Button>
            </Flex>
        </form>
    )
}

export default LoginForm
