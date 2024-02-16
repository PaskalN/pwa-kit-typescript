import {ThemeObject} from '../../theme.interfaces'

export default {
    baseStyle: {
        container: {
            display: 'flex',
            flexDir: 'column',
            gap: '0.65rem'
        },
        label: {
            display: 'flex',
            flexDir: 'column',
            gap: '0.65rem'
        }
    },

    variants: {
        default: (): ThemeObject => {
            return {}
        }
    },

    sizes: {
        md: {}
    },

    defaultProps: {
        variant: 'default',
        size: 'md'
    },

    parts: [
        'wrapper',
        'errorLabel',
        'container',
        'errorContainer',
        'label',
        'placeholder',
        'errorPlaceholder',
        'dirtyPlaceholder'
    ]
}
