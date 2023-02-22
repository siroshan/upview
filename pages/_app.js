import { CacheProvider, EmotionCache } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import createEmotionCache from '../config/createEmotionCache';
import { theme } from '../config/theme';

import '../styles/app.scss';

// swiper styles
import 'swiper/css';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import dynamic from 'next/dynamic';
import SiteLayout from '../hoc/Layout/SiteLayout';

const ViewportProvider = dynamic(() => import('../context/viewPortContext'), {
  ssr: false,
});
const CartProvider = dynamic(() => import('../context/cartContext'), {
  ssr: false,
});

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function App(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <ViewportProvider>
      <CartProvider>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={theme}>
            <SiteLayout>
              <CssBaseline />
              <Component {...pageProps} />
            </SiteLayout>
          </ThemeProvider>
        </CacheProvider>
      </CartProvider>
    </ViewportProvider>
  );
}
