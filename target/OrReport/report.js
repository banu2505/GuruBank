$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("EditCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Banupriya"
    }
  ],
  "line": 3,
  "name": "To test Edit Customer functionality",
  "description": "",
  "id": "to-test-edit-customer-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@editcustomer"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To verify error on entering characters",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-error-on-entering-characters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 10
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user enters characters",
  "rows": [
    {
      "cells": [
        "abcd"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user should see error in Edit customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 13325588762,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3688394585,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1652288747,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_characters(DataTable)"
});
formatter.result({
  "duration": 70383426,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_in_Edit_customer_page()"
});
formatter.result({
  "duration": 34990463,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verify error on entering special characters",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-error-on-entering-special-characters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 22
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user enters special characters",
  "rows": [
    {
      "cells": [
        "%^"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user should see error in Edit customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 11614553269,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3041638537,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1634934731,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_special_characters(DataTable)"
});
formatter.result({
  "duration": 66210397,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_in_Edit_customer_page()"
});
formatter.result({
  "duration": 32937175,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "To verify error pop up on entering invalid customer id",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-error-pop-up-on-entering-invalid-customer-id",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 34
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user submits after entering invalid customer id",
  "rows": [
    {
      "cells": [
        "898"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user should see error pop up in Edit customer page",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 11995279856,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3108440982,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1818541585,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_invalid_customer_id(DataTable)"
});
formatter.result({
  "duration": 419618975,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_pop_up_in_Edit_customer_page()"
});
formatter.result({
  "duration": 10775794,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To verify reset button",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-reset-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@reset"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 44
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 46
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "The user resets after entering customer id",
  "rows": [
    {
      "cells": [
        "878"
      ],
      "line": 50
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 51,
  "name": "The user should see customer id field cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 12054806308,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2537630511,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1721906816,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_resets_after_entering_customer_id(DataTable)"
});
formatter.result({
  "duration": 125266384,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_customer_id_field_cleared()"
});
formatter.result({
  "duration": 15767797,
  "status": "passed"
});
formatter.uri("NewCustomer.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Banupriya"
    }
  ],
  "line": 3,
  "name": "To test add new customer functionality",
  "description": "",
  "id": "to-test-add-new-customer-functionality",
  "keyword": "Feature",
  "tags": [
    {
      "line": 2,
      "name": "@regression"
    },
    {
      "line": 2,
      "name": "@addcustomer"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "To verify error on entering numerical values",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-error-on-entering-numerical-values",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 8
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 10
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 11
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "The user enters numerical values in Customername, City and State fields",
  "rows": [
    {
      "cells": [
        "123"
      ],
      "line": 14
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 15,
  "name": "The user should see error for Customername, City and State fields",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 14953571466,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3117117423,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 2379688994,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_enters_numerical_values_in_Customername_City_and_State_fields(DataTable)"
});
formatter.result({
  "duration": 200417152,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_for_Customername_City_and_State_fields()"
});
formatter.result({
  "duration": 92150990,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To verify error on entering special characters",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-error-on-entering-special-characters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 20
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 22
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 23
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "The user enters special charaters in Customername, Address, City, State, PIN and Mobilenumber fields",
  "rows": [
    {
      "cells": [
        "%^"
      ],
      "line": 26
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 27,
  "name": "The user should see error for Customername, Address, City, State, PIN and Mobilenumber fields",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 18133312265,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3075352397,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 2056941909,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_enters_special_charaters_in_Customername_Address_City_State_PIN_and_Mobilenumber_fields(DataTable)"
});
formatter.result({
  "duration": 391116493,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_for_Customername_Address_City_State_PIN_and_Mobilenumber_fields()"
});
formatter.result({
  "duration": 191412592,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "To verify error on entering characters in numerical fields",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-error-on-entering-characters-in-numerical-fields",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 32
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 34
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 35
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "The user enters characters in PIN and Mobilenumber fields",
  "rows": [
    {
      "cells": [
        "abCD"
      ],
      "line": 38
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 39,
  "name": "The user should see error for PIN and Mobilenumber fields",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 18592270306,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3597235500,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 1855480367,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_enters_characters_in_PIN_and_Mobilenumber_fields(DataTable)"
});
formatter.result({
  "duration": 156376065,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_for_PIN_and_Mobilenumber_fields()"
});
formatter.result({
  "duration": 60391869,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "To verify error on leaving fields blank",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-error-on-leaving-fields-blank",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 41,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 43,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 44
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 45,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 46
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 47
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "The user clicks submit button by leaving all fields blank",
  "keyword": "When "
});
formatter.step({
  "line": 50,
  "name": "The user should see error",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 14172357573,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2942844003,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 2179339051,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_submit_button_by_leaving_all_fields_blank()"
});
formatter.result({
  "duration": 73170732,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error()"
});
formatter.result({
  "duration": 8625468,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "To verify error on entering invalid email",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-error-on-entering-invalid-email",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 52,
      "name": "@error"
    }
  ]
});
formatter.step({
  "line": 54,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 55
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 56,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 57
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 58
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 59,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "The user enters invalid email id",
  "rows": [
    {
      "cells": [
        "abcdef123"
      ],
      "line": 61
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 62,
  "name": "The user should see error for email field",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 11759292277,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2553313352,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 1954964364,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_enters_invalid_email_id(DataTable)"
});
formatter.result({
  "duration": 99811738,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_for_email_field()"
});
formatter.result({
  "duration": 33926816,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "To verify reset button",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-reset-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 64,
      "name": "@reset"
    }
  ]
});
formatter.step({
  "line": 66,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 67
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 68,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 69
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 70
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 71,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 72,
  "name": "The user clicks reset button after entering all inputs",
  "rows": [
    {
      "cells": [
        "test"
      ],
      "line": 73
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 74,
  "name": "The user should see all fields cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 19766296788,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2741500644,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 2539024541,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_reset_button_after_entering_all_inputs(DataTable)"
});
formatter.result({
  "duration": 560454170,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_all_fields_cleared()"
});
formatter.result({
  "duration": 16032481,
  "status": "passed"
});
});