---
description:
tag:
    - 前端
---

# 获取 B 站表情

声明：此脚本完全开源，所抓取信息来源于公共平台，仅供交流学习。

``` js
var emojiDict = new Array();
const selector = "泠鸢";
setInterval(() => {
    let output = "";
    $(".text-con img,.text img").each(function () {
        let alt = $(this).attr("alt")
        let src = $(this).attr("src")
        if (alt.indexOf(selector) != -1) {
            emojiDict[alt] = src;
        }
    })
    // console.log(emojiDict);
    for (let alt in emojiDict) {
        let src = emojiDict[alt];
        output+=`"${alt}" : "${src}",\n`
    }
    console.log(output)
}, 2000);
```

valine 配置

``` JS
{
    "泠鸢yousa_贴贴": "dbc177d314231add509501ffc6bc7655fca2c10f.png",
    "泠鸢yousa_打call": "718e9495846db4172eb87d2f7f02015a34d35ea2.png",
    "泠鸢yousa_awsl": "7663b729161bd4556c2ec318c07791000743eb56.png",
    "泠鸢yousa_干杯": "53af6e801b6a27a9428c74277a2f9edb2098a64e.png",
    "泠鸢yousa_好人卡": "e3907b3bb20b18e7ecb11cd86829c9a4ce5b1b2f.png",
    "泠鸢yousa_加大力度": "a0393a2d4b522f07a319dfd2e91754a3cdff2c48.png",
    "泠鸢yousa_沉默": "5e967cf1669743ed92e9a8ff3e5de6d90ca63d3d.png",
    "泠鸢yousa_大哭": "3f757b147b9b1e201470eae7dac9cc0360172569.png",
    "泠鸢yousa_请吃桃": "e92276d9d8c28f85f7dbcc0fbbb6ecb3345ce33e.png",
    "泠鸢yousa_滑稽": "a8057c0e0579b93c16010a270e261fd0a64034af.png",
    "泠鸢yousa_惊讶": "9fdc2c5b4b970aded56fe2f326bd4d00e849339d.png",
    "泠鸢yousa_生气": "9e6ba9ff34101e04d3e321cad486f845f892050e.png",
    "泠鸢yousa_头晕": "49830c1c8a1652f7ee9cb854ac7dbf8e378cdcd6.png",
    "泠鸢yousa_问号": "ab7a543233eff83138c3221c86a762ab36bab7bc.png",
    "泠鸢yousa_真棒": "02ea49543a3ac52feee185c156ab08fb2bfdd89e.png",
}
```
