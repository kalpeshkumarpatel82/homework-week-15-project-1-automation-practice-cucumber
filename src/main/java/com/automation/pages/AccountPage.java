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

public class AccountPage extends Utility {
    private static final Logger log = LogManager.getLogger(AccountPage.class.getName());

    public AccountPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//a[@title='Log me out']")
    WebElement signOutButton;

    @CacheLookup
    @FindBy(xpath = "//h1[contains(text(),'My account')]")
    WebElement pageHeader;

    public String getSignOutButtonText() {
        return getTextFromElement(signOutButton);
    }

    public String getPageHeader() {
        log.info("Clicking on login link " + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setSignOutButton() {
        clickOnElement(signOutButton);
        log.info("Clicking on SignOut link " + signOutButton.toString());
    }

}
