const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')
const TweetManager = require ('./Tweet/tweet_manager')


async function launch(link) {

    const browser = await puppeteer.launch({headless : true});
    const page = await browser.newPage();
    
    let selector = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > div > div 
        `
    var scraper = new Scraper(link,selector,page);
    var tweetManager = new TweetManager()

    try{
        await page.goto(link);
        array = tweetManager.getAllThread(scraper)
        await typeOfPrinting(page,1)

    }finally{
        await browser.close();
    }

}


async function typeOfPrinting(page,type){

    
    
    if(type === 1){
        await page.pdf({ path: 'thread.pdf', format:'a4'})
    }
}



module.exports = {launch}
