/// <reference types="Cypress"  />
describe('Bazaar UAE - Homepage Key Element Validation', () => {
    it('should load the homepage and validate key elements', () => {
      cy.visit('https://www.bazaar-uae.com/');
  
      // Validate header logo
      cy.get('[src="/images/logo.png"]').should('be.visible');
  
      // Validate Name search field
      cy.get('#name').should('be.visible').type("Hamza Manzoor");

      // Validating Button
      cy.get('.Btn').click({ force: true });

  
      // Validate main navigation menu
      cy.get('nav').should('exist');


      // Validate at least one product section
      cy.get('#products-container-11 > :nth-child(1)').should('exist');
  
      // Validate footer section
      cy.get('footer').should('exist');
    });
  });
  