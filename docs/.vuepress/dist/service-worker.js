/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3ef10b861d330e0bc6a7e289f966b15f"
  },
  {
    "url": "assets/css/0.styles.7a7656a8.css",
    "revision": "2bda94b852c28ca06e3c4ca7c0d5ea2f"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/0.f31205f0.svg",
    "revision": "f31205f0f990d39936dd6b65ca574746"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
  },
  {
    "url": "assets/img/Q.jpg",
    "revision": "c502f270958073d8b732ad88890c0a34"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/js/1.6be3a19a.js",
    "revision": "94af3f12195db93afc6dedec695296ae"
  },
  {
    "url": "assets/js/16.ede859bb.js",
    "revision": "f7046110730df819dd5f9021a3a9ae58"
  },
  {
    "url": "assets/js/17.b4fab918.js",
    "revision": "8f06a347fbde1b14f244b6a486d32ea2"
  },
  {
    "url": "assets/js/18.1f793df0.js",
    "revision": "fc20840741657f94132f387d5fa688ce"
  },
  {
    "url": "assets/js/19.03a8e75b.js",
    "revision": "120f5cb35c7954546ade3473138f1154"
  },
  {
    "url": "assets/js/20.9f8ec613.js",
    "revision": "dafbcb250409d3d16517a4f6f426d71e"
  },
  {
    "url": "assets/js/21.3f8f35a5.js",
    "revision": "3b4a89dac3d1d1f4255cab1f1cef6d8e"
  },
  {
    "url": "assets/js/22.cf5ecafc.js",
    "revision": "99858a13039603038abf2695337ff851"
  },
  {
    "url": "assets/js/23.00f4f83a.js",
    "revision": "79a7be0651334145a1b819295ace685f"
  },
  {
    "url": "assets/js/24.bb6ca2c2.js",
    "revision": "98299f2fc73b99be1cd7b30203d60000"
  },
  {
    "url": "assets/js/25.88eb97c9.js",
    "revision": "061b6fffb5c12976fc6eeea2f6b2e01a"
  },
  {
    "url": "assets/js/26.c5d00ad6.js",
    "revision": "689e16b86df9033d8a6f6ef0af06ad30"
  },
  {
    "url": "assets/js/27.a3fa6e44.js",
    "revision": "951569532b82692eb03f7483b074e7a8"
  },
  {
    "url": "assets/js/28.37b81dd0.js",
    "revision": "c38f218da74412bd7270d5ef143703cd"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.3aaf67f4.js",
    "revision": "1a7a635951ecab778b3fcae2b06dbc8d"
  },
  {
    "url": "assets/js/layout-Layout.91c1cdee.js",
    "revision": "73420150705d7c296993c671eeea69f0"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.c5116960.js",
    "revision": "60eb22672429325541aa9d7b6301806e"
  },
  {
    "url": "assets/js/page-142fd774.312fd673.js",
    "revision": "5bc3fccc167f0a9c55d865551a137f46"
  },
  {
    "url": "assets/js/page-2037549c.1fbe6e06.js",
    "revision": "4cc4ffd2f92533644bc3e6fbc266ad06"
  },
  {
    "url": "assets/js/page-22954010.522c8601.js",
    "revision": "c429f38e1a308ff875f462bbc02d94d1"
  },
  {
    "url": "assets/js/page-25b298b6.adeb06db.js",
    "revision": "0f1ac47792b269bca76b33f882c2c98e"
  },
  {
    "url": "assets/js/page-3c041b9e.93071288.js",
    "revision": "9b6ab854c7c40f729046799c930a3ecd"
  },
  {
    "url": "assets/js/page-65eaf5e4.c55f17ba.js",
    "revision": "5b8f937deb2a35c5461c72541327dca2"
  },
  {
    "url": "assets/js/page-7205f0b4.bd67e73c.js",
    "revision": "fdbf0da11f98a17bf21c4692b2fe8bb2"
  },
  {
    "url": "assets/js/page-e4dfaf94.cde129b9.js",
    "revision": "ff7fd9bfdcda189cc244bf9def4f549f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.acb1440b.js",
    "revision": "5ab0ed640163d39a991f0b7c426a07a1"
  },
  {
    "url": "assets/js/vendors~layout-Layout.66cd8c1c.js",
    "revision": "311b87b47d58bb97d30db89bb946f7bb"
  },
  {
    "url": "assets/svg/PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "assets/svg/PCBRuler.svg",
    "revision": "0210ace36bdd454de56380f92b8a39d3"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "5b3b106042108f498c1fa1d06eaec03b"
  },
  {
    "url": "doc/index.html",
    "revision": "3d485a3010de34bcb721f8679a17b577"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "01392ec9b4e6ef9c60398fa015c8d2b4"
  },
  {
    "url": "guide/index.html",
    "revision": "3947b6823072ae1aa5242622a38d3022"
  },
  {
    "url": "guide/team/index.html",
    "revision": "a2c50a8539ca4a6a19ed4af3a49a6416"
  },
  {
    "url": "index.html",
    "revision": "4bafc192fbece8ad849689f3ee6585a7"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "0a9ba536e8b0b62623b5d03a2b42f401"
  },
  {
    "url": "py-list/index.html",
    "revision": "5779631b2c64c26ae90ca436391b401f"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "775b19e747ef8f1ad5172dae090c908e"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "9bd2400329818daf4fe839352c316d4d"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
