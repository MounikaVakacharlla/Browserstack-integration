const { Builder } = require("selenium-webdriver");
const assert = require("assert");

describe("Google Test", function () {
  this.timeout(30000);

  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  it("Verify Google title", async function () {
    await driver.get("https://www.google.com");
    const title = await driver.getTitle();
    assert.strictEqual(title.includes("Google"), true);
  });

  after(async function () {
    await driver.quit();
  });
});