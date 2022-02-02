import { getGreeting } from '../support/app.po';

describe('lac-deposit', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to lac-deposit!');
  });
});
