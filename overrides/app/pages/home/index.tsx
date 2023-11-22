import React from 'react'

import {Box, Heading, Text} from '@chakra-ui/react'

const Home: React.FC & {
    getTemplateName: () => string
} = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            minH: '100vh',
            minW: '100vw',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage: 'linear-gradient(120deg, #fdfbfb 0%, #67cdda 100%);'
        }
    }

    return (
        <Box __css={styles.container} data-component="page-container">
            <Heading as="h1" variant="heavy_xl" size="lg" fontSize="4rem" color="carminepink.90">
                SYSTEMA
            </Heading>
            <Text size="md">
                <Text as="span" variant="heavy">
                    Typescript - PWA Kit
                </Text>{' '}
                base blueprint project
            </Text>
        </Box>
    )
}

Home.getTemplateName = () => 'home'

export default Home
