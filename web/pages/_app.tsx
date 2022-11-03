import '../styles/globals.less';
import AOS from "aos";

import "aos/dist/aos.css";

import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { Provider } from 'react-redux';
import store from 'store';
import { Auth0Provider } from '@auth0/auth0-react';
import Layout from 'components/Layout';
import { useEffect } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
    });
  }, []);
  return (
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
  );
}

export default appWithTranslation(MyApp);
