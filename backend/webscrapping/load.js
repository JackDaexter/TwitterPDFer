const selenium = require("selenium-webdriver");
const {Builder, By, Key, until} = require("selenium-webdriver");

async function launch() {

    let driver = await new Builder().forBrowser('chrome').build();
    try{
        await driver.get('http://www.google.com/ncr');
    }finally{
        await driver.quit();
    }
}