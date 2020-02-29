#!/usr/bin/env bash
#
# VuePress 通用部署脚本

# Author: moecopilot
# Email: 2490445193@qq.com
#

# 等待输入message，5秒超时
echo "Please enter commit:"

read -t 30 msg 

# 开启pwa
# echo "module.exports = [\n    ['@vuepress/pwa', {\n        serviceWorker: true,\n        updatePopup: {\n            message: \"发现内容更新\",\n            buttonText: \"刷新\"\n        }\n    }]\n]"  > docs/.vuepress/config/pwaConf.js

# 编译
yarn docs:build

# 添加
git add -A

# 提交
if [ -z "$msg" ]   #未输入任何值
then
        echo "[defult] git commit -m update "
        git commit -m update
else
        echo "git commit -m $msg"
        git commit -m "$msg"
fi


# 强制推送到 master 分支
git push -f git@github.com:moecopilot/B-Tree.studio.git master

# 关闭pwa，方便dev调试
# echo "module.exports = [\n    // ['@vuepress/pwa', {\n    //     serviceWorker: true,\n    //     updatePopup: {\n    //         message: \"发现内容更新\",\n    //         buttonText: \"刷新\"\n    //     }\n    // }]\n]" > docs/.vuepress/config/pwaConf.js
# 结束
