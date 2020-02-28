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
    "revision": "0cc74cc2c92977279e856ea55dfe1cbe"
  },
  {
    "url": "assets/css/0.styles.c0841830.css",
    "revision": "1f4fc26ac6983223349f2bfb5c76ae7d"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9c8d69f5.js",
    "revision": "817840313d46f8ca7b0c2623b3f8a6b2"
  },
  {
    "url": "assets/js/11.55064c58.js",
    "revision": "dd15d4278fe4f4fad16079cca3ff7459"
  },
  {
    "url": "assets/js/12.ce5f72c1.js",
    "revision": "34e32abba1a80a427c917f1c30330a35"
  },
  {
    "url": "assets/js/9.bb145799.js",
    "revision": "4d5ad673c91036741b2af109eae7e7b3"
  },
  {
    "url": "assets/js/app.d22b36fd.js",
    "revision": "6e199e6c4b5cb9a68696460623904fd3"
  },
  {
    "url": "assets/js/layout-layouts.aa75d6d3.js",
    "revision": "b1ee505a4aef3879e913d6b8101d959f"
  },
  {
    "url": "assets/js/layout-NotFound.1bd52a7e.js",
    "revision": "6960981bdf5d2f61cbdc28693046f332"
  },
  {
    "url": "assets/js/page-2037549c.f04b5b6f.js",
    "revision": "05e8c1bbd104f30b4c6de6151eb5e4d5"
  },
  {
    "url": "assets/js/page-65eaf5e4.5f473cb5.js",
    "revision": "5492175dcdd71b7376d2d431260c7166"
  },
  {
    "url": "assets/js/page-a2896314.09770cd8.js",
    "revision": "5cade2754b77e71d408f1543d2546a37"
  },
  {
    "url": "assets/js/page-e4dfaf94.d9dd9586.js",
    "revision": "bffa652625f71edd50572ef829c5fb1d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.23136013.js",
    "revision": "eb6d4d4b3ed43bc51202d4ecd802f8be"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/index.html",
    "revision": "a423ff4e77cfc50b70bbd926d070594d"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3c5d7ba78d2f998fcea3a04fbb448dc2"
  },
  {
    "url": "index.html",
    "revision": "695c0ff04f6ad256f755c951e8027c20"
  },
  {
    "url": "product/index.html",
    "revision": "cfe2661e92ad153ec1eaa71793e4e785"
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
