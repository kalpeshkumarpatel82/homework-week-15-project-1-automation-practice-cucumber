@regression
Feature: Testing women category page

  Scenario: Verify User should navigate to women Category Page successfully
    Given I am on homepage
    When I click on WOMEN tab
    Then I see "WOMEN" text in page header

  Scenario Outline: Verify User should add Product to the Cart successfully
    Given I am on homepage
    When I click on WOMEN tab
    And I click on "<product>" from displayed products
    And I enter "<qty>" in Quantity field
    And I select "<size>" from size drop down
    And I select "<colour>" from colour
    And I click on Add to cart button
    And I see the confirmation "Product successfully added to your shopping cart\n" message
    Then I click on close button of confirmation message
    Examples:
      | product                                | qty | size | colour |
      | Blouse                                 | 2   | M    | White  |
      | Printed Dress                          | 3   | L    | Orange |
      | Printed Chiffon Dress                  | 4   | S    | Green  |
      | Printed Summer Dress with Price $28.98 | 2   | M    | Blue   |
