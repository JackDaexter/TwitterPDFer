const {Tweet} = require("../Tweet/tweet");

class Main {
    constructor(){

    }

    async getAllThread(scraper){
        
        var tweets = [];
        while(verification(tweets)){
            
            tweets.concat(await scraper.pullElements());
            metamorphTweet(this.metamorphTweet);
            
            console.log(tweets)
        }
        return tweets;
    }
    
    verification(tweetArray){

        var author = ""

        if(tweetArray.length > 0 ){

            if(first_author.localeCompare("") === 1) {
                first_author = tweetArray[1].author()
            }
            else{
                var author = tweetArray[tweetArray.length - 1] ;
                if(author != first_author){
                    return false;
                }
            }
            return true;
            
        }
        return false;
    }

    metamorphTweet(rawTweetArray){
       
        rawTweetArray.forEach((e, i) => {
            if(e != null){
                tweetArray[i] = Tweet.treatTweet(e);
            }
        })
    }

    
    async getNumberOfTweet(nbOfTweet){
        var nbOfTweetRetrieve = 0;
        
        while(nbOfTweetRetrieve != nbOfTweet){
            nbOfTweetRetrieve = await scraper.pullElements()
        }
    }

}


module.exports = Main