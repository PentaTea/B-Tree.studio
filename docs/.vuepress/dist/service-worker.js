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
    "revision": "2afba97a9779f0172251d7ca2c245e40"
  },
  {
    "url": "assets/css/0.styles.4c54f2e8.css",
    "revision": "a3833b6d9f30fe988d85fa992e2bd832"
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
    "url": "assets/js/14.4c69ae7d.js",
    "revision": "50a4eaa5c7f96505308808234fc5bc50"
  },
  {
    "url": "assets/js/15.f474ce9b.js",
    "revision": "32acde6a652e2ca0cb2fa25ba754e4e9"
  },
  {
    "url": "assets/js/16.3d8e25a4.js",
    "revision": "f927daa4c7b5764c92b413466755d7d6"
  },
  {
    "url": "assets/js/17.8fc524c1.js",
    "revision": "b5335889dd6e6007695d7e2b3a4dee51"
  },
  {
    "url": "assets/js/18.0e69692f.js",
    "revision": "d433e366de00d5ad73b3a6462a0d4547"
  },
  {
    "url": "assets/js/19.1e248490.js",
    "revision": "882b78f2813d03de2aeae088e6f70d3e"
  },
  {
    "url": "assets/js/20.e40597e1.js",
    "revision": "46f1c8cedeb651d56771c5ddf7319959"
  },
  {
    "url": "assets/js/21.9c07045c.js",
    "revision": "86e25bf9ead6de673716ecfb050db807"
  },
  {
    "url": "assets/js/app.4b337dbc.js",
    "revision": "c6b98078069179d6e75d4c901fb57277"
  },
  {
    "url": "assets/js/layout-Layout.9df51d81.js",
    "revision": "6bbbaa449590c8ae740b33e11270d30d"
  },
  {
    "url": "assets/js/layout-NotFound.afcbf010.js",
    "revision": "682e0430fb8f8aec56cea823beb01dd2"
  },
  {
    "url": "assets/js/page-07fa8526.05f0e766.js",
    "revision": "0862520997f9a1ec2d877e28a1d47c47"
  },
  {
    "url": "assets/js/page-1301ab8a.6d62541e.js",
    "revision": "b46b1a76588685aeefbe1bba7f0a2933"
  },
  {
    "url": "assets/js/page-2037549c.104b22d5.js",
    "revision": "1b0e3f6e679394b4485826cf9f3f45a8"
  },
  {
    "url": "assets/js/page-25b298b6.ad109a50.js",
    "revision": "5a69ad1a1dd79c9446b8664cb9a2586c"
  },
  {
    "url": "assets/js/page-3c041b9e.1ce297fd.js",
    "revision": "f635fae1606229c4abb97336ff1b61b2"
  },
  {
    "url": "assets/js/page-65eaf5e4.a0eb4b00.js",
    "revision": "fcc841a9a888aca9b9901abc8825ace2"
  },
  {
    "url": "assets/js/page-a2896314.c2077365.js",
    "revision": "0bb7e3c7c829691e91c7ca2300db5a9e"
  },
  {
    "url": "assets/js/page-a7e2470e.dc7a5157.js",
    "revision": "002e682d9efcddf31e92a4ac6f2728a8"
  },
  {
    "url": "assets/js/page-e4dfaf94.54f2ab20.js",
    "revision": "bd3b988ca5881f86e809915cc72b3e80"
  },
  {
    "url": "assets/js/vendors~layout-Layout.1f9f522e.js",
    "revision": "679dd0a4ddb1c7a6370bb3db2609f005"
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
    "revision": "8aa07e64641532191b4de3698fc9ac3a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e928295e7ddb7a52214440d100bb4664"
  },
  {
    "url": "guide/team/index.html",
    "revision": "0004634784fd44305c8dbf61a0630667"
  },
  {
    "url": "index.html",
    "revision": "52bb9fef0aa86d944e8bc0925086e0aa"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "44c12005958264e972ac66dc96cc93c5"
  },
  {
    "url": "product/index.html",
    "revision": "50183059475859dbb308522cc3c478cf"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "8518ef20847888441e55e0d16f4f9e9a"
  },
  {
    "url": "resources/index.html",
    "revision": "6c8d0c9cbeb7bb5e8afa9b44a1a03a7f"
  },
  {
    "url": "support/index.html",
    "revision": "2b226f5db4eb82281f884050254e0ee0"
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
