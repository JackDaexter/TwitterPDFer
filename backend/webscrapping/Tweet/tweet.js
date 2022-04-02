class Tweet {
    constructor(){  
        this._name = ""
        this._author = ""
        this._tweet = ""
    }

    static treatTweet(rawTweet){

        var tweet = new Tweet()
        var tweetSplit = rawTweet.toString().split("\n");

        if(tweetSplit.length > 1){
            if(tweetSplit[1].includes("@")){
                tweet.name = tweetSplit[0];
                tweet.author = tweetSplit[1];
                tweetSplit.slice(0,2);
                tweet.tweet = tweetSplit.slice(2,tweetSplit.length).join("\n");

                return tweet;
            }
            else{
                return null;
            }
        }
        else{
            return null;
        }
    }

    static treatTweets(rawTweets){
        var tweets = []
        for(let elem of rawTweets){
            tweets.push(this.treatTweet(elem))
        }

        return tweets;
    }

    get name(){
        return this._name;
    }

    get author(){
        return this._author;
    }

    get tweet(){
        return this._tweet;
    }

    set name(value){
        this._name = value;
    }

    set author(author){
        this._author = author;
    }

    set tweet(tweet){
        this._tweet = tweet;
    }

    toString(){
        return this._name + "\n" + this._author + this._tweet + "\n";
    }

}

module.exports = Tweet