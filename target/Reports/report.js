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
  "duration": 14606356733,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3480273263,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 2695193692,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_resets_after_entering_customer_id(DataTable)"
});
formatter.result({
  "duration": 134810884,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_customer_id_field_cleared()"
});
formatter.result({
  "duration": 25496935,
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
  "duration": 12680882981,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 3060670146,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 1681803902,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_reset_button_after_entering_all_inputs(DataTable)"
});
formatter.result({
  "duration": 607709606,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_all_fields_cleared()"
});
formatter.result({
  "duration": 17154653,
  "status": "passed"
});
});