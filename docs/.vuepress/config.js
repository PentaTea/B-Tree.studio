const pluginConf = require("./config/pluginConf.js");
const headConf = require("./config/headConf.js");
const navConf = require("./config/navConf.js");

module.exports = {
  title: "B-Tree",
  description: "B-Tree Design Studio 一个打从心底想带给你美好的工作室",
  plugins: pluginConf,
  head: headConf,
  themeConfig: {
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
    repo: "moecopilot/B-Tree.studio",
    repoLabel: "GitHub",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "在 GitHub 上编辑此页",
    markdown: {
      lineNumbers: true
    }
  }
};
