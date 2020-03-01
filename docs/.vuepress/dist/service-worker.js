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
    "revision": "b70c79d5020a84c7db7850b3eb4297cd"
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
    "url": "assets/js/app.fa22b275.js",
    "revision": "c5fa0518a63a724978c41009e36ba3b7"
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
    "url": "assets/js/page-2037549c.d8fb84cf.js",
    "revision": "5d447490d8f9d565d57d39395ca023f5"
  },
  {
    "url": "assets/js/page-25b298b6.86318192.js",
    "revision": "89299dca6a79c5964eed1eb4e42d7b9b"
  },
  {
    "url": "assets/js/page-3c041b9e.be7b55bd.js",
    "revision": "c8bbdcdeb7cfab48a49ad47a93a6ced2"
  },
  {
    "url": "assets/js/page-65eaf5e4.028d1962.js",
    "revision": "f49c12a4131572da0a6ac1f6cbc3f1c8"
  },
  {
    "url": "assets/js/page-a2896314.af7a6e13.js",
    "revision": "78984ca90f3e29292bb56dd26e66b0a5"
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
    "revision": "8bd83e8c4877b450723dd52bcecfbc1a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "b69da44402f857c7c4a9c9d78a9f969f"
  },
  {
    "url": "guide/team/index.html",
    "revision": "38569389a05887a317d6bbfc24fedc66"
  },
  {
    "url": "index.html",
    "revision": "d898475189aeb5eadeb8ab6e7a85945f"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "a499eea8c760b52e7b676205685b09cb"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "55159dc2320f984e5b66dddc41df11ef"
  },
  {
    "url": "resources/index.html",
    "revision": "bde9c85b9ec68f72440b949389edcc91"
  },
  {
    "url": "support/index.html",
    "revision": "305763741074f7a499dbb6112daa458f"
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
