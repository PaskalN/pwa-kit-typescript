import React from 'react'

// Components
import AppWrapperProviders from './app-wrapper.providers'
import AppWrapperContent from './app-warapper.content'

const AppWrapper: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    return (
        <AppWrapperProviders>
            <AppWrapperContent>{children}</AppWrapperContent>
        </AppWrapperProviders>
    )
}

export default AppWrapper
