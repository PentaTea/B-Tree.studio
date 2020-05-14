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
name: Build and Deploy
on:
  push:
    branches:
      - master
jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout
      uses: actions/checkout@master

    - name: vuepress-deploy
      uses: PentaTea/vuepress-deploy@master
      env:
        ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
        # TARGET_REPO: username/repo
        TARGET_BRANCH: master
        TARGET: https://TZNslVKsMb:${{ secrets.CODING_TOKEN }}@b-tree.coding.net/b-tree/B-Tree.Studio.git
        BUILD_SCRIPT: yarn && yarn docs:build
        BUILD_DIR: docs/.vuepress/dist/
```
