'use strict';

import Provider from '../provider.js';

class QQ extends Provider {

    constructor(options){
        if (!options.desc) {
            options.desc = options.title;
        }
        super(options);
    }

    getName(){
        return 'qq';
    }

    _getUrlTemplate(){
        return 'http://connect.qq.com/widget/shareqq/index.html?url={url}&title={title}&source={source}&desc={desc}&pics={image}';
    }
}

export default QQ;