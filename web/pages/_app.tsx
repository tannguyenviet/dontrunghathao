import '../styles/globals.less';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import store from 'store';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from 'components/Layout';
import { useEffect } from 'react';
import AOS from 'aos';
import Head from 'next/head';

const baseUrl = 'https://ids-networks.com';

import 'aos/dist/aos.css';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
    });
  }, []);
  return (
    <>
      <Head>
        <title>The international supply chain and sourcing organization!</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <meta name="robots" content="all" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={baseUrl} />
        <meta property="og:title" content="IDS Networks" />
        <meta property="og:description" content="The international supply chain and sourcing organization!" />
        <meta property="og:image" content={`${baseUrl}/static/logo-ids.png`} />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={baseUrl} />
        <meta property="twitter:title" content="IDS Networks" />
        <meta property="twitter:description" content="The international supply chain and sourcing organization!" />
        <meta property="twitter:image" content={`${baseUrl}/static/logo-ids.png`} />
        <meta name="keywords" content="idsnetworks, exchange, trade, supply chain, sourcing organization" />
      </Head>
      <Provider store={store}>
        {/* <Auth0Provider
        domain="dev-upislsyj.us.auth0.com"
        clientId="gMHc30aqq3YiUlpUCX5kLXaELEHDlcFE"
        redirectUri={'http://localhost:3000'}
      > */}
        <Layout>
          <Component {...pageProps} />
        </Layout>
        {/* </Auth0Provider> */}
      </Provider>
    </>
  );
} 

export default appWithTranslation(MyApp);
