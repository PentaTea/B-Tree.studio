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
    "revision": "c84f1b4761fea3588ccef2d055e0eb81"
  },
  {
    "url": "assets/css/0.styles.26b39345.css",
    "revision": "10654cb27c7e54a1bb7b9dd71d05a1d3"
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
    "url": "assets/js/14.0024c6a1.js",
    "revision": "6b584ec6420855956db53c83e69dc9dc"
  },
  {
    "url": "assets/js/15.dd60868f.js",
    "revision": "785a9a21edf1a471cc4a84e5e70648ab"
  },
  {
    "url": "assets/js/16.47eb1bdc.js",
    "revision": "0863a5357f81fa903d8c3093190243d0"
  },
  {
    "url": "assets/js/17.6e602054.js",
    "revision": "5a41981b9a1c46546aad82af6eb856e3"
  },
  {
    "url": "assets/js/18.39e56552.js",
    "revision": "a4c387214cae73c477695782322f3fab"
  },
  {
    "url": "assets/js/19.7d2963d1.js",
    "revision": "701c4ff4a53179a834ea5d9417630147"
  },
  {
    "url": "assets/js/20.ffa2d32d.js",
    "revision": "2fe895bfcd72e503f94781c5d199e331"
  },
  {
    "url": "assets/js/app.a24e00e6.js",
    "revision": "4e7d8c8ba7c7fc3d9606b61826649e1a"
  },
  {
    "url": "assets/js/layout-Layout.c4281ee5.js",
    "revision": "735dcaa79a2051cf48d9fc963e5d8c07"
  },
  {
    "url": "assets/js/layout-NotFound.1408db16.js",
    "revision": "180c427a531bdda811d6f8a50236852a"
  },
  {
    "url": "assets/js/page-07fa8526.825ec42f.js",
    "revision": "20a06b29e7bb07b48ff18c1140149d94"
  },
  {
    "url": "assets/js/page-1301ab8a.bf85879b.js",
    "revision": "25fdb0c052cc9e09cd8f6379e0b6eb60"
  },
  {
    "url": "assets/js/page-2037549c.b812d059.js",
    "revision": "46cb39e8f7c07fcb6d9c636b501ea130"
  },
  {
    "url": "assets/js/page-25b298b6.a13a899a.js",
    "revision": "71ab15f442a1a2d5766a17a0e58293f0"
  },
  {
    "url": "assets/js/page-3c041b9e.1bee23a6.js",
    "revision": "8d6d3c5aaaa2dafac8cc576dda38649c"
  },
  {
    "url": "assets/js/page-65eaf5e4.a944bf70.js",
    "revision": "3fdfdba429e9eb1f5e5e64034afe0b28"
  },
  {
    "url": "assets/js/page-a2896314.38bc4747.js",
    "revision": "6520ed0de22bb50626f78d615f9896b2"
  },
  {
    "url": "assets/js/page-a7e2470e.63644897.js",
    "revision": "dcbf5dacd8f00d029f1960ea4af8d19a"
  },
  {
    "url": "assets/js/page-e4dfaf94.1ee1112b.js",
    "revision": "6cffbc7dfc09028759c7d38eeda0a062"
  },
  {
    "url": "assets/js/vendors~layout-Layout.35400599.js",
    "revision": "d64cbb0aa36dec91406cd20c49cc7734"
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
    "revision": "01595f2a2d44399a5e761c9aa083aeea"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "0c4df3f7c024ae0d4ce2093c02a607a3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "fc4b0504ee00adf71d4d480920346c98"
  },
  {
    "url": "index.html",
    "revision": "e46ed5b3692e9180976cac03db3b20a7"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "fb78b7ddcf944623d6d100f9b6680281"
  },
  {
    "url": "product/index.html",
    "revision": "18568e456cbc682e22d181755f396137"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "63c02f391f66930f4746c942ba50d8ca"
  },
  {
    "url": "resources/index.html",
    "revision": "b9618d8e485fe104a8c0a05ecb213c79"
  },
  {
    "url": "support/index.html",
    "revision": "93dbd160ad161178cbdda1ec76859313"
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
