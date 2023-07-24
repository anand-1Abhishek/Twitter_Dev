const express = require('express');
const connect =require('./config/database');
const app= express();


const TweetRepository = require('./repository/tweer-repository');
const Comment = require('./models/comment');

app.listen(3000, async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content: 'Second tweet',
        
    // });
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content:'Tweet with comment Schema'});
    // console.log(tweet);
    // const comment = await Comment.create({content:'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save()
    
    const tweet = await tweetRepo.get('64be22db8fefa78a1ca32c33');
    console.log(tweet);
});