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
    "revision": "874052f40b90c74a64c766af4ec69d18"
  },
  {
    "url": "assets/css/0.styles.102610b3.css",
    "revision": "c7600d2293f8f63e2424cee9a243bbb4"
  },
  {
    "url": "assets/img/alipay.6428fd00.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
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
    "url": "assets/js/14.31f885d2.js",
    "revision": "174ef33af7b43c5adbc4d990a1e138d7"
  },
  {
    "url": "assets/js/15.e080ef4a.js",
    "revision": "b92d9b758b0c685b7828b00919bbb09f"
  },
  {
    "url": "assets/js/16.59cd5c6b.js",
    "revision": "aa62a93486f39f722cbe7c9af0dfe301"
  },
  {
    "url": "assets/js/17.fde2f347.js",
    "revision": "2c5c2dbe134f16293d1e02f43be2c982"
  },
  {
    "url": "assets/js/18.978597ed.js",
    "revision": "0c7d193f9481e0e703f17bcdb9459f31"
  },
  {
    "url": "assets/js/19.2984bbaa.js",
    "revision": "e0dd5667bb7f366673f2dff4304299e3"
  },
  {
    "url": "assets/js/app.aafb413e.js",
    "revision": "896029afd82eb131dae33b58e6a6e752"
  },
  {
    "url": "assets/js/layout-Layout.8bc38a86.js",
    "revision": "deaebce5e8adbb4e5ff571231284f77a"
  },
  {
    "url": "assets/js/layout-NotFound.34adb722.js",
    "revision": "e25ba245d5d251366b5eb0071c4b6b8e"
  },
  {
    "url": "assets/js/page-07fa8526.078869cc.js",
    "revision": "eb36218ecfd7196eb4a02c013a1ef695"
  },
  {
    "url": "assets/js/page-1301ab8a.f617d90c.js",
    "revision": "8ba9805ab082ab29deb7bde9b7748353"
  },
  {
    "url": "assets/js/page-2037549c.9fd883a0.js",
    "revision": "5d2f7802880f626142e0cf00b721a2ba"
  },
  {
    "url": "assets/js/page-25b298b6.d3c8baa8.js",
    "revision": "678ea38a59b1982367d16503e098f376"
  },
  {
    "url": "assets/js/page-3c041b9e.821532c5.js",
    "revision": "144c87c6557a2482618b77341868f532"
  },
  {
    "url": "assets/js/page-65eaf5e4.c5f94821.js",
    "revision": "b0702af7f878219b2b5900e02757fff9"
  },
  {
    "url": "assets/js/page-a2896314.3202729a.js",
    "revision": "d91261cc4f417dc903dbd64279f9d0eb"
  },
  {
    "url": "assets/js/page-a7e2470e.539ba6fc.js",
    "revision": "59968553942236b901e64da3e0197a2c"
  },
  {
    "url": "assets/js/page-e4dfaf94.dd1d50e1.js",
    "revision": "dc5e7535fff0b8a7101c7beaad3adbdd"
  },
  {
    "url": "assets/js/vendors~layout-Layout.44e93cba.js",
    "revision": "ce0c62b67b0d63ca66ba9d6f2d0bb5a2"
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
    "url": "doc/index.html",
    "revision": "1033de4620af19a23af5cc8a83be9b40"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "a2c25e4b545f73e1114ffac488c4961a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d5e93ac2ec658dee48c97af4d3f13ff5"
  },
  {
    "url": "index.html",
    "revision": "669b27b9e402a441f00bd4a84b6fc9f8"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "fbe7c9fb53df581ac4b7c86ea93e5cba"
  },
  {
    "url": "product/index.html",
    "revision": "6b5e4cdc67772f7c33cdef00b7ca97bb"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "d72f5631e20103a8ca5a3e248a29d43a"
  },
  {
    "url": "resources/index.html",
    "revision": "041ae697745f66b89ef7e72884511c59"
  },
  {
    "url": "support/index.html",
    "revision": "4b389d185da515edea309539d467a252"
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
