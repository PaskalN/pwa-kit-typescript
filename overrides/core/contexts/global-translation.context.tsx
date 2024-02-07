import React, {createContext} from 'react'
import {useIntl, MessageDescriptor} from 'react-intl'

// Local Resources
export const GlobalTranslationContext = createContext<Record<string, string>>({})

export const GlobalTranslationProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    resources: Record<string, MessageDescriptor>
}> = (props) => {
    const {children, resources} = props

    const intl = useIntl()

    // eslint-disable-next-line @typescript-eslint/unbound-method
    const {formatMessage} = intl

    const result: Record<string, string> = {}

    Object.keys(resources).forEach((key) => {
        const resource = resources[key]
        result[key] = formatMessage(resource)
    })

    return (
        <GlobalTranslationContext.Provider value={result}>
            {children}
        </GlobalTranslationContext.Provider>
    )
}
