import LoginScreen from '../../src/components/screens/LoginScreeen';
import webPageHOC from '../../src/components/wrappers/WebPage/hoc';

export default webPageHOC(LoginScreen, {
  pageProps: {
    seoProps: {
      headTitle: 'Login',
    },
    menuProps: {
      display: false,
    },
    boxProps: {
      backgroundImage: 'url(/images/bubbles.svg)',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'bottom right',
    },
  },
});
