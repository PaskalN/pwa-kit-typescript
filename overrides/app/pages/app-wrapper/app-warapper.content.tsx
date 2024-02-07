import React from 'react'

// Components
import {Flex, Box} from '@chakra-ui/react'
// import Header from '../../components/project/header'
// import TopBannerCarousel from '../../components/project/carousels/top-banner-carousel'
// import MainNavigation from '../../components/project/main-navigation'
// import SearchForm from '../../components/ecommerce/search-form'
// import UseAcrionBar from '../../components/ecommerce/user-action-bar'
import Header from '../../components/project/header/header'

// Hooks
// import {useLazyLoadCategories} from '../../components/_app/app.tools'

// Others
// import {CAT_MENU_DEFAULT_ROOT_CATEGORY} from '../../constants'
// import {flatten} from '../../utils/utils'

const AppWrapperContent: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props

    // const {data: categoriesTree} = useLazyLoadCategories()
    // const rootCategory = flatten(categoriesTree || {}, 'categories') as unknown as Record<
    //     string,
    //     CommerceSDK.Category
    // >

    // const entryCategories = rootCategory?.[CAT_MENU_DEFAULT_ROOT_CATEGORY] || null

    return (
        <Box layerStyle="page-frame" data-component="frame" h="200vh">
            <Flex minH="2rem" bg="black" w="100%" position="relative" zIndex="10"></Flex>
            <Flex
                minH="2rem"
                bg="monochromatic.130"
                w="100%"
                position="relative"
                zIndex="10"
            ></Flex>

            <Header />

            {children}
        </Box>
    )
}

export default AppWrapperContent
