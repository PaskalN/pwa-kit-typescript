import React from 'react'
import {useLocalTranslations} from '../../../core/hooks/use-translation'
import {ResourcesType} from './sample.tranlsations'

const SampleContent: React.FC = () => {
    const resources = useLocalTranslations<ResourcesType>()
    return <>{resources.sys_form_input_account_create_title}</>
}

export default SampleContent
