'use strict';

import $ from 'jquery';

class Provider {
    constructor(options){
        this.options = $.extend({
            width: 575,
            height: 400
        }, options);
        this.element = {};
        // this.element = this._createDomNode();
    }

    // getName(){
    //     // return 'provider';
    // }
    //
    getElement(){
        return this.element;
    }

    // _createDomNode(){
    //     let html = `<a href="javascript:void(0)" class="social-share-button social-share-${this.getName()}"><i class="fa fa-${this.getName()}"></i> </a>`;
    //     const element = $(html);
    //     // this._bindEvents(element);
    //     return element;
    // }

    // _createUrl(){
    //     let urlTemplate = this._getUrlTemplate();
    //     return urlTemplate.replace(/\{\{(\w+)\}\}/g, function (matches) {
    //         const parameter = matches.slice(2, -2);
    //         if (typeof this.options[parameter] !== 'undefined') {
    //             return  this.options[parameter]
    //         }
    //         return ''
    //     })
    // }
    //
    // _getUrlTemplate(){
    //     return '';
    // }
    //
    //
    // _bindEvents(element) {
    //     element.on('click', () => {
    //         this._openWin(this._createUrl(), this.options.width, this.options.height);
    //     });
    // }
    //
    //
    // _openWin(url, width, height) {
    //     let win, left, top, opts;
    //     if (width && height) {
    //         left = (document.documentElement.clientWidth / 2 - width / 2);
    //         top = (document.documentElement.clientHeight - height) / 2;
    //         opts = 'status=1,resizable=yes' +
    //             ',width=' + width + ',height=' + height +
    //             ',top=' + top + ',left=' + left;
    //         win = window.open(url, '', opts);
    //     } else {
    //         win = window.open(url);
    //     }
    //     win.focus();
    //     return win;
    // }
}

export default Provider;