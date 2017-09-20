'use strict';

import Provider from '../provider.js';

class QZone extends Provider {
    getName(){
        return 'qzone';
    }

    _getUrlTemplate(){
        return 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={url}&title={{title}}&desc={{summary}}&summary={{summary}}&site={{source}}';
    }
}

export default QZone;