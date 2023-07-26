import { TweetRepository, HashtagRepository } from '../repository/index.js'

class TweetService {
    constructor(){
        this.tweetRepository = new TweetRepository();
        this.HashtagRepository = new HashtagRepository();
    }

    async create(data){
        const content = data.content;
        const tags = connect.match(/#[a-zA-Z0-9_]+/g);
        tags = tags.map((tag)=>tag.substring(1));
        console.log(tags);
        const tweet = await this.tweetRepository.create(data);
        return tweet;
    }
}

export default TweetService;