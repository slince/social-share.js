
import {Provider} from '../provider.js'

class QZone extends Provider {

    constructor(options){
        if (!options.desc) {
            options.desc = options.summary
        }
        super(options)
    }

    getName(){
        return 'qzone'
    }

    getUrlTemplate(){
        return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&desc={desc}&summary={summary}&site={site}'
    }
}

export default QZone
