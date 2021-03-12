/* eslint-disable react/jsx-props-no-spreading */
import webPageHOC from '../src/components/wrappers/WebPage/hoc';
import HomeScreen from '../src/components/screens/HomeScreen';

export default webPageHOC(HomeScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Home',
    },
    boxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
