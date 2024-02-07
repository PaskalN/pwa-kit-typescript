const pageFrame = {
    display: 'flex',
    flexDir: 'column',
    w: '100%'
}

const pageSegmentClear = {
    w: '100%',
    maxW: 'xl',
    display: 'flex',
    flexDir: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

export default {
    'page-frame': pageFrame,

    'page-frame-center': {
        ...pageFrame,
        justifyContent: 'center'
    },

    'page-section': {
        w: '100%',
        display: 'flex',
        flexDir: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },

    'page-segment-clear': pageSegmentClear,

    'page-segment': {
        ...pageSegmentClear,
        padding: '1.5rem'
    }
}
