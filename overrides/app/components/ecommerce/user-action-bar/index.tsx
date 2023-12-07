import React from 'react'
import {Flex, Button, Text} from '@chakra-ui/react'
import {useCurrentBasket} from '../../../hooks/use-current-basket'
// Icons
import {IconHeart, IconUserLine, IconBasket} from '../../project/icons'

const CounterLabel: React.FC<{
    number?: number
}> = (props) => {
    const {number = 0} = props

    if (!number) return

    return (
        <Text
            variant="default"
            as="div"
            w="1.25rem"
            h="1.25rem"
            display="flex"
            justifyContent="center"
            alignItems="center"
            position="absolute"
            top="-0.325rem"
            right="-0.325rem"
            bg="carminepink.80"
            p="0.1875rem"
            color="white"
            borderRadius="basketCounter"
            fontSize="0.65rem"
        >
            {number}
        </Text>
    )
}

const UseAcrionBar: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    const basket = useCurrentBasket()

    const totalItems = basket.derivedData.totalItems
    const totalItemsPrint = totalItems > 99 ? 99 : 0

    return (
        <Flex flexDir="row" gap="0.25rem" justifyContent="flex-end" w="auto">
            <Button variant="icon" size="sm" disabled={basket.isLoading || !basket}>
                <IconUserLine fontSize="1.25rem" />
            </Button>
            <Button variant="icon" size="sm" disabled={true}>
                <IconHeart fontSize="1.25rem" />
                {!!totalItemsPrint && <CounterLabel number={totalItemsPrint} />}
            </Button>
            <Button variant="icon" size="sm" position="relative">
                <IconBasket fontSize="1.25rem" />
                {!!totalItemsPrint && <CounterLabel number={totalItemsPrint} />}
            </Button>
            {children}
        </Flex>
    )
}

export default UseAcrionBar
