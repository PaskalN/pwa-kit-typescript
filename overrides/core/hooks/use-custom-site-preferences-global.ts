import {useContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'

import {CustomSitePreferencesGlobalContext} from '../context'

export const useCustomSitePreferencesGlobal = <T>() => {
    return useContext<UseQueryResult<unknown, unknown> | null>(
        CustomSitePreferencesGlobalContext
    ) as UseQueryResult<T, unknown> | null
}
