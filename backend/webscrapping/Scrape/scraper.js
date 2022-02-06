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

        await this.page.waitForSelector(this.selector, {
            visible:true
        });
        await this.timeout(800);

        if(this.scrollDownMax != 0){
            await this.scrollDown(this.page,this.scrollDownMin,this.scrollDownMax);  
        }
    
        var elements =  await this.page.evaluate((selector) => {

            const tweets = Array.from(document.querySelector(selector).children).map(x => x.innerText);
            
            var intermediary = this.scrollDownMax;

            if(this.scrollDownMax == 0){
                this.scrollDownMax = window.innerHeight;
            }
            else{
                this.scrollDownMax *= 2;
            }
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