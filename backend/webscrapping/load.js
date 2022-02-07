const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')
const TweetManager = require ('./Tweet/tweet_manager')
const fs = require('fs');
const { time } = require("console");


async function launch(link) {

    const browser = await puppeteer.launch({headless : true, defaultViewport:{width:1200, height:1200}});
    const page = await browser.newPage();
    var tweetManager = new TweetManager()
    
    let selector_thread = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > div > div 
        `
    
    var scraper = new Scraper(link,selector_thread,page);

    let selector_cookie = `#layers > div > div:nth-child(2) > div > div > div`

    let selector_subscribe = `#layers > div > div:nth-child(1) > div > div > div`


    try{
        await page.goto(link,{waitUntil : 'networkidle0'});
        await tweetManager.removeElement(page, [selector_cookie,selector_subscribe])
 
        array = await tweetManager.getAllThread(scraper);
        await typeOfPrinting(page,2)
        
    }finally{
        await browser.close();
        console.log("END LIL NEEGAA");
    }

    var index = array.indexOf(null)
    
    array = array.slice(0,index)

    console.log(array);

}


async function typeOfPrinting(page,type){
    

    if(type === 1){
        await page.pdf({ 
            path: 'thread.pdf'
        }) 
    }
    
}


module.exports = {launch}
