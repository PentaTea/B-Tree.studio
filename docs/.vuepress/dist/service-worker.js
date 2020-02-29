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
    "revision": "b920d54a48ceb58fa59d3dff3aba9c09"
  },
  {
    "url": "assets/css/0.styles.c9785e1c.css",
    "revision": "687377e4ff1bc824f5c59c953e6e7199"
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
    "url": "assets/js/13.f3a4e629.js",
    "revision": "71b3ec09ce87f79710e77da86f60a38b"
  },
  {
    "url": "assets/js/14.3e1c9d14.js",
    "revision": "db5e50c03c591e31dfde9a6f7171650f"
  },
  {
    "url": "assets/js/15.411dfe16.js",
    "revision": "2e5a6ac1ecfb43dad1aa7363346b9749"
  },
  {
    "url": "assets/js/16.27581ee1.js",
    "revision": "00ed1dd66a017f0e991a20d945b1a5a8"
  },
  {
    "url": "assets/js/app.e360d88e.js",
    "revision": "8b0d02b97ba556a3782af19f98b187d7"
  },
  {
    "url": "assets/js/layout-Layout.b66f4dd5.js",
    "revision": "11618ec2109d0bb25af5bf2962a47a54"
  },
  {
    "url": "assets/js/layout-NotFound.802af2d7.js",
    "revision": "c1075a9f2620913650b7715076b58527"
  },
  {
    "url": "assets/js/page-1301ab8a.d1306a8b.js",
    "revision": "e01e192838d6e580cc6e1f36e215a676"
  },
  {
    "url": "assets/js/page-2037549c.a3a95f98.js",
    "revision": "d9e29b163ff05b6e4d45259d57adb13c"
  },
  {
    "url": "assets/js/page-25b298b6.e257e7c4.js",
    "revision": "d6c4a3b66671a6ca7f6e058262d8b201"
  },
  {
    "url": "assets/js/page-3c041b9e.2640c3d0.js",
    "revision": "37ab101f4a19b33120eeb84929fb8ef4"
  },
  {
    "url": "assets/js/page-65eaf5e4.60a412c5.js",
    "revision": "5d489612d3073cf7840fb0f9e5d0c8a5"
  },
  {
    "url": "assets/js/page-a2896314.b358a99b.js",
    "revision": "a3ed0ade4f790e20220654cf1d9a9805"
  },
  {
    "url": "assets/js/page-a7e2470e.19ad077b.js",
    "revision": "a58d0471df9ba330a7bf2498c5d374c7"
  },
  {
    "url": "assets/js/page-e4dfaf94.229084f8.js",
    "revision": "6a26197a7d5b3d256c70d48e0b409803"
  },
  {
    "url": "assets/js/vendors~layout-Layout.43f911cf.js",
    "revision": "2044dbb2ca963d25f4cf81432aff2c76"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/index.html",
    "revision": "419cf36cc1882216a1be5a5564be4df7"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "0ec2f99296a62159e1ac0b30fad1f0f4"
  },
  {
    "url": "guide/team/index.html",
    "revision": "cb08a749326d4a75ecddbfd496701d85"
  },
  {
    "url": "index.html",
    "revision": "cfdf099f0d043710a97312b0ece6dd4f"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "1786dcf94332ad7204d12a56b9898bc3"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "4268b1ec9f2c289191dc5b371955e93b"
  },
  {
    "url": "resources/index.html",
    "revision": "e995dff57993e6d5e58d43f8eb1a7676"
  },
  {
    "url": "support/index.html",
    "revision": "10d9070ecd3248ae3a08482f4ec3f95e"
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
