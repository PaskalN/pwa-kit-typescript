import React from 'react'
import {
    AddToCartModal as AddToCartModalLegacy,
    AddToCartModalProvider as AddToCartModalProviderLegacy,
    AddToCartModalProviderPropsType,
    AddToCartModalContext as AddToCartModalContextLegacy,
    AddToCartModalContextType
} from '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal'

export {useAddToCartModalContext} from '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal'

import {
    UseAddToCartModalReturn,
    useAddToCartModal as useAddToCartModalLegacy
} from '@salesforce/retail-react-app/app/hooks/use-add-to-cart-modal'

export const AddToCartModal = (): React.JSX.Element => {
    return AddToCartModalLegacy()
}

export const useAddToCartModal = (): UseAddToCartModalReturn => {
    return useAddToCartModalLegacy()
}

export const AddToCartModalProvider = (
    props: AddToCartModalProviderPropsType
): React.JSX.Element => {
    return AddToCartModalProviderLegacy(props)
}

export const AddToCartModalContext = (): AddToCartModalContextType | null => {
    return AddToCartModalContextLegacy()
}
