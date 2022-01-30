const selenium = require("selenium-webdriver");
const puppeteer = require('puppeteer');


async function launch(link) {

    const browser = await puppeteer.launch({headless : false});
    const page = await browser.newPage();
    await page.goto(link);
    
    var links = await page.$$("#react-root > div > div > div.css-1dbjc4n.r-18u37iz.r-13qz1uu.r-417010 > main > div > div > div > div.css-1dbjc4n.r-kemksi.r-1kqtdi0.r-1ljd8xs.r-13l2t4g.r-1phboty.r-1jgb5lz.r-11wrixw.r-61z16t.r-1ye8kvj.r-13qz1uu.r-184en5c")
    if(links){
        console.log(links);
        console.log("Je suis logs ! ");
    }else{
        console.log("Je suis pas logs !");
    }

    await browser.close();
    console.log("FINI");

    
    
}

module.exports = { launch}