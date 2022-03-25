
import {Provider} from '../provider'

class Twitter extends Provider {

    getName(){
        return 'twitter'
    }

    getUrlTemplate(){
        return 'https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}'
    }
}

export default Twitter
