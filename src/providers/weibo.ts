
import {Provider} from '../provider'

class Weibo extends Provider {
    getName(){
        return 'weibo'
    }

    getUrlTemplate(){
        return 'http://service.weibo.com/share/share.php?url={url}&appkey={appKey}&title={title}&pic={image}&searchPic=true'
    }
}

export default Weibo
