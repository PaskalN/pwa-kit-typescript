import React from 'react'
import {keyframes, usePrefersReducedMotion} from '@chakra-ui/react'

// Components
import {IconLoadingAsset} from '../../project/icons'

const GlobalLoading: React.FC = () => {
    const spin = keyframes`
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
    `

    const prefersReducedMotion = usePrefersReducedMotion()

    const animation = prefersReducedMotion ? undefined : `${spin} infinite 0.8s linear`

    return <IconLoadingAsset fontSize="4rem" color="white" animation={animation} />
}

export default GlobalLoading
