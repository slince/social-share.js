'use strict';

import Provider from '../provider.js';

class Weibo extends Provider {

    getName(){
        return 'weibo';
    }

    _getUrlTemplate(){
        return 'http://service.weibo.com/share/share.php?url={url}&appkey={appKey}&title={title}&pic=&searchPic=true';
    }
}

export default Weibo;