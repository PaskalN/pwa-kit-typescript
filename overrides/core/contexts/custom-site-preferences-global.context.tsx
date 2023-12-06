import React, {createContext} from 'react'
import {UseQueryResult} from '@tanstack/react-query'
import useQueryCustomSitePreferenceGlobal from '../queries/custom-site-preferences-global.query'

// What is this !!!!!!!!!!!!!!!!1
// import { useQuerySitePreferences } from '../queries/site-preference.query'

// Context
export const CustomSitePreferencesGlobalContext = createContext<UseQueryResult<
    unknown,
    unknown
> | null>(null)

// Provider
export const CustomSitePreferencesGlobalProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    const result = useQueryCustomSitePreferenceGlobal()

    return (
        <CustomSitePreferencesGlobalContext.Provider value={result}>
            {children}
        </CustomSitePreferencesGlobalContext.Provider>
    )
}
