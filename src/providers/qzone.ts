
import {GenericProvideConfig, Provider} from '../provider'

export interface QZoneConfig extends GenericProvideConfig{
    desc?: string
}

class QZone extends Provider {

    create(options: QZoneConfig){
        if (!options.desc) {
            options.desc = options.summary
        }
        return super.create(options)
    }

    getName(){
        return 'qzone'
    }

    getUrlTemplate(){
        return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={title}&desc={desc}&summary={summary}&site={site}'
    }
}

export default QZone
