const pluginConf = require("./pluginConf");
const headConf = require("./headConf");
const navConf = require("./navConf");


module.exports = {
  title: "B-Tree",
  description: "B-Tree Design Studio 一个打从心底想带给你美好的工作室",
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'B-Tree',
      description: 'B-Tree Design Studio 一个打从心底想带给你美好的工作室'
    },

  },
  lang: 'zh-CN',
  plugins: pluginConf,
  head: headConf,
  themeConfig: {
    locales: {
      '/': {
        lang: 'zh-CN',
        title: 'B-Tree',
        description: 'B-Tree Design Studio 一个打从心底想带给你美好的工作室'
      },
    },
    lang: 'zh-CN',
    author: "moecopilot",
    logo: "/favicon.jpeg",
    smoothScroll: true,
    nextLinks: true,
    prevLinks: true,
    lastUpdated: "上次更新",
    nav: navConf,
    sidebar: "auto",
    sidebarDepth: 2,
    activeHeaderLinks: true,
    repo: "PentaTea/B-Tree.studio",
    repoLabel: "GitHub",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",

  },
  markdown: {
    lineNumbers: true,
    extractHeaders: ['h2', 'h3', 'h4'],
    extendMarkdown: md => {
      md.use(require('markdown-it-checkbox'))
      md.use(require('markdown-it-plantuml'))
    },
  }
}