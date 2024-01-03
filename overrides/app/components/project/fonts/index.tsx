import React, {FC} from 'react'

import {Global} from '@emotion/react'

import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

export const Fonts: FC = () => (
    <Global
        styles={`
            @font-face {
            font-family: 'OpenSansMedium';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-Medium.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-Medium.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedMedium';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-Medium.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-Medium.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedExtraBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-ExtraBold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-ExtraBold.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansMediumItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-MediumItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-MediumItalic.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansRegular';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-Regular.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-Regular.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedSemiBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-SemiBold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-SemiBold.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedMediumItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-MediumItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-MediumItalic.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedSemiBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-SemiBoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-SemiBoldItalic.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-Bold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-Bold.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedLight';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-Light.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-Light.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedExtraBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-ExtraBoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-ExtraBoldItalic.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedRegular';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-Regular.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-Regular.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-Italic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-Italic.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-BoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-BoldItalic.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiCondensedLightItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansSemiCondensed-LightItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansSemiCondensed-LightItalic.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-SemiBold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-SemiBold.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansSemiBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-SemiBoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-SemiBoldItalic.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-Italic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-Italic.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansLight';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-Light.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-Light.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedMedium';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-Medium.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-Medium.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedRegular';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-Regular.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-Regular.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedSemiBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-SemiBold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-SemiBold.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansExtraBold';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-ExtraBold.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-ExtraBold.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedSemiBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-SemiBoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-SemiBoldItalic.woff'
                    )}') format('woff');
                font-weight: 600;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-Italic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-Italic.woff'
                    )}') format('woff');
                font-weight: normal;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansLightItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-LightItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-LightItalic.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedLight';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-Light.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-Light.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedLightItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-LightItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-LightItalic.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansExtraBoldItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSans-ExtraBoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSans-ExtraBoldItalic.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'OpenSansCondensedMediumItalic';
                src: url('${getAssetUrl(
                    'static/fonts/opensans/OpenSansCondensed-MediumItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/opensans/OpenSansCondensed-MediumItalic.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-BlackItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/roboto/Roboto-BlackItalic.woff'
                    )}') format('woff');
                font-weight: 900;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl('static/fonts/roboto/Roboto-Bold.woff2')}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Bold.woff')}') format('woff');
                font-weight: bold;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-Italic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Italic.woff')}') format('woff');
                font-weight: normal;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-Light.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Light.woff')}') format('woff');
                font-weight: 300;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-BoldItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/roboto/Roboto-BoldItalic.woff'
                    )}') format('woff');
                font-weight: bold;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-Black.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Black.woff')}') format('woff');
                font-weight: 900;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-ThinItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/roboto/Roboto-ThinItalic.woff'
                    )}') format('woff');
                font-weight: 100;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl('static/fonts/roboto/Roboto-Thin.woff2')}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Thin.woff')}') format('woff');
                font-weight: 100;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-Regular.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Regular.woff')}') format('woff');
                font-weight: normal;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-LightItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/roboto/Roboto-LightItalic.woff'
                    )}') format('woff');
                font-weight: 300;
                font-style: italic;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-Medium.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl('static/fonts/roboto/Roboto-Medium.woff')}') format('woff');
                font-weight: 500;
                font-style: normal;
                font-display: swap;
            }
            
            @font-face {
                font-family: 'Roboto';
                src: url('${getAssetUrl(
                    'static/fonts/roboto/Roboto-MediumItalic.woff2'
                )}') format('woff2'),
                    url('${getAssetUrl(
                        'static/fonts/roboto/Roboto-MediumItalic.woff'
                    )}') format('woff');
                font-weight: 500;
                font-style: italic;
                font-display: swap;
            }
            
        `}
    />
)
