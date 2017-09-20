'use strict';

import Provider from '../provider.js';

class Twitter extends Provider {

    getName(){
        return 'twitter';
    }

    _getUrlTemplate(){
        return 'https://twitter.com/intent/tweet?url={url}&text={title}&via={via}&hashtags={hashtags}';
    }
}

export default Twitter;