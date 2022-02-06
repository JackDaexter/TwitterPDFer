const { scroll_pageToBottom } = require('puppeteer-autoscroll-down')

class Scraper{
    
    constructor(link, selector,page,scrollDownMax=0, scrollDownMin=0){
        this._link = link;
        this._selector = selector;
        this._page = page;
        this._scrollDownMin = 0;
        this._scrollDownMax = 0;
    }


    timeout(ms) {
        return new Promise(_ => setTimeout(_,ms));
    }

    
    async pullElements() { 

        await this._page.waitForSelector(this._selector, {
            visible:true
        });
        await this.timeout(800);

        if(this._scrollDownMax != 0){
            await this.scrollDown(this._page,this._scrollDownMin,this._scrollDownMax);  
        }
        
        //console.log("Avant _scrollDownMax : " + this._scrollDownMax + " | " + this._scrollDownMin);
        var elements =  await this._page.evaluate((_selector) => {

            const tweets = Array.from(document.querySelector(_selector).children).map(x => x.innerText);

            return tweets;            
        },this._selector)

        //console.log("Après _scrollDownMax : " + this._scrollDownMax + " | " + this._scrollDownMin);
        
        if(this.scrollDownMax === 0 ){
            elements.splice(1,1)
        }

        this.scrollManagement();        

        console.log("Length : " + elements.length);
        return elements;
    }

    async scrollDown(_page,begin,end){
        await _page.evaluate((b,e) => {
            window.scrollTo(b, e);
        },begin,end)

        await this.timeout(500);
    }

    scrollManagement(){
        var intermediary = this._scrollDownMax;

        if(this._scrollDownMax === 0){
            this._scrollDownMax = 6000;
        }
        else{
            this._scrollDownMax += 1200;
        }
        if( intermediary !== 1200 ){
            this._scrollDownMin =  this._scrollDownMax - 1200;
        }
    }

    get scrollDownMax(){
        return this._scrollDownMax;
    }

    get scrollDownMin(){
        return this._scrollDownMin
    }

    get link(){
        return this._link;
    }

    get selector(){
        return this._selector;
    }
    
    set scrollDownMax(value){
        this._scrollDownMax = value;
    }

    set scrollDownMin(value){
        this._scrollDownMin = value;
    }

    set link(value){
        this._link = value;
    }
    
    set selector(value){
        this._selector = value;
    }

} 

module.exports = Scraper