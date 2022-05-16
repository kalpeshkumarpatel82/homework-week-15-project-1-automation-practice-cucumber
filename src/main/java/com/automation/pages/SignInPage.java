package com.automation.pages;
/* 
 Created by Kalpesh Patel
 */

import com.automation.utility.Utility;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class SignInPage extends Utility {
    private static final Logger log = LogManager.getLogger(SignInPage.class.getName());

    public SignInPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//input[@id='email']")
    WebElement emailAddress;

    @CacheLookup
    @FindBy(xpath = "//input[@id='email_create']")
    WebElement emailAddressToCreateAnAccount;

    @CacheLookup
    @FindBy(xpath = "//input[@id='passwd']")
    WebElement password;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitLogin']")
    WebElement signInButton;

    @CacheLookup
    @FindBy(xpath = "//button[@id='SubmitCreate']")
    WebElement createAccount;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'Authentication')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//h3[contains(text(),'Create an account')]")
    WebElement createAccountHeader;

    @CacheLookup
    @FindBy(xpath = "//div[@class='alert alert-danger']//li")
    WebElement errorMessage;

    public void setEmailAddress(String text) {
        sendTextToElement(emailAddress, text);
    }

    public void setEmailAddressToCreateAnAccount(String text) {
        int a = (int) (Math.random() * 10000);
        sendTextToElement(emailAddressToCreateAnAccount, text + a + "@nodomain.com");
    }

    public void setPassword(String text) {
        sendTextToElement(password, text);
        log.info("Sending Password " + text + " to " + password.toString());
    }

    public void setSignInButton() {
        clickOnElement(signInButton);
        log.info("Clicking on Sign IN " + signInButton.toString());
    }

    public String getSignInButton() {
        log.info("Getting text of Sign IN " + signInButton.toString());
        return getTextFromElement(signInButton);
    }

    public void setCreateAccount() {
        clickOnElement(createAccount);
        log.info("Clicking on Create Account" + createAccount.toString());
    }

    public String getPageHeader() {
        log.info("Getting Page Header" + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public String getCreateAccountHeader() {
        log.info("Getting Create Account Header" + createAccountHeader.toString());
        return getTextFromElement(createAccountHeader);
    }

    public String getErrorMessage() {
        log.info("Getting Error Message" + errorMessage.toString());
        return getTextFromElement(errorMessage);
    }

}
