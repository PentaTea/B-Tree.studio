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
    "revision": "2541de6f893946b3b5f4f4ce0199d60e"
  },
  {
    "url": "about/index.html",
    "revision": "bab77e2f5d112294c4c362db75c95ec6"
  },
  {
    "url": "assets/css/0.styles.e123d1e8.css",
    "revision": "b5662138bb5bf9eeaf9e155b96f8e41f"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.8a095b46.js",
    "revision": "cd21a592946b7d1c4d840cdba3acf4f1"
  },
  {
    "url": "assets/js/11.2880cf28.js",
    "revision": "d66de03a721a70c3d5e6bbfcbbb62874"
  },
  {
    "url": "assets/js/12.e5bbf549.js",
    "revision": "b44cf648dddaaff957e0be52a8840525"
  },
  {
    "url": "assets/js/13.7f0dd213.js",
    "revision": "d53b09bc37d3bf28643c60cf93fe397a"
  },
  {
    "url": "assets/js/app.f400ad0f.js",
    "revision": "1a0b830dc8abefb5bd4cc76e8a1cc631"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-2037549c.e2f4bf27.js",
    "revision": "fa100623f91ab926af332a5fd425bb14"
  },
  {
    "url": "assets/js/page-5c740a65.da5f75a2.js",
    "revision": "cb9bda09dd62735661e8b75983759fc0"
  },
  {
    "url": "assets/js/page-65eaf5e4.f4077cf9.js",
    "revision": "3f5bcca624b04682488566ee84b128f3"
  },
  {
    "url": "assets/js/page-a2896314.42f618c5.js",
    "revision": "9945543d1edd67dcbe377670a6545cc2"
  },
  {
    "url": "assets/js/page-cdc6ac8c.0a58bbf3.js",
    "revision": "e2d2706810533ad4acbcb7a5ae2de373"
  },
  {
    "url": "assets/js/page-e4dfaf94.fca9b0c2.js",
    "revision": "9656ee0599117609cc7d90fc37ca9217"
  },
  {
    "url": "assets/js/vendors~layout-Layout.08d7e635.js",
    "revision": "e36bf7f2597814f2e64b105fbe13aa9f"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/a/index.html",
    "revision": "ca0636921809ffd0a4fa7f32d4bda872"
  },
  {
    "url": "doc/index.html",
    "revision": "9dfb72151c572cb8d658497b771c846d"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "c8d7fdd3a789f8464c0d11fda7602ad2"
  },
  {
    "url": "index.html",
    "revision": "e9050ad6eac7da355e7f5522fada938e"
  },
  {
    "url": "product/index.html",
    "revision": "5ee4d518f8151b6ee3b4de829ad8e23a"
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
