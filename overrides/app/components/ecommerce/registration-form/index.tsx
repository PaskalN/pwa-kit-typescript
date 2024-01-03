import React, {useState} from 'react'
import {UseFormReturn} from 'react-hook-form'

// Components
import {Link as RouterLink} from 'react-router-dom'
import {Flex, Button, Text, Link} from '@chakra-ui/react'
import InputText from '../../project/fields/input.text'
import InputPassword from '../../project/fields/input.password'
import InputSelect from '../../project/fields/input.select'
import {IconLoading} from '../../project/icons'
import SimpleCard from '../../project/simple-card'
import ValidatorPassword from '../../project/fields/validator.password'

// Hooks
import {useForm, SubmitHandler} from 'react-hook-form'
import useMultiSite from '../../../hooks/use-multi-site'
import {AuthHelpers, useAuthHelper} from '@salesforce/commerce-sdk-react'
import {useLocalTranslations} from '../../../../core/hooks/use-translation'

// Others
import {_REGEX, _ROUTERS} from '../../../constants'
import {ResourcesType} from '../../../pages/registration/registration.translations'

// Types
type FormInputs = {
    email: string
    firstName: string
    lastName: string
    password: string
    confirmPassword: string
    phoneMobile: string
    gender: number
}

// type Customer = {
//     addresses?: Array<CustomerAddress>;
//     authType?: string;
//     birthday?: any;
//     companyName?: string;
//     creationDate?: any;
//     customerId?: string;
//     customerNo?: string;
//     email?: string;
//     enabled?: boolean;
//     fax?: string;
//     firstName?: string;
//     gender?: number;
//     jobTitle?: string;
//     lastLoginTime?: any;
//     lastModified?: any;
//     lastName?: string;
//     lastVisitTime?: any;
//     login?: string;
//     note?: string;
//     paymentInstruments?: Array<CustomerPaymentInstrument>;
//     phoneBusiness?: string;
//     phoneHome?: string;
//     phoneMobile?: string;
//     preferredLocale?: string;
//     previousLoginTime?: any;
//     previousVisitTime?: any;
//     salutation?: string;
//     secondName?: string;
//     suffix?: string;
//     title?: string;
// } & {
//     [key: string]: any;
// };

// const _ERROR_TYPES = {
//     REGEX: 'regex',
//     REQUIRED: 'required'
// }

// Local Helpers
const getInputSettings = (
    form: UseFormReturn<FormInputs, unknown, undefined>,
    resources: ResourcesType
) => {
    const {watch} = form

    return {
        gender: {
            required: resources.sys_form_input_select_require
        },
        email: {
            required: resources.sys_form_input_email_require_message,
            pattern: {
                value: _REGEX.EMAIL,
                message: resources.sys_form_input_email_error_message
            }
        },
        firstName: {
            required: resources.sys_form_input_first_name_require_message
        },
        lastName: {},
        password: {
            required: resources.sys_form_input_password_require_message
        },
        confirmPassword: {
            required: resources.sys_form_input_password_require_message,
            validate: (val: string) => {
                if (watch('password') != val) {
                    return resources.sys_form_input_password_notmatch_message
                }
                return true
            }
        }
    }
}

const RegistrationForm: React.FC = () => {
    //  Hooks
    const [failedSubmit, setFailedSubmit] = useState<boolean>(false)
    const multiSite = useMultiSite()
    const form = useForm<FormInputs>()
    const registration = useAuthHelper(AuthHelpers.Register)
    const resources = useLocalTranslations<ResourcesType>()

    // Props
    const {buildUrl, site, locale} = multiSite
    const {register, handleSubmit, formState, watch} = form
    const {errors} = formState
    const inputSettings = getInputSettings(form, resources)

    // Handlers
    const handler: SubmitHandler<FormInputs> = async (data) => {
        try {
            const {password, confirmPassword, ...rest} = data

            if (confirmPassword !== password) {
                throw new Error()
            }

            const customer = {
                ...rest,
                login: rest.email
            }

            await registration.mutateAsync({
                customer,
                password
            })
        } catch (err) {
            setFailedSubmit(true)
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

                <InputSelect
                    isRequired={true}
                    id="gender"
                    label={resources.sys_form_input_gender_label}
                    placeholder={resources.sys_form_input_gender_placeholder}
                    error={errors.gender}
                    {...register('gender', inputSettings.gender)}
                    isDisabled={formState.isSubmitting}
                    options={[
                        {
                            value: 'male',
                            displayValue: resources.sys_form_options_male
                        },
                        {
                            value: 'female',
                            displayValue: resources.sys_form_options_female
                        },
                        {
                            value: 'other',
                            displayValue: resources.sys_form_options_other
                        }
                    ]}
                />
                <InputText
                    isRequired={true}
                    label={resources.sys_form_input_email_label}
                    type="email"
                    id="email"
                    placeholder={resources.sys_form_input_email_placeholder}
                    error={errors.email}
                    {...register('email', inputSettings.email)}
                    isDisabled={formState.isSubmitting}
                />
                <InputText
                    isRequired={true}
                    label={resources.sys_form_input_first_name_label}
                    type="text"
                    id="firstName"
                    placeholder={resources.sys_form_input_first_name_placeholder}
                    error={errors.firstName}
                    {...register('firstName', inputSettings.firstName)}
                    isDisabled={formState.isSubmitting}
                />
                <InputText
                    label={resources.sys_form_input_last_name_label}
                    type="text"
                    id="lastName"
                    placeholder={resources.sys_form_input_last_name_placeholder}
                    {...register('lastName', inputSettings.lastName)}
                    isDisabled={formState.isSubmitting}
                />
                <InputPassword
                    isRequired={true}
                    label={resources.sys_form_input_password_label}
                    type="password"
                    id="password"
                    placeholder={resources.sys_form_input_password_placeholder}
                    error={errors.password}
                    {...register('password', inputSettings.password)}
                    isDisabled={formState.isSubmitting}
                >
                    <ValidatorPassword value={watch('password')} />
                </InputPassword>
                <InputPassword
                    isRequired={true}
                    label={resources.sys_form_input_confirm_password_label}
                    type="password"
                    id="confirm_password"
                    placeholder={resources.sys_form_input_confirm_password_placeholder}
                    error={errors.confirmPassword}
                    {...register('confirmPassword', inputSettings.confirmPassword)}
                    isDisabled={formState.isSubmitting}
                >
                    <ValidatorPassword value={watch('confirmPassword')} />
                </InputPassword>
                <Flex alignItems="center" justifyContent="center">
                    <Link as={RouterLink} to={buildUrl(_ROUTERS.LOGIN, site.id, locale.id)}>
                        <Text as="span" colorScheme="link" letterSpacing="0">
                            {resources.sys_login_page_form_title}
                        </Text>
                    </Link>
                </Flex>
                <Button type="submit" colorScheme="login" isDisabled={formState.isSubmitting}>
                    <Text color="white">
                        Create Account {formState.isSubmitting && <IconLoading />}
                    </Text>
                </Button>
            </Flex>
        </form>
    )
}

export default RegistrationForm
