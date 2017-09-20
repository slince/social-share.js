'use strict';

//导入css样式文件
import '../scss/social-share.scss';
import $ from 'jquery';
import Baidu from  './providers/baidu.js';
import Weibo from  './providers/weibo.js';
import QQ from  './providers/qq.js';
import QZone from  './providers/qzone.js';
import Douban from  './providers/douban.js';

import Facebook from  './providers/facebook.js';
import Twitter from  './providers/twitter.js';

class SocialShare {

    constructor(element, options) {
        this.container = $(element);

        this.providerClassMap = {
            'baidu': Baidu,
            'weibo': Weibo,
            'qq': QQ,
            'qzone': QZone,
            'douban': Douban,
            'facebook': Facebook,
            'twitter': Twitter
        };

        this.options = $.extend({
            theme: false
        }, options);

        let className = 'social-share-button';
        if (this.options.theme) {
            className += ` social-share-button-${this.options.theme}`;
        }
        this.container.addClass(className);
        this._createProviders();
    }

    get(alias){
        return typeof this.providers[alias] === 'undefined' ? null :this.providers[alias];
    }

    _createProviders(){
        this.providers = {};
        for (const provider in this.options ) {
            if (typeof this.providerClassMap[provider] === 'undefined') {
                continue;
            }
            const instance =  this._createProvider(provider, this.options[provider]);
            this.providers[provider] = instance;
            this.container.append(instance.getElement());
        }
    }

    _createProvider(provider, options){
        if (!options.title) {
            options.title = document.title;
        }
        if (!options.url) {
            options.url = location.href;
        }
        if (!options.summary) {
            options.summary = options.title;
        }
        options.url = encodeURIComponent(options.url);
        const providerClass = this.providerClassMap[provider];
        return new providerClass(options);
    }
}

module.exports = SocialShare;
