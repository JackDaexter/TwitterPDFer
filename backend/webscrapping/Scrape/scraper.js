const { scrollPageToBottom } = require('puppeteer-autoscroll-down')

class Scraper{
    
    constructor(link, selector,page){
        this.link = link;
        this.selector = selector;
        this.page = page;
        this.scrollDownMin = 0;
        this.scrollDownMax = 0;
    }


    timeout(ms) {
        return new Promise(_ => setTimeout(_,ms));
    }

    
    async pullElements() { 
        
        await this.page.waitForSelector(this.selector);
        await this.timeout(500);

        if(this.scrollDownMax != 0){
            await this.scrollDown(this.page,this.scrollDownMin,this.scrollDownMax);  
        }
   
        const elements = await this.page.evaluate((selector) => {
            const elem = Array.from(document.querySelector(selector).children);
            const tweets = [];
            elem.map(x => tweets.push(x.innerText));
            
            var intermediary = this.scrollDownMax;
            this.scrollDownMax *= 2;
            if( intermediary != window.innerHeight ){
                this.scrollDownMin = intermediary;
            }
            
            return tweets;
        },this.selector)
        
        return elements;
    }

    async scrollDown(page,begin,end){
        await page.evaluate((b,e) => {
            window.scrollTo(b, e);
        },begin,end)

        await this.timeout(500);
    }

  
    

} 

module.exports = Scraper