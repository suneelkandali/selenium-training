import { Builder, By, Key, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = await driver.actions({async:true});
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/javascript-alerts");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
    await actions.keyDown(Key.COMMAND).perform();
                      
    // Trigger the alert
    await driver.findElement(By.id("simple")).click();
    
    //Wait for the alert to show
    await driver.wait(until.alertIsPresent());

    //Get a reference to the alert
    const alert = await driver.switchTo().alert();
    
    //Hit ok button on the alert
    alert.accept();

    

  } finally {
    //await driver.quit();
  }
})();
 