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
    "revision": "915fd33af1234a271a6e9f61b408f141"
  },
  {
    "url": "assets/css/0.styles.2ec59fc8.css",
    "revision": "9eeeacd5d28cdedc2d29bc613650d90e"
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
    "url": "assets/js/16.c0192293.js",
    "revision": "102c98989705ce999c34496db53aef50"
  },
  {
    "url": "assets/js/17.b4fab918.js",
    "revision": "8f06a347fbde1b14f244b6a486d32ea2"
  },
  {
    "url": "assets/js/18.2bb80bdf.js",
    "revision": "f9011dac8b3e8632053524a8f899b2dd"
  },
  {
    "url": "assets/js/19.ef065542.js",
    "revision": "311fd29570a166d645840a95f6ccb8bd"
  },
  {
    "url": "assets/js/20.9f8ec613.js",
    "revision": "dafbcb250409d3d16517a4f6f426d71e"
  },
  {
    "url": "assets/js/21.812743df.js",
    "revision": "5d53d2e5e4d1d76c5bf971f0da4cd23b"
  },
  {
    "url": "assets/js/22.945a25d9.js",
    "revision": "220e1956741e4b52dc35fa085c3f16ee"
  },
  {
    "url": "assets/js/23.90b80473.js",
    "revision": "f5307ba9994f7203e61f3db2cdc2f065"
  },
  {
    "url": "assets/js/24.bb6ca2c2.js",
    "revision": "98299f2fc73b99be1cd7b30203d60000"
  },
  {
    "url": "assets/js/25.d145615f.js",
    "revision": "301ffd9a2bc0158bf33305bc3d8a79da"
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
    "url": "assets/js/app.29ceeec6.js",
    "revision": "cc36b8c2720c8da28f9594571a36db29"
  },
  {
    "url": "assets/js/layout-Layout.03a2c885.js",
    "revision": "86e38edd4c26e8c5dae0647445eb9cc5"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.c798b6cb.js",
    "revision": "8c2640dcbe7732d910b018bed3385538"
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
    "url": "assets/js/page-22954010.4c9e1f77.js",
    "revision": "045d52c81f35e9acd99d077bc4c3eb69"
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
    "url": "assets/js/page-e4dfaf94.e573d759.js",
    "revision": "ed8d858272abaa69e677c202dc6c5270"
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
    "revision": "d321e1a4245c118dfaf20d4b33bf25bf"
  },
  {
    "url": "doc/index.html",
    "revision": "08f6e4cf6169984038a72f903e336c26"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "4c2849e9fa6500f7bc36467471ffa88d"
  },
  {
    "url": "guide/index.html",
    "revision": "60d89a04ab0ce026b659c80bcd1b7857"
  },
  {
    "url": "guide/team/index.html",
    "revision": "036d9082f0433f9caddae3b78e735bc0"
  },
  {
    "url": "index.html",
    "revision": "a2197e66d7d973592842a12153da2bde"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "d654548c2b02bbacec4662a36e592b12"
  },
  {
    "url": "py-list/index.html",
    "revision": "c627e8569d854f2bfeeafedc27395f6b"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "e74553f58569e0a766245cb901f541ae"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "28f13174412b424a938bce95f17f6a60"
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
