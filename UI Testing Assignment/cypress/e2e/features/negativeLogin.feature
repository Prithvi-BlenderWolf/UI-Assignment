Feature: Login Scenario
Scenario: Login user with In correct email and password
Given I navigate to Bynder Portal website
When Enter login credentials
Then Should throw valid error response
