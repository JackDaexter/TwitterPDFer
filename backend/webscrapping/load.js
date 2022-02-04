const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')
const TweetManager = require ('./Tweet/tweet_manager')


async function launch(link) {

    const browser = await puppeteer.launch({headless : false,defaultViewport: null});
    const page = await browser.newPage();
    var tweetManager = new TweetManager()
    
    let selector_thread = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > div > div 
        `
    
    var scraper = new Scraper(link,selector_thread,page);

    let selector_cookie = `#layers > div > div:nth-child(2) > div > div > div`

    let selector_subscribe = `#layers > div > div:nth-child(1) > div > div > div`

    await tweetManager.removeElement(page, [selector_cookie,selector_subscribe])

    try{
        await page.goto(link);
        array = tweetManager.getAllThread(scraper);
        await typeOfPrinting(page,1)

    }finally{
        await browser.close();
    }

}


async function typeOfPrinting(page,type){
    if(type === 1){
        await page.pdf({ path: 'thread.pdf', format:'A5', printBackgroung:false})
    }
}


module.exports = {launch}
