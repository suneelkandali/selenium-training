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
      By.xpath("//table[@id='sortableTable']/thead/tr/th")
    );
 
    // Get the rows
    const rows = await driver.findElements(
      By.xpath("//table[@id='sortableTable']/tbody/tr")
    );
 
    // Print the dimensions of the table
    console.log(
      `The dimension of this table are: ${cols.length} x ${rows.length}`
    );
 
    // Get the text at 2,2
    let cell2_2 = await driver.findElement(
      By.xpath("//table[@id='sortableTable']/tbody/tr[2]/td[2]")
    );
    console.log(`Before sorting, (2,2) is: ${await cell2_2.getText()}`);
 
    // Click the first header
    await driver
      .findElement(By.xpath("//table[@id='sortableTable']/thead/tr/th[1]"))
      .click();
 
    // Get the text at 2,2 again
    cell2_2 = await driver.findElement(
      By.xpath("//table[@id='sortableTable']/tbody/tr[2]/td[2]")
    );
    console.log(`After sorting, (2,2) is: ${await cell2_2.getText()}`);
 
    // Print the footer
    const footer = await driver.findElements(
      By.xpath("//table[@id='sortableTable']/tfoot/tr/th")
    );
    console.log("The footer contains:");
    for (const cell of footer) {
      console.log(await cell.getText());
    }
  } finally {
    await driver.quit();
  }
})();
 