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
    "revision": "c55411f889639a9e3c9b4dae27ce018b"
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
    "url": "assets/js/app.8eb81f4e.js",
    "revision": "acb215c335df3e9a618e2f6cd7f28ccd"
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
    "url": "assets/js/page-1301ab8a.5b7d5094.js",
    "revision": "46d17f8848d92e7c0016e7f90ddbb994"
  },
  {
    "url": "assets/js/page-2037549c.fd80b91c.js",
    "revision": "efdb45c6e133a027fe6d3c617bfa54d8"
  },
  {
    "url": "assets/js/page-25b298b6.86318192.js",
    "revision": "89299dca6a79c5964eed1eb4e42d7b9b"
  },
  {
    "url": "assets/js/page-3c041b9e.42b38c93.js",
    "revision": "bad3e5382d49fd4c60e70adb0ad68e50"
  },
  {
    "url": "assets/js/page-65eaf5e4.383643bd.js",
    "revision": "9cf315faa8879a6c8736d20b406f3fd3"
  },
  {
    "url": "assets/js/page-a2896314.62cdc6fb.js",
    "revision": "ea417ca720ef45c4bd717ced6f770427"
  },
  {
    "url": "assets/js/page-a7e2470e.7551ed29.js",
    "revision": "f2e3912f3939316311a456712bfc42a9"
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
    "revision": "c27b8e9b619de13724f99893bd7a8b50"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "155219fc25f28f1eab67ddd49b48342d"
  },
  {
    "url": "guide/team/index.html",
    "revision": "0180d60d5c606c3dfc8721c8ef99c323"
  },
  {
    "url": "index.html",
    "revision": "7757e7ca5ac043ffaa1fa95e2a156ae1"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "338b6d1ec515cc74334fbba62b4ad03f"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "4c78476d7a43cd933102df3517f59ec8"
  },
  {
    "url": "resources/index.html",
    "revision": "8d06117c3a94b34febbb499bc5571fdb"
  },
  {
    "url": "support/index.html",
    "revision": "11af0c2bf5f407c4802291044baf30c4"
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
