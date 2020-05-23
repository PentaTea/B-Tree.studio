module.exports = [
    require('./../plugin/@vuepress-reco/vuepress-plugin-comments/index.js'),
    {
        solution: 'valine',
        options: {
            appId: 'a9Gy3iv0FHSNQejx23JVADD5-MdYXbMMI',
            appKey: 'AitCiRPzfh0jcNmO4lTs5DYU',
            placeholder: '评论支持MarkDown语言\r\n昵称支持QQ号\r\n邮箱支持Gravatar头像哦\n喵~',
            recordIP: true,
            enableQQ: true,
            visitor: true,
            requiredFields: ['nick'],
            avatarForce: true,
            // 设置Bilibili表情包地址
            emojiCDN: '//i0.hdslb.com/bfs/emote/',
            // 表情title和图片映射
            emojiMaps: {
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
                "bili_doge": "6ea59c827c414b4a2955fe79e0f6fd3dcd515e24.png",
                "bili_亲亲": "a8111ad55953ef5e3be3327ef94eb4a39d535d06.png",
                "bili_偷笑": "bb690d4107620f1c15cff29509db529a73aee261.png",
                "bili_再见": "180129b8ea851044ce71caf55cc8ce44bd4a4fc8.png",
                "bili_冷漠": "b9cbc755c2b3ee43be07ca13de84e5b699a3f101.png",
                "bili_发怒": "34ba3cd204d5b05fec70ce08fa9fa0dd612409ff.png",
                "bili_发财": "34db290afd2963723c6eb3c4560667db7253a21a.png",
                "bili_可爱": "9e55fd9b500ac4b96613539f1ce2f9499e314ed9.png",
                "bili_吐血": "09dd16a7aa59b77baa1155d47484409624470c77.png",
                "bili_呆": "fe1179ebaa191569b0d31cecafe7a2cd1c951c9d.png",
                "bili_呕吐": "9f996894a39e282ccf5e66856af49483f81870f3.png",
                "bili_困": "241ee304e44c0af029adceb294399391e4737ef2.png",
                "bili_坏笑": "1f0b87f731a671079842116e0991c91c2c88645a.png",
                "bili_大佬": "093c1e2c490161aca397afc45573c877cdead616.png",
                "bili_大哭": "23269aeb35f99daee28dda129676f6e9ea87934f.png",
                "bili_委屈": "d04dba7b5465779e9755d2ab6f0a897b9b33bb77.png",
                "bili_害羞": "a37683fb5642fa3ddfc7f4e5525fd13e42a2bdb1.png",
                "bili_尴尬": "7cfa62dafc59798a3d3fb262d421eeeff166cfa4.png",
                "bili_微笑": "70dc5c7b56f93eb61bddba11e28fb1d18fddcd4c.png",
                "bili_思考": "90cf159733e558137ed20aa04d09964436f618a1.png",
                "bili_惊吓": "0d15c7e2ee58e935adc6a7193ee042388adc22af.png",
                // ... 更多表情
            }
        }
    }
]
    // ['@vssue/vuepress-plugin-vssue', {
    //     // 设置 `platform` 而不是 `api`
    //     platform: 'github-v4',
    //     // 其他的 Vssue 配置
    //     owner: 'PentaTea',
    //     repo: 'B-Tree.studio',
    //     clientId: '1a9028dee611ee4ba944',
    //     clientSecret: 'ea3e6735691e2fc394bb8dbcc404e4dfa2e9b196',
    // }]