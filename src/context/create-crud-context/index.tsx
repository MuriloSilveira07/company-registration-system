import { createContext, useContext, useEffect, useState, ReactNode } from "react"

type CrudContextType<T> = {
    data: T[]
    add: (item: T) => void
    update: (item: T) => void
    remove: (id: number) => void
}

type ProviderProps = {
    children: ReactNode
}

export function createCrudContext<T extends { id: number }>(
    storageKey: string,
    initialData: T[]
) {
    const Context = createContext<CrudContextType<T> | null>(null)

    function Provider({ children }: ProviderProps) {
        const [data, setData] = useState<T[]>(() => {
            const stored = localStorage.getItem(storageKey)

            return stored
                ? (JSON.parse(stored) as T[])
                : initialData
        })

        useEffect(() => {
            localStorage.setItem(storageKey, JSON.stringify(data))
        }, [data])

        function add(item: T) {
            setData((prev) => [
                ...prev,
                { ...item, id: Date.now() }
            ])
        }

        function update(updated: T) {
            setData((prev) =>
                prev.map((item) =>
                    item.id === updated.id ? updated : item
                )
            )
        }

        function remove(id: number) {
            setData((prev) =>
                prev.filter((item) => item.id !== id)
            )
        }

        return (
            <Context.Provider value={{ data, add, update, remove }}>
                {children}
            </Context.Provider>
        )
    }

    function useCrud() {
        const context = useContext(Context)

        if (!context) {
            throw new Error("useCrud must be used within Provider")
        }

        return context
    }

    return {
        Provider,
        useCrud
    }
}