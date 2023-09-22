// describe('test suit',()=>{
//     it('testcase1',()=>{
//         cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login',{failOnStatusCode: false});
//         // cy.title().should('eq','Maximl - Connected Worker Platform for the Deskless Workforce')
//         //cy.get(".mega-menu-link[href='https://maximl.com/solutions/']").click();
//         cy.get("[name='username']").type('Admin');
//         cy.get("[name='password']").type('admin123');
//     })
//     it('testcase2',()=>{
//         cy.visit('https://maximl.com/');
//         cy.title().should('eq','Maximl')//checking that the title is equal or not 

//import cypress = require("cypress");


// import cypress = require("cypress");

//     })
    // describe('Amazon Website Assertions', () => {
    //     it('assertion testcases', () => {
    //       cy.visit('https://www.amazon.com');
    //       cy.title().should('include', 'Amazon.com');
      
           
    //        cy.get('#twotabsearchtextbox').type('iphone 14 pro{enter}');//tyoing in search field iphone 14 and enter
      
          
    //        cy.get('[data-component-type="s-search-results"]').should('be.visible');//assertion for that search results are visible
    //     });
    // });
           // Click on a product in the search results
        //   cy.get('.s-search-results .s-result-item')
        //     .first()
        //     .find('.a-link-normal')
        //     .click();
      
        //   // Assert that the product page is loaded
        //   cy.url().should('include', '/dp/');
      
        //   // Assert the product title
        //   cy.get('#productTitle').should('exist');
      
        //   // Assert the product price
        //   cy.get('.a-price .a-offscreen').should('exist');
      
        //   // Add the product to the cart (you may need to adapt this based on Amazon's current UI)
        //   cy.get('#add-to-cart-button').click();
      
        //   // Assert that the cart icon updates to indicate an item is in the cart
        //   cy.get('#nav-cart-count').should('have.text', '1');
describe('test suit',()=>{
    it('testcase1',()=>{

        console.log(process.env);
        //cy.visit(`${process.env.cypress_home}`);
        // cy.visit(`${cypress.env('Login')}`);

        // cy.get("[name='username']").type('Admin');
        // cy.get("[name='password']").type('admin123');
        // cy.get("[type='submit']").click();
    })
})