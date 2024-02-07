import context from '../../../translations/en-GB.json'

type DefaultContext = Record<
    string,
    {
        defaultMessage: string
    }
>

export const getTranslationCollection = <T>(IDs: T) => {
    const Collector: Record<string, unknown> = {}
    const defaultContext = context as DefaultContext

    if (!Array.isArray(IDs)) {
        return Collector
    }

    IDs.forEach((ID) => {
        Collector[ID] = {
            id: ID,
            defaultMessage: defaultContext[ID].defaultMessage
        }
    })

    return Collector
}
