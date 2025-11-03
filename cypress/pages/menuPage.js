class menuPage {
  selectorsList() {
    const selectors = {
      myInfoButton: ":nth-child(6) > .oxd-main-menu-item",
    }

    return selectors
  }

  accessMyInfo() {
    cy.get(this.selectorsList().myInfoButton).click()
    cy.location("pathname").should(
      "contain",
      "/web/index.php/pim/viewPersonalDetails/"
    )
  }
}
export default menuPage
