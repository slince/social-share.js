<h1 align="center">Social Share</h1>

Social Share可以帮助在你的网站上轻松方便的创建分享到社交网站的按钮，目前支持的社交网站分享有：

- [微博](http://www.weibbo.com)
- [百度贴吧](http://tieba.baidu.com)
- [QQ](http://www.qq.com)
- [QQ空间](http://qzone.qq.com)
- [豆瓣](http://www.douban.com)
- [Facebook](http://www.facebook.com)
- [Twitter](http://www.twitter.com)

并且还在不断增加中。

# Installation

支持以下三种安装方式

## 通过 NPM/Yarn 安装

```bash
$ npm install social-share.js --save
```

如果你使用 yarn 的话：

```bash
$ yarn add social-share.js --save
```

## 通过 script 标签引入

下载本项目中dist目录下面的`social-share.min.js`和`social-share.min.css`文件，拷贝到项目中，通过script和link标签
分别引入js文件和css文件即可

# Basic Usage

```javascript
import SocialShare from 'social-share'; //如果你是通过script标签引入，则不需要改步骤

new SocialShare('.social-share-container');

```

## 切换主题

默认支持五个主题`square`, `circle`, `dark-square`, `dark-circle`和默认主题

设置主题：

```javascript
new SocialShare('.social-share-container', {
    theme: 'square'
});
```
默认主题，不需要设置`theme`选项


## 定制分享参数

```javascript
new SocialShare('.social-share-container', {

    // 定义通用的分享参数
    title: '百度搜索',
    url: 'http://www.baidu.com',
    summary: '一个中文搜索网站',
    image: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',

    // 单独定义微博的分享参数,其它的同
    weibo: {
        title: '网易',
        url: 'http://www.qq.com',
        summary: '网易门户',
        image: 'https://ss0.bdstatic.com/5aV1bjqh_Q23odCf/static/superman/img/logo/bd_logo1_31bdc765.png',
    }
});
```

## 关闭指定按钮

```javascript
new SocialShare('.social-share-container', {
    facebook: false,
    twitter: false
});
```

更多演示请参阅[examples](./examples)

# License

Licensed under MIT