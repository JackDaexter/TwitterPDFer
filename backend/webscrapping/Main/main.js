import {Tweet} from "../Tweet/tweet"
class Main {
    constructor(){}

    metamorphTweet(rawTweetArray){
       
        rawTweetArray.foreEach((e, i) => {
            if(e != null){
                tweetArray[i] = Tweet.treatTweet(e);
            }
        })
    }

    verification(tweetArray){

        if(tweetArray.length > 0 ){
            return tweetArray[tweetArray.length - 1]  
        }
        return false;
    }
}