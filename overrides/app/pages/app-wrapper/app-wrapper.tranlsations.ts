import {MessageDescriptor} from 'react-intl'
import {getTranslationCollection} from '../../../core/utils/translation-utils'

const TranslationIDs = [
    'locale_text.message.ar-SA',
    'locale_text.message.bn-BD',
    'locale_text.message.bn-IN',
    'locale_text.message.cs-CZ',
    'locale_text.message.da-DK',
    'locale_text.message.de-AT',
    'locale_text.message.de-CH',
    'locale_text.message.de-DE',
    'locale_text.message.el-GR',
    'locale_text.message.en-AU',
    'locale_text.message.en-CA',
    'locale_text.message.en-GB',
    'locale_text.message.en-IE',
    'locale_text.message.en-IN',
    'locale_text.message.en-NZ',
    'locale_text.message.en-US',
    'locale_text.message.en-ZA',
    'locale_text.message.es-AR',
    'locale_text.message.es-CL',
    'locale_text.message.es-CO',
    'locale_text.message.es-ES',
    'locale_text.message.es-MX',
    'locale_text.message.es-US',
    'locale_text.message.fi-FI',
    'locale_text.message.fr-BE',
    'locale_text.message.fr-CA',
    'locale_text.message.fr-CH',
    'locale_text.message.fr-FR',
    'locale_text.message.he-IL',
    'locale_text.message.hi-IN',
    'locale_text.message.hu-HU',
    'locale_text.message.id-ID',
    'locale_text.message.it-CH',
    'locale_text.message.it-IT',
    'locale_text.message.ja-JP',
    'locale_text.message.ko-KR',
    'locale_text.message.nl-BE',
    'locale_text.message.nl-NL',
    'locale_text.message.no-NO',
    'locale_text.message.pl-PL',
    'locale_text.message.pt-BR',
    'locale_text.message.pt-PT',
    'locale_text.message.ro-RO',
    'locale_text.message.ru-RU',
    'locale_text.message.sk-SK',
    'locale_text.message.sv-SE',
    'locale_text.message.ta-IN',
    'locale_text.message.ta-LK',
    'locale_text.message.th-TH',
    'locale_text.message.tr-TR',
    'locale_text.message.zh-CN',
    'locale_text.message.zh-HK',
    'locale_text.message.zh-TW'
] as const

const Collection = getTranslationCollection<typeof TranslationIDs>(TranslationIDs)

export type GlobalTranslationsType = Record<(typeof TranslationIDs)[number], string>
export const GlobalTranslations = Collection as Record<
    (typeof TranslationIDs)[number],
    MessageDescriptor
>
