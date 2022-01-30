const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');


async function launch(link) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
        await page.goto(link);
        var links = await page.waitForSelector(`
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > 
            div > div > div:nth-child(1) > div > div > article
        `)

        if(links){
            
        }else{
            console.log("Je suis pas logs !");
        }
    
    }finally{
        await browser.close();
        console.log("FINI !");
    }
}

module.exports = { launch}