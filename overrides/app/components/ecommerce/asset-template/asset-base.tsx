import React from 'react'
import useAsset from '../../../../core/hooks/use-asset'
import {Heading, Box} from '@chakra-ui/react'
import SimpleCard from '../../project/simple-card'

const AssetBaseTemplate: React.FC = () => {
    const asset = useAsset()

    return (
        asset && (
            <SimpleCard gap="1rem" variant="light_shadow">
                {asset?.name && (
                    <Heading as="h2" variant="heavy" size="lg">
                        {asset?.name}
                    </Heading>
                )}
                {asset?.c_body && <Box dangerouslySetInnerHTML={{__html: asset?.c_body}} />}
            </SimpleCard>
        )
    )
}

export default AssetBaseTemplate
