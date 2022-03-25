
import {Provider} from '../provider.js'

class Baidu extends Provider {

    constructor(options){
        if (!options.desc) {
            options.desc = options.summary
        }
        if (!options.comment) {
            options.comment = options.summary
        }
        super(options)
    }

    getName(){
        return 'tieba'
    }

    getUrlTemplate(){
        return 'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&desc={desc}&comment={comment}'
    }
}

export default Baidu
