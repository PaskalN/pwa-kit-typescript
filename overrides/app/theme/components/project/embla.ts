import {ThemeObject} from '../../theme.interfaces'

export default {
    baseStyle: {
        wrapper: {
            display: 'flex'
        },
        viewport: {
            display: 'flex',
            overflow: 'hidden',
            w: '100%'
        },
        container: {
            display: 'flex',
            backfaceVisibility: 'hidden',
            touchAction: 'pan-y',
            w: '100%'
        },
        slide: {
            display: 'flex',
            flex: '0 0 100%',
            minWidth: '0',
            position: 'relative',
            '&.hide': {
                opacity: 0,
                transition: '0.15s'
            },
            '&.show': {
                opacity: 1
            }
        }
    },

    variants: {
        default: (): ThemeObject => {
            return {
                wrapper: {},
                container: {},
                viewport: {},
                slide: {}
            }
        },
        vertical: (): ThemeObject => {
            return {
                wrapper: {},
                container: {
                    flexDir: 'column'
                },
                viewport: {},
                slide: {}
            }
        }
    },

    sizes: {
        default: {},
        x6: {
            slide: {
                display: 'flex',
                flex: {
                    base: '0 0 28.571428571%',
                    sm: '0 0 22.2222222222%',
                    xl: '0 0 16.6666%'
                },
                minWidth: '0',
                position: 'relative'
            }
        }
    },
    parts: ['wrapper', 'container', 'viewport', 'slide']
}
