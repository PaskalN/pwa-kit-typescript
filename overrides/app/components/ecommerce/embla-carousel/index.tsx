import React, {createContext, useContext, useEffect, useState} from 'react'

import {Box, BoxProps, useMultiStyleConfig} from '@chakra-ui/react'
import useEmblaCarousel, {
    EmblaOptionsType,
    EmblaCarouselType,
    EmblaEventType
} from 'embla-carousel-react'

import {OptionsType} from 'embla-carousel-autoplay/components/Options'
import Autoplay from 'embla-carousel-autoplay'

import ClassNames, {ClassNamesOptionsType} from 'embla-carousel-class-names'

type EmblaViewportRefType = <ViewportElement extends HTMLElement>(
    instance: ViewportElement | null
) => void

type ChildrenProp = {
    children: React.ReactNode | Array<React.ReactNode>
}

type StyleProps = {
    variant: string
    size: string
}

type CallbackType = (_emblaApi: EmblaCarouselType, _evt: EmblaEventType) => void | (() => void)

type CarouselCallbacks = {
    onEmblaInit?: CallbackType
    onEmblaReInit?: CallbackType
    onEmblaDestroy?: CallbackType
    onEmblaSelect?: CallbackType
    onEmblaScroll?: CallbackType
    onEmblaSettle?: CallbackType
    onEmblaResize?: CallbackType
    onEmblaSlideInView?: CallbackType
    onEmblaSlidesChanged?: CallbackType
    onEmblaPointerDown?: CallbackType
    onEmblaPointerUp?: CallbackType
}

const CarouselContext = createContext<
    | (StyleProps & {
          instance?: EmblaCarouselType
          container: EmblaViewportRefType
      })
    | null
>(null)

const CarouselContextProvider: React.FC<
    {
        children: React.ReactNode | Array<React.ReactNode>
        options?: EmblaOptionsType
        autoplayOptions?: Partial<OptionsType>
        classNameOptions?: ClassNamesOptionsType
    } & Partial<StyleProps>
> = (props) => {
    const {
        children,
        options,
        variant = 'default',
        size = 'default',
        autoplayOptions,
        classNameOptions
    } = props

    const plugins = []

    if (autoplayOptions) {
        Autoplay.globalOptions = autoplayOptions
        plugins.push(Autoplay())
    }

    if (classNameOptions) {
        plugins.push(ClassNames({...classNameOptions}))
    } else {
        plugins.push(ClassNames())
    }

    const [container, instance] = useEmblaCarousel(options, plugins)

    return (
        <CarouselContext.Provider
            value={{
                variant,
                size,
                instance,
                container
            }}
        >
            {children}
        </CarouselContext.Provider>
    )
}

export default CarouselContextProvider

export const CarouselSkeleton: React.FC<ChildrenProp & BoxProps & CarouselCallbacks> = (props) => {
    const {
        children,

        onEmblaInit = () => {},
        onEmblaReInit = () => {},
        onEmblaDestroy = () => {},
        onEmblaSelect = () => {},
        onEmblaScroll = () => {},
        onEmblaSettle = () => {},
        onEmblaResize = () => {},
        onEmblaSlideInView = () => {},
        onEmblaSlidesChanged = () => {},
        onEmblaPointerDown = () => {},
        onEmblaPointerUp = () => {},

        ...rest
    } = props

    const context = useContext(CarouselContext)
    const {size, variant} = context || {}
    const style = useMultiStyleConfig('Embla', {
        variant,
        size
    })

    useEffect(() => {
        if (!context?.instance) return
        initEvents(context.instance)
    }, [context])

    useEffect(() => {
        return () => {
            if (!context?.instance) return
            terminateEvents(context.instance)
        }
    }, [])

    const initEvents = (instance: EmblaCarouselType) => {
        instance.on('init', onEmblaInit)
        instance.on('reInit', onEmblaReInit)
        instance.on('destroy', onEmblaDestroy)
        instance.on('select', onEmblaSelect)
        instance.on('scroll', onEmblaScroll)
        instance.on('settle', onEmblaSettle)
        instance.on('resize', onEmblaResize)
        instance.on('slidesInView', onEmblaSlideInView)
        instance.on('slidesChanged', onEmblaSlidesChanged)
        instance.on('pointerDown', onEmblaPointerDown)
        instance.on('pointerUp', onEmblaPointerUp)
    }

    const terminateEvents = (instance: EmblaCarouselType) => {
        instance.off('init', onEmblaInit)
        instance.off('reInit', onEmblaReInit)
        instance.off('destroy', onEmblaDestroy)
        instance.off('select', onEmblaSelect)
        instance.off('scroll', onEmblaScroll)
        instance.off('settle', onEmblaSettle)
        instance.off('resize', onEmblaResize)
        instance.off('slidesInView', onEmblaSlideInView)
        instance.off('slidesChanged', onEmblaSlidesChanged)
        instance.off('pointerDown', onEmblaPointerDown)
        instance.off('pointerUp', onEmblaPointerUp)
    }

    return (
        <Box data-component="carousel-wrapper" __css={style.wrapper} {...rest}>
            <Box ref={context?.container} data-component="carousel-viewport" __css={style.viewport}>
                <Box data-component="carousel-container" __css={style.container}>
                    {children}
                </Box>
            </Box>
        </Box>
    )
}

export const Slide: React.FC<
    {
        children: React.ReactNode | Array<React.ReactNode>
    } & BoxProps
> = (props) => {
    const {children, ...rest} = props

    const context = useContext(CarouselContext)
    const {size, variant} = context || {}

    const style = useMultiStyleConfig('Embla', {
        variant,
        size
    })

    if (!context) return null
    return (
        <Box __css={style.slide} {...rest}>
            {children}
        </Box>
    )
}

export const Counter: React.FC<BoxProps> = (props) => {
    const {...rest} = props
    const context = useContext(CarouselContext)
    const [currentIndex, setCurrentIndex] = useState<number>(1)

    const onSelect = (_emblaApi: EmblaCarouselType) => {
        const index = _emblaApi.selectedScrollSnap() + 1
        if (!index) return

        setCurrentIndex(index)
    }

    useEffect(() => {
        if (!context?.instance) return
        context.instance.on('select', onSelect)
    }, [context])

    useEffect(() => {
        return () => {
            if (!context?.instance) return
            context.instance.off('select', onSelect)
        }
    }, [])

    if (!context?.instance) return null

    return (
        <Box {...rest} color="#fff">
            {currentIndex} / {context.instance.slideNodes().length}
        </Box>
    )
}
