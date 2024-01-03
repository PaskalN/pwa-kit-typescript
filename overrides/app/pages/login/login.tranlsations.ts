import {MessageDescriptor} from 'react-intl'
import defaultContext from '../../../../translations/en-GB.json'

const ResourceIDs = [
    'sys_label_forgot_password',

    'sys_form_input_email_label',
    'sys_form_input_email_placeholder',
    'sys_form_input_email_error_message',
    'sys_form_input_email_require_message',

    'sys_form_input_password_label',
    'sys_form_input_password_require_message',

    'sys_form_input_login_title',

    'sys_form_input_account_create_title',

    'sys_form_input_password_placeholder',

    'sys_form_input_reset_password_title',

    'sys_form_input_reset_password_title',
    'sys_form_input_reset_password_description',

    'sys_login_page_title',
    'sys_login_page_form_title',
    'sys_login_page_form_description',
    'sys_login_page_no_account_title',
    'sys_login_page_no_account_description'
] as const

const Collector: Record<string, unknown> = {}

ResourceIDs.forEach((ID) => {
    Collector[ID] = {
        id: ID,
        defaultMessage: defaultContext[ID].defaultMessage
    }
})

type ResourcesK = (typeof ResourceIDs)[number]
export type ResourcesType = Record<ResourcesK, string>
export const Resources = Collector as Record<ResourcesK, MessageDescriptor>
