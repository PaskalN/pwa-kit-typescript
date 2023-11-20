import React, {createContext, useContext, useState, useEffect} from 'react'
import {useLocation} from 'react-router-dom'

export * from '@salesforce/retail-react-app/app/contexts'

export const CategoryContext = createContext<{
    isCategoryPage: boolean
    category: CommerceSDK.Category | null
    setCategory: React.Dispatch<React.SetStateAction<CommerceSDK.Category | null>>
} | null>(null)

export const CategoryProvider: React.FC<{
    children: React.ReactNode | Array<React.ReactNode>
}> = (props) => {
    const {children} = props
    const [category, setCategory] = useState<CommerceSDK.Category | null>(null)
    const [isCategoryPage, setIsCategoryPage] = useState<boolean>(false)

    const location = useLocation()
    const path = location.pathname

    const categoryIndicator = 'category'

    useEffect(() => {
        const assets = path.split('/').filter((asset) => !!asset)
        setIsCategoryPage(assets[0] === categoryIndicator)
    }, [category, path])

    return (
        <CategoryContext.Provider
            value={{
                category,
                setCategory,
                isCategoryPage
            }}
        >
            {children}
        </CategoryContext.Provider>
    )
}

export const useCategoryContext = () => useContext(CategoryContext)
