import { Builder, By, until } from "selenium-webdriver";

(async function (): Promise<void> {
  const driver = await new Builder().forBrowser("firefox").build();

  try {
    // Go to the page
    await driver.get("https://training-support.net/selenium/tables");

    // Print the title of the page
    console.log(`The title is: ${await driver.getTitle()}`);

    // Get the columns
    const cols = await driver.findElements(
      By.xpath("//table[contains(@class, 'striped')]/tbody/tr[1]/td")
    );

    // Get the rows
    const rows = await driver.findElements(
      By.xpath("//table[contains(@class, 'striped')]/tbody/tr")
    );

    // Print the dimensions of the table
    console.log(
      `The dimension of this table are: ${cols.length} x ${rows.length}`
    );

    // Get the third row
    const thirdRow = await driver.findElements(
      By.xpath("//table[contains(@class, 'striped')]/tbody/tr[3]/td")
    );

    // Print out the elements of the third row
    console.log("The elements of the third row are: ");
    for (const cell of thirdRow) {
      console.log(await cell.getText());
    }

    // Print out the text at (2,2)
    const cell2_2 = await driver.findElement(
      By.xpath("//table[contains(@class, 'striped')]/tbody/tr[2]/td[2]")
    );
    console.log(`The text at (2,2) is: ${await cell2_2.getText()}`);
  } finally {
    // await driver.quit();
  }
})();
