const isServer = typeof window === 'undefined'

const localStorage = () => {
    return {
        get: (id: string): string | null => {
            if (isServer) return null

            return window.localStorage.getItem(id)
        },
        set: (id: string, value: string) => {
            if (isServer) return
            window.localStorage.setItem(id, value)
        },
        remove: (id: string) => {
            if (isServer) return
            window.localStorage.removeItem(id)
        }
    }
}

export default localStorage
