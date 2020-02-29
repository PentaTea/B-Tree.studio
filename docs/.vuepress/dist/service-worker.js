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
    "revision": "cf799655e56ca69108561aa876d2d20d"
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
    "url": "assets/js/12.46c6e951.js",
    "revision": "f6c7fc79091af745d93204b73461da94"
  },
  {
    "url": "assets/js/13.b3be90cd.js",
    "revision": "585fdd3c05ccbb3f9666fed2cfe11fad"
  },
  {
    "url": "assets/js/14.811c8d47.js",
    "revision": "ad5ba649513c530951e791bdb7478bfe"
  },
  {
    "url": "assets/js/15.6bf0f1bd.js",
    "revision": "a03f6278e74be44a1c7617420ce5f881"
  },
  {
    "url": "assets/js/app.53a9cf0d.js",
    "revision": "2bac6bdc9c77f0f750e4efb2ca0f8b71"
  },
  {
    "url": "assets/js/layout-NotFound.27f9d9c5.js",
    "revision": "dc4ff77ae0b03af93578e744166ea7f9"
  },
  {
    "url": "assets/js/page-1301ab8a.b7da42da.js",
    "revision": "102d40bce1775ba5b3bbbd7b5034f4ee"
  },
  {
    "url": "assets/js/page-2037549c.7537b4f3.js",
    "revision": "f1014520f4bfb64b6ebb488597681cce"
  },
  {
    "url": "assets/js/page-25b298b6.80d1edb9.js",
    "revision": "25a4fa36e162122f1b65dd85f96074ed"
  },
  {
    "url": "assets/js/page-3c041b9e.74ab85a9.js",
    "revision": "9b908300cc8d108ade4dd403bade3733"
  },
  {
    "url": "assets/js/page-65eaf5e4.c744406d.js",
    "revision": "670bc7ab6642eb93cf79913bd7e13bef"
  },
  {
    "url": "assets/js/page-a2896314.63a31138.js",
    "revision": "d6640b299196945f50bd3626a1fa0961"
  },
  {
    "url": "assets/js/page-a7e2470e.c27abd7d.js",
    "revision": "55278f9b184c9f74ebcc7af70e26e270"
  },
  {
    "url": "assets/js/page-e4dfaf94.a7dbebb6.js",
    "revision": "69f7b02e3c1bc90d57cbd3713f059293"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7a9cbfad.js",
    "revision": "5a1966fbbf6e2c54213da6e686832921"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/index.html",
    "revision": "29765b47ed7dd5688546df3f79caccad"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "dfc94a9efb984fa857b4cf07739f86ff"
  },
  {
    "url": "guide/team/index.html",
    "revision": "cbd8f47d2badb906c41fc3ada0600639"
  },
  {
    "url": "index.html",
    "revision": "d39c78352670d812b360cca273c32a5d"
  },
  {
    "url": "product/index.html",
    "revision": "d4a40398698a0a0739ef4eed3d76e5b2"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "97cf97a40ede54d0c0d8a212894d57db"
  },
  {
    "url": "resources/index.html",
    "revision": "6ff628e5a41fbf4afb08c730481b8d31"
  },
  {
    "url": "support/index.html",
    "revision": "0609218a8066c894592d6eae4e4e7f5e"
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
