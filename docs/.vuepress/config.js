const pluginConf = require('./config/pluginConf.js');
const headConf = require('./config/headConf.js');

module.exports = {
    title: 'B-Tree',
    description: 'B-Tree Design Studio 一个打从心底想带给你美好的工作室',
    plugins: pluginConf,
    head: headConf,
    themeConfig: {
        author: 'moecopilot',
        logo: '/favicon.jpeg',
        smoothScroll: true,
        nextLinks: true,
        prevLinks: true,
        lastUpdated: '上次更新',
        nav: [{
            text: '指南',
            items: [{
                items: [{
                    text: '了解 B-Tree',
                    link: '/guide/'
                }, {
                    text: '产品',
                    link: '/product/'
                }, {
                    text: '文档',
                    link: '/doc/'
                }, ]
            }, {
                text: '视频',
                items: [{
                    text: 'Bilibili',
                    link: 'https://space.bilibili.com/11443411'
                }]
            }]
        }, {
            text: '生态系统',
            items: [{
                text: '帮助',
                items: [{
                    text: 'QQ群',
                    link: 'https://jq.qq.com/?_wv=1027&k=5B48Hdg'
                }, ]
            }, {
                text: '工具',
                items: [{
                    text: '*即将开放*',
                    link: 'index'
                }]
            }, {
                text: '信息',
                items: [{
                    text: '*即将开放*',
                    link: 'index'
                }, {
                    text: '*即将开放*',
                    link: 'index'
                }]
            }]
        }, {
            text: '团队',
            link: '/guide/team'
        }, {
            text: '资源',
            link: '/resources/'
        }, {
            text: '支持 B-Tree',
            link: '/support/'
        }, {
            text: '选择语言',
            items: [{
                text: '简体中文',
                link: '/index'
            }]
        }, ],
        sidebar: 'auto',
        sidebarDepth: 2,
        //displayAllHeaders: true,
        activeHeaderLinks: true,
        repo: 'moecopilot/B-Tree.studio',
        // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
        // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
        repoLabel: 'GitHub',

        // 以下为可选的编辑链接选项

        // 假如你的文档仓库和项目本身不在一个仓库：
        //docsRepo: 'vuejs/vuepress',
        // 假如文档不是放在仓库的根目录下：
        docsDir: 'docs',
        // 假如文档放在一个特定的分支下：
        //docsBranch: 'master',
        // 默认是 false, 设置为 true 来启用
        editLinks: true,
        // 默认为 "Edit this page"
        editLinkText: '在 GitHub 上编辑此页'

    },


}