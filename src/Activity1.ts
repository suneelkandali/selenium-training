import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    //Create new instance of web driver
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    //Use get to go to web page
    await driver.get("https://training-support.net");
    //Close the browser
    let title: string  = await driver.getTitle();
    console.log("title is ..."+ title);
    let element: WebElement = await driver.findElement(By.id("about-link"));
    await element.click();
    await driver.quit();
})();