import React from 'react'

// Components
import SimpleCard from '../../project/simple-card'
import {Heading} from '@chakra-ui/react'
import CountrySelectorForm from '../forms/country-selector'

// Hooks

const CountrySelector: React.FC = () => {
    return (
        <SimpleCard maxW="40rem" variant="light_shadow" gap="1rem" w="100%" p="2.5rem">
            <Heading as="h3" size="lg" variant="heavy" w="100%" textTransform="uppercase">
                Select your Region
            </Heading>
            <CountrySelectorForm />
        </SimpleCard>
    )
}

export default CountrySelector
