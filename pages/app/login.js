import LoginScreen from '../../src/components/screens/LoginScreen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';

export default webPageHOC(LoginScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
  },
});
