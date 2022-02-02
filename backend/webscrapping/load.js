const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')
const Main = require ('./Main/main')


async function launch(link) {

    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    
    let selector = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > 
            div > div 
        `
    var scraper = new Scraper(link,selector,page);
    var main = new Main()
    var startTime = performance.now()

    try{
        await page.goto(link);
        main.getAllThread()

    }finally{
        await browser.close();
    }

}



module.exports = {launch}
