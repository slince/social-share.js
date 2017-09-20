'use strict';

import Provider from '../provider.js';

class Twitter extends Provider {

    getName(){
        return 'twitter';
    }

    _getUrlTemplate(){
        return 'https://twitter.com/intent/tweet?text={title}&url={url}&via={origin}';
    }
}

export default Twitter;