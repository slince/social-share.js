import $ from 'jquery'
import {openWin} from './util'

export interface ProvideConfig{
    enabled: boolean
    title?: string
    url?: string
    image?: string
    summary?: string
}

export interface GenericProvideConfig extends ProvideConfig{
    width: number
    height: number
    iconClass: string
}

export class Provider {

    private readonly options: GenericProvideConfig
    private readonly element: JQuery<Element>

    constructor(options){
        this.options = Object.assign({
            width: 575,
            height: 400,
            iconClass: `social-share-icon social-share-icon-${this.getName()}`
        }, options)
        this.element = this.createDomNode()
    }

    /**
     * 获取provider的名称
     *
     * @returns {string}
     */
    getName(){
        return 'provider'
    }

    /**
     * 获取该provider控制的dom结构
     *
     * @returns {jQuery}
     */
    getElement(){
        return this.element
    }

    /**
     * 创建dom结构
     *
     * @returns {jQuery}
     * @private
     */
    createDomNode(){
        let html = `<a href="javascript:void(0)" class="${this.options.iconClass}"></a>`
        const element = $(html)
        this.bindEvents(element)
        return element
    }

    /**
     * 创建分享链接
     *
     * @returns {String}
     * @private
     */
    createUrl(){
        let urlTemplate = this.getUrlTemplate()
        return urlTemplate.replace(/\{(\w+)\}/g, (matches) => {
            const parameter = matches.slice(1, -1)
            if (typeof this.options[parameter] !== 'undefined') {
                return this.options[parameter]
            }
            return ''
        })
    }

    /**
     * 获取分享链接模板
     *
     * @returns {string}
     * @private
     */
    getUrlTemplate(){
        return ''
    }


    /**
     * 绑定事件
     *
     * @param element
     * @private
     */
    bindEvents(element) {
        element.on('click', () => {
            const win = openWin(this.createUrl(), this.options.width, this.options.height)
            win.focus()
        })
    }
}
