declare module '@salesforce/pwa-kit-react-sdk/ssr/browser/main' {
    export function OuterApp(): void
    export function registerServiceWorker(_file: string): Promise<void>
    export function start(): Promise<void>
}

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/errors' {
    export class HTTPError {
        constructor(_status: number, _details: unknown)
    }
    export class HTTPNotFound {
        constructor(_message: string)
    }
}

// ================================================================
// ========================== UTILS ===============================
// ================================================================

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/utils' {
    export function getAssetUrl(_asset: string): string
}

declare module '@salesforce/pwa-kit-react-sdk/utils/assets' {
    export function loadScript(props: {
        id: string
        src: string
        isAsync?: boolean
        docwrite?: boolean
        onload?: () => void
        onerror?: () => void
    }): string | never
}

declare module '@salesforce/pwa-kit-react-sdk/utils/url' {
    export function getAppOrigin(): string | never
}

declare module '@salesforce/pwa-kit-react-sdk/utils/warnings' {
    export function deprecated(message: string): void
    export function experimental(message: string): void
    export function shouldDisplay(name: string): boolean
    export function warn(message: string): void
}

// ================================================================
// ================================================================

// ================================================================
// ========================== UNIVERSAL HOOKS =====================
// ================================================================

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/hooks' {
    export function useCorrelationId():
        | {
              correlationId: string
          }
        | never

    export function useServerContext(): {
        res: {set: (_arg1: string, _arg2: unknown) => void}
    } & Record<string, unknown>
}

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/context' {
    export function CorrelationIdProvider(props: {
        children: React.ReactNode | Array<React.ReactNode>
        correlationId: () => void
        resetOnPageChange?: boolean
    }): React.JSX.Element
}

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/compatibility' {
    export function getAppConfig(): React.JSX.Element
}

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/utils' {
    export function getAssetUrl(path: string): string
    export function getProxyConfigs(): Reacord<string, unknown>
}

// ================================================================
// ================================================================

declare module '@salesforce/pwa-kit-react-sdk/ssr/universal/components/with-react-query' {
    export function withReactQuery(
        _Wrapped: React.ReactElement,
        _object: {queryClientConfig: Record<string, unknown>} & Record<string, unknown>
    ): React.ReactElement
}
