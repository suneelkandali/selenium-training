import { Builder, By, until, WebDriver, WebElement } from "selenium-webdriver";
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
        //Find the cube
       const cube = await driver.findElement(By.id("wrapD3Cube"));
       //Left click
       await actions.click(cube).perform();
       await driver.sleep(1000);
       await driver.wait(until.elementLocated(By.className("active")));
       let cubeVal = await driver.findElement(By.className("active")).getText();
       console.log(`On Left Click: ${cubeVal}`);

       //Left click
       await actions.doubleClick(cube).perform();
       await driver.wait(until.elementLocated(By.className("active")));
       cubeVal = await driver.findElement(By.className("active")).getText();
       console.log(`On Double Click: ${cubeVal}`);

       //Right click
       await actions.contextClick(cube).perform();
       await driver.wait(until.elementLocated(By.className("active")));
       cubeVal = await driver.findElement(By.className("active")).getText();
       console.log(`On Right Click: ${cubeVal}`);

        
     
    } finally {
        await driver.quit();
    }
})();