import React from 'react'
import {Box, BoxProps, useMultiStyleConfig, ThemingProps} from '@chakra-ui/react'

const SimpleCard: React.FC<
    {
        children?: React.ReactNode | Array<React.ReactNode>
    } & ThemingProps &
        BoxProps
> = (props) => {
    const {children, variant = 'default', size = 'md', colorScheme = '', ...rest} = props

    const styleSettings = {
        ...(variant ? {variant} : {}),
        ...(size ? {size} : {}),
        ...(colorScheme ? {colorScheme} : {})
    }

    const style = useMultiStyleConfig('SimpleCard', styleSettings)

    return (
        <Box __css={style} data-component="simple-card" {...rest}>
            {children}
        </Box>
    )
}

export default SimpleCard
