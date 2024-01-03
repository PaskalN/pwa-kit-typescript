import {useContext} from 'react'
import {LocalDisclosureContext, GlobalDisclosureContext} from '../contexts/disclosure.context'
import {UseDisclosureReturn} from '@chakra-ui/react'

export const useLocalDiscloser = <T extends Record<string, UseDisclosureReturn>>() =>
    useContext(LocalDisclosureContext) as T

export const useGlobalDiscloser = <T extends Record<string, UseDisclosureReturn>>() =>
    useContext(GlobalDisclosureContext) as T
