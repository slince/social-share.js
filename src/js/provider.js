'use strict';

import $ from 'jquery';
import * as util from './util.js';

class Provider {

    /**
     * @param {Object} options
     */
    constructor(options){
        this.options = $.extend({
            width: 575,
            height: 400,
            iconClass: `social-share-icon social-share-icon-${this.getName()}`
        }, options);
        this.element = {};
        this.element = this._createDomNode();
    }

    /**
     * 获取provider的名称
     *
     * @returns {string}
     */
    getName(){
        return 'provider';
    }

    /**
     * 获取该provider控制的dom结构
     *
     * @returns {jQuery}
     */
    getElement(){
        return this.element;
    }

    /**
     * 创建dom结构
     *
     * @returns {jQuery}
     * @private
     */
    _createDomNode(){
        let html = `<a href="javascript:void(0)" class="${this.options.iconClass}"></a>`;
        const element = $(html);
        this._bindEvents(element);
        return element;
    }

    /**
     * 创建分享链接
     *
     * @returns {String}
     * @private
     */
    _createUrl(){
        let urlTemplate = this._getUrlTemplate();
        return urlTemplate.replace(/\{(\w+)\}/g, (matches) => {
            const parameter = matches.slice(1, -1);
            if (typeof this.options[parameter] !== 'undefined') {
                return this.options[parameter];
            }
            return '';
        });
    }

    /**
     * 获取分享链接模板
     *
     * @returns {string}
     * @private
     */
    _getUrlTemplate(){
        return '';
    }


    /**
     * 绑定事件
     *
     * @param element
     * @private
     */
    _bindEvents(element) {
        element.on('click', () => {
            const win = util.openWin(this._createUrl(), this.options.width, this.options.height);
            win.focus();
        });
    }
}

export default Provider;