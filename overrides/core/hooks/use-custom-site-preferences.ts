import {useEffect, useState} from 'react'

import {UseQueryResult} from '@tanstack/react-query'
import {useHistory} from 'react-router-dom'

import {useCustomSitePreferencesGlobal} from './use-custom-site-preferences-global'

const getValues = (
    localData: Record<string, unknown> | null,
    globalData: Record<string, unknown> | null
) => {
    const result = {
        ...(localData || {}),
        ...(globalData || {})
    }

    return result
}

const useCustomSitePreferences = (query?: UseQueryResult<unknown, unknown>) => {
    const history = useHistory()
    const initialLoading = history.action === 'POP'

    const globalPreference = useCustomSitePreferencesGlobal<Record<string, unknown>>()
    const globalData = globalPreference?.data || null

    const local = query || null
    const localData = (query ? local?.data : null) as Record<string, unknown> | null
    const localLoading = local?.isLoading || false

    const [preferences, setPreferences] = useState<Record<string, unknown>>(
        getValues(localData, globalData)
    )
    useEffect(() => {
        if (initialLoading || !localData) return

        setPreferences(getValues(localData, globalData))
    }, [localData, localLoading])

    return preferences
}

export default useCustomSitePreferences
