'use strict';

import $ from 'jquery';
import * as util from './util.js';

class Provider {

    constructor(options){
        this.options = $.extend({
            width: 575,
            height: 400,
            iconClass: `social-share-icon social-share-icon-${this.getName()}`
        }, options);
        this.element = {};
        this.element = this._createDomNode();
    }

    getName(){
        return 'provider';
    }

    getElement(){
        return this.element;
    }

    _createDomNode(){
        let html = `<a href="javascript:void(0)" class="social-share-button social-share-${this.getName()}"><i class="${this.options.iconClass}"></i> </a>`;
        const element = $(html);
        this._bindEvents(element);
        return element;
    }

    _createUrl(){
        let urlTemplate = this._getUrlTemplate();
        return urlTemplate.replace(/\{\{(\w+)\}\}/g, function (matches) {
            const parameter = matches.slice(2, -2);
            if (typeof this.options[parameter] !== 'undefined') {
                return this.options[parameter]
            }
            return ''
        })
    }

    _getUrlTemplate(){
        return '';
    }


    _bindEvents(element) {
        element.on('click', () => {
            const win = util.openWin(this._createUrl(), this.options.width, this.options.height);
            win.focus();
        });
    }
}

export default Provider;