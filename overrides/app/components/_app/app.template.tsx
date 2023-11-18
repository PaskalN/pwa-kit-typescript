import React from 'react'
import {Box, Flex} from '@chakra-ui/react'

// Components
import Logo from '../project/logo'
import Header from '../project/header'
import MainNavigation from '../project/main-navigation'
// Tools
import {useLazyLoadCategories} from './app.tools'
import {flatten} from '@salesforce/retail-react-app/app/utils/utils'

// Constants
import {CAT_MENU_DEFAULT_ROOT_CATEGORY} from '../../constants'

const AppTemplate: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    const {data: categoriesTree} = useLazyLoadCategories()
    const rootCategory = flatten(
        categoriesTree || {},
        'categories'
    ) as unknown as Array<CommerceSDK.Category>

    const entryCategories = rootCategory?.[CAT_MENU_DEFAULT_ROOT_CATEGORY] || null

    return (
        <>
            <Header
                data-component="container"
                zIndex="100"
                position="fixed"
                top="0"
                left="0"
                right="0"
            >
                <Flex
                    position="relative"
                    w="100%"
                    h="100%"
                    bg="white"
                    // borderBottom="1px solid black"
                    boxShadow="12"
                >
                    <Flex layerStyle="page-section" padding="0">
                        <Flex layerStyle="page-segment" py="0" flexDir="row" gap="1rem">
                            <Logo />
                            <MainNavigation entry={entryCategories} />
                        </Flex>
                    </Flex>
                </Flex>
            </Header>

            <Box layerStyle="page-section" data-component="section">
                <Box data-component="segment">{children}</Box>
            </Box>
        </>
    )
}

export default AppTemplate
