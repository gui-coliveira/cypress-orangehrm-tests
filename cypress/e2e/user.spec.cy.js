import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe("Orange HRM Tests", () => {
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

  it("User Info Update - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails("Name", "Middle", "Last")
    myInfoPage.fillEmployeeDetails(
      "0123456789",
      "9999999999",
      "0000000001",
      "2026-03-01"
    )
    myInfoPage.fillStatus("Brazilian", "Married", "1999-13-06", "Male")
    myInfoPage.saveForm()
  })
})
