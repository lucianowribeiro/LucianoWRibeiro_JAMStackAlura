/// <reference types="cypress" />
import loginTest from '../../../pages/app/login.spec';

describe('/src/components/screens/ProfileScreen/', () => {
  describe('when insert an url,choice the filter and submit post image ', () => {
    it('view the image in the feed', () => {
      // Pre teste
      loginTest();
      // Cenario
      const profileScreen = new ProfileScreenPageObject(cy)
        .insertUrl()
        .choiceFilter()
        .submitImage()
        .reloadPage()
        .goToUserFeed();
      // Assercoes
    });
  });
});
