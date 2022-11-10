import { Builder, By, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/selects");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
 
    // Select the second option using visible text
    await driver
      .findElement(
        By.xpath("//select[@id='single-select']/option[text()='Option 2']")
      )
      .click();
 
    // Select the 3rd option using index
    const options = await driver.findElements(
      By.xpath("//select[@id='single-select']/option")
    );
    await options[3].click();
 
    // Select the 4th option using value
    await driver
      .findElement(By.xpath("//select[@id='single-select']/option[@value='4']"))
      .click();
 
    // Print all the options to the console
    console.log("The options are:");
    for (const option of options) {
      console.log(await option.getText());
    }
  } finally {
    await driver.quit();
  }
})();
 