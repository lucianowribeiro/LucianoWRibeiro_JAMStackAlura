/* eslint-disable dot-notation */
/// <reference types="cypress" />

import ProfileScreenPageObject from '../../../../../src/components/screens/ProfileScreen/ProfileScreen.pageObject';

describe('/src/components/screens/ProfileScreen/', () => {
  describe('when you want to do an post', () => {
    const profileScreen = new ProfileScreenPageObject(cy);
    const filter = 'crema';
    it('need to be logged', () => {
      profileScreen.toBeLogged();
      cy.url().should('include', '/app/profile');
    });
    it('need to insert an url', () => {
      profileScreen
        .openPostModal()
        .insertUrl(
          'https://images.endeavor.org.br/uploads/2015/05/simples-nacional1.jpg',
        );
    });
    it('need to choice a filter', () => {
      profileScreen.choiceFilter(filter);
    });
    it('submit your post image', () => {
      cy.get('aside article form > button.submitPost').should(
        'be.enabled',
        true,
      );
      profileScreen.submitImage();
      cy.get('div > .animationSucess').should('exist');
    });
    it('and then view the image in the feed', () => {
      profileScreen.viewImage({ easing: 'linear', duration: 2000 });
      cy.get(`figure:last-child > .filter-${filter}`).scrollIntoView();
      cy.get(`figure:last-child > .filter-${filter}`).should('exist');
    });
  });
});
