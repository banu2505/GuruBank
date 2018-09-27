#Author: Banupriya
@regression @editcustomer
Feature: To test Edit Customer functionality
Background:  
		Given The user is in guru bank home page
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Edit customer page

  @error
  Scenario: To verify error on entering characters
    When The user enters characters
      | abcd |
    Then The user should see error in Edit customer page

  @error
  Scenario: To verify error on entering special characters
    When The user enters special characters
      | %^ |
    Then The user should see error in Edit customer page

  @error
  Scenario: To verify error pop up on entering invalid customer id
    When The user submits after entering invalid customer id
      | 898 |
    Then The user should see error pop up in Edit customer page

  @reset
  Scenario: To verify reset button
    When The user resets after entering customer id
    |878|
    Then The user should see customer id field cleared

  @happypath
  Scenario: To verify edit customer
    When The user submits after entering valid customer id
    	|6756|
    And The user submits after making any modification
    	|test|
    Then The user should see success message

 