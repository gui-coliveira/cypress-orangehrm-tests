class MyInfoPage {
  selectorsList() {
    const selectors = {
      firstNameInput: '[name="firstName"]',
      middleNameInput: '[name="middleName"]',
      lastNameInput: '[name="lastName"]',
      dateInput: '[placeholder="yyyy-dd-mm"]',
      dateCloseButton: ".oxd-date-input-link.--close",
      dropDownInput: ".oxd-select-text-input",
      dropDownOption: ".oxd-select-dropdown",
      genderField: ".--gender-grouped-field",
      genericInput: ".oxd-input--active",
      submitButton: '[type="submit"]',
      toastAlert: ".oxd-text--toast-title",
    }

    return selectors
  }

  fillPersonalDetails(firstName, middleName, lastName) {
    cy.get(this.selectorsList().firstNameInput).clear().type(firstName)
    cy.get(this.selectorsList().middleNameInput).clear().type(middleName)
    cy.get(this.selectorsList().lastNameInput).clear().type(lastName)
  }

  fillEmployeeDetails(employeeId, otherId, licenseNumber, licenseExpiryDate) {
    cy.get(this.selectorsList().genericInput).eq(3).clear().type(employeeId)
    cy.get(this.selectorsList().genericInput).eq(4).clear().type(otherId)
    cy.get(this.selectorsList().genericInput).eq(5).clear().type(licenseNumber)
    cy.get(this.selectorsList().dateInput).eq(0).clear().type(licenseExpiryDate)
    cy.get(this.selectorsList().dateCloseButton).click()
  }

  fillStatus(nationality, maritalStatus, dateOfBirth, gender) {
    cy.get(this.selectorsList().dropDownInput).eq(0).click()
    cy.get(this.selectorsList().dropDownOption).contains(nationality).click()
    cy.get(this.selectorsList().dropDownInput).eq(1).click()
    cy.get(this.selectorsList().dropDownOption).contains(maritalStatus).click()
    cy.get(this.selectorsList().dateInput).eq(1).clear().type(dateOfBirth)
    cy.get(this.selectorsList().dateCloseButton).click()
    cy.get(this.selectorsList().genderField).contains(gender).click()
  }

  saveForm() {
    cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
    cy.get(this.selectorsList().toastAlert).should("contain", "Success")
  }
}
export default MyInfoPage
