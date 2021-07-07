/// <reference types="cypress" />
import ProfileScreenPageObject from '../../../../../src/components/screens/ProfileScreen/ProfileScreen.pageObject';

describe('/src/components/screens/ProfileScreen/', () => {
  describe('when you want to do an post', () => {
    const profileScreen = new ProfileScreenPageObject(cy);
    // Pre-teste
    it('need to be logged', () => {
      profileScreen
        .toBeLogged();
    });
    // Cenario
    it('need to insert an url', () => {
      profileScreen
        .openPostModal()
        .insertUrl('https://images.endeavor.org.br/uploads/2015/05/simples-nacional1.jpg');
    });
    it('need to choice a filter', () => {
      profileScreen
        .choiceFilter('inkwell');
    });
    it('submit your post image', () => {
      //  Pre-Assercoes
      cy.get('aside article form > button.submitPost').should('be.enabled', true);
      profileScreen
        .submitImage();
      // Assercoes
      cy.get('div > .animationSucess').should('exist');
    });

    it('and then view the image in the feed', () => {

    });
    /*
                .reloadPage()
                .goToUserFeed(); */
  });
});
