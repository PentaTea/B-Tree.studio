# B-Tree Design Studio

[![Netlify Status](https://api.netlify.com/api/v1/badges/64316f8c-ae6b-499c-aa23-f49a05868192/deploy-status)](https://app.netlify.com/sites/b-tree-studio/deploys)

## [vuepress-plugin-music-bar](https://github.com/moecopilot/B-Tree.studio/tree/master/docs/.vuepress/plugin/vuepress-plugin-music-bar#vuepress-plugin-music-bar)

[npm vuepress-plugin-music-bar](https://www.npmjs.com/package/vuepress-plugin-music-bar)


## b-tree.studio

## 导航栏分组

```js
{
    text: 'name',
    items: [{
        text: 'Group1',
        items: [{
            text: '1',
            link: ' /'
        }, {
            text: '2',
            link: ' /'
        }, {
            text: '3',
            link: ' /'
        }, {
            text: '4',
            link: ' /'
        }]
    }, {
        text: 'Group2',
        items: [{
            text: '1',
            link: ' /'
        }, {
            text: '2',
            link: ' /'
        }, {
            text: '3',
            link: ' /'
        }, {
            text: '4',
            link: ' /'
        }]
    }]
}
```

## 评论

```js
<Vssue title="Vssue Demo" />
```

## 选项卡

```md
:::: tabs type:card
::: tab title
**markdown content**
:::
::: tab title2
**markdown content2**
:::
::::
```

## svg 动画

```
<SP file="/svg_test.svg" />
```

## svg 产品列表

::: PL /svg_test.svg

:::
