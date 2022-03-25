import {GenericProvideConfig, ProvideConfig, Provider} from "../provider"

// @ts-ignore
import QRCode from "qrcode"

class Wechat extends Provider{

    private popover: JQuery<HTMLElement>;

    create(options: GenericProvideConfig) {
        options = Object.assign({
            width: 120,
            height: 120
        }, options)
        const element = super.create(options)
        this.popover = this.getElement().find('.social-share-wechat-popover')
        return element
    }

    getName() {
        return 'wechat';
    }

    resolveOptions(options: GenericProvideConfig, socialOptions: ProvideConfig): GenericProvideConfig {
        options = Object.assign({
            title: '微信扫码分享本文',
            summary: '微信里点“发现”，扫描二维码便可将本文分享至朋友圈'
        }, options)
        return super.resolveOptions(options, socialOptions)
    }

    bindEvents(element: JQuery<HTMLElement>) {
        super.bindEvents(element)
        $(document).on('click',(e)=>{
            const target = $(e.target)
            if (target.is(this.element)) {
                return
            }
            this.popover.hide(200)
        })
    }

    createElement(){
        const wrapper = super.createElement();
        const popover = $(`<div class="social-share-wechat-popover">
                <h3 class="social-share-wechat-popover-title">${this.options.title}</h3>
                <div class="social-share-wechat-popover-qrcode"></div>
                <div class="social-share-wechat-popover-footer">${this.options.summary}</div>
            </div>`)
        wrapper.append(popover)
        new QRCode(popover.find('.social-share-wechat-popover-qrcode')[0], {
            text: this.options.url,
            width: this.options.width,
            height: this.options.height
        });
        return wrapper
    }

    onClick() {
        this.popover.toggle(200)
    }
}

export default Wechat
