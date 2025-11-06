import userData from "../fixtures/users/user-data.json"
import LoginPage from "../pages/loginPage"
import DashboardPage from "../pages/dashboardPage"
import MenuPage from "../pages/menuPage"
import MyInfoPage from "../pages/myInfoPage"
const Chance = require("chance")

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()
const chance = new Chance()

describe("User Orange HRM Tests", () => {
  it("User Info Update - Success", () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(
      userData.userSuccess.username,
      userData.userSuccess.password
    )

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails(chance.first(), chance.last(), chance.last())

    myInfoPage.fillEmployeeDetails(
      chance.integer({ min: 1111111111, max: 9999999999 }),
      chance.integer({ min: 1111111111, max: 9999999999 }),
      chance.integer({ min: 1111111111, max: 9999999999 }),
      `${chance.year({ min: 2026, max: 2050 })}` +
        "-" +
        `${chance.integer({ min: 1, max: 28 })}` +
        "-" +
        `${chance.integer({ min: 1, max: 28 })}`
    )
    myInfoPage.fillStatus("Brazilian", "Married", "1999-13-06", "Male")
    myInfoPage.saveForm()
  })
})
