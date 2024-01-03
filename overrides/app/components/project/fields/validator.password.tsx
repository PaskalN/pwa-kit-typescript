import React from 'react'
import {_REGEX} from '../../../constants'
import {Flex, Text} from '@chakra-ui/react'

// Hook
import {useLocalTranslations} from '../../../../core/hooks/use-translation'

// Icons
import {IconShield, IconShieldCheck} from '../icons'

// Other
import {ResourcesType} from '../../../pages/registration/registration.translations'

const Check: React.FC<{
    checked: boolean
}> = (props) => {
    const {checked} = props

    if (checked) {
        return <IconShieldCheck color="green.100" marginRight="0.75rem" />
    }

    return <IconShield color="monochromatic.100" marginRight="0.75rem" />
}

const ValidatorPassword: React.FC<{
    value: string
}> = (props) => {
    const {value = ''} = props

    // Hooks
    const resources = useLocalTranslations<ResourcesType>()

    const hasLowercaseLetter = _REGEX.LOWERCASE_LETTERS.test(value)
    const hasUppercaseLetter = _REGEX.UPPERCASE_LETTERS.test(value)
    const hasSpecialCharacter = _REGEX.SPECIAL_CHARACTERS.test(value)
    const hasNumber = _REGEX.NUMBER.test(value)
    const has8Length = value.length > 6

    return (
        <Flex flexDir="column" gap="0.85rem">
            <Text>
                <Check checked={has8Length} />
                {resources.sys_form_options_seven_char}
            </Text>
            <Text>
                <Check checked={hasUppercaseLetter} />
                {resources.sys_form_options_uppercase}
            </Text>
            <Text>
                <Check checked={hasLowercaseLetter} />
                {resources.sys_form_options_lowercase}
            </Text>
            <Text>
                <Check checked={hasNumber} />
                {resources.sys_form_options_number}
            </Text>
            <Text>
                <Check checked={hasSpecialCharacter} />
                {resources.sys_form_options_special_char}
            </Text>
        </Flex>
    )
}

export default ValidatorPassword
