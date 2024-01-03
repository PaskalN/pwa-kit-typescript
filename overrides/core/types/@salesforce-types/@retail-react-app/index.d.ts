// ==============================================================
// ============================ APP =============================
// ==============================================================

declare module '@salesforce/retail-react-app/app/contexts' {
    export const CurrencyContext: React.Context<
        [string, React.Dispatch<React.SetStateAction<string>>]
    >
    export const CurrencyProvider: (props: {
        currency: string
        children: React.ReactNode | Array<React.ReactNode>
    }) => React.JSX.Element

    type MultiSiteContextProps = {
        site: PWAKitRuntime.SiteConfig
        locale: PWAKitRuntime.Locale
        buildUrl: PWAKitRuntime.BuildUrl
        children: React.ReactNode | Array<React.ReactNode>
    }

    type MultiSiteContextInit = {
        site: PWAKitRuntime.SiteConfig | Record<string, unknown>
        setSite: React.Dispatch<
            React.SetStateAction<PWAKitRuntime.SiteConfig | Record<string, unknown>>
        >
        locale: PWAKitRuntime.Locale | Record<string, unknown>
        setLocale: React.Dispatch<
            React.SetStateAction<PWAKitRuntime.Locale | Record<string, unknown>>
        >
        buildUrl: PWAKitRuntime.BuildUrl
    }

    export const MultiSiteContext = React.Context<
        [MultiSiteContextInit, React.Dispatch<React.SetStateAction<MultiSiteContextInit>>]
    >
    export function MultiSiteProvider(props: MultiSiteContextProps): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/theme' {
    export const theme: Record<string, unknown>
}
