import {Actions, Builder, WebDriver} from "selenium-webdriver";
import assert from "assert";

describe("Hello Selenium Test", function() {
    //Mocha has default 3 seconds timeout, for Selenium more time needed, hence have to write below
    this.timeout(20000);
    let driver: WebDriver;
    let actions: Actions;
    before(async function() {
        driver = await new Builder().forBrowser("firefox").build();
        actions = driver.actions({async:true});
    });
    it("should open the training support website", async function() {
        await driver.get("https://training-support.net");
        assert.equal(await driver.getTitle(), "Training Support");
    })
    after(async function() {
        await driver.quit();
    });
});