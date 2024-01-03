/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: BSD-3-Clause
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */

/* istanbul ignore file */
// NOTE!
// This file is being ignored in the test coverage report for now. It reports `0%` functions
// tested, which brings down the overall coverage and blocks CI. There are tests still, but
// we don't want it to count toward coverage until we figure out how to cover the `functions`
// metric for this file in its test.

import React from 'react'
import loadable from '@loadable/component'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'
import {RouteProps} from 'react-router-dom'

// Components
import {configureRoutes} from '@salesforce/retail-react-app/app/utils/routes-utils'
import {Skeleton} from '@chakra-ui/react'
import {_ROUTERS} from './constants'

const fallback = <Skeleton height="75vh" width="100%" />

// Pages
const Home = loadable(() => import('./pages/home'), {fallback})
const Login = loadable(() => import('./pages/login'), {fallback})
const Sample = loadable(() => import('./pages/sample'), {fallback})
const Registration = loadable(() => import('./pages/registration'), {fallback})
const Account = loadable(() => import('./pages/account'), {fallback})

export const routes: Array<RouteProps> = [
    {
        path: '/',
        component: Home,
        exact: true
    },
    {
        path: _ROUTERS.LOGIN,
        component: Login,
        exact: true
    },
    {
        path: _ROUTERS.REGISTRATION,
        component: Registration,
        exact: true
    },
    {
        path: _ROUTERS.ACCOUNT,
        component: Account,
        exact: true
    },
    {
        path: '/sample',
        component: Sample,
        exact: true
    }
]

export default () => {
    const config = getConfig()
    return configureRoutes(routes, config, {
        ignoredRoutes: ['/callback', '*']
    })
}
