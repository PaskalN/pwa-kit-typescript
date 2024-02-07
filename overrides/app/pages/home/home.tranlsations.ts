import {MessageDescriptor} from 'react-intl'
import {getTranslationCollection} from '../../../core/utils/translation-utils'

const TranslationIDs = [
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

const Collection = getTranslationCollection<typeof TranslationIDs>(TranslationIDs)

export type TranslationsType = Record<(typeof TranslationIDs)[number], string>
export const Translations = Collection as Record<(typeof TranslationIDs)[number], MessageDescriptor>
