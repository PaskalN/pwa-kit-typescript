import React from 'react'

import {Link} from 'react-router-dom'
import {Flex, Text} from '@chakra-ui/react'

import IsSlot from '../../../core/components/ecommerce/is-slot'
import SlotBaseTemplate from '../../components/ecommerce/slot-templates/slot-base'

import SimpleCard from '../../components/project/simple-card'

import {PageGlobalSlotProvider} from '../../context'
import useSamplePageSlots from './queries'
const Sample: React.FC & {
    getTemplateName: () => string
} = () => {
    const pageSlotResult = useSamplePageSlots()

    return (
        <PageGlobalSlotProvider query={pageSlotResult}>
            <SimpleCard variant="light_shadow">
                <Link to={'/'}>Go Back</Link>
            </SimpleCard>
            <Flex
                padding="1rem"
                flexDir="column"
                justifyContent="center"
                maxW="80rem"
                gap="1rem"
                boxShadow="12"
            >
                <IsSlot
                    slotId="header-banner-m"
                    loadingAs={
                        <SimpleCard variant="light_shadow">
                            <Text variant="heavy">Loading ...</Text>
                        </SimpleCard>
                    }
                >
                    <SlotBaseTemplate />
                </IsSlot>
            </Flex>
        </PageGlobalSlotProvider>
    )
}

Sample.getTemplateName = () => 'sample'

export default Sample
