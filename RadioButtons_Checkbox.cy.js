

describe("Radio Buttons and Checkbox",() =>{

    it("Radio Buttons", () =>{

        cy.visit("https://www.fender.com/en/start")

        /* cy.get(".open-nav").click() */

        // Visibility of radio buttons

        cy.get('[data-test="ftr-links"] > :nth-child(1) > :nth-child(2) > a').click()
        
        cy.get("input#Boolean-FilterCheckbox-Stratocaster®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Telecaster®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Jazzmaster®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Jaguar®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Mustang®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Duo-Sonic®").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Lead").should('be.visible')
        cy.get("input#Boolean-FilterCheckbox-Other").should('be.visible')

        // Selecting checkboxes

        cy.get("input#Boolean-FilterCheckbox-Jaguar®").check({force: true})
        cy.get("input#Boolean-FilterCheckbox-Jaguar®").should('be.checked')

        cy.get("input#Boolean-FilterCheckbox-Artist").check({force: true})  
        cy.get("input#Boolean-FilterCheckbox-Artist").should('be.checked')

        cy.get("input#Boolean-FilterCheckbox-Right-Hand").check({force: true})  
        cy.get("input#Boolean-FilterCheckbox-Right-Hand").should('be.checked') 

        
        cy.get("input#Boolean-FilterCheckbox-Jaguar®").check({force: true})
        cy.get("input#Boolean-FilterCheckbox-Jaguar®").should('be.checked')

        cy.get("input#Boolean-FilterCheckbox-Artist").check({force: true})  
        cy.get("input#Boolean-FilterCheckbox-Artist").should('be.checked')

        cy.get("input#Boolean-FilterCheckbox-Right-Hand").check({force: true})  
        cy.get("input#Boolean-FilterCheckbox-Right-Hand").should('be.checked')

        // Selecting radio buttons

        cy.get('[title="Refine by Color: Burst"] > a > img').click()
        cy.get(':nth-child(3) > .values > .p-sm-0 > a > img').click()
        cy.get(':nth-child(6) > .values > .p-sm-0 > a').click()


        /*

        it('Checkboxes', () => {

            cy.visit("http://www.automationpractice.pl/index.php?id_category=5&controller=category")
            
            cy.get('#layered_id_attribute_group_13').should('be.visible')

            */

            /*

            // Selecting single checkbox

            cy.get('#layered_id_attribute_group_1').check().should('be.checked')
            cy.get('input#layered_id_attribute_group_13').click()
            cy.get('input#layered_id_attribute_group_14').click() */

            /*

            // Unselecting single checkboxes

            cy.get('#salary2').uncheck().should('not.be.checked')

            // Selecting all checkboxes at one time

            cy.get("input[name='SalaryInfo1'][type='checkbox']").check()
            cy.get("input[name='SalaryInfo1'][type='checkbox']").uncheck().should('not.be.checked')

            */

            /*

            // Selecting all checkboxes

            cy.get(".checkbox[type='checkbox']").check().should('be.checked')

            // Unselecting all checkboxes

            cy.get(".checkbox[type='checkbox']").uncheck().should('not.be.checked')

            */

            /*

            // Selecting first checkbox

            cy.get(".checkbox[type='checkbox']").first().check()
            cy.get(".checkbox[type='checkbox']").last().check()

            */

        
        })
})