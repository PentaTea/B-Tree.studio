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
    "revision": "1245de73ec99bcf1062b5931ebcf4ae2"
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
    "url": "assets/js/app.6ef3f65a.js",
    "revision": "59f9a3f02f52457d8bd9885efe81710a"
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
    "url": "assets/js/page-2037549c.c3dae232.js",
    "revision": "bb3d7c88694c2009b615dc4f1b2cb263"
  },
  {
    "url": "assets/js/page-65eaf5e4.be99ca0e.js",
    "revision": "0916e06f53ad31158d8fe9c9d98d077a"
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
    "revision": "7c501b813885ec7bfc1e885448a6e760"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "de53b516b147347190dcf06847a9fa12"
  },
  {
    "url": "index.html",
    "revision": "8782abfef57038e07e8de99dbce92836"
  },
  {
    "url": "product/index.html",
    "revision": "3f58a7d888b2e5b0b3ba3271ca53c1b7"
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
