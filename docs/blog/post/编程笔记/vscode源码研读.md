---
description: 可以预想到的大工程以及咕咕咕
thumbnail: https://user-images.githubusercontent.com/1487073/58344409-70473b80-7e0a-11e9-8570-b2efc6f8fa44.png
tag:
  - nodejs
  - electron
  - javascript
  - 笔记
---

# vscode 源码研读

![](https://raw.githubusercontent.com/fzxa/VSCode-sourcecode-analysis/master/vscode-vside-zh.png)

## 主进程启动流程

### src/main.js

1. 环境设置
    - 获得一些平台环境的设置，比如 temp 文件的位置和运行参数相关设置
    - 启动 node.asar 的支持
    - 注册并用刚获得的设置启动崩溃日志记录 `electron::crashReporter` 服务
    - 设置 log 目录，当前运行目录
    - 注册监听服务，监听拖拽到图标打开文件等操作
2. app.once('ready'...
    - 启用内容追踪 `electron::contentTracing` 性能检测优化相关
    - 尝试获取本地配置信息
    - 检查用户语言环境配置，如果没有设置默认使用英语
    - 加载启动文件 `vs/code/electron-main/main`

### src/vs/code/electron-main/main.ts

1. 初始化基础服务
    - 运行环境服务 `EnvironmentService`

        > src/vs/platform/environment/node/environmentService.ts

        通过这个服务获取当前启动目录，日志目录，操作系统信息，配置文件目录，用户目录等。

    - 日志服务 `MultiplexLogService`

        > src/vs/platform/log/common/log.ts

        默认使用控制台日志 ConsoleLogMainService 其中包含性能追踪和释放信息，日志输出级别

    - 配置服务 `ConfigurationService`

        > src/vs/platform/configuration/node/configurationService.ts

        从运行环境服务获取内容

    - 生命周期服务 `LifecycleService`

        > src/vs/platform/lifecycle/common/lifecycleService.ts

        监听事件，electron app 模块 比如：ready， window-all-closed，before-quit

        可以参考官方 electron app 文档

    - 状态服务 `StateService`

        > src/vs/platform/state/node/stateService.ts

        通过 FileStorage 读写 storage.json 存储，里记录一些与程序运行状态有关的键值对

    - 请求服务 `RequestService`

        > src/vs/platform/request/browser/requestService.ts

        这里使用的是原生 ajax 请求，实现了 request 方法

    - 主题服务 `ThemeMainService`

        > src/vs/platform/theme/electron-main/themeMainService.ts

        这里只设置背景颜色，通过 getBackgroundColor 方法 IStateService 存储

    - 签名服务 `SignService`

        > src/vs/platform/sign/node/signService.ts

2. 加载 CodeApplication, mainIpcServer, instanceEnvironment
3. 启动 APP

### src/vs/code/electron-main/app.ts

开始处理 app 级别任务，创建窗口，创建 IPC 服务

1. 创建共享进程
2. 创建 app 实例
3. 打开窗口
4. 执行生命周期和授权操作
5. 结束性能问题追踪

### src/vs/code/electron-main/window.ts

创建实例窗口，注册窗口监听器和生命周期，启动 Workbench 等渲染进程

主进程流程基本完毕

## 渲染进程启动流程

待续 ...
