package TestPack.CucumberGuru;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)

@CucumberOptions(features = "src/test/java/TestPack/CucumberGuru/", dryRun = false, glue = {
		"TestPack.CucumberGuru" }, tags= {"@reset"}, plugin = {"html:target/Reports/"}, monochrome=true)

public class NewTestRunner {

}
