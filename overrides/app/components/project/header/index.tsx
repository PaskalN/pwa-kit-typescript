import React from 'react'
import {Flex, FlexProps} from '@chakra-ui/react'

const Header: React.FC<
    {
        children: React.ReactNode | Array<React.ReactNode>
    } & FlexProps
> = (props) => {
    const {children, ...rest} = props

    return (
        <>
            <Flex
                as="header"
                position="relative"
                data-component="header"
                w="100%"
                {...rest}
                flexDir="column"
            >
                {children}
            </Flex>
        </>
    )
}

export default Header
