import AboutScreen from '../src/components/screens/AboutScreen';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export default webPageHOC(AboutScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'About',
    },
  },
});
