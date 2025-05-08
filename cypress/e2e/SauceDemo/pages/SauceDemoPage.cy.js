
import
{
    USERNAME,
    PWD,
    LOGIN_BTN
}
from "../selectors/SauceDemoSelectors.cy";

export class SauceDemoPage
{
    static navigateToUrl(){
        cy.visit(("/"));
    }

    static isLoginFormVisible(){

    }

    static enterUsernameAndPwd(username, pwd){
        cy.get(USERNAME).type(username);
        cy.get(PWD).type(pwd);
    }

    static clickLoginButton(){
        cy.get(LOGIN_BTN).click();
    }

    static isDashboardPageVisible(){
        cy.url().should("eq", "https://www.saucedemo.com/inventory.html");
    }
}

