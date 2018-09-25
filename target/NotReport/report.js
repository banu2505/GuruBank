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
  "duration": 13238995014,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2663930712,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1950116975,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_characters(DataTable)"
});
formatter.result({
  "duration": 71168795,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_in_Edit_customer_page()"
});
formatter.result({
  "duration": 34435418,
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
  "duration": 13651096345,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2423352500,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 2114220619,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_special_characters(DataTable)"
});
formatter.result({
  "duration": 67595743,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_in_Edit_customer_page()"
});
formatter.result({
  "duration": 31920726,
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
  "duration": 11637008408,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2439345335,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1640293366,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_invalid_customer_id(DataTable)"
});
formatter.result({
  "duration": 465278375,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_error_pop_up_in_Edit_customer_page()"
});
formatter.result({
  "duration": 12954438,
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
  "duration": 13183324045,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 2611952489,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1671973950,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_resets_after_entering_customer_id(DataTable)"
});
formatter.result({
  "duration": 122891397,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_customer_id_field_cleared()"
});
formatter.result({
  "duration": 15668492,
  "status": "passed"
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
  "duration": 12303584078,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 4049448052,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 1945677374,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_valid_customer_id(DataTable)"
});
formatter.result({
  "duration": 1681993071,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_making_any_modification(DataTable)"
});
formatter.result({
  "duration": 2010477882,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message()"
});
formatter.result({
  "duration": 32002284,
  "status": "passed"
});
});