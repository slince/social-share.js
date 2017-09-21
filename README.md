<h1 align="center">Social Share Button</h1>

[![Build Status](https://img.shields.io/travis/slince/social-share.js/master.svg?style=flat-square)](https://travis-ci.org/slince/social-share.js)
[![npm version](https://img.shields.io/npm/v/social-share-button.js.svg?style=flat-square)](https://www.npmjs.com/package/social-share-button.js.svg) 
[![license](https://img.shields.io/npm/l/social-share-button.js.svg?style=flat-square)](https://www.npmjs.com/package/social-share-button.js)

Social Share可以帮助在你的网站上轻松方便的创建分享到社交网站的按钮，目前支持以下社交网站分享并且还在不断增加中。默认支持
五个主题 `square`, `circle`, `dark-square`, `dark-circle` 和默认主题 `default` , 默认主题不需要设置 `theme` 选项。
当然你也可以自定义主题，容器节点上会自动追加类名 `social-share-button` 和 `social-share-button-主题名`, 你可以使用该类对样式覆盖或者扩充。

### 支持的网站：

- [微博](http://www.weibbo.com)
- [百度贴吧](http://tieba.baidu.com)
- [QQ](http://www.qq.com)
- [QQ空间](http://qzone.qq.com)
- [豆瓣](http://www.douban.com)
- [Facebook](http://www.facebook.com)
- [Twitter](http://www.twitter.com)

### 主题：

- 默认主题

![默认](https://raw.githubusercontent.com/slince/social-share.js/master/assets/default.png)

- 方形主题

![方形](https://raw.githubusercontent.com/slince/social-share.js/master/assets/square.png)

- 圆形主题

![圆形](https://raw.githubusercontent.com/slince/social-share.js/master/assets/circle.png)

- 暗色方形主题

![暗色方形](https://raw.githubusercontent.com/slince/social-share.js/master/assets/dark-square.png)

- 暗色圆形主题

![暗色圆形](https://raw.githubusercontent.com/slince/social-share.js/master/assets/dark-circle.png)



## Installation

支持以下三种安装方式

- 通过 NPM/Yarn 安装

```bash
$ npm install social-share-button.js --save
```

如果你使用 yarn 的话

```bash
$ yarn add social-share-button.js
```

- 通过 script 标签引入

下载本项目中dist目录下面的`social-share.min.js`和`social-share.min.css`文件，拷贝到项目中，通过script和link标签
分别引入js文件和css文件即可。


## Basic Usage

### Quick start

```javascript
import SocialShare from 'social-share'; //如果你是通过script标签引入，则不需要改步骤

new SocialShare('.social-share-container');
```

### 切换主题

```javascript
new SocialShare('.social-share-container', {
    theme: 'square'
});
```

### 定制分享参数

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

### 关闭指定按钮

```javascript
new SocialShare('.social-share-container', {
    facebook: false,
    twitter: false
});
```

更多演示请参阅[examples](./examples)

## License

Licensed under MIT