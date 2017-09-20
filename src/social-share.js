'use strict';

import $ from 'jquery';
import Facebook from  './providers/facebook.js';

class SocialShare {

    constructor(element, options) {
        this.container = element;
        this.options = $.extend({
        }, options);
        this.providerClassMap = {
            'facebook': Facebook
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

export default SocialShare;
