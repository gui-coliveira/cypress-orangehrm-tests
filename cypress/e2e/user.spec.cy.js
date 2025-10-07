import userData from '../fixtures/users/user-data.json'

describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '.orangehrm-login-button',
    dashboardGrid: '.oxd-grid-3.orangehrm-dashboard-grid',
    errorMessage: '.oxd-alert--error',
    myInfoButton: ':nth-child(6) > .oxd-main-menu-item',
    firstNameInput: '[name="firstName"]',
    middleNameInput: '[name="middleName"]',
    lastNameInput: '[name="lastName"]',
    dateInput: '[placeholder="yyyy-dd-mm"]',
    dateCloseInput: '.oxd-date-input-link.--close',
    genericInput: '.oxd-input--active',
    submitButton: '[type="submit"]',   
    toastAlert: '.oxd-text--toast-title',
  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameInput).type(userData.userSuccess.username)
    cy.get(selectorList.passwordInput).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid).should('be.visible')
  })

  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameInput).type(userData.userFail.username)
    cy.get(selectorList.passwordInput).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage).should('be.visible')
  })

  it('User Info Update - Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameInput).type(userData.userSuccess.username)
    cy.get(selectorList.passwordInput).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid).should('be.visible')
    cy.get(selectorList.myInfoButton).click()
    cy.location('pathname').should('contain', '/web/index.php/pim/viewPersonalDetails/')
    cy.get(selectorList.firstNameInput).clear().type('First Name Test')
    cy.get(selectorList.middleNameInput).clear().type('Middle Name Test')
    cy.get(selectorList.lastNameInput).clear().type('Last Name Test')
    cy.get(selectorList.genericInput).eq(3).clear().type('0123456789')
    cy.get(selectorList.genericInput).eq(4).clear().type('9999999999')
    cy.get(selectorList.genericInput).eq(5).clear().type('0000000001')
    cy.get(selectorList.dateInput).eq(0).clear().type('2026-03-01')
    cy.get(selectorList.dateCloseInput).click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get(selectorList.toastAlert).should('contain', 'Success')
  })
})