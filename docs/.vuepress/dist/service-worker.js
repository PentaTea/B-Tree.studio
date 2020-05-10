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
    "revision": "d0f5bbab966d5e2f3d9551818e5bd102"
  },
  {
    "url": "assets/css/0.styles.966a62a4.css",
    "revision": "ad53bdbbc607b561a9ea4f679e940057"
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
    "url": "assets/img/0.41d20d93.svg",
    "revision": "41d20d930c36b55581e0a22d2b836277"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/五茶.jpg",
    "revision": "99c3a8349fae7f49857cc3204eef8dbb"
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
    "url": "assets/js/1.aa7f4835.js",
    "revision": "ffdde0d535b97f325d14158a01ca92c8"
  },
  {
    "url": "assets/js/16.c3425ea5.js",
    "revision": "4db4145d0b9091d7e254db0f0627c339"
  },
  {
    "url": "assets/js/17.9df8ac34.js",
    "revision": "ab8a4dc73ff253705ed8e7230502c70e"
  },
  {
    "url": "assets/js/18.a41a4237.js",
    "revision": "1682febdf303cfc73204609880fa623a"
  },
  {
    "url": "assets/js/19.81dbd23b.js",
    "revision": "77b6c3e23f54498b781a4e703c262b1b"
  },
  {
    "url": "assets/js/20.1c716874.js",
    "revision": "1d1eda23ae1e86cf919dc2128ff579fc"
  },
  {
    "url": "assets/js/21.805b0315.js",
    "revision": "173c008c2dd8d936272374a06076b3c9"
  },
  {
    "url": "assets/js/22.bb885563.js",
    "revision": "810123f8e6a99282e5654e59b08eda97"
  },
  {
    "url": "assets/js/23.4bbcc5cc.js",
    "revision": "ca70b38cb7961103716d580b962c6e05"
  },
  {
    "url": "assets/js/24.1f671b20.js",
    "revision": "542ab4720011058574be906aaaacac97"
  },
  {
    "url": "assets/js/25.3c7602d7.js",
    "revision": "b662c3416e537bdefc9a0eec5380e808"
  },
  {
    "url": "assets/js/26.5a81dc3f.js",
    "revision": "555a1642470aa861e8f10cd8df72e19a"
  },
  {
    "url": "assets/js/27.053ba8a5.js",
    "revision": "b723421c19efd278cd00be135676791a"
  },
  {
    "url": "assets/js/28.a4f5974a.js",
    "revision": "6583635977eb7d137f7333f921a8d3e9"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.827d7805.js",
    "revision": "1c057c8c0e60d661b6f1053e36b3cb3a"
  },
  {
    "url": "assets/js/layout-Layout.3646df13.js",
    "revision": "d26d7d010face178bfef7fcd16ceda65"
  },
  {
    "url": "assets/js/layout-NotFound.761cfe1a.js",
    "revision": "5715a4f1e9a432e011c6afaf601998d5"
  },
  {
    "url": "assets/js/page-069942c9.fc48db01.js",
    "revision": "a5056d7e9a6aead97c901158cffaa59c"
  },
  {
    "url": "assets/js/page-142fd774.508fb60a.js",
    "revision": "4fa44f9956179e3c131cfd39dcb86bb3"
  },
  {
    "url": "assets/js/page-2037549c.5ae4db86.js",
    "revision": "f283aac6e0757cfd0f61f74d81f7ddfd"
  },
  {
    "url": "assets/js/page-22954010.92e75535.js",
    "revision": "6f3762c9e486bac6eaf4bc0439742bab"
  },
  {
    "url": "assets/js/page-25b298b6.5f86c929.js",
    "revision": "aa96b6c3e2c0167c415c29c77d24f0de"
  },
  {
    "url": "assets/js/page-3c041b9e.736595bf.js",
    "revision": "92d7adc1dc1521d50619c21e1ae6ab76"
  },
  {
    "url": "assets/js/page-65eaf5e4.bbd0a60f.js",
    "revision": "7517a534dcb8716f31d6fa944073e08f"
  },
  {
    "url": "assets/js/page-7205f0b4.2f952a7d.js",
    "revision": "6d29fa9256ad5d9c73e33e378add8592"
  },
  {
    "url": "assets/js/page-e4dfaf94.adae20f1.js",
    "revision": "70ab42ebe1ac66fd64c2d9ac117c179f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.98308dcb.js",
    "revision": "266e7773063ac939cb41e42105de7b79"
  },
  {
    "url": "assets/js/vendors~layout-Layout.dcf32aed.js",
    "revision": "86216106d2cf5fe9ffaff84689dd15c9"
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
    "revision": "1d11a4cb4ffd1e98ae9abd95f141bfe0"
  },
  {
    "url": "doc/index.html",
    "revision": "13fa7b6ac78b487d545d23fc48aa41c9"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "6ca8c45e9493e442d8c711521c482df0"
  },
  {
    "url": "guide/index.html",
    "revision": "a972dfecb01eb893d97953b6f059e4c5"
  },
  {
    "url": "guide/team/index.html",
    "revision": "057f37c0c06ec60d167b4b361d3a25e4"
  },
  {
    "url": "index.html",
    "revision": "1ffaecc567592a05b1ed75ab93dbb7b3"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "6d124ddde48c37af839a07ab19f69834"
  },
  {
    "url": "py-list/index.html",
    "revision": "0b4d68f47c734c0ed134b48806b0fdc8"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "cb654b567e4867e66f2dcc1ec7418869"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "9f0c8019f6be5abbb6a78bf4f4d51d0f"
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
