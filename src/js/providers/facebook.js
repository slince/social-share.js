'use strict';

import Provider from '../provider.js';

class Facebook extends Provider {
    constructor(options){
        if (!options.summary) {
            options.summary = options.title;
        }
        super(options);
    }
    getName(){
        return 'facebook';
    }

    _getUrlTemplate(){
        return 'https://www.facebook.com/sharer.php?s=100&p[url]={url}&p[images][0]={img}&p[title]={title}&p[summary]={summary}';
    }
}

export default Facebook;