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
# package.json 中需要有这一句："build": "vuepress build docs"
yarn build

# 删除 dist_temp 文件夹
rm -fr dist_temp

mkdir dist_temp
# 复制 dist 文件夹到 dist_temp 文件夹
cp -ir docs/.vuepress/dist/ dist_temp
echo '# b-tree.studio' > dist_temp/README.md

# 进入 dist_temp 目录
cd dist_temp

# 新建 CNAME 文件，并写入 gleehub.com 域名
#echo b-tree.studio > CNAME

# 初始化仓库
git init

# 添加
git add -A

# 提交
git commit -m deploy

# 强制推送到 cnguu.github.io 仓库的 master 分支
git push -f git@github.com:moecopilot/B-Tree.studio.git master

# 返回上一级目录
cd ../

# 删除 dist_temp 文件夹
rm -fr dist_temp

# 结束
