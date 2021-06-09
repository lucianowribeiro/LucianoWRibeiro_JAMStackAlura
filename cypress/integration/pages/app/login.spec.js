/// <reference types="cypress" />

import LoginScreenPageObject from '../../../../src/components/screens/LoginScreeen/LoginScreeen.pageObject';
import { LOGIN_APP_TOKEN } from '../../../../src/infra/services/login/loginService';

describe('/pages/app/login/', () => {
  describe('when fill and submit a form login request', () => {
    it('go to the profile page', () => {
      // Pré Teste
      cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app')
        .as('userLogin');
      // Cenário
      const loginScreen = new LoginScreenPageObject(cy);
      loginScreen
        .fillLoginForm({ user: 'luciano', password: 'senhasegura' })
        .submitLoginForm();
      // Asserções
      cy.url().should('include', '/app/profile');
      cy.wait('@userLogin')
        .then((intercept) => {
          const { token } = intercept.response.body.data;
          cy.getCookie(LOGIN_APP_TOKEN)
            .should('exist')
            .should('have.property', 'value', token);
        });
    });
  });
});
