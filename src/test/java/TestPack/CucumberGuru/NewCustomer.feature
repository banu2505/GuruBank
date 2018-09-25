#Author: Banupriya
@regression @addcustomer
Feature: To test add new customer functionality

  @error
  Scenario: To verify error on entering numerical values
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user enters numerical values in Customername, City and State fields
      | 123 |
    Then The user should see error for Customername, City and State fields

  @error
  Scenario: To verify error on entering special characters
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user enters special charaters in Customername, Address, City, State, PIN and Mobilenumber fields
      | %^ |
    Then The user should see error for Customername, Address, City, State, PIN and Mobilenumber fields

  @error
  Scenario: To verify error on entering characters in numerical fields
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user enters characters in PIN and Mobilenumber fields
      | abCD |
    Then The user should see error for PIN and Mobilenumber fields

  @error
  Scenario: To verify error on leaving fields blank
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user clicks submit button by leaving all fields blank
    Then The user should see error

  @error
  Scenario: To verify error on entering invalid email
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user enters invalid email id
      | abcdef123 |
    Then The user should see error for email field

  @reset
  Scenario: To verify reset button
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user clicks reset button after entering all inputs
      | test |
    Then The user should see all fields cleared

  @happypath
  Scenario Outline: To add new customers with valid details
    Given The user is in guru bank home page
      | http://www.demo.guru99.com/v4/ |
    And The user is logged in with manager credentials
      | mngrid     | mngrpwd |
      | mngr154570 | jygarat |
    And The user navigates to Add Customer page
    When The user enters "<custname>","<gender>","<dob>","<address>","<city>","<state>","<pin>","<phno>","<email>" and "<password>"
    And The user clicks submit button
    Then The user should see success message with customer id created

    Examples: 
      | custname | gender | dob        | address     | city    | state     | pin    | phno       | email                | password |
      | testuser | male   | 11/11/2000 | testaddress | chennai | tamilnadu | 600119 | 9123456780 | testuserxyz@gmail.com | jygarat  |
      | testuser | male   | 11/11/2000 | testaddress | chennai | tamilnadu | 600119 | 9123456780 | testuserabc@gmail.com | jygarat  |
