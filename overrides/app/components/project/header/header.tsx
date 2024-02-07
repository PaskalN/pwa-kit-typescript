import React from 'react'

// Components
import {Flex, Box} from '@chakra-ui/react'
import MainNavigation from '../main-navigation'

// Hooks
import {useLazyLoadCategories} from '../../_app/app.tools'

// Others
import {CAT_MENU_DEFAULT_ROOT_CATEGORY} from '../../../constants'
import {flatten} from '../../../utils/utils'

const Header: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const {data: categoriesTree} = useLazyLoadCategories()
    const rootCategory = flatten(categoriesTree || {}, 'categories') as unknown as Record<
        string,
        CommerceSDK.Category
    >

    const entryCategories = rootCategory?.[CAT_MENU_DEFAULT_ROOT_CATEGORY] || null

    return (
        <Flex
            as="header"
            w="100%"
            position="sticky"
            top="0"
            data-component="header"
            justifyContent="center"
            bg="blue.40"
        >
            <Box
                layerStyle="page-segment-clear"
                data-component="page-segment"
                minH="4rem"
                bg="blue.40"
                pos="relative"
            >
                <MainNavigation entry={entryCategories} />

                {children}
            </Box>
        </Flex>
    )
}

export default Header
