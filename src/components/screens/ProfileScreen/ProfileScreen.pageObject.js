export default class ProfileScreenPageObject {
  constructor(cy) {
    this.cy = cy;
  }

  toBeLogged() {
    Cypress.Cookies.defaults({
      preserve: 'TOKEN_APP',
    });
    this.cy.setCookie('TOKEN_APP', 'yJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjAzN2JmODY2NDcyOTUwMDA3M2I3ZDgyIiwidXNlcm5hbWUiOiJsdWNpYW5vIiwicm9sZSI6WyJ1c2VyIl19LCJpYXQiOjE2MjU4NTE3NDIsImV4cCI6MTYyNjQ1NjU0Mn0.9xouT1u2DcpNlahkwI4iVAjhL-4WruW2cxmH5f5-lLY');
    this.cy.visit('/app/profile');
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

  choiceFilter(filter) {
    this.cy.get('.next > .flickity-button-icon').click();
    this.cy.get(`aside article form button > img.filter-${filter}`).click();
    return this;
  }

  submitImage() {
    this.cy.get('aside article form > button.submitPost').click();
    return this;
  }

  viewImage() {
    this.cy.reload();
    this.cy.url().should('include', '/app/profile');
    this.cy.get('header > nav > button.openFeed').click();
    return this;
  }
}
