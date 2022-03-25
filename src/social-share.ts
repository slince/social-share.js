//导入css样式文件
import $ from 'jquery'

import {GenericProvideConfig, ProvideConfig, Provider} from "./provider"
import {providers} from "./providers";

type theme = 'square' | 'circle' | 'dark-square' | 'dark-circle'

export interface SocialShareConfig extends ProvideConfig{
    theme?: string
    weibo?: boolean|GenericProvideConfig,
    wechat?: boolean|GenericProvideConfig,
    qq?: boolean|GenericProvideConfig,
    qzone?: boolean|GenericProvideConfig,
    baidu?: boolean|GenericProvideConfig,
    douban?: boolean|GenericProvideConfig,
    facebook?: boolean|GenericProvideConfig,
    twitter?: boolean|GenericProvideConfig
}

export class SocialShare {

    private container: JQuery<Element>
    private readonly providerClassMap: {[key: string]: any}
    private readonly options: SocialShareConfig
    private readonly providers: {[key:string]: Provider}

    constructor(element: string|Element, options?: SocialShareConfig) {
        this.container = typeof element === 'string' ? $(element) : $(element)

        //provider映射
        this.providerClassMap = providers

        //处理公共的options
        this.options = this.resolveOptions(options || {})
        //处理容器节点的class
        this.resolveContainerClass()

        //创建providers
        this.providers = this.createProviders()

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
        return typeof this.providers[alias] === 'undefined' ? null :this.providers[alias]
    }

    /**
     * 创建providers
     *
     * @return {Object}
     * @private
     */
    createProviders(): {[key:string]: Provider}{
        const providers = {}
        for (let provider in this.options ) {
            if (
                typeof this.providerClassMap[provider] === 'undefined' || this.options[provider] === false
            ) {
                continue
            }
            const options = this.mergeProviderOptions(this.options[provider])
            providers[provider] = new this.providerClassMap[provider](options)
        }
        return providers
    }

    /**
     * 处理公共options
     *
     * @param {Object} options
     * @return {Object}
     * @private
     */
    private resolveOptions(options: SocialShareConfig): SocialShareConfig{
        options = Object.assign({
            theme: 'default',
            weibo: true,
            wechat: true,
            qq: true,
            qzone:true,
            baidu: true,
            douban: true,
            facebook: true,
            twitter: true
        }, options)

        if (typeof options.title === 'undefined') {
            options.title = document.title
        }

        if (typeof options.url === 'undefined') {
            options.url = location.href
        }

        if (typeof options.summary === 'undefined') {
            options.summary = options.title
        }

        return options
    }

    /**
     * 处理容器的class
     *
     * @private
     */
    resolveContainerClass(){
        let className = 'social-share-button'
        if (this.options.theme) {
            className += ` social-share-button-${this.options.theme}`
        }
        this.container.addClass(className)
    }

    /**
     * 合并provider的options
     *
     * @param {Object|Boolean} options
     * @returns {Object}
     * @private
     */
    mergeProviderOptions(options: boolean|GenericProvideConfig){
        //如果provider的配置为boolean，则使用默认参数
        if (typeof options === 'boolean') {
            options = {enabled: options}
        }

        if (!options.title) {
            options.title = this.options.title
        }
        if (!options.url) {
            options.url = this.options.url
        }
        if (!options.summary) {
            options.summary = this.options.summary
        }
        if (!options.image) {
            options.image = this.options.image
        }
        if (!options.url) {
            options.url = encodeURIComponent(options.url)
        }
        if (!options.image) {
            options.image = encodeURIComponent(options.image)
        }
        return options
    }
}
