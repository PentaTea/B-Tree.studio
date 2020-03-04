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
    "revision": "116008b29127f6c3c662ce3ee3cb68f9"
  },
  {
    "url": "assets/css/0.styles.ab99be11.css",
    "revision": "6c34c10f024be3d8daa25bd4e150fdc7"
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
    "url": "assets/js/14.3f55c852.js",
    "revision": "db7bbd87108174afa306ded63bba4124"
  },
  {
    "url": "assets/js/15.afce1728.js",
    "revision": "db11a0e528f4ec37943698c12be6f9b5"
  },
  {
    "url": "assets/js/16.0965b341.js",
    "revision": "04fc780834c060e684fab5233fbf0845"
  },
  {
    "url": "assets/js/17.f6912fc3.js",
    "revision": "3b20dd7baae627abdef624eb8a430735"
  },
  {
    "url": "assets/js/18.978597ed.js",
    "revision": "0c7d193f9481e0e703f17bcdb9459f31"
  },
  {
    "url": "assets/js/19.2fc77657.js",
    "revision": "60298c7efaaa2e6715b52ddf5686ca0b"
  },
  {
    "url": "assets/js/app.f2ece89b.js",
    "revision": "34b96dadd13e0e2425fb393edb444f85"
  },
  {
    "url": "assets/js/layout-Layout.8f2ab101.js",
    "revision": "c0b77299ed70ba17052c4b7665a0fb65"
  },
  {
    "url": "assets/js/layout-NotFound.993919dd.js",
    "revision": "abfd267459d9e96eb6fea2e21f1ad6e9"
  },
  {
    "url": "assets/js/page-07fa8526.cfbcafb6.js",
    "revision": "ba3e044a1b7d6dffbfcd5a108afc7740"
  },
  {
    "url": "assets/js/page-1301ab8a.bf85879b.js",
    "revision": "25fdb0c052cc9e09cd8f6379e0b6eb60"
  },
  {
    "url": "assets/js/page-2037549c.9fd883a0.js",
    "revision": "5d2f7802880f626142e0cf00b721a2ba"
  },
  {
    "url": "assets/js/page-25b298b6.49488d14.js",
    "revision": "36ce6045c92ba169a90d0e7552865dda"
  },
  {
    "url": "assets/js/page-3c041b9e.821532c5.js",
    "revision": "144c87c6557a2482618b77341868f532"
  },
  {
    "url": "assets/js/page-65eaf5e4.47be93f4.js",
    "revision": "5f35ae74c1c3350ea82d2297d3938ae0"
  },
  {
    "url": "assets/js/page-a2896314.9e753d48.js",
    "revision": "674793d744f118d9aa9fc5a9aa3d430f"
  },
  {
    "url": "assets/js/page-a7e2470e.a2cb0a24.js",
    "revision": "5048b1fd1360034c751167db5b3b3970"
  },
  {
    "url": "assets/js/page-e4dfaf94.0b75d91d.js",
    "revision": "a0eb222187d780c2cf0359d5efd6b92a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.afafe988.js",
    "revision": "c5d9162e54c5985439512341a977d64f"
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
    "revision": "1e214e86ed0e66b0bf3de072ebe4dec5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "c0e2c7538305a7db815a78a0db24f642"
  },
  {
    "url": "guide/team/index.html",
    "revision": "db685f4639ac156be957343cb8f5a541"
  },
  {
    "url": "index.html",
    "revision": "0708810f9eead4d7e5354b3dffa066ae"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "032f99a1f9c5366f53e2461169e1b103"
  },
  {
    "url": "product/index.html",
    "revision": "7ce9c3ae46cd16d9747776e78a71a818"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "2b67018db3119d0282560a937c457e48"
  },
  {
    "url": "resources/index.html",
    "revision": "0a83ef9fa487538fd11bea96fa0ea94b"
  },
  {
    "url": "support/index.html",
    "revision": "f803ad8d169f02e59aa34e893759c887"
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
