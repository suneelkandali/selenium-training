import { Builder, By, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/ajax");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
 
    // Find and click the button
    await driver.findElement(By.className("violet")).click();
 
    // Wait for the initial text to load
    await driver.wait(
      until.elementLocated(By.xpath("//div[@id='ajax-content']/h3"))
    );
    await driver.wait(
      until.elementTextContains(
        await driver.findElement(By.xpath("//div[@id='ajax-content']/h3")),
        "This text is loaded using AJAX"
      )
    );
 
    // Print the text out
    console.log(
      `The initial text says: ${await driver
        .findElement(By.xpath("//div[@id='ajax-content']/h3"))
        .getText()}`
    );
 
    // Wait for the previous h3 to become stale
    await driver.wait(
      until.stalenessOf(
        driver.findElement(By.xpath("//div[@id='ajax-content']/h3"))
      )
    );
 
    // Wait for the late text to load
    await driver.wait(
      until.elementTextContains(
        await driver.findElement(By.xpath("//div[@id='ajax-content']/h3")),
        "I'm late!"
      )
    );
 
    // Print the text out
    console.log(
      `The late text says: ${await driver
        .findElement(By.xpath("//div[@id='ajax-content']/h3"))
        .getText()}`
    );
  } finally {
    // await driver.quit();
  }
})();
 