'use strict';

import Provider from '../provider.js';

class Baidu extends Provider {

    constructor(options){
        if (!options.desc) {
            options.desc = options.title;
        }
        if (!options.comment) {
            options.comment = options.title;
        }
        super(options);
    }

    getName(){
        return 'tieba';
    }

    _getUrlTemplate(){
        return 'http://tieba.baidu.com/f/commit/share/openShareApi?url={url}&title={title}&desc={desc}&comment={comment}';
    }
}

export default Baidu;