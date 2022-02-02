import { getGreeting } from '../support/app.po';

describe('lac-av-services', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to lac-av-services!');
  });
});
