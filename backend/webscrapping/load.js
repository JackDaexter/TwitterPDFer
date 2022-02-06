const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')
const TweetManager = require ('./Tweet/tweet_manager')
const fs = require('fs');
const { time } = require("console");


async function launch(link) {

    const browser = await puppeteer.launch({headless : false, defaultViewport:{width:800, height:1200}});
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
        await typeOfPrinting(page,array,2)
        
        await scraper.timeout(78000)
    }finally{
        await browser.close();
        console.log("END LIL NEEGAA");
    }

}


async function typeOfPrinting(page,array,type){
    // await page.evaluate((b,e) => {
    //     window.scrollTo(b, e);
    // },0,2500)
    const elements = array.map(x => x.tweet)
    if(type === 1){
        await page.pdf({ 
            path: 'thread.pdf'
        }) 
    }else{
        fs.writeFile("./test.txt",array.join("\n\n"), err => {
            if(err){
                console.log(err);
                return
            }
        }) 
    }

    
}


module.exports = {launch}
