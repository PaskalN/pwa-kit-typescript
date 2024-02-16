declare namespace SitePreferencesApp {
    type Global = {
        customerServiceEmail: string
    } & Record<string, null>
    type Home = {
        testField: number
        countryCode: string
    } & Record<string, null>

    type Page<T> = T & Global
}
