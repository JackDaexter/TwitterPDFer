const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

class Scraper{
    
    constructor(link, selector,page){
        this.link = link;
        this.selector = selector;
        this.page = page;
    }


    timeout(ms) {
        return new Promise(r => setTimeout(r,ms));
    }

    
    async pullElements() { 
        
        await this.page.waitForSelector(this.selector);
        let x = await this.scrollDown(this.page,0,250)  
        console.log(x);
        const elements = await this.page.evaluate((selector) => {
            const elem = Array.from(document.querySelector(selector).children);
            const tweets = [];

            elem.map(x => tweets.push(x.innerText));
            
            return tweets;
        },this.selector)
        
        return elements;
    }


    async scrollDown(page,begin=0,end=150){

        
        let w = await page.evaluate((b,e) => {
            
            window.scrollTo(b, e);
            return {b,e};
        },begin,end)


        await this.timeout(500);

        return w;
    }
   

} 

module.exports = Scraper