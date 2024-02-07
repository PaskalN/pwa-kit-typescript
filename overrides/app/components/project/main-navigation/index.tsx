import React from 'react'
import {Link as RouteLink} from 'react-router-dom'

// Components
import {Flex, FlexProps, Link, Text, Divider} from '@chakra-ui/react'

// Utils
import {categoryUrlBuilder} from '../../../utils/urls'

// Context
import {useCategoryContext} from '../../../context'

export const NavItem: React.FC<
    {
        category: CommerceSDK.Category | null
    } & FlexProps
> = (props) => {
    const {category, ...rest} = props
    const categoryCtx = useCategoryContext()

    if (!category) return null

    const isSelected =
        categoryCtx?.isCategoryPage &&
        !!categoryCtx?.category?.parentCategoryTree?.find((asset) => asset.id === category.id)

    return (
        <Flex
            data-component="nav-item"
            data-selected={isSelected}
            _hover={{
                '> div': {transform: 'translateY(0%)', boxShadow: '12'},
                '> a span': {
                    color: isSelected ? 'carminepink.80' : 'gunmetal.60',
                    _after: {
                        bottom: '0.9rem',
                        opacity: '1'
                    }
                }
            }}
            {...rest}
        >
            <Link
                as={RouteLink}
                to={categoryUrlBuilder(category)}
                title={category.pageTitle || category.name}
                pos="relative"
            >
                <Text
                    as="span"
                    display="flex"
                    size="sm"
                    padding="1.5rem 1rem"
                    variant="heavy_xl"
                    colorScheme={isSelected ? 'nav_item_selected' : 'nav_item'}
                    textTransform="uppercase"
                    color="white"
                    _after={{
                        content: '""',
                        display: 'block',
                        position: 'absolute',
                        bottom: '0.5rem',
                        opacity: '0',
                        h: '1px',
                        left: '0',
                        right: '0',
                        bg: 'gunmetal.30',
                        transition: '0.3s'
                    }}
                >
                    {category.name}
                </Text>
            </Link>
            {category.categories && category.categories.length && (
                <CategoryPanel category={category} />
            )}
        </Flex>
    )
}

export const CategoryPanel: React.FC<
    {
        category: CommerceSDK.Category | null
    } & FlexProps
> = (props) => {
    const {category, ...rest} = props

    if (!category) return null

    return (
        <Flex
            pos="absolute"
            top="100%"
            left="0"
            w="100%"
            zIndex="-20"
            transition="0.3s"
            transform="translateY(-100%)"
            {...rest}
        >
            <CategoryPanelContent category={category} bg="white" />
        </Flex>
    )
}

export const CategoryPanelContent: React.FC<
    {
        category: CommerceSDK.Category | null
    } & FlexProps
> = (props) => {
    const {category, ...rest} = props
    const categoryCtx = useCategoryContext()

    if (!category) return null

    return (
        <Flex layerStyle="page-section" {...rest}>
            <Flex layerStyle="page-segment" py="0">
                <Flex w="100%" flexWrap="wrap" px="0.5rem">
                    {category.categories?.map((category, index) => {
                        const isSelected =
                            categoryCtx?.isCategoryPage &&
                            !!categoryCtx?.category?.parentCategoryTree?.find(
                                (asset) => asset.id === category.id
                            )

                        return (
                            <Flex
                                key={index}
                                flexDir="column"
                                minW="25%"
                                padding="0.5rem"
                                data-selected={isSelected}
                            >
                                <Link
                                    as={RouteLink}
                                    to={categoryUrlBuilder(category)}
                                    title={category.pageTitle || category.name}
                                >
                                    <Text
                                        as="span"
                                        size="sm"
                                        display="flex"
                                        py="0.85rem"
                                        variant="heavy_xl"
                                        colorScheme={isSelected ? 'nav_item_selected' : 'nav_item'}
                                        textTransform="uppercase"
                                    >
                                        {category.name}
                                    </Text>
                                </Link>
                                {category.categories && category.categories?.length && (
                                    <>
                                        <Divider
                                            borderStyle="solid"
                                            borderColor="gunmetal.20"
                                            maxW="50%"
                                        />
                                        <SubNavList categories={category.categories} />
                                    </>
                                )}
                            </Flex>
                        )
                    })}
                </Flex>
            </Flex>
        </Flex>
    )
}

export const SubNavList: React.FC<
    {
        categories: Array<CommerceSDK.Category>
    } & FlexProps
> = (props) => {
    const {categories, ...rest} = props
    const categoryCtx = useCategoryContext()

    if (!categories.length) return null

    return (
        <Flex {...rest} flexDir="column">
            {categories?.map((category, index) => {
                const isSelected =
                    categoryCtx?.isCategoryPage &&
                    !!categoryCtx?.category?.parentCategoryTree?.find(
                        (asset) => asset.id === category.id
                    )

                return (
                    <React.Fragment key={index}>
                        <Link
                            as={RouteLink}
                            to={categoryUrlBuilder(category)}
                            title={category.pageTitle || category.name}
                            data-selected={isSelected}
                        >
                            <Text
                                as="span"
                                display="flex"
                                size="sm"
                                py="0.5rem"
                                variant="heavy"
                                colorScheme={isSelected ? 'nav_item_selected' : 'nav_item'}
                            >
                                {category.name}
                            </Text>
                        </Link>

                        {category.categories && category.categories?.length && (
                            <SubNavList categories={categories} />
                        )}
                    </React.Fragment>
                )
            })}
        </Flex>
    )
}

const MainNavigation: React.FC<
    {
        entry: CommerceSDK.Category | null
    } & FlexProps
> = (props) => {
    const {entry, ...rest} = props

    if (!entry || !entry.categories || !entry.categories.length) return null

    return (
        <Flex data-component="navigation" w="100%" {...rest}>
            {entry.categories.map((category, index) => (
                <NavItem category={category} key={index} />
            ))}
        </Flex>
    )
}

export default MainNavigation
