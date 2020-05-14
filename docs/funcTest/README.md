---
sidebar: false
readingTime: false
---

# 网站功能测试

## Three.js

### 组件`Three`

模型放在路径`/assets/model/`下，config 写在模型路径`/assets/model/`下的`*.yml`文件中：

<<< @/docs/.vuepress/public/assets/model/RapberryPiZero.yml

``` html
<Three conf="RapberryPiZero.yml"/>
```

<Three conf="RapberryPiZero.yml"/>

## Github Action

``` YAML
name: vuepress-deploy

# 在master分支发生push事件时触发。
on:
  push:
    branches:
      - master

jobs:
  build:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [10.x]

    steps:
      - name: Checkout
        uses: actions/checkout@v1

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}

      - name: run deploy.sh
        env:
          # GITHUB_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          CODING_TOKEN: ${{ secrets.CODING_TOKEN }}
        run: npm install && npm run deploy
        # package.json 中添加 "deploy": "bash deploy.sh"
```

``` sh
#!/usr/bin/env sh
# 确保脚本抛出遇到的错误
set -e
npm run docs:build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to coding
# echo 'www.b-tree.studio' > CNAME  # 自定义域名
if [ -z "$CODING_TOKEN" ]; then  # -z 字符串 长度为0则为true；$CODING_TOKEN来自于github仓库`Settings/Secrets`设置的私密环境变量
  msg='deploy'
  codingUrl=git@e.coding.net:b-tree/B-Tree.Studio.git
else
  msg='来自github action的自动部署'
  codingUrl=https://TZNslVKsMb:${CODING_TOKEN}@b-tree.coding.net/b-tree/B-Tree.Studio.git
fi
git add -A
git commit -m "${msg}"
git push -f $codingUrl master # 推送到coding

cd -
rm -rf docs/.vuepress/dist
```
