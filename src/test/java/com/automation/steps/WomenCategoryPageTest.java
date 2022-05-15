package com.automation.steps;
/* 
 Created by Kalpesh Patel
 */

import com.automation.pages.HomePage;
import com.automation.pages.ProductPage;
import com.automation.pages.WomenCategoryPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class WomenCategoryPageTest {
    @When("^I click on WOMEN tab$")
    public void iClickOnWOMENTab() {
        new HomePage().setTopMenuWomen();

    }

    @Then("^I see \"([^\"]*)\" text in page header$")
    public void iSeeTextInPageHeader(String pageHeader) {
        Assert.assertEquals("Failed to navigate to Women page!!", pageHeader, new WomenCategoryPage().getPageHeader());
    }

    @And("^I click on \"([^\"]*)\" from displayed products$")
    public void iClickOnFromDisplayedProducts(String product) {
        new WomenCategoryPage().selectProduct(product);
    }

    @And("^I enter \"([^\"]*)\" in Quantity field$")
    public void iEnterInQuantityField(String quantity) {
        new ProductPage().setQuantity();
        new ProductPage().setQuantity(quantity);
    }

    @And("^I select \"([^\"]*)\" from size drop down$")
    public void iSelectFromSizeDropDown(String size) {
        new ProductPage().setSize(size);
    }

    @And("^I select \"([^\"]*)\" from colour$")
    public void iSelectFromColour(String colour) {
        new ProductPage().setColour(colour);

    }

    @And("^I click on Add to cart button$")
    public void iClickOnAddToCartButton() {
        new ProductPage().setAddToCard();
    }

    @And("^I see the confirmation \"([^\"]*)\" message$")
    public void iSeeTheConfirmationMessage(String message) {
        try {
            Assert.assertEquals("Failed to add item in cart", message, new ProductPage().getConfirmMessage());
        } catch (Exception e) {
            // do nothing
        }
    }

    @Then("^I click on close button of confirmation message$")
    public void iClickOnCloseButtonOfConfirmationMessage() {
        new ProductPage().setCloseConfirmMessage();
    }
}
