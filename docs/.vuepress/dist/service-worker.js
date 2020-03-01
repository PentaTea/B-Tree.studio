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
    "revision": "2fb523acb13df9cbc0df80ba457577a8"
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
    "url": "assets/js/app.723db289.js",
    "revision": "2f3845aa1e0bba2ace46af3d3f70e32e"
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
    "url": "assets/js/page-25b298b6.3ea01ada.js",
    "revision": "e6eec884bf44644fb0230216a0b5b2bd"
  },
  {
    "url": "assets/js/page-3c041b9e.db1f6944.js",
    "revision": "f9bc5f94029898fe55859b1b20f52ba0"
  },
  {
    "url": "assets/js/page-65eaf5e4.028d1962.js",
    "revision": "f49c12a4131572da0a6ac1f6cbc3f1c8"
  },
  {
    "url": "assets/js/page-a2896314.62cdc6fb.js",
    "revision": "ea417ca720ef45c4bd717ced6f770427"
  },
  {
    "url": "assets/js/page-a7e2470e.78f1554d.js",
    "revision": "778b62c6a99bd613fe5159721a77f463"
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
    "revision": "1ba8cc337aef704a9abf085d78ee9b0c"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "f124baa380893c0e7990b6bfa49ed7f6"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4644393a280e371ad57e83ae9ed4c45b"
  },
  {
    "url": "index.html",
    "revision": "13f302082f749c598d733c4ef8840928"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "0c9a7fdfea635acf33a8ec60fa6a0153"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "4c41b95cd97a5bf9b1de28cc10fc8e25"
  },
  {
    "url": "resources/index.html",
    "revision": "b6c99c86684d2acb24f9731611204ea9"
  },
  {
    "url": "support/index.html",
    "revision": "c2eed53618a55f8a89a8f4a8fc5f4e3f"
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
