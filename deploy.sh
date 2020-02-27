#!/usr/bin/env bash
#
# VuePress 通用部署脚本
#
# Windows 无法执行 .sh 文件，需要安装 git 客户端
#
# Author: cnguu
# Email: www@cnguu.cn
#

# 编译
yarn docs:build

# 添加
git add -A

# 提交
git commit -m update

# 强制推送到 cnguu.github.io 仓库的 master 分支
git push -f git@github.com:moecopilot/B-Tree.studio.git master


# 结束
