import React, {createContext} from 'react'

// Context
export const SlotContext = createContext<SiteContent.SlotConfiguration | null>(null)

// Provider
export const SlotProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
    configuration: SiteContent.SlotConfiguration | null
}> = (props) => {
    const {children, configuration} = props

    return <SlotContext.Provider value={configuration}>{children}</SlotContext.Provider>
}
