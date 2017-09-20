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
        this.options = $.extend({

        }, options);
        this.providerClassMap = {
            'baidu': Baidu,
            'weibo': Weibo,
            'qq': QQ,
            'qzone': QZone,
            'douban': Douban,
            'facebook': Facebook,
        };
        this._createProviders();
    }

    get(alias){
        return typeof this.providers[alias] === 'undefined' ? null :this.providers[alias];
    }

    _createProviders(){
        this.providers = {};
        for (const provider in this.options ) {
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
        const providerClass = this.providerClassMap[provider];
        const instance = new providerClass(options);
        return instance;
    }
}

module.exports = SocialShare;
