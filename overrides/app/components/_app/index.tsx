import React from 'react'
import {Box} from '@chakra-ui/react'

import AppProviders from './app.providers'
import AppTemplate from './app.template'

const App: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    return (
        <Box layerStyle="page-frame" data-component="frame" paddingTop="10rem">
            <AppProviders>
                <AppTemplate>{children}</AppTemplate>
            </AppProviders>
        </Box>
    )
}

export default App
