
import {Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

import {SauceDemoPage}  from "./pages/SauceDemoPage.cy";

Given("that I navigate to sauce demo website", () => {
    SauceDemoPage.navigateToUrl();
})

And("I see the login page", () =>{
    SauceDemoPage.isLoginFormVisible();
})

When("I enter {string} and {string}", (username, pwd) => {
    SauceDemoPage.enterUsernameAndPwd(username, pwd);
})

And("I click on the login button", () => {
    SauceDemoPage.clickLoginButton();
})

Then("I can see the dashboard page", () => {
    SauceDemoPage.isDashboardPageVisible();
})
