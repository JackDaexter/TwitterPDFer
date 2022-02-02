const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');
const Scraper = require('./Scrape/scraper')

async function launch(link) {

    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    
    let selector = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > 
            div > div 
        `
    var scraper = new Scraper(link,selector,page);
    var startTime = performance.now()

    try{
        await page.goto(link);
        allTweet = getAllThread(scraper);
        console.log(tweets.length);
    }finally{
        await browser.close();
        console.log("C'est close");
    }

    var endTime = performance.now()

    console.log(`Call to doSomething took ${endTime - startTime} milliseconds`)

}

async function getNumberOfTweet(nbOfTweet){
        var nbOfTweetRetrieve = 0;
        
        while(nbOfTweetRetrieve != nbOfTweet){
            nbOfTweetRetrieve = await scraper.pullElements()
        }
}

async function getAllThread(scraper){
    var tweets = [];
    while(verification(tweets)){
        tweets.concat(await scraper.pullElements());
    }
    return tweets;
}

async function verification(elem){
    return elem
}   


module.exports = {launch}
 // http://localhost:4200/home

// var links = await page.waitForSelector(`
//             #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
//             main > div > div > div > div > div > section > 
//             div > div > div:nth-child(1) > div > div > article
//         `)