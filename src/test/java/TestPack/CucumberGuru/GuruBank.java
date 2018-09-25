package TestPack.CucumberGuru;

import java.util.List;
import java.util.Map;

import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import junit.framework.Assert;
import cucumber.api.java.en.Then;

public class GuruBank {
	WebDriver driver;

	@Given("^The user is in guru bank home page$")
	public void the_user_is_in_guru_bank_home_page(DataTable text) throws Throwable {
		List<String> url = text.asList(String.class);
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\CHANDRASEKAR\\eclipse-workspace\\BP\\Selenium\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url.get(0));
		driver.manage().window().maximize();
	}

	@Given("^The user is logged in with manager credentials$")
	public void the_user_is_logged_in_with_manager_credentials(DataTable credentialsMaps) throws Throwable {
		List<Map<String, String>> credentials = credentialsMaps.asMaps(String.class, String.class);
		driver.findElement(By.name("uid")).sendKeys(credentials.get(0).get("mngrid"));
		driver.findElement(By.name("password")).sendKeys(credentials.get(0).get("mngrpwd"));
		driver.findElement(By.name("btnLogin")).click();
	}

	@Given("^The user navigates to Add Customer page$")
	public void the_user_navigates_to_Add_Customer_page() throws Throwable {
		driver.findElement(By.xpath("//a[text()='New Customer']")).click();
	}

	@When("^The user enters numerical values in Customername, City and State fields$")
	public void the_user_enters_numerical_values_in_Customername_City_and_State_fields(DataTable input)
			throws Throwable {
		List<String> inputNum = input.asList(String.class);
		WebElement txtCustName = driver.findElement(By.name("name"));
		txtCustName.sendKeys(inputNum.get(0));
		WebElement txtCity = driver.findElement(By.name("city"));
		txtCity.sendKeys(inputNum.get(0));
		WebElement txtState = driver.findElement(By.name("state"));
		txtState.sendKeys(inputNum.get(0));
	}

	@Then("^The user should see error for Customername, City and State fields$")
	public void the_user_should_see_error_for_Customername_City_and_State_fields() throws Throwable {
		Assert.assertEquals(driver.findElement(By.xpath("//label[@id='message']")).getText(),
				"Numbers are not allowed");
		Assert.assertEquals(driver.findElement(By.xpath("//label[@id='message4']")).getText(),
				"Numbers are not allowed");
		Assert.assertEquals(driver.findElement(By.xpath("//label[@id='message5']")).getText(),
				"Numbers are not allowed");

	}

	@When("^The user enters special charaters in Customername, Address, City, State, PIN and Mobilenumber fields$")
	public void the_user_enters_special_charaters_in_Customername_Address_City_State_PIN_and_Mobilenumber_fields(
			DataTable input) throws Throwable {
		List<String> inputSpl = input.asList(String.class);
		driver.findElement(By.name("name")).sendKeys(inputSpl.get(0));
		driver.findElement(By.name("addr")).sendKeys(inputSpl.get(0));
		driver.findElement(By.name("city")).sendKeys(inputSpl.get(0));
		driver.findElement(By.name("state")).sendKeys(inputSpl.get(0));
		driver.findElement(By.name("pinno")).sendKeys(inputSpl.get(0));
		driver.findElement(By.name("telephoneno")).sendKeys(inputSpl.get(0));

	}

	@Then("^The user should see error for Customername, Address, City, State, PIN and Mobilenumber fields$")
	public void the_user_should_see_error_for_Customername_Address_City_State_PIN_and_Mobilenumber_fields()
			throws Throwable {
		Assert.assertEquals(driver.findElement(By.id("message")).getText(), "Special characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message3")).getText(), "Special characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message4")).getText(), "Special characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message5")).getText(), "Special characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message6")).getText(), "Special characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message7")).getText(), "Special characters are not allowed");
	}

	@When("^The user enters characters in PIN and Mobilenumber fields$")
	public void the_user_enters_characters_in_PIN_and_Mobilenumber_fields(DataTable input) throws Throwable {
		List<String> inputChar = input.asList(String.class);
		driver.findElement(By.name("pinno")).sendKeys(inputChar.get(0));
		driver.findElement(By.name("telephoneno")).sendKeys(inputChar.get(0));
	}

	@Then("^The user should see error for PIN and Mobilenumber fields$")
	public void the_user_should_see_error_for_PIN_and_Mobilenumber_fields() throws Throwable {
		Assert.assertEquals(driver.findElement(By.id("message6")).getText(), "Characters are not allowed");
		Assert.assertEquals(driver.findElement(By.id("message7")).getText(), "Characters are not allowed");
	}

	@When("^The user clicks submit button by leaving all fields blank$")
	public void the_user_clicks_submit_button_by_leaving_all_fields_blank() throws Throwable {
		driver.findElement(By.name("sub")).click();
	}

	@Then("^The user should see error$")
	public void the_user_should_see_error() throws Throwable {
		Alert newAlert = driver.switchTo().alert();
		System.out.println(newAlert.getText());
		Assert.assertEquals(newAlert.getText(), "please fill all fields");
		newAlert.accept();

	}

	@When("^The user enters invalid email id$")
	public void the_user_enters_invalid_email_id(DataTable input) throws Throwable {
		List<String> inputEmail = input.asList(String.class);
		driver.findElement(By.name("emailid")).sendKeys(inputEmail.get(0));

	}

	@Then("^The user should see error for email field$")
	public void the_user_should_see_error_for_email_field() throws Throwable {
		Assert.assertEquals(driver.findElement(By.id("message9")).getText(), "Email-ID is not valid");
	}

	@When("^The user clicks reset button after entering all inputs$")
	public void the_user_clicks_reset_button_after_entering_all_inputs(DataTable input) throws Throwable {
		List<String> inputReset = input.asList(String.class);
		driver.findElement(By.name("name")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("addr")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("city")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("state")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("pinno")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("telephoneno")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("emailid")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("password")).sendKeys(inputReset.get(0));
		driver.findElement(By.name("res")).click();
	}

	@Then("^The user should see all fields cleared$")
	public void the_user_should_see_all_fields_cleared() throws Throwable {
		Assert.assertEquals(driver.findElement(By.name("name")).getAttribute("value"), "");

	}

	@When("^The user enters \"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\",\"([^\"]*)\" and \"([^\"]*)\"$")
	public void the_user_enters_and(String custname, String gender, String dob, String address, String city,
			String state, String pin, String phno, String email, String pass) throws Throwable {

		driver.findElement(By.name("name")).sendKeys(custname);
		if (gender.equals("male")) {
			driver.findElement(By.xpath("//input[@type='radio' and @value='m']")).click();
		} else if (gender.equals("female")) {
			driver.findElement(By.xpath("//input[@type='radio' and @value='f']")).click();
		}
		driver.findElement(By.name("dob")).sendKeys(dob);
		driver.findElement(By.name("addr")).sendKeys(address);
		driver.findElement(By.name("city")).sendKeys(city);
		driver.findElement(By.name("state")).sendKeys(state);
		driver.findElement(By.name("pinno")).sendKeys(pin);
		driver.findElement(By.name("telephoneno")).sendKeys(phno);
		driver.findElement(By.name("emailid")).sendKeys(email);
		driver.findElement(By.name("password")).sendKeys(pass);

	}

	@When("^The user clicks submit button$")
	public void the_user_clicks_submit_button() throws Throwable {
		driver.findElement(By.name("sub")).click();
	}

	@Then("^The user should see success message with customer id created$")
	public void the_user_should_see_success_message_with_customer_id_created() throws Throwable {
		Assert.assertTrue(driver.getCurrentUrl().contains("Customer"));
		Assert.assertTrue(
				driver.findElement(By.xpath("//p[contains(text(),'Registered')]")).getText().contains("Successfully"));
		List<WebElement> tRows = driver.findElements(By.tagName("tr"));
		String custID = tRows.get(4).getText();
		System.out.println(custID);

	}

	@Given("^The user navigates to Edit customer page$")
	public void the_user_navigates_to_Edit_customer_page() throws Throwable {
		driver.findElement(By.xpath("//a[text()='Edit Customer']")).click();

	}

	@When("^The user enters characters$")
	public void the_user_submits_after_entering_characters(DataTable input) throws Throwable {
		List<String> inputChar = input.asList(String.class);
		driver.findElement(By.name("cusid")).sendKeys(inputChar.get(0));
	}

	@Then("^The user should see error in Edit customer page$")
	public void the_user_should_see_error_in_Edit_customer_page() throws Throwable {
		Assert.assertTrue(driver.findElement(By.id("message14")).getText().contains("not allowed"));

	}

	@When("^The user enters special characters$")
	public void the_user_submits_after_entering_special_characters(DataTable input) throws Throwable {
		List<String> inputSplChar = input.asList(String.class);
		driver.findElement(By.name("cusid")).sendKeys(inputSplChar.get(0));
	}

	@When("^The user submits after entering invalid customer id$")
	public void the_user_submits_after_entering_invalid_customer_id(DataTable input) throws Throwable {
		List<String> inpInvalid = input.asList(String.class);
		driver.findElement(By.name("cusid")).sendKeys(inpInvalid.get(0));
		driver.findElement(By.name("AccSubmit")).click();
	
	}

	@Then("^The user should see error pop up in Edit customer page$")
	public void the_user_should_see_error_pop_up_in_Edit_customer_page() throws Throwable {
		Alert alert = driver.switchTo().alert();
		Assert.assertTrue(alert.getText().contains("not"));
		alert.accept();
	}

	@When("^The user resets after entering customer id$")
	public void the_user_resets_after_entering_customer_id(DataTable input) throws Throwable {
		List<String> inpInvalid = input.asList(String.class);
		driver.findElement(By.name("cusid")).sendKeys(inpInvalid.get(0));
		driver.findElement(By.name("res")).click();
	
	}

	@Then("^The user should see customer id field cleared$")
	public void the_user_should_see_customer_id_field_cleared() throws Throwable {
		Assert.assertEquals("", driver.findElement(By.name("cusid")).getAttribute("value"));
	
	}

	@When("^The user submits after entering valid customer id$")
	public void the_user_submits_after_entering_valid_customer_id(DataTable input) throws Throwable {
		List<String> inpValid = input.asList(String.class);
		driver.findElement(By.name("cusid")).sendKeys(inpValid.get(0));
		driver.findElement(By.name("AccSubmit")).click();
	
	}

	@When("^The user submits after making any modification$")
	public void the_user_submits_after_making_any_modification(DataTable input) throws Throwable {
		List<String> inpValid = input.asList(String.class);
		driver.findElement(By.name("addr")).sendKeys(inpValid.get(0));
		driver.findElement(By.name("sub")).click();
	
	
	}
	@Then("^The user should see success message$")
	public void the_user_should_see_success_message() throws Throwable {
		Assert.assertTrue(driver.findElement(By.xpath("//p[contains(text(),'updated')]")).getText().contains("updated"));
	
	}

}
