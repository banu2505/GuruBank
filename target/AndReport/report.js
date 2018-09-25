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
  "line": 54,
  "name": "To verify edit customer",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-edit-customer",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@happypath"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 56
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 57,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 58
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 59
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 60,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.step({
  "line": 61,
  "name": "The user submits after entering valid customer id",
  "rows": [
    {
      "cells": [
        "6756"
      ],
      "line": 62
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 63,
  "name": "The user submits after making any modification",
  "rows": [
    {
      "cells": [
        "test"
      ],
      "line": 64
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 65,
  "name": "The user should see success message",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 11951974675,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2690402184,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1632961114,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_valid_customer_id(DataTable)"
});
formatter.result({
  "duration": 1634674201,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_making_any_modification(DataTable)"
});
formatter.result({
  "duration": 1980563624,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message()"
});
formatter.result({
  "duration": 37113602,
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
formatter.scenarioOutline({
  "line": 77,
  "name": "To add new customers with valid details",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 76,
      "name": "@happypath"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 79
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 81
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "The user enters \"\u003ccustname\u003e\",\"\u003cgender\u003e\",\"\u003cdob\u003e\",\"\u003caddress\u003e\",\"\u003ccity\u003e\",\"\u003cstate\u003e\",\"\u003cpin\u003e\",\"\u003cphno\u003e\",\"\u003cemail\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The user clicks submit button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "The user should see success message with customer id created",
  "keyword": "Then "
});
formatter.examples({
  "line": 88,
  "name": "",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;",
  "rows": [
    {
      "cells": [
        "custname",
        "gender",
        "dob",
        "address",
        "city",
        "state",
        "pin",
        "phno",
        "email",
        "password"
      ],
      "line": 89,
      "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;1"
    },
    {
      "cells": [
        "testuser",
        "male",
        "11/11/2000",
        "testaddress",
        "chennai",
        "tamilnadu",
        "600119",
        "9123456780",
        "testuserxyz@gmail.com",
        "jygarat"
      ],
      "line": 90,
      "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;2"
    },
    {
      "cells": [
        "testuser",
        "male",
        "11/11/2000",
        "testaddress",
        "chennai",
        "tamilnadu",
        "600119",
        "9123456780",
        "testuserabc@gmail.com",
        "jygarat"
      ],
      "line": 91,
      "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 90,
  "name": "To add new customers with valid details",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@addcustomer"
    },
    {
      "line": 76,
      "name": "@happypath"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 79
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 81
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "The user enters \"testuser\",\"male\",\"11/11/2000\",\"testaddress\",\"chennai\",\"tamilnadu\",\"600119\",\"9123456780\",\"testuserxyz@gmail.com\" and \"jygarat\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The user clicks submit button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "The user should see success message with customer id created",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 12271709039,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2351270712,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 2064778609,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 17
    },
    {
      "val": "male",
      "offset": 28
    },
    {
      "val": "11/11/2000",
      "offset": 35
    },
    {
      "val": "testaddress",
      "offset": 48
    },
    {
      "val": "chennai",
      "offset": 62
    },
    {
      "val": "tamilnadu",
      "offset": 72
    },
    {
      "val": "600119",
      "offset": 84
    },
    {
      "val": "9123456780",
      "offset": 93
    },
    {
      "val": "testuserxyz@gmail.com",
      "offset": 106
    },
    {
      "val": "jygarat",
      "offset": 134
    }
  ],
  "location": "GuruBank.the_user_enters_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 831027822,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_submit_button()"
});
formatter.result({
  "duration": 2036522687,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message_with_customer_id_created()"
});
formatter.result({
  "duration": 73231144,
  "status": "passed"
});
formatter.scenario({
  "line": 91,
  "name": "To add new customers with valid details",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@addcustomer"
    },
    {
      "line": 76,
      "name": "@happypath"
    },
    {
      "line": 2,
      "name": "@regression"
    }
  ]
});
formatter.step({
  "line": 78,
  "name": "The user is in guru bank home page",
  "rows": [
    {
      "cells": [
        "http://www.demo.guru99.com/v4/"
      ],
      "line": 79
    }
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 80,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 81
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 82
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 83,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.step({
  "line": 84,
  "name": "The user enters \"testuser\",\"male\",\"11/11/2000\",\"testaddress\",\"chennai\",\"tamilnadu\",\"600119\",\"9123456780\",\"testuserabc@gmail.com\" and \"jygarat\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9
  ],
  "keyword": "When "
});
formatter.step({
  "line": 85,
  "name": "The user clicks submit button",
  "keyword": "And "
});
formatter.step({
  "line": 86,
  "name": "The user should see success message with customer id created",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page(DataTable)"
});
formatter.result({
  "duration": 11172905443,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2442350504,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 1733881053,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testuser",
      "offset": 17
    },
    {
      "val": "male",
      "offset": 28
    },
    {
      "val": "11/11/2000",
      "offset": 35
    },
    {
      "val": "testaddress",
      "offset": 48
    },
    {
      "val": "chennai",
      "offset": 62
    },
    {
      "val": "tamilnadu",
      "offset": 72
    },
    {
      "val": "600119",
      "offset": 84
    },
    {
      "val": "9123456780",
      "offset": 93
    },
    {
      "val": "testuserabc@gmail.com",
      "offset": 106
    },
    {
      "val": "jygarat",
      "offset": 134
    }
  ],
  "location": "GuruBank.the_user_enters_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 840249113,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_submit_button()"
});
formatter.result({
  "duration": 2305090250,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message_with_customer_id_created()"
});
formatter.result({
  "duration": 72228289,
  "status": "passed"
});
});