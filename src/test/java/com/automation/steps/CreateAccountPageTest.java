package com.automation.steps;
/* 
 Created by Kalpesh Patel
 */

import com.automation.pages.AccountPage;
import com.automation.pages.CreateAccountPage;
import com.automation.pages.SignInPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import org.junit.Assert;

public class CreateAccountPageTest {
    @And("^I enter \"([^\"]*)\" in email field on create account page$")
    public void iEnterInEmailFieldOnCreateAccountPage(String text) {
        new SignInPage().setEmailAddressToCreateAnAccount(text);
    }

    @And("^I click on Create an account button$")
    public void iClickOnCreateAnAccountButton() {
        new SignInPage().setCreateAccount();
    }

    @And("^I select Gender \"([^\"]*)\" radio button$")
    public void iSelectGenderRadioButton(String gender) {
        new CreateAccountPage().setGender();
    }

    @And("^I enter \"([^\"]*)\" in first name field in personal info$")
    public void iEnterInFirstNameField(String firstname) {
        new CreateAccountPage().setFirstNamePersonalInfo(firstname);
    }

    @And("^I enter \"([^\"]*)\" in last name field in personal info$")
    public void iEnterInLastNameField(String lastname) {
        new CreateAccountPage().setLastNamePersonalInfo(lastname);
    }

    @And("^I enter \"([^\"]*)\" in email field on registration page in personal info$")
    public void iEnterInEmailFieldOnRegistrationPage(String email) {
        //new CreateAccountPage().setEmailAddress(email);
    }

    @And("^I select \"([^\"]*)\" in day \"([^\"]*)\" in month and \"([^\"]*)\" in year from drop down menu$")
    public void iSelectInDayInMonthAndInYearFromDropDownMenu(String day, String month, String year) {
        new CreateAccountPage().setBirthDate(day, month, year);
    }

    @And("^I select signup for newsletter checkbox$")
    public void iSelectSignupForNewsletterCheckbox() {
        new CreateAccountPage().setNewsLetter();
    }

    @And("^I select receive special offers checkbox$")
    public void iSelectReceiveSpecialOffersCheckbox() {
        new CreateAccountPage().setReceiveOfferCheckBox();

    }

    @And("^I enter \"([^\"]*)\" in company field$")
    public void iEnterInCompanyField(String company) {
        new CreateAccountPage().setCompany(company);
    }

    @And("^I enter \"([^\"]*)\" and \"([^\"]*)\"$")
    public void iEnterAnd(String address1, String address2) {
        new CreateAccountPage().setAddress(address1, address2);
    }

    @And("^I select \"([^\"]*)\" from country drop down$")
    public void iSelectFromCountryDropDown(String country) {
        new CreateAccountPage().setCountry(country);
    }

    @And("^I select \"([^\"]*)\" from state drop down$")
    public void iSelectFromStateDropDown(String state) {
        new CreateAccountPage().setState(state);
    }

    @And("^I enter \"([^\"]*)\" in city field$")
    public void iEnterInCityField(String city) {
        new CreateAccountPage().setCity(city);
    }

    @And("^I enter \"([^\"]*)\" in additional info$")
    public void iEnterInAdditionalInfo(String info) {
        new CreateAccountPage().setAdditionalInfo(info);
    }

    @And("^I enter \"([^\"]*)\" in home phone$")
    public void iEnterInHomePhone(String homephone) {
        new CreateAccountPage().setHomePhone(homephone);
    }

    @And("^I enter \"([^\"]*)\" in mobile phone$")
    public void iEnterInMobilePhone(String mobilenumber) {
        new CreateAccountPage().setMobilePhone(mobilenumber);

    }

    @And("^I enter \"([^\"]*)\" in Alias field$")
    public void iEnterInAliasField(String alias) {
        new CreateAccountPage().setAlias(alias);

    }

    @And("^I click on register button$")
    public void iClickOnRegisterButton() {
        new CreateAccountPage().setRegisterButton();
    }

    @Then("^I see the \"([^\"]*)\" in page header$")
    public void iSeeTheInPageHeader(String message) {
        Assert.assertEquals("Failed to register", message, new AccountPage().getPageHeader());
    }

    @And("^I enter \"([^\"]*)\" in password field in personal info$")
    public void iEnterInPasswordFieldInPersonalInfo(String password) {
        new CreateAccountPage().setPassword(password);
    }


    @And("^I enter \"([^\"]*)\" in first name field in shipping address$")
    public void iEnterInFirstNameFieldInShippingAddress(String firstnameShipping) {
        new CreateAccountPage().setFirstName(firstnameShipping);
    }

    @And("^I enter \"([^\"]*)\" in last name field in shipping address$")
    public void iEnterInLastNameFieldInShippingAddress(String lastnameShipping) {
        new CreateAccountPage().setFirstName(lastnameShipping);
    }

    @And("^I enter \"([^\"]*)\" in post code$")
    public void iEnterInPostCode(String postcode) {
        new CreateAccountPage().setPostcode(postcode);

    }
}
