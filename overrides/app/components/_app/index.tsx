import React from 'react'

import AppProviders from './app.providers'
import AppTemplate from './app.template'

const App: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    return (
        <AppProviders>
            <AppTemplate>{children}</AppTemplate>
        </AppProviders>
    )
}

export default App
