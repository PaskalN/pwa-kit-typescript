import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'

// Removes focus for non-keyboard interactions for the whole application
import 'focus-visible/dist/focus-visible'
import {themeDefault} from '../../theme'

// Providers
import {CommerceApiProvider} from '@salesforce/commerce-sdk-react'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

// CONTEXTS
import {MultiSiteProvider} from '../../context'

// SDK Utils
import {useCorrelationId} from '@salesforce/pwa-kit-react-sdk/ssr/universal/hooks'
import {getAppOrigin} from '@salesforce/pwa-kit-react-sdk/utils/url'
import {getConfig} from '@salesforce/pwa-kit-runtime/utils/ssr-config'

// Project Utils
import {resolveSiteFromUrl} from '../../utils/site-utils'
import {resolveLocaleFromUrl} from '../../utils/site-utils'
import {createUrlTemplate} from '../../utils/urls'

// Queries
import {withReactQuery} from '@salesforce/pwa-kit-react-sdk/ssr/universal/components/with-react-query'

// Templates
import ConfigTemplateExtension from './config.template.ext'

const AppConfig: PWAKitAppConfig.Page = (props) => {
    const {children, locals} = props
    const {correlationId} = useCorrelationId()
    const appOrigin = getAppOrigin()
    const commerceApiConfig = locals.appConfig.commerceAPI
    const headers = {
        'correlation-id': correlationId
    }

    return (
        <CommerceApiProvider
            shortCode={commerceApiConfig.parameters.shortCode}
            clientId={commerceApiConfig.parameters.clientId}
            organizationId={commerceApiConfig.parameters.organizationId}
            siteId={locals.site?.id}
            locale={locals.locale?.id}
            currency={locals.locale?.preferredCurrency}
            redirectURI={`${appOrigin}/callback`}
            proxy={`${appOrigin}${commerceApiConfig.proxyPath}`}
            headers={headers}
            OCAPISessionsURL={`${appOrigin}/mobify/proxy/ocapi/s/${locals.site?.id}/dw/shop/v22_8/sessions`}
        >
            <MultiSiteProvider site={locals.site} locale={locals.locale} buildUrl={locals.buildUrl}>
                <ChakraProvider theme={themeDefault}>
                    <ConfigTemplateExtension configProps={props}>
                        {children}
                    </ConfigTemplateExtension>
                </ChakraProvider>
            </MultiSiteProvider>

            <ReactQueryDevtools />
        </CommerceApiProvider>
    )
}

AppConfig.restore = (locals: Partial<PWAKitRuntime.Locals> = {}) => {
    const path =
        typeof window === 'undefined'
            ? locals.originalUrl
            : `${window.location.pathname}${window.location.search}`
    const site = resolveSiteFromUrl(path)
    const locale = resolveLocaleFromUrl(path)

    const {app: appConfig} = getConfig()
    const apiConfig = {
        ...appConfig.commerceAPI,
        einsteinConfig: appConfig.einsteinAPI
    }

    apiConfig.parameters.siteId = site.id

    locals.buildUrl = createUrlTemplate(appConfig, (site.alias as string) || site.id, locale.id)
    locals.site = site
    locals.locale = locale
    locals.appConfig = appConfig
}

AppConfig.freeze = () => undefined

AppConfig.extraGetPropsArgs = (locals: Partial<PWAKitRuntime.Locals> = {}) => {
    return {
        buildUrl: locals.buildUrl,
        site: locals.site,
        locale: locals.locale
    }
}

const isServerSide: boolean = typeof window === 'undefined'

const options = {
    queryClientConfig: {
        defaultOptions: {
            queries: {
                retry: false,
                refetchOnWindowFocus: false,
                staleTime: 10 * 1000,
                ...(isServerSide ? {retryOnMount: false} : {})
            },
            mutations: {
                retry: false
            }
        }
    }
}

export default withReactQuery(AppConfig as unknown as React.ReactElement, options)
