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
    "revision": "9e984a0aa3770ec23b379d8b777482df"
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
    "url": "assets/js/app.0998f4b3.js",
    "revision": "13053346ac544be5d935280b494e453c"
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
    "url": "assets/js/page-2037549c.fd80b91c.js",
    "revision": "efdb45c6e133a027fe6d3c617bfa54d8"
  },
  {
    "url": "assets/js/page-25b298b6.38f1bda1.js",
    "revision": "991151928e87a6ef8213516dd55d9f4d"
  },
  {
    "url": "assets/js/page-3c041b9e.2640c3d0.js",
    "revision": "37ab101f4a19b33120eeb84929fb8ef4"
  },
  {
    "url": "assets/js/page-65eaf5e4.9e58e70c.js",
    "revision": "a56ecd3628c6ea6bd8b999b4df1f4641"
  },
  {
    "url": "assets/js/page-a2896314.9e6d1a81.js",
    "revision": "e406188e5f66c10fa9e87b40c4cd739b"
  },
  {
    "url": "assets/js/page-a7e2470e.7560a6fb.js",
    "revision": "135dee0e04e7c42b6d157095a64f2299"
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
    "revision": "47a86a2f5d7df988608a1c914570dec5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "fe667a1c1ec7a7f37789369f48c6da7c"
  },
  {
    "url": "guide/team/index.html",
    "revision": "74ce7f60cf12304d3b3d0c140b8ec900"
  },
  {
    "url": "index.html",
    "revision": "7bf9482d12cd7a0c6d1192128d8f610d"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/index.html",
    "revision": "3e8cdbdf1151f656a02b4a8953915f3c"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "f693202e0568a26fbba7100a6fb66325"
  },
  {
    "url": "resources/index.html",
    "revision": "f57cbeb47f01a67894d676a832ecfd96"
  },
  {
    "url": "support/index.html",
    "revision": "61603777616a29092d828a1eda301b49"
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
