# vuepress-plugin-music-bar

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-0.png)

[README](./README.md) | [CHANGELOG](./CHANGELOG.md)

> 一个 vuepress 的音乐组件
>
> A music-bar plugin for vuepress

### Live Demos

- https://b-tree.studio

## Description

好康的音乐组件

Beautiful music components

如果您觉得不太好康的话欢迎 fork, 大佬们点个星星救我狗命鸭

welcome everyone's Star and fork

### 默认收起到左边 Default stow to left

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-1.png)

### 鼠标移入展开 Move in mouse to expand

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-2.png)

### 阴影进度条(可拖动) Shadow progress bar(can drag)

![](https://raw.githubusercontent.com/moecopilot/B-Tree.studio/master/docs/.vuepress/plugin/vuepress-plugin-music-bar/img/music-bar-3.png)

## Quick Start

- Install with npm:

  `npm install vuepress-plugin-music-bar`

- Install with Yarn:

  `yarn add vuepress-plugin-music-bar`

## Add to config.js

```js
module.exports = {
  plugins: [
    [
      "music-bar",
      {
        playList: ["example.mp3"], //手动添加歌曲,支持 URLs 或 base64 data URIs ,默认为空数组
        platform: [
          //TODO:多平台支持,默认为空数组
          {
            name: "music.163.com", //网易云
            playListID: ["4909779787"] //支持多个歌单 ID
          }
        ],

        timeOut: 2000, //加载超时,单位毫秒,默认2000

        firstClickPlay: true, //首次点击自动播放,对移动端友好

        background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)" //主容器样式

        //debugMode: <Boolean> 开发模式, dev 环境下输出 log 到 console ,默认开启

        //frameColor: <String> 框架颜色,默认为 $accentColor
      }
    ]
  ]
};
```

SVG from https://feathericons.com/

API from https://api.imjad.cn/cloudmusic.md
