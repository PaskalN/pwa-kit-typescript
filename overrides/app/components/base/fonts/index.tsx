import React, {FC} from 'react'

import {Global} from '@emotion/react'

import {getAssetUrl} from '@salesforce/pwa-kit-react-sdk/ssr/universal/utils'

export const Fonts: FC = () => (
    <Global
        styles={`
        @font-face {
          font-family: 'OpenSansMedium';
          src: url('${getAssetUrl('static/fonts/opensans/OpenSans-Medium.woff2')}') format('woff2'),
              url('${getAssetUrl('static/fonts/opensans/OpenSans-Medium.woff')}') format('woff');
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
              url('${getAssetUrl('static/fonts/opensans/OpenSans-Regular.woff')}') format('woff');
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
              url('${getAssetUrl('static/fonts/opensans/OpenSans-SemiBold.woff')}') format('woff');
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
          src: url('${getAssetUrl('static/fonts/opensans/OpenSans-Light.woff2')}') format('woff2'),
              url('${getAssetUrl('static/fonts/opensans/OpenSans-Light.woff')}') format('woff');
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
              url('${getAssetUrl('static/fonts/opensans/OpenSans-ExtraBold.woff')}') format('woff');
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
          src: url('${getAssetUrl('static/fonts/opensans/OpenSans-Italic.woff2')}') format('woff2'),
              url('${getAssetUrl('static/fonts/opensans/OpenSans-Italic.woff')}') format('woff');
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
          font-family: 'VisbyCFLightItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFLightItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFLightItalic.woff'
              )}') format('woff');
          font-weight: 300;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFRegular.woff'
              )}') format('woff');
          font-weight: normal;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFMediumItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFMediumItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFMediumItalic.woff'
              )}') format('woff');
          font-weight: 500;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFMediumRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFMediumRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFMediumRegular.woff'
              )}') format('woff');
          font-weight: 500;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFItalic.woff'
              )}') format('woff');
          font-weight: normal;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFExtraBoldRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFExtraBoldRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFExtraBoldRegular.woff'
              )}') format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFHeavyItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFHeavyItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFHeavyItalic.woff'
              )}') format('woff');
          font-weight: 900;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFHeavyRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFHeavyRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFHeavyRegular.woff'
              )}') format('woff');
          font-weight: 900;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFThinRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFThinRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFThinRegular.woff'
              )}') format('woff');
          font-weight: 100;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFLightRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFLightRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFLightRegular.woff'
              )}') format('woff');
          font-weight: 300;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFThinItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFThinItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFThinItalic.woff'
              )}') format('woff');
          font-weight: 100;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFExtraBoldItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFExtraBoldItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFExtraBoldItalic.woff'
              )}') format('woff');
          font-weight: bold;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFDemiBoldItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFDemiBoldItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFDemiBoldItalic.woff'
              )}') format('woff');
          font-weight: 600;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFDemiBoldRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFDemiBoldRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFDemiBoldRegular.woff'
              )}') format('woff');
          font-weight: 600;
          font-style: normal;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFBoldItalic';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFBoldItalic.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFBoldItalic.woff'
              )}') format('woff');
          font-weight: bold;
          font-style: italic;
          font-display: swap;
      }
      
      @font-face {
          font-family: 'VisbyCFBoldRegular';
          src: url('${getAssetUrl(
              'static/fonts/visby/FONTSPRINGDEMO-VisbyCFBoldRegular.woff2'
          )}') format('woff2'),
              url('${getAssetUrl(
                  'static/fonts/visby/FONTSPRINGDEMO-VisbyCFBoldRegular.woff'
              )}') format('woff');
          font-weight: bold;
          font-style: normal;
          font-display: swap;
      }      
  `}
    />
)
