import React from 'react'

import {Link} from 'react-router-dom'
import {Box, Heading, Text} from '@chakra-ui/react'

import IsSlot from '../../../core/components/ecommerce/is-slot'
import SlotBaseTemplate from '../../components/ecommerce/slot-templates/slot-base'
import IsAsset from '../../../core/components/ecommerce/is-asset'
import AssetBaseTemplate from '../../components/ecommerce/asset-template/asset-base'

import SimpleCard from '../../components/project/simple-card'

import HomeProviders from './home-providers'

import {useHomePageCustomSitePreferences} from './queries'
import useCustomSitePreferences from '../../../core/hooks/use-custom-site-preferences'

import {siteCustomPreferenceUtil} from '../../../core/utils/site-custom-preference.utils'

const Home: React.FC & {
    getTemplateName: () => string
} = () => {
    const preferencesQuery = useHomePageCustomSitePreferences()
    const customSitePreferences = useCustomSitePreferences(preferencesQuery)
    const preferenceUtil = siteCustomPreferenceUtil(customSitePreferences || {})

    // Site Custom Preferences
    const countryCode = preferenceUtil.get<string>('countryCode')
    const testField = preferenceUtil.get<number>('testField')
    const customerServiceEmail = preferenceUtil.get<string>('customerServiceEmail')

    // Another way of usage
    // const preferences =
    //     preferenceUtil.getPreferences<SitePreferencesApp.Page<SitePreferencesApp.Home>>()

    // const countryCode = preferences.countryCode
    // const testField = preferences.testField
    // const customerServiceEmail = preferences.customerServiceEmail

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
        <HomeProviders>
            <Box __css={styles.container} data-component="page-container">
                <SimpleCard variant="light_shadow">
                    <Link to={'/sample'}>Go to Sample</Link>
                </SimpleCard>
                <SimpleCard variant="light_shadow" maxW="80rem" gap="1rem">
                    <Heading
                        as="h1"
                        variant="heavy_xl"
                        size="lg"
                        fontSize="4rem"
                        color="carminepink.90"
                    >
                        SYSTEMA
                    </Heading>

                    <Text size="md">
                        <Text as="span" variant="heavy">
                            Typescript - PWA Kit
                        </Text>{' '}
                        base blueprint project
                    </Text>

                    <Heading
                        as="h2"
                        variant="heavy"
                        size="lg"
                        fontSize="2rem"
                        color="carminepink.90"
                    >
                        Custom Preferences
                    </Heading>

                    {countryCode && (
                        <SimpleCard variant="light_shadow">
                            <Text>The country code is: {countryCode}</Text>
                        </SimpleCard>
                    )}
                    {customerServiceEmail && (
                        <SimpleCard variant="light_shadow">
                            <Text>Customer Service Email: {customerServiceEmail}</Text>
                        </SimpleCard>
                    )}
                    {testField && (
                        <SimpleCard variant="light_shadow">
                            <Text>Simple BM Phantom Custom Preference: {testField}</Text>
                        </SimpleCard>
                    )}

                    <Heading
                        as="h2"
                        variant="heavy"
                        size="lg"
                        fontSize="2rem"
                        color="carminepink.90"
                    >
                        Content Asset
                    </Heading>
                    <IsAsset
                        assetId="404-callout"
                        loadingAs={
                            <SimpleCard variant="light_shadow">
                                <Text variant="heavy">Loading ...</Text>
                            </SimpleCard>
                        }
                    >
                        <AssetBaseTemplate />
                    </IsAsset>

                    <Heading
                        as="h2"
                        variant="heavy"
                        size="lg"
                        fontSize="2rem"
                        color="carminepink.90"
                    >
                        Content Slot
                    </Heading>

                    <IsSlot
                        slotId="home-page-slot"
                        loadingAs={
                            <SimpleCard variant="light_shadow">
                                <Text variant="heavy">Loading ...</Text>
                            </SimpleCard>
                        }
                    >
                        <SlotBaseTemplate />
                    </IsSlot>
                </SimpleCard>
            </Box>
        </HomeProviders>
    )
}

Home.getTemplateName = () => 'home'

export default Home
