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
        platform: "music.163.com", //目前仅支持网易云
        options: {
          PlayListId: "4909779787" //歌单ID
        },
        FirstClickPlay: true, //第一次点击标签自动播放
        background: "linear-gradient(-20deg, #00cdac 0%, #8ddad5 100%)" //更改样式
      }
    ]
  ]
};
```

SVG from https://feathericons.com/

API from https://api.imjad.cn/cloudmusic.md
