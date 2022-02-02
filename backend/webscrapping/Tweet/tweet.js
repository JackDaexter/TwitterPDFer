class Tweet {
    constructor(){  
        this.name = ""
        this.author = ""
        this.tweet = ""
    }

    static treatTweet(tweet){
        var tweet = new Tweet()
        tweetSplit = tweet.split("\n");
        if(tweetSplit.length > 1){
            if(tweetSplit[1].includes("@")){
                tweet.name = tweetSplit[0];
                tweet.author = tweetSplit[1];
                tweetSplit.slice(0,2);
                tweet.tweet = tweetSplit.join("\n");

                return tweet;
            }
        }
        else{
            return null;
        }
    }

    static treatTweet(rawTweets){
        var tweets = []
        for(let elem of rawTweets){
            tweets.push(this.treatTweet(elem))
        }

        return tweets;
    }

    get name(){
        return this.name;
    }

    get author(){
        return this.author;
    }

    get tweet(){
        return this.tweet;
    }

    set name(value){
        this.name = value;
    }

    set author(author){
        this.author = author;
    }

    set tweet(tweet){
        return this.tweet = tweet;
    }

}

module.exports = Tweet