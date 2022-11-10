import { Builder, By, Key, until, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    const actions = await driver.actions({async:true});
    try {
        //Create new instance of web driver
        
        //Use get to go to web page
        await driver.get("https://training-support.net/selenium/input-events");
        //Close the browser
        let title: string  = await driver.getTitle();
        console.log("title is ..."+ title);
       
        //Perform the actions

        await actions
                    .sendKeys("A")
                    .keyDown(Key.COMMAND)
                    .sendKeys("ac")
                    .keyUp(Key.COMMAND)
                    .perform();
    } finally {
        await driver.quit();
    }
})();