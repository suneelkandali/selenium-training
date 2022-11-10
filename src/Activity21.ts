import { Builder, By, until } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/tab-opener");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
 
    // Print the current tab handle
    console.log(
      `The handle for this tab is: ${await driver.getWindowHandle()}`
    );
 
    // Print all the currently open tabs
    console.log(
      `The list of currently open tabs is: ${await driver.getAllWindowHandles()}`
    );
 
    // Click on the button to open a new tab
    await driver.findElement(By.id("launcher")).click();
 
    // Wait for the 2nd tab to open
    await driver.wait(
      async () => (await driver.getAllWindowHandles()).length === 2,
      5000
    );
 
    // Print all the open tabs
    console.log(
      `The list of currently open tabs is: ${await driver.getAllWindowHandles()}`
    );
 
    // Switch the running context to the new tab
    const handles = await driver.getAllWindowHandles();
    await driver.switchTo().window(handles[1]);
 
    // Wait for the tab's title to be "Newtab"
    await driver.wait(until.titleIs("Newtab"));
    console.log(`The title of the new tab is: ${await driver.getTitle()}`);
  } finally {
    await driver.quit();
  }
})();