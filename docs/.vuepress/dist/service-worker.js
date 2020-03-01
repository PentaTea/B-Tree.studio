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
    "revision": "890b8dc502290e2afea63bfe611a45c6"
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
    "url": "assets/js/app.efd493d5.js",
    "revision": "f94baa3f96d09c3d406aa67798faf9df"
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
    "url": "assets/js/page-2037549c.efcf5603.js",
    "revision": "33a876ddd471d311c42769ae38c32dc9"
  },
  {
    "url": "assets/js/page-25b298b6.86318192.js",
    "revision": "89299dca6a79c5964eed1eb4e42d7b9b"
  },
  {
    "url": "assets/js/page-3c041b9e.db1f6944.js",
    "revision": "f9bc5f94029898fe55859b1b20f52ba0"
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
    "revision": "f45474b03b955e8e9b653974705aba6e"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "fcaae2638f599ec2e44d37fdce752357"
  },
  {
    "url": "guide/team/index.html",
    "revision": "353669ab2652f32a320fab8809b67116"
  },
  {
    "url": "index.html",
    "revision": "16b3fba844505723f10cbfa295cfb5be"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "36dd7ca56ac0deef9ad982a47685d72e"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "cd6f2d084efee000b12b622f75fdfcd7"
  },
  {
    "url": "resources/index.html",
    "revision": "acd9705649c5dd6c052db9f383e027b1"
  },
  {
    "url": "support/index.html",
    "revision": "0fdc126354263cdd075b81dd6f841760"
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
