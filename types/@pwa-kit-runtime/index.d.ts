// import express from 'express'

declare namespace PWAKitAppConfig {
    type Freeze = () => void

    type Restore = (_locals: Partial<PWAKitRuntime.Locals>) => void

    type ExtraGetPropsArgs = (
        _locals: Partial<PWAKitRuntime.Locals>
        // Extend Bellow
        // ...
    ) => ExtraGetPropsArgsReturn

    type ExtraGetPropsArgsReturn = {
        buildUrl?: PWAKitRuntime.BuildUrl
        site?: PWAKitRuntime.SiteConfig
        locale?: PWAKitRuntime.Locale
        // Extend Bellow
        // ...
    }

    type ComponentProps = {
        children: React.ReactNode | Array<React.ReactNode>
        locals: PWAKitRuntime.Locals
    }

    interface Page extends React.FC<ComponentProps> {
        freeze: PWAKitRuntime.Freeze
        restore: PWAKitRuntime.Restore
        extraGetPropsArgs: PWAKitRuntime.ExtraGetPropsArgs
    }
}

declare namespace PWAKitRuntime {
    type Locale = {
        id: string
        preferredCurrency: string
    } & Record<string, unknown>

    type BuildUrl = (_path: string, _site?: string, _locale?: string) => string

    type Locals = {
        buildUrl: PWAKitRuntime.BuildUrl
        site: PWAKitRuntime.SiteConfig
        locale: PWAKitRuntime.Locale
        appConfig: PWAKitRuntime.AppConfig
        originalUrl: string
    } & Record<string, unknown>

    type l10nConfig = {
        supportedCurrencies: Array<string>
        defaultCurrency: string
        defaultLocale: string
        supportedLocales: Array<PWAKitRuntime.Locale>
        defaultLocale?: string
    }

    type SiteConfig = {
        id: string
        l10n: PWAKitRuntime.l10nConfig
    } & Record<string, unknown>

    type SitesConfig = Array<PWAKitRuntime.SiteConfig>

    type EinsteinApiConfig = {
        host: string
        einsteinId: string
        // This differs from the siteId in commerceAPIConfig for testing purposes
        siteId: string
        isProduction: boolean
    } & Record<string, unknown>

    type CommerceAPIConfig = {
        proxyPath: string
        parameters: {
            clientId: string
            organizationId: string
            shortCode: string
            siteId: string
        }
    } & Record<string, unknown>

    type UrlConfig = {
        site: string
        locale: string
        showDefaults: boolean
    }

    type AppConfig = {
        url: PWAKitRuntime.UrlConfig
        defaultSite: string
        siteAliases: Record<string, string>
        sites: PWAKitRuntime.SitesConfig
        commerceAPI: PWAKitRuntime.CommerceAPIConfig
        einsteinAPI: PWAKitRuntime.EinsteinApiConfig
    } & Record<string, unknown>

    type Config = {
        app: PWAKitRuntime.AppConfig
        externals: Array<unknown>
        pageNotFoundURL: string
        ssrEnabled: boolean
        ssrOnly: Array<string>
        ssrShared: Array<string>
        ssrParameters: {
            ssrFunctionNodeVersion: string
            proxyConfigs: Array<{
                host: string
                path: string
            }>
        }
    } & Record<string, unknown>
}

declare module '@salesforce/pwa-kit-runtime/ssr/server/express' {
    export function getRuntime(): {
        createHandler: (_options: unknown, _cb: (_app: Express) => unknown) => {handler: () => void}
        render: (_req: Express.Request, _res: Express.Response, _next: () => void) => unknown
        serveServiceWorker: () => unknown
        serveStaticFile: (
            _path: string
        ) => (_req: Express.Request, _res: Express.Response, _next: () => void) => unknown
    }
}

declare module '@salesforce/pwa-kit-runtime/utils/ssr-config' {
    export function getConfig(): PWAKitRuntime.Config
}

declare module '@salesforce/pwa-kit-runtime/utils/ssr-server' {
    export function isRemote(): boolean
}
