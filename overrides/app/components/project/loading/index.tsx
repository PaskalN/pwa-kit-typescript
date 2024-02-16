import React from 'react'
import {Flex, Text} from '@chakra-ui/react'

export const ContentLoading: React.FC = () => {
    return (
        <Flex
            justifyContent="center"
            flexDir="column"
            padding="1rem"
            bg="white"
            boxShadow="12"
            minW="100%"
        >
            <Text>Loading ...</Text>
        </Flex>
    )
}
