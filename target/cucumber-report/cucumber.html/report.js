$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("createAccountPage.feature");
formatter.feature({
  "line": 2,
  "name": "Create Account Page test",
  "description": "",
  "id": "create-account-page-test",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 7300811900,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify that User should create Account Successfully",
  "description": "",
  "id": "create-account-page-test;verify-that-user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Shankar\" in email field on create account page",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "I click on Create an account button",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select Gender \"male\" radio button",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Shankar\" in first name field in personal info",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I enter \"Trivedi\" in last name field in personal info",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I enter \"Shankar\" in email field on registration page in personal info",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"Password123\" in password field in personal info",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"16\" in day \"7\" in month and \"1978\" in year from drop down menu",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select signup for newsletter checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I select receive special offers checkbox",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I enter \"Shankar\" in first name field in shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I enter \"Trivedi\" in last name field in shipping address",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "I enter \"Facebook\" in company field",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "I enter \"11 Golden street\" and \"old colony\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "I select \"United States\" from country drop down",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "I select \"Texas\" from state drop down",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I enter \"Goa\" in city field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "I enter \"12005\" in post code",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "I enter \"not applicable\" in additional info",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I enter \"0011 456789123\" in home phone",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"0022 785432419\" in mobile phone",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I enter \"shankar_trivedi\" in Alias field",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I click on register button",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "I see the \"MY ACCOUNT\" in page header",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 89151000,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3189532700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shankar",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInEmailFieldOnCreateAccountPage(String)"
});
formatter.result({
  "duration": 79861700,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnCreateAnAccountButton()"
});
formatter.result({
  "duration": 53747000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "male",
      "offset": 17
    }
  ],
  "location": "CreateAccountPageTest.iSelectGenderRadioButton(String)"
});
formatter.result({
  "duration": 3749928800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shankar",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInFirstNameField(String)"
});
formatter.result({
  "duration": 71333200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trivedi",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInLastNameField(String)"
});
formatter.result({
  "duration": 66592200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shankar",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInEmailFieldOnRegistrationPage(String)"
});
formatter.result({
  "duration": 44000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInPasswordFieldInPersonalInfo(String)"
});
formatter.result({
  "duration": 62609400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16",
      "offset": 10
    },
    {
      "val": "7",
      "offset": 22
    },
    {
      "val": "1978",
      "offset": 39
    }
  ],
  "location": "CreateAccountPageTest.iSelectInDayInMonthAndInYearFromDropDownMenu(String,String,String)"
});
formatter.result({
  "duration": 206206300,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iSelectSignupForNewsletterCheckbox()"
});
formatter.result({
  "duration": 49981200,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iSelectReceiveSpecialOffersCheckbox()"
});
formatter.result({
  "duration": 46294400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Shankar",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInFirstNameFieldInShippingAddress(String)"
});
formatter.result({
  "duration": 94453000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Trivedi",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInLastNameFieldInShippingAddress(String)"
});
formatter.result({
  "duration": 29718400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Facebook",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInCompanyField(String)"
});
formatter.result({
  "duration": 68087600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "11 Golden street",
      "offset": 9
    },
    {
      "val": "old colony",
      "offset": 32
    }
  ],
  "location": "CreateAccountPageTest.iEnterAnd(String,String)"
});
formatter.result({
  "duration": 125098200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "United States",
      "offset": 10
    }
  ],
  "location": "CreateAccountPageTest.iSelectFromCountryDropDown(String)"
});
formatter.result({
  "duration": 42699900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Texas",
      "offset": 10
    }
  ],
  "location": "CreateAccountPageTest.iSelectFromStateDropDown(String)"
});
formatter.result({
  "duration": 66902600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Goa",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInCityField(String)"
});
formatter.result({
  "duration": 52925000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12005",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInPostCode(String)"
});
formatter.result({
  "duration": 61579800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "not applicable",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInAdditionalInfo(String)"
});
formatter.result({
  "duration": 61149400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0011 456789123",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInHomePhone(String)"
});
formatter.result({
  "duration": 65861300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0022 785432419",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInMobilePhone(String)"
});
formatter.result({
  "duration": 62650000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "shankar_trivedi",
      "offset": 9
    }
  ],
  "location": "CreateAccountPageTest.iEnterInAliasField(String)"
});
formatter.result({
  "duration": 60138400,
  "status": "passed"
});
formatter.match({
  "location": "CreateAccountPageTest.iClickOnRegisterButton()"
});
formatter.result({
  "duration": 6890793600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "MY ACCOUNT",
      "offset": 11
    }
  ],
  "location": "CreateAccountPageTest.iSeeTheInPageHeader(String)"
});
formatter.result({
  "duration": 40995900,
  "status": "passed"
});
formatter.after({
  "duration": 596678400,
  "status": "passed"
});
formatter.uri("signinPageTest.feature");
formatter.feature({
  "line": 2,
  "name": "Testing Sign in Page functionality",
  "description": "",
  "id": "testing-sign-in-page-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 3526655800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "User should navigate to Sign In Page successFully",
  "description": "",
  "id": "testing-sign-in-page-functionality;user-should-navigate-to-sign-in-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"AUTHENTICATION\" message on page header",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 16700,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 3086942300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AUTHENTICATION",
      "offset": 7
    }
  ],
  "location": "SigninPageTest.iSeeMessageOnPageHeader(String)"
});
formatter.result({
  "duration": 24922600,
  "status": "passed"
});
formatter.after({
  "duration": 585184300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": ": Verify the error message with InValid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\u003cusername\u003e\" in username field",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cpassword\u003e\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"\u003cmessage\u003e\" in warning",
  "keyword": "Then "
});
formatter.examples({
  "line": 16,
  "name": "",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;",
  "rows": [
    {
      "cells": [
        "username",
        "password",
        "message"
      ],
      "line": 17,
      "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;1"
    },
    {
      "cells": [
        "",
        "123456",
        "An email address required."
      ],
      "line": 18,
      "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;2"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "",
        "Password is required."
      ],
      "line": 19,
      "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;3"
    },
    {
      "cells": [
        "adfdfgfg",
        "123456",
        "Invalid email address."
      ],
      "line": 20,
      "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;4"
    },
    {
      "cells": [
        "abcd@gmail.com",
        "123456",
        "Authentication failed."
      ],
      "line": 21,
      "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 6988305400,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": ": Verify the error message with InValid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"An email address required.\" in warning",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17700,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2423366900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 54954400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 64744600,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 1274608400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "An email address required.",
      "offset": 7
    }
  ],
  "location": "SigninPageTest.iSeeInWarning(String)"
});
formatter.result({
  "duration": 25112700,
  "status": "passed"
});
formatter.after({
  "duration": 591800500,
  "status": "passed"
});
formatter.before({
  "duration": 3711789600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": ": Verify the error message with InValid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"abcd@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"Password is required.\" in warning",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 19700,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 1968266400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 70921700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 59415500,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 3413404300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password is required.",
      "offset": 7
    }
  ],
  "location": "SigninPageTest.iSeeInWarning(String)"
});
formatter.result({
  "duration": 25282600,
  "status": "passed"
});
formatter.after({
  "duration": 575667200,
  "status": "passed"
});
formatter.before({
  "duration": 5988735300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": ": Verify the error message with InValid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"adfdfgfg\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"Invalid email address.\" in warning",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 16600,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 2664995700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "adfdfgfg",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 68947200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 61562200,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 2469202000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Invalid email address.",
      "offset": 7
    }
  ],
  "location": "SigninPageTest.iSeeInWarning(String)"
});
formatter.result({
  "duration": 23841400,
  "status": "passed"
});
formatter.after({
  "duration": 577100700,
  "status": "passed"
});
formatter.before({
  "duration": 6259024400,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": ": Verify the error message with InValid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;:-verify-the-error-message-with-invalid-credentials;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I enter \"abcd@gmail.com\" in username field",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"123456\" in password field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I see \"Authentication failed.\" in warning",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 18700,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 5154199900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "abcd@gmail.com",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 63301000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123456",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 60372100,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 4737794700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Authentication failed.",
      "offset": 7
    }
  ],
  "location": "SigninPageTest.iSeeInWarning(String)"
});
formatter.result({
  "duration": 24273700,
  "status": "passed"
});
formatter.after({
  "duration": 577314300,
  "status": "passed"
});
formatter.before({
  "duration": 10969833000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify that User should LogIn SuccessFully with valid Credentials",
  "description": "",
  "id": "testing-sign-in-page-functionality;verify-that-user-should-login-successfully-with-valid-credentials",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 24,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 25,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "I enter \"test@yahoo.be\" in username field",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "I enter \"Password123\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "I see the \"Sign out\" in sign out link",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 14300,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 5622651400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@yahoo.be",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 61907400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 67167100,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7178502400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign out",
      "offset": 11
    }
  ],
  "location": "SigninPageTest.iSeeTheInSignOutLink(String)"
});
formatter.result({
  "duration": 24321600,
  "status": "passed"
});
formatter.after({
  "duration": 576581300,
  "status": "passed"
});
formatter.before({
  "duration": 9274807600,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Verify that User should Log out SuccessFully",
  "description": "",
  "id": "testing-sign-in-page-functionality;verify-that-user-should-log-out-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 32,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "I click on Sign In link",
  "keyword": "When "
});
formatter.step({
  "line": 34,
  "name": "I enter \"test@yahoo.be\" in username field",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "I enter \"Password123\" in password field",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "I click on Sign in Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "I click on sign out link",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "I see the \"Sign in\" in sign in link",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 15700,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInLink()"
});
formatter.result({
  "duration": 5914731900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "test@yahoo.be",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInUsernameField(String)"
});
formatter.result({
  "duration": 60022100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Password123",
      "offset": 9
    }
  ],
  "location": "SigninPageTest.iEnterInPasswordField(String)"
});
formatter.result({
  "duration": 64794900,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignInButton()"
});
formatter.result({
  "duration": 7172043400,
  "status": "passed"
});
formatter.match({
  "location": "SigninPageTest.iClickOnSignOutLink()"
});
formatter.result({
  "duration": 7692016700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 11
    }
  ],
  "location": "SigninPageTest.iSeeTheInSignInLink(String)"
});
formatter.result({
  "duration": 24132300,
  "status": "passed"
});
formatter.after({
  "duration": 592491300,
  "status": "passed"
});
formatter.uri("womenCategoryPage.feature");
formatter.feature({
  "line": 2,
  "name": "Testing women category page",
  "description": "",
  "id": "testing-women-category-page",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.before({
  "duration": 6996531800,
  "status": "passed"
});
formatter.scenario({
  "line": 4,
  "name": "Verify User should navigate to women Category Page successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-navigate-to-women-category-page-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I see \"WOMEN\" text in page header",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 20500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 6560290000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "WOMEN",
      "offset": 7
    }
  ],
  "location": "WomenCategoryPageTest.iSeeTextInPageHeader(String)"
});
formatter.result({
  "duration": 23257600,
  "status": "passed"
});
formatter.after({
  "duration": 575096700,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 9,
  "name": "Verify User should add Product to the Cart successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"\u003cproduct\u003e\" from displayed products",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"\u003cqty\u003e\" in Quantity field",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"\u003csize\u003e\" from size drop down",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"\u003ccolour\u003e\" from colour",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see the confirmation \"Product successfully added to your shopping cart\\n\" message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on close button of confirmation message",
  "keyword": "Then "
});
formatter.examples({
  "line": 19,
  "name": "",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;",
  "rows": [
    {
      "cells": [
        "product",
        "qty",
        "size",
        "colour"
      ],
      "line": 20,
      "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;1"
    },
    {
      "cells": [
        "Blouse",
        "2",
        "M",
        "White"
      ],
      "line": 21,
      "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2"
    },
    {
      "cells": [
        "Printed Dress",
        "3",
        "L",
        "Orange"
      ],
      "line": 22,
      "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3"
    },
    {
      "cells": [
        "Printed Chiffon Dress",
        "4",
        "S",
        "Green"
      ],
      "line": 23,
      "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4"
    },
    {
      "cells": [
        "Printed Summer Dress with Price $28.98",
        "2",
        "M",
        "Blue"
      ],
      "line": 24,
      "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 7711551500,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Verify User should add Product to the Cart successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Blouse\" from displayed products",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"2\" in Quantity field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"M\" from size drop down",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"White\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see the confirmation \"Product successfully added to your shopping cart\\n\" message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on close button of confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 14200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 5063850800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blouse",
      "offset": 12
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnFromDisplayedProducts(String)"
});
formatter.result({
  "duration": 6088112100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "WomenCategoryPageTest.iEnterInQuantityField(String)"
});
formatter.result({
  "duration": 99205700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromSizeDropDown(String)"
});
formatter.result({
  "duration": 75821600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "White",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromColour(String)"
});
formatter.result({
  "duration": 56177200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 49185600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart\\n",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageTest.iSeeTheConfirmationMessage(String)"
});
formatter.result({
  "duration": 23349300,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButtonOfConfirmationMessage()"
});
formatter.result({
  "duration": 5055149900,
  "status": "passed"
});
formatter.after({
  "duration": 592590400,
  "status": "passed"
});
formatter.before({
  "duration": 8910612900,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Verify User should add Product to the Cart successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Printed Dress\" from displayed products",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"3\" in Quantity field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"L\" from size drop down",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Orange\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see the confirmation \"Product successfully added to your shopping cart\\n\" message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on close button of confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 17100,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 5239188500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Dress",
      "offset": 12
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnFromDisplayedProducts(String)"
});
formatter.result({
  "duration": 3815761100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 9
    }
  ],
  "location": "WomenCategoryPageTest.iEnterInQuantityField(String)"
});
formatter.result({
  "duration": 83677900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromSizeDropDown(String)"
});
formatter.result({
  "duration": 73213400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Orange",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromColour(String)"
});
formatter.result({
  "duration": 52773400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 44853600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart\\n",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageTest.iSeeTheConfirmationMessage(String)"
});
formatter.result({
  "duration": 24405400,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButtonOfConfirmationMessage()"
});
formatter.result({
  "duration": 3157763900,
  "status": "passed"
});
formatter.after({
  "duration": 595033500,
  "status": "passed"
});
formatter.before({
  "duration": 4355891000,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Verify User should add Product to the Cart successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Printed Chiffon Dress\" from displayed products",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"4\" in Quantity field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"S\" from size drop down",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Green\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see the confirmation \"Product successfully added to your shopping cart\\n\" message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on close button of confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 29200,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 1785113100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Chiffon Dress",
      "offset": 12
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnFromDisplayedProducts(String)"
});
formatter.result({
  "duration": 1594454800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 9
    }
  ],
  "location": "WomenCategoryPageTest.iEnterInQuantityField(String)"
});
formatter.result({
  "duration": 85715300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "S",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromSizeDropDown(String)"
});
formatter.result({
  "duration": 38032400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Green",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromColour(String)"
});
formatter.result({
  "duration": 58132500,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 47363800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart\\n",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageTest.iSeeTheConfirmationMessage(String)"
});
formatter.result({
  "duration": 22212700,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButtonOfConfirmationMessage()"
});
formatter.result({
  "duration": 980001900,
  "status": "passed"
});
formatter.after({
  "duration": 567359400,
  "status": "passed"
});
formatter.before({
  "duration": 3727226600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Verify User should add Product to the Cart successfully",
  "description": "",
  "id": "testing-women-category-page;verify-user-should-add-product-to-the-cart-successfully;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "I am on homepage",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I click on WOMEN tab",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I click on \"Printed Summer Dress with Price $28.98\" from displayed products",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I enter \"2\" in Quantity field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "I select \"M\" from size drop down",
  "matchedColumns": [
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "I select \"Blue\" from colour",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "I click on Add to cart button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I see the confirmation \"Product successfully added to your shopping cart\\n\" message",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "I click on close button of confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "SigninPageTest.iAmOnHomepage()"
});
formatter.result({
  "duration": 16900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnWOMENTab()"
});
formatter.result({
  "duration": 8466009200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Printed Summer Dress with Price $28.98",
      "offset": 12
    }
  ],
  "location": "WomenCategoryPageTest.iClickOnFromDisplayedProducts(String)"
});
formatter.result({
  "duration": 3034972000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 9
    }
  ],
  "location": "WomenCategoryPageTest.iEnterInQuantityField(String)"
});
formatter.result({
  "duration": 86393600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromSizeDropDown(String)"
});
formatter.result({
  "duration": 75261000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Blue",
      "offset": 10
    }
  ],
  "location": "WomenCategoryPageTest.iSelectFromColour(String)"
});
formatter.result({
  "duration": 55344900,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnAddToCartButton()"
});
formatter.result({
  "duration": 44189300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Product successfully added to your shopping cart\\n",
      "offset": 24
    }
  ],
  "location": "WomenCategoryPageTest.iSeeTheConfirmationMessage(String)"
});
formatter.result({
  "duration": 22003600,
  "status": "passed"
});
formatter.match({
  "location": "WomenCategoryPageTest.iClickOnCloseButtonOfConfirmationMessage()"
});
formatter.result({
  "duration": 7646685800,
  "status": "passed"
});
formatter.after({
  "duration": 590249100,
  "status": "passed"
});
});