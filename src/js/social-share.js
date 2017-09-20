'use strict';

//导入css样式文件
import '../scss/social-share.scss';
import $ from 'jquery';

//导入Provider
import Baidu from  './providers/baidu.js';
import Weibo from  './providers/weibo.js';
import QQ from  './providers/qq.js';
import QZone from  './providers/qzone.js';
import Douban from  './providers/douban.js';

import Facebook from  './providers/facebook.js';
import Twitter from  './providers/twitter.js';

class SocialShare {

    /**
     * @param {String|DOMNode|jQuery}element
     * @param {Object} options
     */
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

    /**
     * 获取provider对象
     *
     * @param {String} alias
     * @returns {null}
     */
    getProvider(alias){
        return typeof this.providers[alias] === 'undefined' ? null :this.providers[alias];
    }

    /**
     * 创建providers
     *
     * @private
     */
    _createProviders(){
        this.providers = {};
        for (const provider in this.options ) {
            if (typeof this.providerClassMap[provider] === 'undefined') {
                continue;
            }
            const options = SocialShare._mergeOptions(this.options[provider]);
            const instance = new this.providerClassMap[provider](options);

            this.providers[provider] = instance;
            this.container.append(instance.getElement());
        }
    }

    /**
     * 合并provider的options
     *
     * @param {Object} options
     * @returns {Object}
     * @private
     */
    static _mergeOptions(options){
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
        return options;
    }
}

module.exports = SocialShare;
