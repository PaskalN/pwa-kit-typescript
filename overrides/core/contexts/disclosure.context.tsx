import React, {createContext} from 'react'
import {UseDisclosureReturn} from '@chakra-ui/react'

// Local Disclosures
export const LocalDisclosureContext = createContext<Record<string, UseDisclosureReturn>>({})

export const LocalDisclosureProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    disclosures: Record<string, UseDisclosureReturn>
}> = (props) => {
    const {children, disclosures} = props

    return (
        <LocalDisclosureContext.Provider value={disclosures}>
            {children}
        </LocalDisclosureContext.Provider>
    )
}

// Global Disclosures
export const GlobalDisclosureContext = createContext<Record<string, UseDisclosureReturn>>({})

export const GlobalDisclosureProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    disclosures: Record<string, UseDisclosureReturn>
}> = (props) => {
    const {children, disclosures} = props

    return (
        <GlobalDisclosureContext.Provider value={disclosures}>
            {children}
        </GlobalDisclosureContext.Provider>
    )
}
