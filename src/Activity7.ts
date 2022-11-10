import { Builder, By, Key, until, WebDriver, WebElement } from "selenium-webdriver";
import { elementIsDisabled } from "selenium-webdriver/lib/until";

(async function(): Promise<void>{
    const driver: WebDriver  = await new Builder().forBrowser("firefox").build();
    const actions = await driver.actions({async:true});
    try {
        //Create new instance of web driver
        
        //Use get to go to web page
        await driver.get("https://training-support.net/selenium/drag-drop");
        //Close the browser
        let title: string  = await driver.getTitle();
        console.log("title is ..."+ title);
       
        //Get references to all the objects on the page.
        const ball = await driver.findElement(By.id("draggable"));
        const dropzone1 = await driver.findElement(By.id("droppable"));
        const dropzone2 = await driver.findElement(By.id("dropzone2"));

        //Move the ball into Dropzone1
        await actions.dragAndDrop(ball, dropzone1).perform();

        //verify if Dropzone1 was activated

        await driver.wait(until.elementTextIs(await driver.findElement(By.css("p")), "Dropped"));
        if((await dropzone1.findElement(By.css("p")).getText()) === "Dropped!") {
            console.log("Dropzone1 was activated!");
        }

        //Move the ball into Dropzone1
        await actions.dragAndDrop(ball, dropzone2).perform();

        //verify if Dropzone1 was activated

        await driver.wait(until.elementTextIs(await driver.findElement(By.css("p")), "Dropped"));
        if((await dropzone2.findElement(By.css("p")).getText()) === "Dropped!") {
            console.log("Dropzone2 was activated!");
        }
      
    } finally {
        await driver.quit();
    }
})();