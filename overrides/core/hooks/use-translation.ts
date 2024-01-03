import {useContext} from 'react'
import {LocalTranslationContext} from '../contexts/local-translation.context'
import {GlobalTranslationContext} from '../contexts/global-translation.context'

export const useLocalTranslations = <RType extends Record<string, string>>() =>
    useContext(LocalTranslationContext) as RType

export const useGlobalTranslations = <RType extends Record<string, string>>() =>
    useContext(GlobalTranslationContext) as RType
