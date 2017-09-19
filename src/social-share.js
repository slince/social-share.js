'use strict';

import $ from 'jQuery';

class SocialShare {
    constructor: (element, options) => {
        this.container = element;
        options = $.extend({
            hello: 'world'
        }, options);
    }
}