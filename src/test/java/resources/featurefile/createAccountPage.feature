@Kalpesh
Feature: Create Account Page test

  Scenario: Verify that User should create Account Successfully
    Given I am on homepage
    When I click on Sign In link
    And I enter "Shankar" in email field on create account page
    And I click on Create an account button
    And I select Gender "male" radio button
    And I enter "Shankar" in first name field in personal info
    And I enter "Trivedi" in last name field in personal info
    And I enter "Shankar" in email field on registration page in personal info
    And I enter "Password123" in password field in personal info
    And I select "16" in day "7" in month and "1978" in year from drop down menu
    And I select signup for newsletter checkbox
    And I select receive special offers checkbox
    And I enter "Shankar" in first name field in shipping address
    And I enter "Trivedi" in last name field in shipping address
    And I enter "Facebook" in company field
    And I enter "11 Golden street" and "old colony"
    And I select "United States" from country drop down
    And I select "Texas" from state drop down
    And I enter "Goa" in city field
    And I enter "12005" in post code
    And I enter "not applicable" in additional info
    And I enter "0011 456789123" in home phone
    And I enter "0022 785432419" in mobile phone
    And I enter "shankar_trivedi" in Alias field
    And I click on register button
    Then I see the "MY ACCOUNT" in page header