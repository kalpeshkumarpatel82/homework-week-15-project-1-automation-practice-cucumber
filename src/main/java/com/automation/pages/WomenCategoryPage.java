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

public class WomenCategoryPage extends Utility {
    private static final Logger log = LogManager.getLogger(WomenCategoryPage.class.getName());

    public WomenCategoryPage() {
        PageFactory.initElements(driver, this);
    }

    @CacheLookup
    @FindBy(xpath = "//h2[contains(text(),'Women')]")
    WebElement pageHeader;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[1]/span[1]")
    WebElement topsLink;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[1]/div[1]/div[1]/ul[1]/li[2]/a[1]")
    WebElement dressesLink;

    @CacheLookup
    @FindBy(xpath = "//select[@id='selectProductSort']")
    WebElement sortBy;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/div[3]/div[1]/ul[1]/li[3]/a[1]/i[1]")
    WebElement listView;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[2]/div[1]/div[2]/h5[1]/a[1]")
    WebElement blouseDress;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[3]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedDress;

    @CacheLookup
    @FindBy(xpath = "//a[contains(text(),'Printed Chiffon Dress')]")
    WebElement printedChiffonDress;

    @CacheLookup
    @FindBy(xpath = "//body/div[@id='page']/div[2]/div[1]/div[3]/div[2]/ul[1]/li[5]/div[1]/div[2]/h5[1]/a[1]")
    WebElement printedSummerDress;


    public String getPageHeader() {
        log.info("Getting Page Header" + pageHeader.toString());
        return getTextFromElement(pageHeader);
    }

    public void setTopsLink() {
        clickOnElement(topsLink);
        log.info("Clicking on Tops " + topsLink.toString());
    }

    public void setDressesLink() {
        clickOnElement(dressesLink);
        log.info("Clicking on Dresses " + dressesLink.toString());
    }

    public void setSortBy(String text) {
        selectByValueFromDropDown(sortBy, text);
        log.info("Selecting sort by " + sortBy.toString());
    }

    public void setListView() {
        clickOnElement(listView);
        log.info("Clicking on List View " + listView.toString());
    }

    public void selectProduct(String text) {

        if (text.equalsIgnoreCase("Blouse")) {
            clickOnElement(blouseDress);
            log.info("Clicking on Blouse " + blouseDress.toString());
        }

        if (text.equalsIgnoreCase("Printed Dress")) {
            clickOnElement(printedDress);
            log.info("Clicking on Printed Dress " + printedDress.toString());
        }
        if (text.equalsIgnoreCase("Printed Chiffon Dress")) {
            clickOnElement(printedChiffonDress);
            log.info("Clicking on Printed Chiffon Dress " + printedChiffonDress.toString());
        }
        if (text.equalsIgnoreCase("Printed Summer Dress with Price $28.98")) {
            clickOnElement(printedSummerDress);
            log.info("Clicking on Printed Summer Dress with Price tag $28.98 " + printedSummerDress.toString());
        }
    }

}
