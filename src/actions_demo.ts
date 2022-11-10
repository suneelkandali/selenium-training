import { Builder, By, Key, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    const actions = driver.actions({async:true});
    try {
        // Go to the page
        await driver.get("https://duckduckgo.com");
        console.log(`The title is : ${await driver.getTitle()}`);
        await actions
              .click(driver.findElement(By.name("q")))
              .sendKeys("hello ")
              .keyDown(Key.SHIFT)
              .sendKeys("hello")
              .keyUp(Key.SHIFT)
              .perform();
        
     
    } finally {
        //await driver.quit();
    }
})();