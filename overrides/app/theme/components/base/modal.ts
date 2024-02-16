import {ThemeObject, ThemeVariantProps} from '../../theme.interfaces'
import {getColorScheme} from '../../themeTools'

const colorScheme: ThemeObject = {}

export default {
    baseStyle: {
        overlay: {
            bg: 'rgba(0, 0, 0, 0.2)',
            zIndex: '100'
        },

        dialogContainer: {
            h: '100% !important',
            left: '0px',
            right: '0px',
            top: '0px',
            bottom: '0px',
            boxShadow: 'none',
            zIndex: '100'
        },

        dialog: {
            h: '100%',
            w: '100%',
            maxWidth: '100%',
            background: 'transparent',
            border: 'none',
            paddingTop: '0px',
            paddingBottom: '0px',
            paddingLeft: '0px',
            paddingRight: '0px',
            paddingInlineStart: '0px',
            paddingInlineEnd: '0px',
            borderRadius: '0px',
            overflow: 'hidden',
            marginLeft: '0px',
            marginRight: '0px',
            marginTop: '0px',
            marginBottom: '0px',
            boxShadow: 'none'
        },

        body: {
            h: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
        }
    },
    variants: {
        default: (props: ThemeVariantProps): ThemeObject => {
            const scheme = getColorScheme(props.colorScheme, colorScheme)
            return {
                ...scheme
            }
        }
    },
    sizes: {
        md: {
            body: {
                paddingTop: '0.5rem',
                paddingBottom: '0.5rem',
                paddingInlineStart: '0.5rem',
                paddingInlineEnd: '0.5rem'
            }
        }
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    }
}
