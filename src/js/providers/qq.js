'use strict';

import Provider from '../provider.js';

class QQ extends Provider {
    getName(){
        return 'qq';
    }

    _getUrlTemplate(){
        return 'http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&source={source}&desc={summary}&pics={image}';
    }
}

export default QQ;