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
        activeHeaderLinks: true,
        repo: 'moecopilot/B-Tree.studio',
        repoLabel: 'GitHub',
        docsDir: 'docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        markdown: {
            lineNumbers: true
        }

    },


}