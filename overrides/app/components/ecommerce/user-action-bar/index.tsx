import React from 'react'
import {Flex, Button, Text} from '@chakra-ui/react'
import {useCurrentBasket} from '../../../hooks/use-current-basket'

// Icons
import {IconHeart, IconUserLine, IconUserSolid, IconBasket} from '../../project/icons'

// Hooks
import useNavigation from '../../../hooks/use-navigation'
import {useLocation} from 'react-router-dom'
import {useCustomerType} from '@salesforce/commerce-sdk-react'

// Constants
import {_ROUTERS} from '../../../constants'

const CounterLabel: React.FC<{
    number?: number
}> = (props) => {
    const {number = 0} = props

    if (!number) return null

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

    // Hooks
    const navigate = useNavigation()
    const location = useLocation()
    const customerType = useCustomerType()

    // Handlers
    const redirectToAccount = () => {
        navigate(_ROUTERS.ACCOUNT)
    }

    const redirectToLoginPage = () => {
        navigate(_ROUTERS.LOGIN)
    }

    const userAccountHandler = () => {
        if (location.pathname === _ROUTERS.LOGIN) return

        if (customerType.isRegistered) {
            redirectToAccount()
        } else {
            redirectToLoginPage()
        }
    }

    const isLoginButtonDisabled = () => {
        const isLoginPage = location.pathname === _ROUTERS.LOGIN
        const isAccountPage = location.pathname === _ROUTERS.ACCOUNT

        return isLoginPage || isAccountPage
    }

    return (
        <Flex flexDir="row" gap="0.25rem" justifyContent="flex-end" w="auto">
            <Button
                variant="icon"
                size="icon_sm"
                disabled={basket.isLoading || !basket}
                onClick={() => userAccountHandler()}
                isDisabled={isLoginButtonDisabled()}
            >
                {customerType.isRegistered && <IconUserSolid fontSize="1.25rem" />}
                {customerType.isGuest && <IconUserLine fontSize="1.25rem" />}
            </Button>
            <Button variant="icon" size="icon_sm" disabled={true}>
                <IconHeart fontSize="1.25rem" />
                {!!totalItemsPrint && <CounterLabel number={totalItemsPrint} />}
            </Button>
            <Button variant="icon" size="icon_sm" position="relative">
                <IconBasket fontSize="1.25rem" />
                {!!totalItemsPrint && <CounterLabel number={totalItemsPrint} />}
            </Button>
            {children}
        </Flex>
    )
}

export default UseAcrionBar
