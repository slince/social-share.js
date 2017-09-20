'use strict';

import Provider from '../provider.js';

class Douban extends Provider {

    getName(){
        return 'douban';
    }

    _getUrlTemplate(){
        return 'https://www.douban.com/share/service?name={title}&href={url}&image={image}&url={url}&title={title}';
    }
}

export default Douban;