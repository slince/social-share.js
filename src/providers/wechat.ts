import {Provider} from "../provider"

// @ts-ignore
import QRCode from "qrcode"

class Wechat extends Provider{

    constructor(options) {
        options = Object.assign({
            width: 120,
            height: 120
        }, options)
        super(options)
    }

    onClick() {
        new QRCode(this.getElement()[0], {
            text: this.options.url,
            width: this.options.width,
            height: this.options.height
        });
    }
}

export default Wechat
