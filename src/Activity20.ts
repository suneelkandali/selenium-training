import { Builder, By, Key, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
  const actions = await driver.actions({async:true});
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/javascript-alerts");
 
   await driver.findElement(By.id("prompt")).click();

   await driver.wait(until.alertIsPresent());

   const alert = await driver.switchTo().alert();
   await alert.sendKeys("awesome");

  } finally {
    //await driver.quit();
  }
})();
 