import { Builder, By, Key, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = await driver.actions({async:true});
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/selects");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
    await actions.keyDown(Key.COMMAND).perform();
                      
    // Select the second option using visible text
    await driver
      .findElement(
        By.xpath("//select[@id='multi-select']/option[text()='Javascript']")
      )
      .click();
 
    // Select the 3rd option using index
    const options = await driver.findElements(
      By.xpath("//select[@id='multi-select']/option")
    );
    await options[4].click();
    await options[5].click();
    await options[6].click();
 
    // Select the 4th option using value
    await driver
      .findElement(By.xpath("//select[@id='multi-select']/option[@value='node']"))
      .click();
      await options[5].click();
      await actions.keyUp(Key.COMMAND).perform();
    
  } finally {
    //await driver.quit();
  }
})();
 