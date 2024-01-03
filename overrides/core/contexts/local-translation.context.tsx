import React, {createContext} from 'react'
import {useIntl, MessageDescriptor} from 'react-intl'

// Local Resources
export const LocalTranslationContext = createContext<Record<string, string>>({})

export const LocalTranslationProvider: React.FC<{
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
        <LocalTranslationContext.Provider value={result}>
            {children}
        </LocalTranslationContext.Provider>
    )
}
