import { Builder, By, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    try {
        //Create new instance of web driver
        
        //Use get to go to web page
        await driver.get("https://training-support.net/selenium/target-practice");
        //Close the browser
        let title: string  = await driver.getTitle();
        console.log("title is ..."+ title);

        //Get third header and print its text
        console.log(await driver.findElement(By.xpath("//h3")).getText());
        // Get the 5th header css value
        console.log(await driver.findElement(By.xpath("//h5")).getCssValue("color"));
        //Get the violet button and print classes
        console.log(await driver.findElement(By.css(".violet")).getAttribute("class"));
        // Get the grey button and print text
        console.log(await driver.findElement(By.css(".grey")).getText());
        
     
    } finally {
        await driver.quit();
    }
})();