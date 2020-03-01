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
    "revision": "efb094434a13aad49d29fd52eaeebd61"
  },
  {
    "url": "assets/css/0.styles.7fa40efe.css",
    "revision": "c731673df4a2b6f6cd8b40211ae8ac2c"
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
    "url": "assets/js/13.cdad3346.js",
    "revision": "720d1632e1d3c1f35a59e8a46cf90926"
  },
  {
    "url": "assets/js/14.836ce795.js",
    "revision": "11015bf67aa486cb0f310a864481a494"
  },
  {
    "url": "assets/js/15.1ac29fe5.js",
    "revision": "108fb07aeec197b9806f00e5f553e1e8"
  },
  {
    "url": "assets/js/16.27581ee1.js",
    "revision": "00ed1dd66a017f0e991a20d945b1a5a8"
  },
  {
    "url": "assets/js/app.432793b7.js",
    "revision": "f817318f7395176abf00aeea552b7ed2"
  },
  {
    "url": "assets/js/layout-Layout.5d57c049.js",
    "revision": "1c926bc6be639967409822e52b9de462"
  },
  {
    "url": "assets/js/layout-NotFound.bce47c67.js",
    "revision": "9d0ccbeb3dd35980e9655fab0b8b6a65"
  },
  {
    "url": "assets/js/page-1301ab8a.e9f03a4e.js",
    "revision": "db6ba34aa9811e393b187dc8a1964a85"
  },
  {
    "url": "assets/js/page-2037549c.7456c9ed.js",
    "revision": "dfdacf2e265d3724dc5dd604579c8a88"
  },
  {
    "url": "assets/js/page-25b298b6.cd78b2fd.js",
    "revision": "3d28cc7659e5fcf7bb2d5b8c52343955"
  },
  {
    "url": "assets/js/page-3c041b9e.ba2dcce4.js",
    "revision": "a152b2fdfd46d2ce4c7315544fcda568"
  },
  {
    "url": "assets/js/page-65eaf5e4.d57fa7ef.js",
    "revision": "e878e46ec3690bbd07a3e6a48b4039c8"
  },
  {
    "url": "assets/js/page-a2896314.164d88db.js",
    "revision": "bb38e793b86168ac360330e0cddb0b95"
  },
  {
    "url": "assets/js/page-a7e2470e.1730e677.js",
    "revision": "0d5e742b28a564c43cc28b574e99ad95"
  },
  {
    "url": "assets/js/page-e4dfaf94.4ba12696.js",
    "revision": "350ff8f33e2224ff89166d733373c95a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b717d84c.js",
    "revision": "edcaf7829be9718e93667703b0b2dc90"
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
    "revision": "c8026bfb57f3897219b5ff4777595ea2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "a24cb3333b109da949944c0e8ec102f3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "41f6073037b17f762c71b0851d1b4b82"
  },
  {
    "url": "index.html",
    "revision": "901cd4946c8b5493ea3741669852718b"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "3dde68a35e0e6a8a4eb02b4c7c3e737b"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "7c0817609251cdd5b20b1044cf6896eb"
  },
  {
    "url": "resources/index.html",
    "revision": "1c7989954ff4d22f0e7c41a8d4c2b842"
  },
  {
    "url": "support/index.html",
    "revision": "bcaed81b7e52bbfd9cbc11a496efda2f"
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
