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

## uml

@startuml
clock clk with period 1
binary "enable" as EN
concise "dataBus" as db

@0 as :start
@5 as :en_high
@10 as :en_low

@:start
EN is low
db is "0x0000"

@:en_high
EN is high

@:en_low
EN is low

@:en_high-2
db is "0xf23a"

@:en_high+6
db is "0x0000"
@enduml

```
@startuml
clock clk with period 1
binary "enable" as EN
concise "dataBus" as db

@0 as :start
@5 as :en_high
@10 as :en_low

@:start
EN is low
db is "0x0000"

@:en_high
EN is high

@:en_low
EN is low

@:en_high-2
db is "0xf23a"

@:en_high+6
db is "0x0000"
@enduml
```
