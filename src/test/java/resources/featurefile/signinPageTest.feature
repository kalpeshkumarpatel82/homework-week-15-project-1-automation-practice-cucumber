@Kalpesh
Feature: Testing Sign in Page functionality

  Scenario: User should navigate to Sign In Page successFully
    Given I am on homepage
    When I click on Sign In link
    Then I see "AUTHENTICATION" message on page header

  Scenario Outline: : Verify the error message with InValid Credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter "<username>" in username field
    And I enter "<password>" in password field
    And I click on Sign in Button
    Then I see "<message>" in warning
    Examples:
      | username       | password | message                    |
      |                | 123456   | An email address required. |
      | abcd@gmail.com |          | Password is required.      |
      | adfdfgfg       | 123456   | Invalid email address.     |
      | abcd@gmail.com | 123456   | Authentication failed.     |

  Scenario: Verify that User should LogIn SuccessFully with valid Credentials
    Given I am on homepage
    When I click on Sign In link
    And I enter "test@yahoo.be" in username field
    And I enter "Password123" in password field
    And I click on Sign in Button
    Then I see the "Sign out" in sign out link

  Scenario: Verify that User should Log out SuccessFully
    Given I am on homepage
    When I click on Sign In link
    And I enter "test@yahoo.be" in username field
    And I enter "Password123" in password field
    And I click on Sign in Button
    And I click on sign out link
    Then I see the "Sign in" in sign in link
