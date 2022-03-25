//导入css样式文件
import $ from 'jquery'

import {GenericProvideConfig, ProvideConfig, Provider} from "./provider"
import {providers} from "./providers";
import {TiebaConfig} from "./providers/tieba";

type theme = 'square' | 'circle' | 'dark-square' | 'dark-circle'

export interface SocialShareConfig extends ProvideConfig{
    theme?: string
    weibo?: boolean|GenericProvideConfig,
    wechat?: boolean|GenericProvideConfig,
    qq?: boolean|GenericProvideConfig,
    qzone?: boolean|GenericProvideConfig,
    tieba?: boolean|TiebaConfig,
    douban?: boolean|GenericProvideConfig,
    facebook?: boolean|GenericProvideConfig,
    twitter?: boolean|GenericProvideConfig
}

export class SocialShare {

    private container: JQuery<HTMLElement>
    private readonly providerClassMap: {[key: string]: any}
    private readonly options: SocialShareConfig
    private readonly providers: Provider[]

    constructor(element: string|HTMLElement, options?: SocialShareConfig) {
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
        const elements = this.providers.map(provider => provider.getElement())
        this.container.append(elements)
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
    createProviders(): Provider[]{
        const providers = []
        for (let provider in this.options ) {
            if (
                typeof this.providerClassMap[provider] === 'undefined' || this.options[provider] === false
            ) {
                continue
            }
            providers.push(new this.providerClassMap[provider]())
        }
        return providers.map(provider => {
            const options = this.createProviderOptions(provider, this.options[provider.getName()])
            provider.create(options)
            return provider
        }).sort((prev, next)=>prev.getSort() - next.getSort())
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
            qq: true,
            qzone:true,
            tieba: true,
            douban: true,
            facebook: true,
            twitter: true,
            wechat: true,
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

    createProviderOptions(provider: Provider, options: boolean|GenericProvideConfig): GenericProvideConfig{
        //如果provider的配置为boolean，则使用默认参数
        if (typeof options === 'boolean') {
            options = {enabled: options}
        }
        return provider.resolveOptions(options, this.options)
    }
}
