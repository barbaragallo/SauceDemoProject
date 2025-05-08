# Cypress Demo Project using SauceDemo website

  Feature: User navigates to SauceDemo website and can access
    Scenario Outline: User navigates to SauceDemo website and can access
      Given that I navigate to sauce demo website
      And I see the login page
      When I enter "<username>" and "<pwd>"
      And I click on the login button
      Then I can see the dashboard page
      Examples:
        | username           | pwd                 |
        |  standard_user   | secret_sauce  |