
import $ from 'jquery'
import {openWin} from './util'

export interface ProvideConfig{
    title?: string
    url?: string
    image?: string
    summary?: string
}

export interface GenericProvideConfig extends ProvideConfig{
    enabled?: boolean
    sort?: number,
    width?: number
    height?: number
    iconClass?: string
}

export class Provider {

    protected options: GenericProvideConfig
    protected element: JQuery<HTMLElement>

    create(options: GenericProvideConfig){
        this.options = Object.assign({
            enabled: true,
            width: 575,
            height: 400,
            iconClass: `social-share-icon social-share-icon-${this.getName()}`
        }, options)
        this.element = this.createElement()
        this.bindEvents(this.element)
        return this.element
    }

    resolveOptions(options: GenericProvideConfig, socialOptions: ProvideConfig){
        if (!options.title) {
            options.title = socialOptions.title
        }
        if (!options.url) {
            options.url = socialOptions.url
        }
        if (!options.summary) {
            options.summary = socialOptions.summary
        }
        if (!options.image) {
            options.image = socialOptions.image
        }
        if (!options.url) {
            options.url = encodeURIComponent(options.url)
        }
        if (!options.image) {
            options.image = encodeURIComponent(options.image)
        }
        return options
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
     * 获取排序值
     */
    getSort(): number{
        return this.options.sort || 99
    }

    /**
     * 创建dom结构
     *
     * @returns {jQuery}
     * @private
     */
    createElement(): JQuery<HTMLElement>{
        const html = `<a href="javascript:void(0)" class="${this.options.iconClass}"></a>`
        return $(html)
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
    bindEvents(element: JQuery<HTMLElement>) {
        element.on('click', this.onClick.bind(this))
    }

    /**
     * 点击按钮事件
     */
    onClick(){
        const win = openWin(this.createUrl(), this.options.width, this.options.height)
        win.focus()
    }
}
