describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '.orangehrm-login-button',
    dashboardHeader: '.oxd-topbar-header-breadcrumb-module',
    errorMessage: '.oxd-alert--error'
  }

  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type('Admin')
    cy.get(selectorList.passwordInput).type('admin123')
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardHeader).contains('Dashboard')
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type('Test')
    cy.get(selectorList.passwordInput).type('test123')
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage)
  })
})