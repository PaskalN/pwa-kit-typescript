import {MessageDescriptor} from 'react-intl'
import {getTranslationCollection} from '../../../core/utils/translation-utils'

const TranslationIDs = [
    // Global Inputs
    'sys_form_input_select_require',

    // Gender
    'sys_form_input_gender_label',
    'sys_form_input_gender_placeholder',

    // Email
    'sys_form_input_email_label',
    'sys_form_input_email_placeholder',
    'sys_form_input_email_error_message',
    'sys_form_input_email_require_message',

    // Password
    'sys_form_input_password_label',
    'sys_form_input_password_require_message',
    'sys_form_input_password_placeholder',
    'sys_form_input_password_notmatch_message',

    // First Name
    'sys_form_input_first_name_label',
    'sys_form_input_first_name_placeholder',
    'sys_form_input_first_name_require_message',

    // Last Name
    'sys_form_input_last_name_label',
    'sys_form_input_last_name_placeholder',
    'sys_form_input_last_name_require_message',

    // Confirm Password
    'sys_form_input_confirm_password_label',
    'sys_form_input_confirm_password_placeholder',

    // Options
    'sys_form_options_male',
    'sys_form_options_female',
    'sys_form_options_other',
    'sys_form_options_seven_char',
    'sys_form_options_uppercase',
    'sys_form_options_lowercase',
    'sys_form_options_number',
    'sys_form_options_special_char',

    // Login Button
    'sys_form_input_login_title',

    // Create Account Button
    'sys_form_input_account_create_title',

    // Page Labels
    'sys_login_page_title',
    'sys_login_page_form_title',
    'sys_login_page_form_description',
    'sys_login_page_no_account_title',
    'sys_login_page_no_account_description',

    // Global Labels
    'sys_label_forgot_password',
    'sys_label_create_account',

    // Descriptions
    'sys_create_account_page_form_description'
] as const

const Collection = getTranslationCollection<typeof TranslationIDs>(TranslationIDs)

export type TranslationsType = Record<(typeof TranslationIDs)[number], string>
export const Translations = Collection as Record<(typeof TranslationIDs)[number], MessageDescriptor>
