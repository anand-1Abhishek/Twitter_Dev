import  express  from 'express';
import { connect } from './config/database';
const app= express();


import service from './config/database.js'

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
    // const tweets= await Tweet.find({
    //     content: ["First tweet","my tweet","1234"]
    // });
    // console.log(tweets);
    // let repo = new HashtagRepository();
    // await repo.bulkCreate([
        //     {
            //         title: 'Trend',
            //         tweets: []
            //     },{
                //         title: 'Excited',
                //         tweets: []
                //     },{
                    //         title: 'Python',
                    //         tweets: []
                    //     },{
                        //         title: 'TFun',
                        //         tweets: []
                        //     },{
                            //         title: 'Career',
                            //         tweets: []
                            //     }
                            // ]);
    // let repo = new HashtagRepository();
    // const response = await repo.findByName(['Excited','Trend']);
    // console.log(response);

});