import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    try {
        //Create new instance of web driver
        
        //Use get to go to web page
        await driver.get("https://training-support.net/selenium/login-form");
        //Close the browser
        let title: string  = await driver.getTitle();
        console.log("title is ..."+ title);
        let username: WebElement = await driver.findElement(By.id("username"));
        await username.sendKeys("admin");
        
        let password: WebElement = await driver.findElement(By.id("password"));
        await password.sendKeys("password");
        let submitBtn: WebElement = await driver.findElement(By.css("#dynamic-attributes-form > div > button"));
        await submitBtn.click();
    } finally {
        await driver.quit();
    }
})();