package TestPack.CucumberGuru;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Base {
	public static WebDriver driver;
	@Before
	public void launchBrowser() {
		System.setProperty("webdriver.chrome.driver",
				"C:\\Users\\CHANDRASEKAR\\eclipse-workspace\\BP\\Selenium\\driver\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.manage().window().maximize();
	}
	
	@After
	public void quitBrowser() {
		driver.quit();
	}
	
	public static void goToPage(String pageName) {
		WebElement parentElement = driver.findElement(By.xpath("//ul[@class='menusubnav']"));
		List<WebElement> childData = parentElement.findElements(By.tagName("li"));
		for (WebElement x: childData) {
			if (x.getText().equals(pageName)) {
				x.click();
				break;
			}
		}
	}
	
}
