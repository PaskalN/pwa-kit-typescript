import React from 'react'
import useSlot from '../../../hooks/use-slot'
import {Box} from '@chakra-ui/react'

const SlotAsset: React.FC = () => {
    const configuration = useSlot()

    if (!configuration || !configuration.content.type.content_assets) return null

    return (
        <>
            {configuration.content.content_assets_ids.map((asset, index) => {
                return (
                    <Box
                        key={index}
                        dangerouslySetInnerHTML={{
                            __html: asset.c_body
                        }}
                    />
                )
            })}
        </>
    )
}

export default SlotAsset
