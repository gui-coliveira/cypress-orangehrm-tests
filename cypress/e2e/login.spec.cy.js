import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"

const dashboardPage = new DashboardPage()
const loginPage = new LoginPage()

describe("Login Orange HRM Tests", () => {
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

    loginPage.checkAccessInvalid()
  })
})
