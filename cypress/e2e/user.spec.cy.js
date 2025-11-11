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
const maritalStatus = chance.pickone(["Single", "Married", "Other"])
const gender = chance.pickone(["Male", "Female"])

function getRandomFormattedDate(setRandomMin, setRandomMax) {
  const randomDate = chance.date({
    year: chance.year({ min: setRandomMin, max: setRandomMax }),
  })
  return `${randomDate.getFullYear()}-${String(randomDate.getDate()).padStart(
    2,
    "0"
  )}-${String(randomDate.getMonth() + 1).padStart(2, "0")}`
}

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
      getRandomFormattedDate(2026, 2050)
    )
    myInfoPage.fillStatus(
      "Brazilian",
      maritalStatus,
      getRandomFormattedDate(1950, 2007),
      gender
    )
    myInfoPage.saveForm()
  })
})
