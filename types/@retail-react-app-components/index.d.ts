// ==============================================================
// ========================= COMPONENTS =========================
// ==============================================================

declare module '@salesforce/retail-react-app/app/components/action-card' {
    type Props = {
        children?: React.ReactNode & Array<React.ReactNode>
        onEdit?: (event: React.MouseEvent) => void
        onRemove?: (event: React.MouseEvent) => void
    } & BoxProps

    export default function ActionCard(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/address-display' {
    type Props = {
        address: CommerceSDK.CustomerAddress
    }

    export default function AddressDisplay(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/basic-tile' {
    type Props = {
        href: string
        img: {
            src: string
            alt: string
        }
        title: string
    }

    export default function BasicTile(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/breadcrumbs' {
    type Props = {
        categories: Array<CommerceSDK.Category>
    } & ChakraBreadcrumbProps

    export default function Breadcrumb(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/confirmation-modal' {
    type Props = {
        dialogTitle: string
        confirmationMessage: string
        primaryActionLabel: string
        alternateActionLabel: string
        onPrimaryAction: (_props?: unknown) => void
        onAlternateAction: (_props?: unknown) => void
    } & AlertDialogProps

    export default function ConfirmationModal(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/drawer-menu' {
    type Props = {
        root?: unknown
        isOpen?: boolean
        onClose?: () => void
        onLogoClick?: () => void
    }

    export default function DrawerMenu(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/dynamic-image' {
    type Props = {
        src?: стринг
        widths?: Array<unknown> | Record<string, unknown>
        imageProps?: ImageProps
    } & BoxProps

    export default function DynamicImage(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/field' {
    type Props = {
        name?: string
        label?: string
        formLabel?: React.FC<{children?: React.Node | Array<React.Node>} & Record<string, unknown>>
        type?:
            | 'text'
            | 'number'
            | 'password'
            | 'email'
            | 'phone'
            | 'tel'
            | 'select'
            | 'checkbox'
            | 'hidden'
        options?: Array<{
            label: string
            value: unknown
        }>
        error?: {message: string} & Record<string, unknown>
        rules?: Record<string, unknown>
        placeholder?: string
        inputProps: unknown
        control: unknown
        defaultValue: unknown
        helpText?: string
        children?: React.Node | Array<React.Node>
    }

    export default function Field(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/footer' {
    type Props = BoxProps

    export default function Footer(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/footer' {
    type Props = {
        children?: React.Node | Array<React.Node>
        onMenuClick?: () => void
        onMyAccountClick?: () => void
        onLogoClick?: () => void
        onMyCartClick?: () => void
        onWishlistClick?: () => void
    } & BoxProps

    export default function Footer(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/hero' {
    type Props = {
        title: string
        img: {src: string; alt: string} & Record<string, unknown>
        actions?: React.JSX.Element
    } & BoxProps

    export default function Hero(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/image-gallery' {
    type Props = {
        selectedVariationAttributes?: unknown
        imageGroups?: Array<unknown>
        size: string
        lazy?: boolean
    } & BoxProps

    export function Skeleton(props: {size: string}): React.JSX.Element
    export default function ImageGallery(props: Props): React.JSX.Element
}

// TO DO
// declare module '@salesforce/retail-react-app/app/components/item-variant' {}

declare module '@salesforce/retail-react-app/app/components/link' {
    type Props = {
        href: string
        to: string
        useNavLink: boolean
    } & BoxProps

    export default function Link(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/links-list' {
    type Props = {
        links?: Array<Record<string, unknown>>
        heading?: sintr | Record<string, unknown>
        variant: 'vertical' | 'horizontal'
        color?: string
        onLinkClick: () => void
        headingLinkRef: Record<string, unknown>
    } & BoxProps

    export default function LinksList(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/list-menu' {
    type Props = {
        root: unknown
        maxColumns?: number
    }

    export default function ListMenu(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/loading-spinner' {
    type Props = {
        wrapperStyles?: Record<string, unknown>
        spinnerStyles?: Record<string, unknown>
    }

    export default function LoadingSpinner(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/locale-selector' {
    type Props = {
        locales?: Array<string>
        selectedLocale?: string
        onSelect?: () => void
    } & AccordionProps

    export default function LocaleSelector(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/locale-text' {
    type Props = {
        shortCode: string
    }

    export default function LocaleText(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/login' {
    type Props = {
        submitForm: () => void
        clickForgotPassword?: () => void
        clickCreateAccount?: () => void
        form: unknown
    }

    export default function LoginForm(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/nested-accordion' {
    type Props = {
        item: unknown
        initialDepth?: number
        itemsFilter?: () => boolean
        itemsAfter: Array<unknown> | (() => unknown)
        itemsBefore: Array<unknown> | (() => unknown)
        itemsKey?: string
        fontWeights?: Array<unknown>
        fontSizes?: Array<unknown>
        urlBuilder?: (_item: {id: string} & Record<string, unknown>) => string
    } & AccordionProps

    export default function NestedAccordion(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/offline-banner' {
    export default function OfflineBanner(): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/order-summary' {
    type Props = {
        basket: CommerceSDK.Basket
        showPromoCodeForm?: boolean
        showCartItems?: boolean
        isEstimate?: boolean
        fontSize: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    }

    export default function OrderSummary(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/page-action-placeholder' {
    type Props = {
        heading: string
        text: string
        buttonText: string
        icon: unknown
        buttonProps: ButtonProps
        onButtonClick: () => void
    }

    export default function PageActionPlaceHolder(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/pagination' {
    type Props = {
        urls: Array<string>
        currentURL: string
    } & FlexProps

    export default function Pagination(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/product-item' {
    type Props = {
        product: CommerceSDK.Product$0
        onItemQuantityChange?: () => void
        onAddItemToCart?: () => void
        showLoading?: boolean
        isWishlistItem?: boolean
        primaryAction: unknown
        secondaryActions: unknown
    }

    export default function ProductItem(props: Props): React.JSX.Element
}

// NEXT PRODUCT_SCROLLER

declare module '@salesforce/retail-react-app/app/components/seo' {
    type Props = {
        title?: string
        description?: string
        noIndex?: boolean
        children?: React.ReactNode | Array<React.ReactNode>
    } & Record<string, unknown>

    export default function Seo(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/scroll-to-top' {
    export default function ScrollToTop(): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/offline-boundary' {
    type Props = {
        isOnline: boolean
        location?: Record<string, unknown>
        children?: React.ReactNode | Array<React.ReactNode>
    } & Record<string, unknown>

    export default function OfflineBoundary(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/responsive' {
    type Props = {
        children?: React.ReactNode | Array<React.ReactNode>
    } & Record<string, unknown>

    export function HideOnDesktop(props: Props): React.JSX.Element

    export function HideOnMobile(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/_app/partials/above-header' {
    export default function AboveHeader(): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/section' {
    type Props = {
        title?: string
        subtitle?: string | React.ReactNode
        actions?: React.JSX.Element
        maxWidth?: string
        children?: React.ReactNode | Array<React.ReactNode>
    } & Record<string, unknown>

    export default function Section(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/product-scroller' {
    type Props = {
        title?: string
        products?: unknown
        isLoading?: boolean
        scrollProps?: unknown
        itemWidth?: unknown
        productTileProps?: unknown
    } & Record<string, unknown>

    export default function ProductScroller(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/header' {
    type Props = {
        onMenuClick?: () => void
        onLogoClick?: () => void
        onMyAccountClick?: () => void
        onWishlistClick?: () => void
        onMyCartClick?: () => void
        searchInputRef?: () => void | {
            current: React.JSX.Element
        }
        children?: React.ReactNode | Array<React.ReactNode>
    } & Record<string, unknown>

    export default function Header(props: Props): React.JSX.Element
}

declare module '@salesforce/retail-react-app/app/components/with-registration' {
    const withRegistration: (
        _Component: React.JSX.Element
    ) => (_onClick?: () => void, ...passThroughProps: Record<string, unknown>) => React.JSX.Element
    export default withRegistration
}
