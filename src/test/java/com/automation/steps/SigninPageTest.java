package com.automation.steps;/*
 Created by Kalpesh Patel
 */

import com.automation.pages.AccountPage;
import com.automation.pages.HomePage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class SigninPageTest {
    @Given("^I am on homepage$")
    public void iAmOnHomepage() {
    }

    @When("^I click on Sign In link$")
    public void iClickOnSignInLink() {
        new HomePage().setSignInButton();
    }

    @Then("^I see \"([^\"]*)\" message on page header$")
    public void iSeeMessageOnPageHeader(String message) {
        Assert.assertEquals("Failed to navigate to Sign in Page", message, new SignInPage().getPageHeader());
    }

    @And("^I enter \"([^\"]*)\" in username field$")
    public void iEnterInUsernameField(String email) {
        new SignInPage().setEmailAddress(email);
    }

    @And("^I enter \"([^\"]*)\" in password field$")
    public void iEnterInPasswordField(String password) {
        new SignInPage().setPassword(password);
    }

    @And("^I click on Sign in Button$")
    public void iClickOnSignInButton() {
        new SignInPage().setSignInButton();
    }

    @Then("^I see \"([^\"]*)\" in warning$")
    public void iSeeInWarning(String message) {
        Assert.assertEquals("Failed to check the functionality of mandatory filed", message, new SignInPage().getErrorMessage());
    }


    @And("^I click on sign out link$")
    public void iClickOnSignOutLink() {
        new AccountPage().setSignOutButton();
    }

    @Then("^I see the \"([^\"]*)\" in sign out link$")
    public void iSeeTheInSignOutLink(String text) {
        Assert.assertEquals("Failed to login", text, new AccountPage().getSignOutButtonText());
    }

    @Then("^I see the \"([^\"]*)\" in sign in link$")
    public void iSeeTheInSignInLink(String text) {
        Assert.assertEquals("Failed to logout", text, new SignInPage().getSignInButton());
    }


}
