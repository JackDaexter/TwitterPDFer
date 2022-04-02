const Tweet = require("./tweet");
const Scraper = require("../Scrape/scraper")

class TweetManager {
    
    constructor(){}

    async getEntireThread(page, scraper){
        var i  = 0;
        var tweets = []
        tweets = tweets.concat(await scraper.pullElements());

        tweets = this.metamorphTweet(tweets);

        while(!this.verification(tweets)){
            tweets = tweets.concat(this.metamorphTweet(await scraper.pullElements()));
            i++;
        }
        
        return tweets;
    }
    
    verification(tweetArray){
        var author = ""
        if(tweetArray.length > 0 ){
            if(author.localeCompare("") === 1) {
                //console.log(tweetArray[1]);
                author = tweetArray[1].author()
            }
            else if(tweetArray.includes(null)){
                //clearNull(tweetArray)
                return true;
            }
            else{
                if(author != tweetArray[tweetArray.length - 1].author){
                    return false;
                }
            }
            return true;
        }
        return true;
    }

    metamorphTweet(rawTweetArray){

        rawTweetArray.forEach((e, i) => {
            if(e != null){
                rawTweetArray[i] = Tweet.treatTweet(e);
            }
        })

        return rawTweetArray;
    }
    
    async getNumberOfTweet(nbOfTweet){
        var nbOfTweetRetrieve = 0;
        
        while(nbOfTweetRetrieve != nbOfTweet){
            nbOfTweetRetrieve = await scraper.pullElements()
        }
    }

    async removeElement(page, selectors){
       
        for(let s of selectors){
            try{
                await page.waitForSelector(s, {visible:true, timeout : 4000})
                await page.evaluate(async(e) => {
                    document.querySelector(e).remove();
                },s)
            }catch(e){
            }
        }
    }

}


module.exports = TweetManager