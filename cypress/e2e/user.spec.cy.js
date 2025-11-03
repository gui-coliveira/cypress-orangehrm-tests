import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import menuPage from "../pages/menuPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe("Orange HRM Tests", () => {
  const selectorList = {
    firstNameInput: '[name="firstName"]',
    middleNameInput: '[name="middleName"]',
    lastNameInput: '[name="lastName"]',
    dateInput: '[placeholder="yyyy-dd-mm"]',
    dateCloseInput: ".oxd-date-input-link.--close",
    dropDownInput: ".oxd-select-text-input",
    dropDownOption: ".oxd-select-dropdown",
    genderField: ".--gender-grouped-field",
    genericInput: ".oxd-input--active",
    submitButton: '[type="submit"]',
    toastAlert: ".oxd-text--toast-title",
  }

  it("Login - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    dashboardPage.checkDashboardPage()
  })

  it("Login - Fail", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userFail.username,
      userData.userFail.password
    )
    cy.get(selectorList.errorMessage).should("be.visible")
  })

  it("User Info Update - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    cy.get(selectorList.firstNameInput).clear().type("First Name Test")
    cy.get(selectorList.middleNameInput).clear().type("Middle Name Test")
    cy.get(selectorList.lastNameInput).clear().type("Last Name Test")
    cy.get(selectorList.genericInput).eq(3).clear().type("0123456789")
    cy.get(selectorList.genericInput).eq(4).clear().type("9999999999")
    cy.get(selectorList.genericInput).eq(5).clear().type("0000000001")
    cy.get(selectorList.dateInput).eq(0).clear().type("2026-03-01")
    cy.get(selectorList.dateCloseInput).click()
    cy.get(selectorList.dropDownInput).eq(0).click()
    cy.get(selectorList.dropDownOption).contains("Brazilian").click()
    cy.get(selectorList.dropDownInput).eq(1).click()
    cy.get(selectorList.dropDownOption).contains("Married").click()
    cy.get(selectorList.dateInput).eq(1).clear().type("1999-13-06")
    cy.get(selectorList.dateCloseInput).click()
    cy.get(selectorList.genderField).contains("Male").click()
    cy.get(selectorList.submitButton).eq(0).click()
    cy.get(selectorList.toastAlert).should("contain", "Success")
  })
})
