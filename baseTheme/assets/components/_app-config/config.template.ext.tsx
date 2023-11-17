import React from 'react'

const ConfigTemplateExtension: React.FC<{
    configProps: PWAKitAppConfig.ComponentProps
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    return <>{children}</>
}

export default ConfigTemplateExtension
