'use strict';

import Provider from '../provider.js';

class Facebook extends Provider {
    getUrlTemplate(){
        return 'https://www.facebook.com/sharer.php?s=100&p[url]={url}&p[images][0]={img}&p[title]={title}&p[summary]={desc}';
    }
}