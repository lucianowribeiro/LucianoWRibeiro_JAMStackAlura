/// <reference types="cypress" />
import ProfileScreenPageObject from '../../../../../src/components/screens/ProfileScreen/ProfileScreen.pageObject';

describe('/src/components/screens/ProfileScreen/', () => {
  describe('when insert an url,choice the filter and submit post image ', () => {
    it('view the image in the feed', () => {
      // Cenario
      const profileScreen = new ProfileScreenPageObject(cy);
      profileScreen
        .toBeLogged()
        .openPostModal()
        .insertUrl('https://images.endeavor.org.br/uploads/2015/05/simples-nacional1.jpg');
      /*
                .choiceFilter()
                .submitImage()
                .reloadPage()
                .goToUserFeed(); */
      // Assercoes
    });
  });
});
