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
  "duration": 28975921638,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 12624071716,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "duration": 79116372833,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_entering_valid_customer_id(DataTable)"
});
formatter.result({
  "duration": 15459096614,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_submits_after_making_any_modification(DataTable)"
});
formatter.result({
  "duration": 53541579634,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message()"
});
formatter.result({
  "duration": 32832208,
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
        "jtestuser@gmail.com",
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
        "ktestuser@gmail.com",
        "jygarat"
      ],
      "line": 91,
      "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;3"
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
        "ltestuser@gmail.com",
        "jygarat"
      ],
      "line": 92,
      "id": "to-test-add-new-customer-functionality;to-add-new-customers-with-valid-details;;4"
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
  "name": "The user enters \"testuser\",\"male\",\"11/11/2000\",\"testaddress\",\"chennai\",\"tamilnadu\",\"600119\",\"9123456780\",\"jtestuser@gmail.com\" and \"jygarat\"",
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
  "duration": 41895673522,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 12642772187,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 4091486825,
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
      "val": "jtestuser@gmail.com",
      "offset": 106
    },
    {
      "val": "jygarat",
      "offset": 132
    }
  ],
  "location": "GuruBank.the_user_enters_and(String,String,String,String,String,String,String,String,String,String)"
});
formatter.result({
  "duration": 813728556,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_clicks_submit_button()"
});
formatter.result({
  "duration": 871250806,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_success_message_with_customer_id_created()"
});
formatter.result({
  "duration": 10956655,
  "error_message": "org.openqa.selenium.UnhandledAlertException: unexpected alert open: {Alert text : Email Address Already Exist !!}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds: null\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-VSVVV203\u0027, ip: \u0027192.168.1.55\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\CHANDR~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:51215}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 0e24433d82ee79ec73127780ea44cc57\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:172)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:605)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getCurrentUrl(RemoteWebDriver.java:286)\r\n\tat TestPack.CucumberGuru.GuruBank.the_user_should_see_success_message_with_customer_id_created(GuruBank.java:178)\r\n\tat ✽.Then The user should see success message with customer id created(NewCustomer.feature:86)\r\n",
  "status": "failed"
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
  "name": "The user enters \"testuser\",\"male\",\"11/11/2000\",\"testaddress\",\"chennai\",\"tamilnadu\",\"600119\",\"9123456780\",\"ktestuser@gmail.com\" and \"jygarat\"",
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
  "duration": 22834873487,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 6063685511,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "duration": 3657740644,
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
      "val": "ktestuser@gmail.com",
      "offset": 106
    },
    {
      "val": "jygarat",
      "offset": 132
    }
  ],
  "location": "GuruBank.the_user_enters_and(String,String,String,String,String,String,String,String,String,String)"
});
