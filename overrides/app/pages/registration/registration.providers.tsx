import React from 'react'

// Provider
import {LocalTranslationProvider} from '../../../core/contexts/local-translation.context'

// Others
import {Translations} from './registration.translations'

const RegistrationProviders: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    return <LocalTranslationProvider resources={Translations}>{children}</LocalTranslationProvider>
}

export default RegistrationProviders
