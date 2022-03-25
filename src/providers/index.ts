import Wechat from "./wechat";
import Baidu from  './baidu'
import Weibo from  './weibo'
import QQ from  './qq'
import QZone from  './qzone'
import Douban from  './douban'
import Facebook from  './facebook'
import Twitter from  './twitter'

export const providers = {
    'baidu': Baidu,
    'weibo': Weibo,
    'wechat': Wechat,
    'qq': QQ,
    'qzone': QZone,
    'douban': Douban,
    'facebook': Facebook,
    'twitter': Twitter
}
