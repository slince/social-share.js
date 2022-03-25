
import {GenericProvideConfig, Provider} from '../provider'

export interface QQConfig extends GenericProvideConfig{
    desc?: string
}

class QQ extends Provider {

    create(options: QQConfig){
        if (!options.desc) {
            options.desc = options.summary
        }
        return super.create(options)
    }

    getName(){
        return 'qq'
    }

    getUrlTemplate(){
        return 'http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&source={source}&desc={desc}&pics={image}'
    }
}

export default QQ
