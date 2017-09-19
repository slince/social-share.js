'use strict';

class Provider {
    constructor(options){
        this.options = options;
    }

    createUrl(){
        let url = this.getUrlTemplate();
        for (const i in this.options) {
            url = url.replace(`{${i}}`, this.options.i);
        }
        return url;
    }

    getUrlTemplate(){
        return null;
    }
}