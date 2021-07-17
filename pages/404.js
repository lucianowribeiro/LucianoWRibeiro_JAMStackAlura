import Screen404 from '../src/components/screens/Screen404';
import webPageHOC from '../src/components/wrappers/WebPage/hoc';

export default webPageHOC(Screen404, {
  pageProps: {
    seoProps: {
      headTitle: '404',
    },
    boxProps: {
      backgroundImage: 'none',
    },
  },
});
