---
description: 研读 vscode,vue 等神级项目源码时遇见了很多好用的库，在此记录一下
thumbnail:
tag:
  - nodejs
  - javascript
  - 笔记
---

# 常用 node 库记录

## minimist 轻量级命令行参数解析引擎

``` js
// test.js
var args = require('minimist')(process.argv.slice(2));
console.log(args.hello);
```

``` js
$ node test.js --hello=world
// world
$ node test.js --hello world
// world
$ node test.js --hello
// true
```
