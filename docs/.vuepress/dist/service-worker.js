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
    "revision": "074593fe034af83be412165840491944"
  },
  {
    "url": "assets/css/0.styles.f2b39d2b.css",
    "revision": "f0a4fc7d4dc8d94300b0fc4d88ed5f77"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/alipay.6428fd00.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
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
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/15.ae0b2143.js",
    "revision": "e91d76e448c32306e6d865ae01d2ca88"
  },
  {
    "url": "assets/js/16.3bb1e628.js",
    "revision": "af496a556c7715ba5b4364cbf45ff126"
  },
  {
    "url": "assets/js/17.8e5e288b.js",
    "revision": "972d9ecfb65c5d803b0dce63ccf20d4f"
  },
  {
    "url": "assets/js/18.a65165d0.js",
    "revision": "4891b599db39f68c11c637990b5af415"
  },
  {
    "url": "assets/js/19.ff82d845.js",
    "revision": "7a42d546f4dbe1092cc2095a58f9e473"
  },
  {
    "url": "assets/js/20.c4db002d.js",
    "revision": "656fbbef0a1c09dfeefdb7fe16ac4cff"
  },
  {
    "url": "assets/js/21.5b04b15f.js",
    "revision": "aced8f8d5c1bc062b2846347396b2d62"
  },
  {
    "url": "assets/js/22.11650a95.js",
    "revision": "e1202728d6c317df0b95d151abb7d47d"
  },
  {
    "url": "assets/js/23.0c8efc0e.js",
    "revision": "d0a1aa03963ebc01f46cce8ec81d8997"
  },
  {
    "url": "assets/js/app.7f180322.js",
    "revision": "3d392f5d26a707aa4fc846b4c9463533"
  },
  {
    "url": "assets/js/layout-Layout.a5ce240d.js",
    "revision": "8ae6e5412f2f0edcdbab116291a8e4bb"
  },
  {
    "url": "assets/js/layout-NotFound.83011044.js",
    "revision": "60c7e4dc8ea573b00f2111c58f51d3ff"
  },
  {
    "url": "assets/js/page-07fa8526.f5ff7b14.js",
    "revision": "fb21e6757d5c387c7be75abd814a4646"
  },
  {
    "url": "assets/js/page-1301ab8a.47d64570.js",
    "revision": "8f7ce4a4ebb1e1c0fa2cd4be87b3b9de"
  },
  {
    "url": "assets/js/page-2037549c.ddaf1410.js",
    "revision": "d1c83299acd2b6dcb3fc9dcc30dddbea"
  },
  {
    "url": "assets/js/page-25b298b6.824234c5.js",
    "revision": "48fee1e1f590a5b2962f6925b8472698"
  },
  {
    "url": "assets/js/page-3c041b9e.714bdddd.js",
    "revision": "c2ba7ca408cf37670e455fadd3020345"
  },
  {
    "url": "assets/js/page-65eaf5e4.32d7a8b1.js",
    "revision": "02c98dd5c13cf1cb6be9a1541171c2e4"
  },
  {
    "url": "assets/js/page-7205f0b4.30f79cb0.js",
    "revision": "869fb9c79d153566d9a1960509b7f0c1"
  },
  {
    "url": "assets/js/page-a2896314.1abf54e5.js",
    "revision": "059be50849cba3bef08da9e7313d4ba7"
  },
  {
    "url": "assets/js/page-a7e2470e.12240811.js",
    "revision": "c8b6db2b581b0d835c3dee1be5afdece"
  },
  {
    "url": "assets/js/page-e4dfaf94.82fee955.js",
    "revision": "f9cf6209a37841be836a7a277f99c68b"
  },
  {
    "url": "assets/js/vendors~layout-Layout.54213c3c.js",
    "revision": "1f3354a88603b4445d78f5d1ac17fc70"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "d16a4e42d4196d705be3e99ca0f6dbda"
  },
  {
    "url": "doc/index.html",
    "revision": "1b620872702a802332736ee06963ba84"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "a7c1e249c8f6f8c84ea8d11f3c5993e7"
  },
  {
    "url": "guide/team/index.html",
    "revision": "bfa7ea8878e4c74ecf32db74cabd593c"
  },
  {
    "url": "index.html",
    "revision": "65216a906c2ffbb68321656652705ccf"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "2f4e8cdcf91288a900e3ba18faae5b95"
  },
  {
    "url": "product/index.html",
    "revision": "2231fa4a96bab029b08bb5ef3e69a1e2"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "ef52dd00ae2e2a7c7ed1fa7254c9a937"
  },
  {
    "url": "resources/index.html",
    "revision": "c8d2ebc1fa131115ef1d0c06c250e99c"
  },
  {
    "url": "support/index.html",
    "revision": "7a3658558d31ce57bc1de02480b8d31f"
  },
  {
    "url": "svg_test.svg",
    "revision": "08b37e8eb422f12620aa28175ee139c1"
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
