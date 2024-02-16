import React from 'react'
import useSlot from '../../../../core/hooks/use-slot'
import {Flex, Heading, Text, Image} from '@chakra-ui/react'
import SimpleCard from '../../project/simple-card'

const ContentHtml: React.FC<{
    html: string
}> = (props) => {
    const {html} = props

    return (
        <SimpleCard
            gap="1rem"
            variant="light_shadow"
            dangerouslySetInnerHTML={{
                __html: html
            }}
        />
    )
}

const ContentAsset: React.FC<{
    asset: SiteContent.ContentAsset
}> = (props) => {
    const {asset} = props

    return (
        <SimpleCard
            gap="1rem"
            variant="light_shadow"
            dangerouslySetInnerHTML={{
                __html: asset.c_body
            }}
        />
    )
}

const ContentProductTile: React.FC<{
    product: CommerceSDK.Product$0
}> = (props) => {
    const {product} = props

    return (
        <SimpleCard gap="1rem" variant="light_shadow" flexDir="column" maxW="15rem">
            <Image src={product?.imageGroups?.[0].images?.[0].link} />
            <Heading>{product.name}</Heading>
            <Text>{product.brand}</Text>
            <Text>
                {product.currency} {product.price}
            </Text>
        </SimpleCard>
    )
}

const SlotBaseTemplate: React.FC = () => {
    const context = useSlot()
    const configuration = context

    if (!configuration) return null

    // Content Assets
    if (
        configuration.content.type.content_assets &&
        configuration.content.content_assets_ids.length
    ) {
        return (
            <>
                {configuration.content.content_assets_ids.map((asset, index) => (
                    <ContentAsset key={index} asset={asset} />
                ))}
            </>
        )
    }

    // Content Product
    if (configuration.content.type.products && configuration.content.products_ids) {
        return (
            <Flex wrap="wrap" justify="center" gap="1rem">
                {configuration.content.products_ids.map((product, index) => (
                    <ContentProductTile key={index} product={product} />
                ))}
            </Flex>
        )
    }

    // Content Html
    if (configuration.content.type.html && configuration.content.html) {
        return <ContentHtml html={configuration.content.html} />
    }

    return null
}

export default SlotBaseTemplate
