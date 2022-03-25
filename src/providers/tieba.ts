
import {GenericProvideConfig, Provider} from '../provider'

export interface TiebaConfig extends GenericProvideConfig{
    desc?: string
    comment?: string
}

class Tieba extends Provider {

    create(options: TiebaConfig){
        if (!options.desc) {
            options.desc = options.summary
        }
        if (!options.comment) {
            options.comment = options.summary
        }
        return super.create(options)
    }

    getName(){
        return 'tieba'
    }

    getUrlTemplate(){
        return 'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&desc={desc}&comment={comment}'
    }
}

export default Tieba
