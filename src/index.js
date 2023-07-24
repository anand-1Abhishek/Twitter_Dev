const express = require('express');
const connect =require('./config/database');
const app= express();


const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
const Tweet = require('./models/tweet');

app.listen(3000, async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
        
    // });
    // const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content:'With hooks now'});
    //console.log(tweet);
    // console.log(tweet);
    // const comment = await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save()
    
    //const tweet = await tweetRepo.get('64be22db8fefa78a1ca32c33');
    //const tweet = await tweetRepo.getAll(0,4);
    //console.log(tweet[0].contentWithEmail);
    const tweets= await Tweet.find({
        content: ["First tweet","my tweet","1234"]
    });
    console.log(tweets);
});