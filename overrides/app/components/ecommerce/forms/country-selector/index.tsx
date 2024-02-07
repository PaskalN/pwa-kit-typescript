import React, {useRef, useState} from 'react'

// Components
import {Flex, Button, Text} from '@chakra-ui/react'
import InputSelect from '../../../project/fields/input.select'

// Hooks
import {getTargetLocale} from '../../../../utils/locale'
import useMultiSite from '../../../../hooks/use-multi-site'
import {useGlobalTranslations} from '../../../../../core/hooks/use-translation'

// Other
import {DEFAULT_LOCALE} from '../../../../constants'
import {GlobalTranslationsType} from '../../../../pages/app-wrapper/app-wrapper.tranlsations'
import {getPathWithLocale} from '../../../../utils/urls'

const CountrySelectorForm: React.FC = () => {
    const multiSite = useMultiSite()
    const {site, locale, buildUrl} = multiSite
    const globalTranslation = useGlobalTranslations<GlobalTranslationsType>()
    const ref = useRef<HTMLSelectElement>(null)

    const [state, setState] = useState<boolean>(false)

    const targetLocale = getTargetLocale({
        getUserPreferredLocales: () => {
            return [locale?.id || DEFAULT_LOCALE]
        },
        l10nConfig: site.l10n
    })

    const countryValues = site.l10n.supportedLocales
        .map((el) => {
            if ('locale_text.message.' + el.id in globalTranslation) {
                const bank = globalTranslation as unknown as Record<string, string>

                return {
                    value: el.id,
                    displayValue: bank['locale_text.message.' + el.id]
                }
            }

            return null
        })
        .filter((el) => !!el) as Array<{
        value: string
        displayValue: string
    }>

    const countrySelectHandler = () => {
        if (!ref.current?.value) return
        const target = ref.current

        // Update the `locale` in the URL.
        const newUrl = getPathWithLocale(target.value, buildUrl, {
            disallowParams: ['refine']
        })

        setState(true)

        if (typeof window !== undefined) {
            window.location.href = newUrl
        }
    }

    return (
        <Flex flexDir="column" gap="1rem">
            <InputSelect
                isRequired={true}
                id="gender"
                label="Select region"
                defaultValue={targetLocale}
                options={countryValues}
                ref={ref}
            />
            <Button type="submit" colorScheme="login" onClick={countrySelectHandler}>
                <Text color="white">Apply {state.toString()}</Text>
            </Button>
        </Flex>
    )
}

export default CountrySelectorForm
