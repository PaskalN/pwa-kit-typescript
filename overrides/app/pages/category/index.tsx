/*
 * Copyright (c) 2023, Salesforce, Inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import React, {useEffect} from 'react'
// import {useIntl, FormattedMessage} from 'react-intl'
import {useLocation, useParams} from 'react-router-dom'

// Components
// import {Box, Button, Stack, Link} from '@chakra-ui/react'

// Project Components

// Others

//Hooks
// import useEinstein from '@salesforce/retail-react-app/app/hooks/use-einstein'
import {useCategory} from '@salesforce/commerce-sdk-react'
import {useCategoryContext} from '../../context'
/**
 * This is the home page for Retail React App.
 * The page is created for demonstration purposes.
 * The page renders SEO metadata and a few promotion
 * categories and products, data is from local file.
 */
const Category: React.FC & {
    getTemplateName: () => string
} = () => {
    // const {pathname} = useLocation()
    const location = useLocation()
    const urlParams = new URLSearchParams(location.search)

    const searchQuery = urlParams.get('q')
    const isSearch = !!searchQuery
    const params = useParams<{
        categoryId?: string
    }>()

    const categoryCtx = useCategoryContext()
    console.log(categoryCtx)

    const {data: category} = useCategory(
        {
            parameters: {
                id: params.categoryId || ''
            }
        },
        {
            enabled: !isSearch && !!params.categoryId
        }
    )

    // console.log(error)

    useEffect(() => {
        if (!category) return
        categoryCtx?.setCategory(category)
    }, [category])

    return <>Category</>
}

Category.getTemplateName = () => 'Category'

export default Category
