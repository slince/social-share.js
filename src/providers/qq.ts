
import {Provider} from '../provider'

class QQ extends Provider {

    constructor(options){
        if (!options.desc) {
            options.desc = options.summary
        }
        super(options)
    }

    getName(){
        return 'qq'
    }

    getUrlTemplate(){
        return 'http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&source={source}&desc={desc}&pics={image}'
    }
}

export default QQ
