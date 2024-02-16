import React, {useState, useEffect} from 'react'
import {Flex, Button} from '@chakra-ui/react'

import CarouselContextProvider, {CarouselSkeleton, Slide} from '../../../ecommerce/embla-carousel'
import localStorage from '../../../../../core/utils/storage-utils'
import IsSlot from '../../../../../core/components/ecommerce/is-slot'
import useSlot from '../../../../../core/hooks/use-slot'
import {IconClose} from '../../icons'

const BannerSlides: React.FC<{
    assets: Array<SiteContent.ContentAsset>
}> = (props) => {
    const {assets} = props

    return (
        <>
            {assets.map((asset, index) => {
                return (
                    <Slide key={index}>
                        <Flex
                            dangerouslySetInnerHTML={{__html: asset.c_body}}
                            color="white"
                            justifyContent="center"
                            alignItems="center"
                            w="100%"
                            p="0.5rem"
                        />
                    </Slide>
                )
            })}
        </>
    )
}

const BannerCarousel: React.FC = () => {
    const context = useSlot()
    const configuration = context
    const storage = localStorage()

    const showBanner = () => {
        const initialResult = {
            show: false
        }

        try {
            const initialData = storage.get('show-banner')

            if (!initialData) {
                initialResult.show = true
            } else {
                const data = JSON.parse(initialData) as {
                    show: boolean
                    date: number
                }

                if (data.show) {
                    initialResult.show = true
                } else {
                    if (data.date < new Date().getTime()) {
                        initialResult.show = true
                    }
                }
            }
        } catch (err) {
            initialResult.show = true
        }

        return initialResult
    }

    const [show, seShow] = useState<boolean>(false)

    useEffect(() => {
        const isBannerVisible = showBanner().show
        seShow(isBannerVisible)
    }, [])

    const closeButtonHandler = () => {
        seShow(false)
        storage.set(
            'show-banner',
            JSON.stringify({
                show: false,
                time: new Date().getTime() + 3600000 // Hide for 1h
            })
        )
    }

    if (!configuration?.content.type.content_assets) return null

    return (
        <CarouselContextProvider
            variant="vertical"
            options={{
                axis: 'y',
                loop: true,
                duration: 40,
                watchDrag: false
            }}
            autoplayOptions={{
                delay: 8000
            }}
            classNameOptions={{
                inView: 'hide',
                snapped: 'show'
            }}
        >
            <Flex
                w="100%"
                bg="black"
                justifyContent="center"
                layerStyle="page-section"
                display={show ? 'flex' : 'none'}
            >
                <Flex w="100%" layerStyle="page-segment" flexDir="row" p="0.35rem">
                    <CarouselSkeleton w="100%" h="2.5rem" padding-left="3.125rem">
                        <BannerSlides assets={configuration?.content.content_assets_ids} />
                    </CarouselSkeleton>
                    <Button
                        variant="icon"
                        colorScheme="light"
                        size="icon_sm"
                        onClick={() => closeButtonHandler()}
                    >
                        <IconClose color="white" fontSize="1.25rem" />
                    </Button>
                </Flex>
            </Flex>
        </CarouselContextProvider>
    )
}

const TopBannerCarousel: React.FC<{
    children?: React.ReactNode | Array<React.ReactNode>
}> = () => {
    return (
        <IsSlot slotId="header-top-banner">
            <BannerCarousel />
        </IsSlot>
    )
}

export default TopBannerCarousel
