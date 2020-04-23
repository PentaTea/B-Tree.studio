# vuepress-plugin-fontmin

> 一个 vuepress 的字体子集化插件
>
> A minify font plugin for vuepress

## Description

[Fontmin](https://github.com/ecomfe/fontmin/) 是一个纯 JavaScript 实现的字体子集化方案。

其提供了 ttf 子集化，eot/woff/svg 格式转换，css 生成等功能，助推 webfont 发展，提升网页文字体验。

本插件封装了 [Fontmin](https://github.com/ecomfe/fontmin/), 使其经过简单配置就可轻松用于 vuepress 网站

## Quick Start

- Install with npm:

  `npm install vuepress-plugin-fontmin`

- Install with Yarn:

  `yarn add vuepress-plugin-fontmin`

## Add to .vuepress/config.js

```js
module.exports = {
  plugins: [
    //...
    [
      "fontmin",
      [//注意这里是 array ,这意味着你可以创建多个字体集以及其选择器
        {
          selector: "#main-title,.site-name.can-hide",
          src: "path/to/yourFont.ttf",
          text: "你想更改字体的文字,允许重复,不会占位",
        },{
          selector: "OR OTHER SELECTORS",
          src: "path/to/yourAnotherFont.ttf",
          text: "也可以require(到另一个js文件),并写在其中",
        },
      ],
    ],
    //...
  ],
};
```

enjoy:)
