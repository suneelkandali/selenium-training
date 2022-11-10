import { Builder, By, Key } from "selenium-webdriver";
 
(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();
 
  const actions = driver.actions({ async: true });
  try {
    // Go to the page
    await driver.get("https://www.training-support.net/selenium/lazy-loading");
 
    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);
 
    // Scroll down by 1000px
    await driver.executeAsyncScript("window.scrollBy(0, 1000)");
  } finally {
    // await driver.quit();
  }
})();