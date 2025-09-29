describe('Orange HRM Tests', () => {

  const selectorList = {
    usernameInput: '[name="username"]',
    passwordInput: '[name="password"]',
    loginButton: '.orangehrm-login-button',
    dashboardGrid: '.oxd-grid-3.orangehrm-dashboard-grid',
    errorMessage: '.oxd-alert--error'
  }


  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },

    userFail: {
      username: 'Test',
      password: 'test123'
    } 
  }


  it('Login - Success', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type(userData.userSuccess.username)
    cy.get(selectorList.passwordInput).type(userData.userSuccess.password)
    cy.get(selectorList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashboardGrid)
  })

  it('Login - Fail', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorList.usernameInput).type(userData.userFail.username)
    cy.get(selectorList.passwordInput).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.errorMessage)
  })
})