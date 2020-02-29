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
    "revision": "2010f7347a71e02e92a2c7d803465d3f"
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
    "url": "assets/js/app.8e48e06a.js",
    "revision": "68e5db2ba129786ae443ae6901d9423a"
  },
  {
    "url": "assets/js/layout-Layout.b02971da.js",
    "revision": "c7aa3e4054320d8dfebabcbeefcedc99"
  },
  {
    "url": "assets/js/layout-NotFound.2a030df4.js",
    "revision": "393a5253ded3fe611ed27ee17d1c67e7"
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
    "url": "assets/js/page-3c041b9e.db1f6944.js",
    "revision": "f9bc5f94029898fe55859b1b20f52ba0"
  },
  {
    "url": "assets/js/page-65eaf5e4.74907290.js",
    "revision": "ac58781745016d81244d25c4acb6716c"
  },
  {
    "url": "assets/js/page-a2896314.62cdc6fb.js",
    "revision": "ea417ca720ef45c4bd717ced6f770427"
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
    "url": "doc/index.html",
    "revision": "2778ecf747582acb0764824ab813409b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "898e520d1b914b3f6da8238e86f1df62"
  },
  {
    "url": "guide/team/index.html",
    "revision": "b85d7479a02112664e145d3144085073"
  },
  {
    "url": "index.html",
    "revision": "408bc9b0626868886108a39c068c4a61"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "c45a5e5a3d8b8dd2edb5ec12a29f84e3"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "b5f60501dd3afe757da1dadd550d72f8"
  },
  {
    "url": "resources/index.html",
    "revision": "5e0c3adbae94b0eee6edc15a06469f4c"
  },
  {
    "url": "support/index.html",
    "revision": "ac635baa8426b54d1f08debbf682038f"
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
