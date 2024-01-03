export * from '../core/constants'

export const CUSTOM_HOME_TITLE = 'Custom Home Title'

export const _ROUTERS = {
    LOGIN: '/login',

    ACCOUNT: '/account',

    REGISTRATION: '/registration'
}

export const _REGEX = {
    EMAIL: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g,

    LOWERCASE_LETTERS: /[a-z]/g,
    UPPERCASE_LETTERS: /[^a-z]/g,
    SPECIAL_CHARACTERS: /[!@#$%^&*()_\-+=.,/\\`~]/g,
    NUMBER: /[0-9]/g
}
