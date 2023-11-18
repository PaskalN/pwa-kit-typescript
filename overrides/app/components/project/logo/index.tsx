import React from 'react'

// Hook
import useMultiSite from '@salesforce/retail-react-app/app/hooks/use-multi-site'

// Component
import {Link as RouteLink} from 'react-router-dom'
import {Link, Text} from '@chakra-ui/react'

const Logo: React.FC = () => {
    const {site, locale, buildUrl} = useMultiSite()
    return (
        <Link as={RouteLink} to={buildUrl('/', site.id, locale.id)} title="Systema" pos="relative">
            <Text variant="heavy_xl" size="mdx2" color="carminepink.90" textTransform="uppercase">
                Systema
            </Text>
        </Link>
    )
}

export default Logo
