import React from 'react'
import {Fonts} from '../project/fonts'

const ConfigTemplateExtension: React.FC<{
    configProps: PWAKitAppConfig.ComponentProps
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    return (
        <>
            <Fonts />
            {children}
        </>
    )
}

export default ConfigTemplateExtension
