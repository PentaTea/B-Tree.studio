module.exports = [
    '@vuepress-reco/comments',
    {
        solution: 'valine',
        options: {
            appId: 'W2cy1EaT3UblAepXS7EEatVR-gzGzoHsz',
            appKey: 'qltbJ0agDFNAe9AEDbLiHe4d',
            placeholder: '评论支持MarkDown语言\n昵称支持QQ号\n邮箱支持Gravatar头像哦\n喵~',
            recordIP: true,
            enableQQ: true,
            visitor: true,
            requiredFields: ['nick'],
            avatarForce: true,
            // 设置Bilibili表情包地址
            emojiCDN: '//i0.hdslb.com/bfs/emote/',
            // 表情title和图片映射
            emojiMaps: {
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