#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run docs:build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to coding
# echo 'www.b-tree.studio' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  codingUrl=git@e.coding.net:b-tree/B-Tree.Studio.git
else
  codingUrl=https://xugaoyi:${CODING_TOKEN}@git.dev.tencent.com/xugaoyi/xugaoyi.git
  https://TZNslVKsMb:b7ca301581a2b8467cdc5ccbc3159c925321f275@b-tree.coding.net/b-tree/B-Tree.Studio.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist