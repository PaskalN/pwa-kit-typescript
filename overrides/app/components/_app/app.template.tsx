import React from 'react'

import AppWrapper from '../../pages/app-wrapper'

const AppTemplate: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    return <AppWrapper>{children}</AppWrapper>
}

export default AppTemplate
