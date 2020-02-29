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
    "revision": "987de122eb0a325960698b715e56c528"
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
    "url": "assets/js/app.52fe49d0.js",
    "revision": "b4a30f7fed8ba7e1fba28674a54aeedf"
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
    "url": "assets/js/page-1301ab8a.affae8cd.js",
    "revision": "114588094d9ecbbdbacfc2656ba171c9"
  },
  {
    "url": "assets/js/page-2037549c.fd80b91c.js",
    "revision": "efdb45c6e133a027fe6d3c617bfa54d8"
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
    "url": "assets/js/page-65eaf5e4.383643bd.js",
    "revision": "9cf315faa8879a6c8736d20b406f3fd3"
  },
  {
    "url": "assets/js/page-a2896314.164d88db.js",
    "revision": "bb38e793b86168ac360330e0cddb0b95"
  },
  {
    "url": "assets/js/page-a7e2470e.39259add.js",
    "revision": "9d409a900e864f21aea2616f53097c80"
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
    "url": "doc/index.html",
    "revision": "b02657fe0209c35b69dc0e40a592accb"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "8ff9324bd3ee08bbac061e0a56c75f5f"
  },
  {
    "url": "guide/team/index.html",
    "revision": "18a3308a23735bebfc69ec43dc2e51be"
  },
  {
    "url": "index.html",
    "revision": "797cd595d6006bd4eb81d4ef3cce8da3"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "ec1b5157174cf0207064723737e55b16"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "bd1d41d1d18cb251e21e320777db1260"
  },
  {
    "url": "resources/index.html",
    "revision": "c88e4eaf1373a628194114f75855e687"
  },
  {
    "url": "support/index.html",
    "revision": "bd2397174c32dc8cc8ab29ca36030d2f"
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
