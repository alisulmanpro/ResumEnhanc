import Cookies from "js-cookie"

const cookieStorage = {
    getItem: (name: string): string | null => {
        if (typeof window === "undefined") return null
        return Cookies.get(name) ?? null
    },

    setItem: (name: string, value: string) => {
        if (typeof window === "undefined") return
        Cookies.set(name, value, {
            expires: 30,
            sameSite: "strict",
            secure: process.env.NODE_ENV === "production",
        })
    },

    removeItem: (name: string) => {
        if (typeof window === "undefined") return
        Cookies.remove(name)
    },
}

export default cookieStorage