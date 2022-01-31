const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');

async function launch(link) {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    try{
        await page.goto(link);
        let selector = `
            #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
            main > div > div > div > div > div > section > 
            div > div 
        `
        setTimeout
        await pullElement(page,selector);
    
    }finally{
        await browser.close();
    }
}
function timeout(ms) {
    return new Promise(r => setTimeout(r,ms));
}

async function pullElement(page,selector) {
    await page.waitForSelector(selector);
    await timeout(10000);
    const elements = await page.evaluate((selector) => {
        //const elem = Array.from(document.querySelector("body > app-root > div.home > app-home > div > div > div").children);

        const elem = Array.from(document.querySelector(selector).children);
        
        return elem.map(x => x.innerText)
    },selector)
    
    for(const x of elements){
        console.log(x);
        console.log(" ------------------------------------------------------------------- ")
    }
    
    
    console.log("END");
}

module.exports = {launch}
 // http://localhost:4200/home

// var links = await page.waitForSelector(`
//             #react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > 
//             main > div > div > div > div > div > section > 
//             div > div > div:nth-child(1) > div > div > article
//         `)