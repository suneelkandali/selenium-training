import { Builder, WebDriver } from "selenium-webdriver";

(async function(): Promise<void>{
    //Create new instance of web driver
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    //Use get to go to web page
    await driver.get("https://training-support.net");
    //Close the browser
    await driver.quit();
})();