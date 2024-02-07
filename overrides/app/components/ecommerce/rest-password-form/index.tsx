import React, {useState} from 'react'

// Hooks
import {useForm, SubmitHandler} from 'react-hook-form'
import {
    useShopperCustomersMutation,
    ShopperCustomersMutations
} from '@salesforce/commerce-sdk-react'

// Components
import {Flex, Button, Text} from '@chakra-ui/react'
import InputText from '../../project/fields/input.text'
import {IconLoading} from '../../project/icons'
import SimpleCard from '../../project/simple-card'
import {useLocalTranslations} from '../../../../core/hooks/use-translation'

// Others
import {_REGEX} from '../../../constants'
import {TranslationsType} from '../../../pages/login/login.tranlsations'

// Types
type FormInputs = {
    email: string
}

// Component
const ResetPasswordForm: React.FC = () => {
    // hooks
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
    const form = useForm<FormInputs>()

    const getResetPasswordToken = useShopperCustomersMutation(
        ShopperCustomersMutations.GetResetPasswordToken
    )

    const resources = useLocalTranslations<TranslationsType>()

    // Props
    const {register, handleSubmit, formState} = form
    const {errors} = formState

    // Handlers
    const handler: SubmitHandler<FormInputs> = async (data) => {
        try {
            const body = {
                login: data.email
            }
            await getResetPasswordToken.mutateAsync({body})
        } catch (e) {
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

                <Button type="submit" colorScheme="login" isDisabled={formState.isSubmitting}>
                    <Text color="white">
                        {resources.sys_form_input_reset_password_title}{' '}
                        {formState.isSubmitting && <IconLoading />}
                    </Text>
                </Button>
            </Flex>
        </form>
    )
}

export default ResetPasswordForm
