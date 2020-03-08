#!/usr/bin/env bash
#
# VuePress 通用部署脚本
#
# Author: moecopilot
# Email: 2490445193@qq.com
#
cd /Users/zhangjiaping/Desktop/project/b-tree/

echo "Please enter commit:"

read -t 120 msg 

# 开启pwa
echo "module.exports = ['@vuepress/pwa', {\n        serviceWorker: true,\n        popupComponent: 'CustomSWUpdatePopup',\n        updatePopup: {\n            message: \"发现内容更新\",\n            buttonText: \"刷新\"\n        }\n    }]"  > docs/.vuepress/config/pwaConf.js

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
echo "module.exports = []" > docs/.vuepress/config/pwaConf.js
# 结束
