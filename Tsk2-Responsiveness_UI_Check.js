/// <reference types="Cypress"  />
describe('Bazaar UAE - UI Responsiveness Check', () => {
    const url = 'https://www.bazaar-uae.com/';
  
    it('should display correctly on desktop viewport', () => {
      cy.viewport(1280, 800); // Desktop size
      cy.visit(url);
      cy.get('header').should('be.visible');
      cy.get('nav').should('be.visible');
    });
  
    it('should adapt to mobile viewport', () => {
      cy.viewport('iphone-6'); // iPhone 6 viewport
      cy.visit(url);
  
      // Check if mobile menu icon (hamburger) is visible
      cy.get('.mobile-menu.fix.mean-container')
      .click({ force: true });

    });
  });
  