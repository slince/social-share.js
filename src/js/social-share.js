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

        //provider映射
        this.providerClassMap = {
            'baidu': Baidu,
            'weibo': Weibo,
            'qq': QQ,
            'qzone': QZone,
            'douban': Douban,
            'facebook': Facebook,
            'twitter': Twitter
        };
        //处理公共的options
        this.options = this._resolveOptions(options);

        //处理容器节点的class
        this._resolveContainerClass();

        //创建providers
        this.providers = this._createProviders();

        //将provider的节点追加进入容器
        for (const provider in this.providers) {
            this.container.append(this.providers[provider].getElement())
        }
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
     * @return {Object}
     * @private
     */
    _createProviders(){
        const providers = {};
        for (const provider in this.options ) {
            if (
                typeof this.providerClassMap[provider] === 'undefined'
                || this.options[provider] === false
            ) {
                continue;
            }
            const options = this._mergeProviderOptions(this.options[provider]);
            providers[provider] = new this.providerClassMap[provider](options);
        }
        return providers;
    }

    /**
     * 处理公共options
     *
     * @param {Object} options
     * @return {Object}
     * @private
     */
    _resolveOptions(options){
        options = $.extend({
            theme: 'default',
            weibo: true,
            qq: true,
            qzone:true,
            baidu: true,
            douban: true,
            facebook: true,
            twitter: true
        }, options);

        if (typeof options.title === 'undefined') {
            options.title = document.title;
        }

        if (typeof options.url === 'undefined') {
            options.url = location.href;
        }

        if (typeof options.summary === 'undefined') {
            options.summary = options.title;
        }
        return options;
    }

    /**
     * 处理容器的class
     *
     * @private
     */
    _resolveContainerClass(){
        let className = 'social-share-button';
        if (this.options.theme) {
            className += ` social-share-button-${this.options.theme}`;
        }
        this.container.addClass(className);
    }

    /**
     * 合并provider的options
     *
     * @param {Object|Boolean} options
     * @returns {Object}
     * @private
     */
    _mergeProviderOptions(options){
        if (options === true) { //如果provider的配置为true，则使用默认参数
            options = {}
        }

        if (!options.title) {
            options.title = this.options.title;
        }
        if (!options.url) {
            options.url = this.options.url;
        }
        if (!options.image) {
            options.image = this.options.image;
        }
        if (!options.summary) {
            options.summary = this.options.summary;
        }
        options.url = encodeURIComponent(options.url);
        options.image = encodeURIComponent(options.image);
        return options;
    }
}

module.exports = SocialShare;
