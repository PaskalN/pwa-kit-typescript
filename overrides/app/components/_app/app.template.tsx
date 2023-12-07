import React from 'react'
import {Flex} from '@chakra-ui/react'

// Components
import Header from '../project/header'
import MainNavigation from '../project/main-navigation'
import UseAcrionBar from '../ecommerce/user-action-bar'

// Providers
import SystemaProviders from '../../../core/components/systema/systema-providers'

// Tools
import {useLazyLoadCategories} from './app.tools'
import {flatten} from '../../utils/utils'

// Constants
import {CAT_MENU_DEFAULT_ROOT_CATEGORY} from '../../constants'

const AppTemplate: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    const GLOBAL_SLOTS = ['footer-column-m', 'best-man']

    const {data: categoriesTree} = useLazyLoadCategories()
    const rootCategory = flatten(categoriesTree || {}, 'categories') as unknown as Record<
        string,
        CommerceSDK.Category
    >

    const entryCategories = rootCategory?.[CAT_MENU_DEFAULT_ROOT_CATEGORY] || null

    return (
        <SystemaProviders globalSlotsIds={GLOBAL_SLOTS}>
            <Header
                data-component="container"
                zIndex="100"
                position="fixed"
                top="0"
                left="0"
                right="0"
            >
                <Flex position="relative" w="100%" h="100%" bg="white" boxShadow="12">
                    <Flex layerStyle="page-section" padding="0">
                        <Flex layerStyle="page-segment" py="0" flexDir="row" gap="1rem">
                            {/* <Logo /> */}
                            <MainNavigation entry={entryCategories} />
                            <UseAcrionBar />
                        </Flex>
                    </Flex>
                </Flex>
            </Header>
            {children}
        </SystemaProviders>
    )
}

export default AppTemplate
