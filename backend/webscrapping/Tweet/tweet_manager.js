const Tweet = require("./tweet");

class TweetManager {
    
    constructor(){}

    async getAllThread(scraper){
                
        var tweets = []
        tweets = tweets.concat(await scraper.pullElements());

        this.metamorphTweet(tweets);

        while(!this.verification(tweets)){
            
            tweets = tweets.concat(this.metamorphTweet(await scraper.pullElements()));
        }
        
        //console.log(tweets);
        return newFormtweet;
    }
    
    verification(tweetArray){

        var author = ""

        if(tweetArray.length > 0 ){
            if(author.localeCompare("") === 1) {
                author = tweetArray[1].author()
            }
            else{
                if(author != tweetArray[tweetArray.length - 1]){
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
        console.log(" ---------------------- ");
        console.log(rawTweetArray.length);
        rawTweetArray = rawTweetArray.filter(n => n)
        console.log(rawTweetArray.length);

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