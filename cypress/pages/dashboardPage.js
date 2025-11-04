class DashboardPage {
  selectorsList() {
    const selectors = {
      dashboardGrid: ".oxd-grid-3.orangehrm-dashboard-grid",
    }

    return selectors
  }

  checkDashboardPage() {
    cy.location("pathname").should("equal", "/web/index.php/dashboard/index")
    cy.get(this.selectorsList().dashboardGrid).should("be.visible")
  }
}

export default DashboardPage
