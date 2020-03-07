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
    "revision": "3e07d3945dfcfecc44bacdc56fe7e6a6"
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
    "url": "assets/js/14.e396cd2a.js",
    "revision": "3bb06a078fadc78900fa28a7b6e087a1"
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
    "url": "assets/js/19.f8ca8c85.js",
    "revision": "6c56b4a55de6aa2db804488ef83e4182"
  },
  {
    "url": "assets/js/20.e40597e1.js",
    "revision": "46f1c8cedeb651d56771c5ddf7319959"
  },
  {
    "url": "assets/js/21.674205b1.js",
    "revision": "ae7782b04eb05e9e35b91477de36642d"
  },
  {
    "url": "assets/js/app.10374cd4.js",
    "revision": "bb75aea34877739fb5d413b973a90391"
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
    "url": "assets/js/page-07fa8526.f112222a.js",
    "revision": "3a3bf70fa10a4b923da113326568a1ff"
  },
  {
    "url": "assets/js/page-1301ab8a.6d62541e.js",
    "revision": "b46b1a76588685aeefbe1bba7f0a2933"
  },
  {
    "url": "assets/js/page-2037549c.62aa6b60.js",
    "revision": "bbee30ae0120b1477ad34c012f475034"
  },
  {
    "url": "assets/js/page-25b298b6.a7a922d4.js",
    "revision": "32acb3b793220cfb594cdfa7740ffa14"
  },
  {
    "url": "assets/js/page-3c041b9e.20476d23.js",
    "revision": "30cde35013bbb883f1e01b3797f70b3d"
  },
  {
    "url": "assets/js/page-65eaf5e4.61146cf5.js",
    "revision": "c9fd5bfcbe485e77914d48cbf1e10123"
  },
  {
    "url": "assets/js/page-a2896314.a741fa4f.js",
    "revision": "62b82dca5787747b2b78e2573d49ca4a"
  },
  {
    "url": "assets/js/page-a7e2470e.63644897.js",
    "revision": "dcbf5dacd8f00d029f1960ea4af8d19a"
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
    "revision": "1bc3559ba1c40edf7ff2017942cbe838"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "fc377eceef34dd59e69b0c06f3ca2462"
  },
  {
    "url": "guide/team/index.html",
    "revision": "7f6231b3d69d0cafcb51179771dbdb82"
  },
  {
    "url": "index.html",
    "revision": "5a677e040b83e3061af9a627f92c0d61"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "effdc8c537f3f70379cefd0c3964eb2e"
  },
  {
    "url": "product/index.html",
    "revision": "b5c0f34d2bbfe0e1632bf0036ca1ba1e"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "0f2838020c6050e3f910417e423ab8f4"
  },
  {
    "url": "resources/index.html",
    "revision": "1500f624db3a3e7ed513c95e1e17d381"
  },
  {
    "url": "support/index.html",
    "revision": "27e8f4705f1abebec7e221d57e92c1a4"
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
