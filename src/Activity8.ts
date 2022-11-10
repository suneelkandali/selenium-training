import { Builder, By, Key, until, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    const actions = await driver.actions({async:true});
    try {
        //Create new instance of web driver
        
        //Use get to go to web page
        await driver.get("https://training-support.net/selenium/dynamic-controls");
        //Close the browser
        let title: string  = await driver.getTitle();
        console.log("title is ..."+ title);
       
        //Get a reference to the checkbox
        const checkbox = await driver.findElement(By.xpath("//div[@id='dynamicCheckbox']/input"));
        const toggleCheckbox = await driver.findElement(By.id("toggleCheckbox"));
        await toggleCheckbox.click();
        await driver.wait(until.elementIsNotVisible(checkbox));
        await toggleCheckbox.click();
        await driver.wait(until.elementIsVisible(checkbox));
        await checkbox.click();

        
    } finally {
        await driver.quit();
    }
})();