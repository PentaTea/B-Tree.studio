const vssue = require('./vssueConf.js');
module.exports = [
    // ['@vuepress/pwa', {
    //     serviceWorker: true,
    //     updatePopup: {
    //         message: "发现新内容可用",
    //         buttonText: "刷新"
    //     }
    // }],
    ['@vuepress/active-header-links', {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor'
    }],
    ['@vuepress/back-to-top'],
    ['@vuepress/nprogress'],
    ['vuepress-plugin-clean-urls', {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404.html',
    }],

    //图片放大
    [
        'vuepress-plugin-medium-zoom',
        {
            selector: 'img',
            delay: 1000,
            options: {
                margin: 24,
                background: '#ffffff',
                scrollOffset: 0,
            },
        },
    ],

    //自动分组
    ["vuepress-plugin-auto-sidebar", {}],

    //自定义md容器
    //可以多次定义
    ['vuepress-plugin-container', {
        type: 'right',
        defaultTitle: '',
    }, ],
    ['vuepress-plugin-container', {
        type: 'theorem',
        before: info => `<div class="theorem"><p class="title">${info}</p>`,
        after: '</div>',
    }, ],

    // 这是 VuePress 默认主题使用这个插件的方式
    ['vuepress-plugin-container', {
        type: 'tip',
        defaultTitle: {
            '/': 'TIP',
            '/zh/': '提示',
        },
    }, ],

    vssue,

    ['named-chunks', {
        pageChunkName: page => 'page' + page.key.slice(1),
        layoutChunkName: layout => 'layout-' + layout.componentName,
    }, ],
    ['vuepress-plugin-table-of-contents'],

    ['seo', {
        siteTitle: (_, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: (_, $site) => $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => '/favicon.jpeg',
        type: $page => ['articles', 'posts', 'blog'].some(folder => $page.regularPath.startsWith('/' + folder)) ? 'article' : 'website',
        url: (_, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) => $page.frontmatter.image && (($site.themeConfig.domain || '') + $page.frontmatter.image),
        publishedAt: $page => $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
    }],
    ['vuepress-plugin-reading-time']
]