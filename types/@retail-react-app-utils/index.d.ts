// ==============================================================
// =========================== UTILS ============================
// ==============================================================

declare module '@salesforce/retail-react-app/app/utils/utils' {
    export const requestIdleCallback: (
        fn: () => unknown
    ) => Window.requestIdleCallback | ReturnType<typeof setTimeout>

    export const watchOnlineStatus: (
        callback: (_prop?: boolean) => void,
        win?: Window
    ) => () => void

    export const shallowEquals: (
        _a: Record<string, unknown>,
        _b: Record<string, unknown>
    ) => boolean

    export const noop: () => void

    export const flatten: (_node: Record<string, unknown>, _key?: string) => Record<string, unknown>

    export const isServer: boolean

    export const getSessionJSONItem: (_key: string) => Record<string, unknown> | undefined

    export const clearSessionJSONItem: (_key: string) => void

    export const escapeRegexChars: (_key: string) => string

    export const boldString: (_key: string, _substr: string) => string

    export const capitalize: (_text: string) => string

    export const safeToCamel: (_text: string) => string

    export const isPlainObject: (_obj: Record<string, unknown>) => boolean

    export const keysToCamel: (_obj: Record<string, unknown>) => Record<string, unknown>

    export const mergeMatchedItems: (_arr1: Array<unknown>, _arr2: Array<unknown>) => Array<unknown>

    export const isHydrated: () => boolean
}

declare module '@salesforce/retail-react-app/app/utils/locale' {
    export const fetchTranslations: (_locale: string) => Promise<Record<string, unknown>>
    export const getTargetLocale: (_props: {
        getUserPreferredLocales: () => unknown
        l10nConfig?: PWAKitRuntime.l10nConfig
    }) => string
    export const determineTargetLocale: (
        _preferredLocales: Array<PWAKitRuntime.Locale>,
        _supportedLocales: Array<PWAKitRuntime.Locale>,
        _fallbackLocale: PWAKitRuntime.Locale
    ) => PWAKitRuntime.Locale

    export const MESSAGE_PROPTYPE: Record<string, unknown>
}

declare module '@salesforce/retail-react-app/app/utils/routes-utils' {
    export const configureRoutes: (
        _routes: Array<RouteProps>,
        _config?: PWAKitRuntime.Config,
        _options: ConfigureRoutes.Options
    ) => Array<RouteProps>
}

declare module '@salesforce/retail-react-app/app/utils/site-utils' {
    export function resolveSiteFromUrl(_url?: string): PWAKitRuntime.SiteConfig | never
    export function getSites():
        | Array<{
              site: PWAKitRuntime.SiteConfig
              alias: Record<string, string>
          }>
        | never
    export function getDefaultSite(): PWAKitRuntime.SiteConfig
    export function getSiteByReference(_siteRef: string): PWAKitRuntime.SiteConfig
    export function getParamsFromPath(_path: string): {
        siteRef: string
        localeRef: string
    }

    export function getUrlConfig(): PWAKitRuntime.UrlConfig | never
    export function getConfigMatcher(_config: PWAKitRuntime.Config):
        | {
              searchMatcherForSite: RegExp
              searchMatcherForLocale: RegExp
              pathMatcher: RegExp
          }
        | never

    export function getLocaleByReference(
        _site: PWAKitRuntime.SiteConfig,
        _localeRef: string
    ): PWAKitRuntime.UrlConfig | never

    export function resolveLocaleFromUrl(_url?: string): PWAKitRuntime.Locale | never
}

declare module '@salesforce/retail-react-app/app/utils/url' {
    export function absoluteUrl(_path?: string): URL
    export function rebuildPathWithParams(_url: string, extraParams: URLSearchParams): string
    export function updateSearchParams(
        searchParams: URLSearchParams,
        newParams: URLSearchParams
    ): void
    export function buildUrlSet(
        url: string,
        key: string,
        values = Array<unknown>,
        extraParams: URLSearchParams
    ): Array<string>
    export function categoryUrlBuilder(_category: CommerceSDK.Category): string
    export function productUrlBuilder(_product: CommerceSDK.Product$0): string
    export function searchUrlBuilder(_searchTerm: string): string
    export function getPathWithLocale(
        _shortCode: string,
        _buildUrl: PWAKitRuntime.BuildUrl,
        _opts = Record<string, unknown>
    ): string
    export function createUrlTemplate(
        _appConfig: PWAKitRuntime.AppConfig,
        _siteRef: string,
        _localeRef: string
    ): (_path: string, _site: string, locale: string) => string
    export function removeQueryParamsFromPath(_path: string, _keys: Array<unknown>): string
    export function removeSiteLocaleFromPath(_pathName: string): string
}
