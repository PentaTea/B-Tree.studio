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
    "revision": "bd929bdf73507cce291d41cdf3a10dfa"
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
    "url": "assets/js/14.56e9ee3e.js",
    "revision": "23e03c5ac9d731fc71a6e045225763f1"
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
    "url": "assets/js/app.46ada278.js",
    "revision": "8b0378deb2c9413dc209a53aa946a987"
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
    "url": "assets/js/page-07fa8526.65980da7.js",
    "revision": "11aaf003931320e6a7a806bdc456ff7e"
  },
  {
    "url": "assets/js/page-1301ab8a.d5052d96.js",
    "revision": "a63fe09a1f28569732118dcc54a5f540"
  },
  {
    "url": "assets/js/page-2037549c.a103fa1e.js",
    "revision": "9bbd71555f4d804139f656d2d33d57e4"
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
    "url": "assets/js/page-65eaf5e4.a0eb4b00.js",
    "revision": "fcc841a9a888aca9b9901abc8825ace2"
  },
  {
    "url": "assets/js/page-a2896314.1b974f48.js",
    "revision": "12c9ea877bbf1ad58c58aac67376be11"
  },
  {
    "url": "assets/js/page-a7e2470e.6b2bffe0.js",
    "revision": "ff3eeb49b0289d1bdc71db88a9b9d8bc"
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
    "revision": "e96433966278d179431f081f31b39e73"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "2b8b9822b2ab7328cb8596cc11db624b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "429214bb690753822fc9ad580c1537e1"
  },
  {
    "url": "index.html",
    "revision": "58c43e5f55c1dc6bff2c61cd3a316a19"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "7de8cc63424096fe75e2d8367d328453"
  },
  {
    "url": "product/index.html",
    "revision": "4c01b2acb67ba5b065ef6673af0b8678"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "d4dd2e0c19b8c6b35e7d5d577bbc9651"
  },
  {
    "url": "resources/index.html",
    "revision": "228087fa3c58709ef29ff9959387954e"
  },
  {
    "url": "support/index.html",
    "revision": "6244d090d8ece43edc1a7a11853cfb22"
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
