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
formatter.before({
  "duration": 4180267902,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is in guru bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 7
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user navigates to Edit customer page",
  "keyword": "And "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page()"
});
formatter.result({
  "duration": 21397937122,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 10412399242,
  "error_message": "java.lang.NullPointerException\r\n\tat TestPack.CucumberGuru.GuruBank.the_user_is_logged_in_with_manager_credentials(GuruBank.java:26)\r\n\tat ✽.And The user is logged in with manager credentials(EditCustomer.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Edit_customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 30,
  "name": "To verify reset button",
  "description": "",
  "id": "to-test-edit-customer-functionality;to-verify-reset-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 29,
      "name": "@reset"
    }
  ]
});
formatter.step({
  "line": 31,
  "name": "The user resets after entering customer id",
  "rows": [
    {
      "cells": [
        "878"
      ],
      "line": 32
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 33,
  "name": "The user should see customer id field cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_resets_after_entering_customer_id(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_customer_id_field_cleared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 544563282,
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
formatter.before({
  "duration": 3272986019,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "The user is in guru bank home page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "The user is logged in with manager credentials",
  "rows": [
    {
      "cells": [
        "mngrid",
        "mngrpwd"
      ],
      "line": 7
    },
    {
      "cells": [
        "mngr154570",
        "jygarat"
      ],
      "line": 8
    }
  ],
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "The user navigates to Add Customer page",
  "keyword": "And "
});
formatter.match({
  "location": "GuruBank.the_user_is_in_guru_bank_home_page()"
});
formatter.result({
  "duration": 21179012066,
  "status": "passed"
});
formatter.match({
  "location": "GuruBank.the_user_is_logged_in_with_manager_credentials(DataTable)"
});
formatter.result({
  "duration": 10080698194,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"name\",\"selector\":\"uid\"}\n  (Session info: chrome\u003d69.0.3497.100)\n  (Driver info: chromedriver\u003d2.41.578737 (49da6702b16031c40d63e5618de03a32ff6c197e),platform\u003dWindows NT 10.0.17134 x86_64) (WARNING: The server did not provide any stacktrace information)\nCommand duration or timeout: 0 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.14.0\u0027, revision: \u0027aacccce0\u0027, time: \u00272018-08-02T20:19:58.91Z\u0027\nSystem info: host: \u0027LAPTOP-VSVVV203\u0027, ip: \u0027192.168.1.55\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002710.0.2\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, acceptSslCerts: false, applicationCacheEnabled: false, browserConnectionEnabled: false, browserName: chrome, chrome: {chromedriverVersion: 2.41.578737 (49da6702b16031..., userDataDir: C:\\Users\\CHANDR~1\\AppData\\L...}, cssSelectorsEnabled: true, databaseEnabled: false, goog:chromeOptions: {debuggerAddress: localhost:57569}, handlesAlerts: true, hasTouchScreen: false, javascriptEnabled: true, locationContextEnabled: true, mobileEmulationEnabled: false, nativeEvents: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: XP, platformName: XP, rotatable: false, setWindowRect: true, takesHeapSnapshot: true, takesScreenshot: true, unexpectedAlertBehaviour: , unhandledPromptBehavior: , version: 69.0.3497.100, webStorageEnabled: true}\nSession ID: 0d2571efc9ae93c26643ae3d6a58994d\n*** Element info: {Using\u003dname, value\u003duid}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:488)\r\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:214)\r\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:166)\r\n\tat org.openqa.selenium.remote.http.JsonHttpResponseCodec.reconstructValue(JsonHttpResponseCodec.java:40)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:80)\r\n\tat org.openqa.selenium.remote.http.AbstractHttpResponseCodec.decode(AbstractHttpResponseCodec.java:44)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:548)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:322)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:400)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:314)\r\n\tat TestPack.CucumberGuru.GuruBank.the_user_is_logged_in_with_manager_credentials(GuruBank.java:26)\r\n\tat ✽.And The user is logged in with manager credentials(NewCustomer.feature:6)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "GuruBank.the_user_navigates_to_Add_Customer_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 45,
  "name": "To verify reset button",
  "description": "",
  "id": "to-test-add-new-customer-functionality;to-verify-reset-button",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 44,
      "name": "@reset"
    }
  ]
});
formatter.step({
  "line": 46,
  "name": "The user clicks reset button after entering all inputs",
  "rows": [
    {
      "cells": [
        "test"
      ],
      "line": 47
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 48,
  "name": "The user should see all fields cleared",
  "keyword": "Then "
});
formatter.match({
  "location": "GuruBank.the_user_clicks_reset_button_after_entering_all_inputs(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "GuruBank.the_user_should_see_all_fields_cleared()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 605569476,
  "status": "passed"
});
});