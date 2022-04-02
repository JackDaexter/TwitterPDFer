const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper');
const WebElementXpath = require('./tweeterPageElement');
const TweetManager = require ('./Tweet/tweet_manager');
const Tweet = require("./Tweet/tweet");

async function launch(link,type) {

    const browser = await puppeteer.launch({headless : true, defaultViewport:{width:1200, height:1200}});
    const page = await browser.newPage();

    var scraper = new Scraper(link,WebElementXpath.selector_thread,page);
 
    try{
        var tweetManager = new TweetManager()

        await page.goto(link,{waitUntil : 'networkidle0'});
        await tweetManager.removeElement(page, [WebElementXpath.selector_cookie, WebElementXpath.selector_subscribe])
 
        array = await tweetManager.getEntireThread(page,scraper);
       
        threadForm = await typeOfPrinting(page,type,array)
        return threadForm;
    }finally{
        await browser.close();
    }

}


async function typeOfPrinting(page,type,array=[""]){

    if(type === 1){
        return await page.pdf() 
    }else{
        var index = array.indexOf(null);
        array = array.slice(0,index)
        return array
    }
    
}


module.exports = {launch}
