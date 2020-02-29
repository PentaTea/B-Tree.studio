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
    "revision": "efdd0afd47155968e511850a4f98fe84"
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
    "url": "assets/js/app.f21558f9.js",
    "revision": "ae985c5e3074d8800635689267baa9fc"
  },
  {
    "url": "assets/js/layout-NotFound.27f9d9c5.js",
    "revision": "dc4ff77ae0b03af93578e744166ea7f9"
  },
  {
    "url": "assets/js/page-1301ab8a.54579d09.js",
    "revision": "d6d9027086c4182220b6a0cc43621b68"
  },
  {
    "url": "assets/js/page-2037549c.ef5010e4.js",
    "revision": "31f6c2d1228d789c44865555694b63a2"
  },
  {
    "url": "assets/js/page-25b298b6.54877bf2.js",
    "revision": "0fb9bc684ab2fb63117329f5f3a73bfe"
  },
  {
    "url": "assets/js/page-3c041b9e.ee98d9c9.js",
    "revision": "fd6a603ea5ca3f90229ec2ed110cf54e"
  },
  {
    "url": "assets/js/page-65eaf5e4.cbe32267.js",
    "revision": "0cdf0d82a52299ac356bf4baeb2e07a5"
  },
  {
    "url": "assets/js/page-a2896314.63a31138.js",
    "revision": "d6640b299196945f50bd3626a1fa0961"
  },
  {
    "url": "assets/js/page-a7e2470e.385b2a66.js",
    "revision": "2e2926e67b8eabec1448ebf94da98658"
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
    "revision": "82feff25470beadced26e221887aef4b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "f37bfe41a1ba2c0ce056fb47476ef574"
  },
  {
    "url": "guide/team/index.html",
    "revision": "30d8d288678aaec5b0e5df5b909a4aad"
  },
  {
    "url": "index.html",
    "revision": "bb89d7e5c7655a257196baaf21434066"
  },
  {
    "url": "product/index.html",
    "revision": "2ad2e0f94ea355088917c04d8f961385"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "27e671726701cd817dd714a51f908eb6"
  },
  {
    "url": "resources/index.html",
    "revision": "e1161cadc013152b509dd027dc71df34"
  },
  {
    "url": "support/index.html",
    "revision": "eee7c5534097f899935556bc3b9219ff"
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
