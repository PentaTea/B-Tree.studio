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
    "revision": "edb8cb6506173f76268a839d95ede36f"
  },
  {
    "url": "assets/css/0.styles.1469f1e9.css",
    "revision": "656b1b05f5237d19c350a6ca901c67fb"
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
    "url": "assets/js/14.63f056cf.js",
    "revision": "54404401387a57595291f05d061c8cf6"
  },
  {
    "url": "assets/js/15.561e10ac.js",
    "revision": "f63d4a1fd56200bfb39ce8f5a496eb0b"
  },
  {
    "url": "assets/js/16.f88970c9.js",
    "revision": "9d580e052c26046efb590e7cf450fce9"
  },
  {
    "url": "assets/js/17.30c8b4eb.js",
    "revision": "2d801974aeec52ac5296faa5e8e3a9ec"
  },
  {
    "url": "assets/js/app.5af85e19.js",
    "revision": "b182b212d8e61b06a919ced173dc2a73"
  },
  {
    "url": "assets/js/layout-Layout.f9db1b1d.js",
    "revision": "fc130e8b9a9157b3f39db6a3f6a0576f"
  },
  {
    "url": "assets/js/layout-NotFound.ffe97d70.js",
    "revision": "a9d728d2e524d726bbc967a7c30c86e8"
  },
  {
    "url": "assets/js/page-07fa8526.dcd6a08c.js",
    "revision": "e84d88a11fe740d72e09b9040bc9affa"
  },
  {
    "url": "assets/js/page-1301ab8a.acf9806b.js",
    "revision": "a000c6332989e9ad8b1c64f3ab28810b"
  },
  {
    "url": "assets/js/page-2037549c.0b517bf1.js",
    "revision": "85f1dfc0402974edccc9d341e8ca4377"
  },
  {
    "url": "assets/js/page-25b298b6.15b3dbda.js",
    "revision": "db5b5cd412284c456690170c65d5c064"
  },
  {
    "url": "assets/js/page-3c041b9e.aab53feb.js",
    "revision": "e94a71d52ae63a1b6f628b541c5cb6a9"
  },
  {
    "url": "assets/js/page-65eaf5e4.9682150e.js",
    "revision": "d080599c0a65e9d88df8964b9145aa08"
  },
  {
    "url": "assets/js/page-a2896314.5f8e2100.js",
    "revision": "51c51f998c8a75e34c633eb07ebf9f20"
  },
  {
    "url": "assets/js/page-a7e2470e.a5ef9c2c.js",
    "revision": "450288ee2efd1a657b759533d4d7d58f"
  },
  {
    "url": "assets/js/page-e4dfaf94.c9eef779.js",
    "revision": "232b05b810f1877669d9e4b4c311979e"
  },
  {
    "url": "assets/js/vendors~layout-Layout.185312fa.js",
    "revision": "0374f9bef781ddc9969539ec542f4e08"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "doc/index.html",
    "revision": "794e3f84cb30cff2899f0a5e2d0c86a2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3e1d669f67c2496cfecb0040e6a20bc4"
  },
  {
    "url": "guide/team/index.html",
    "revision": "6fddc17b3db1f0bddb3dc3fa183e2b26"
  },
  {
    "url": "index.html",
    "revision": "d591073eb565753fa46c2becb9b2a047"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "7a34ac836a42861bda5038fa019a042a"
  },
  {
    "url": "product/index.html",
    "revision": "bcb705dddaf84a3cc56450f5faf907d4"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "0259688fe977a7f66e5d4818ff848f7c"
  },
  {
    "url": "resources/index.html",
    "revision": "53165170fc0119c9a28471895783e255"
  },
  {
    "url": "support/index.html",
    "revision": "8d852782d200d03fdcf8e2826c36c775"
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
