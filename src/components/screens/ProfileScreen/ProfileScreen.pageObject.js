import LoginScreenPageObject from '../LoginScreeen/LoginScreeen.pageObject';

export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy;
  }

  toBeLogged() {
    this.cy.intercept('https://instalura-api-git-master-omariosouto.vercel.app')
      .as('userLogin');
    const loginScreen = new LoginScreenPageObject(this.cy);
    loginScreen
      .fillLoginForm({ user: 'luciano', password: 'senhasegura' })
      .submitLoginForm();
    this.cy.url().should('include', '/app/profile');
    this.cy.wait('@userLogin')
      .then(() => this);

    return this;
  }

  openPostModal() {
    this.cy.get('header > nav > button.openModal').click();
    return this;
  }

  insertUrl(url) {
    this.cy.get('aside article form input[name="image_url"]').type(url);
    this.cy.get('aside article form button.changeUrl').click();
    this.cy.get('aside article form button.submitUrl').click();
    return this;
  }
}
