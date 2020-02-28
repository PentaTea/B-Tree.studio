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
    "revision": "bdbb4f4a7bedee23c8465fc66d1d7d9e"
  },
  {
    "url": "assets/css/0.styles.18b7cab5.css",
    "revision": "e4d87151d420b502260d98b0b3f0c841"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/11.3e9c5e72.js",
    "revision": "949c5fe5e21fbd43c5a99e085c6e5c44"
  },
  {
    "url": "assets/js/12.551462e6.js",
    "revision": "91ed1a981488a12033830260c058f96c"
  },
  {
    "url": "assets/js/13.045c2dfe.js",
    "revision": "fc6911573d16d3f8ff2be6b62ed6ad19"
  },
  {
    "url": "assets/js/14.ab1f9994.js",
    "revision": "0f799b7ce2a1af071116979efbaac779"
  },
  {
    "url": "assets/js/app.fcdd92ce.js",
    "revision": "5b1e9315ac8f444eb8161805b8d1e47d"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-1301ab8a.d97d1e45.js",
    "revision": "059e691be284e172f648f50734f7b699"
  },
  {
    "url": "assets/js/page-2037549c.7b83ed7e.js",
    "revision": "caf5905a74d27b593bbc217238d10626"
  },
  {
    "url": "assets/js/page-25b298b6.86bc39a4.js",
    "revision": "202774ee786e8ebf2a93723684a1c4ae"
  },
  {
    "url": "assets/js/page-3c041b9e.a0c710b8.js",
    "revision": "14c18b18449cf0fe6274e4ecf6b4ea53"
  },
  {
    "url": "assets/js/page-65eaf5e4.674fb5c9.js",
    "revision": "993deeaaa42475d699f2b86f5ffe47c4"
  },
  {
    "url": "assets/js/page-a2896314.22bbde45.js",
    "revision": "e4d2d6f1edf873815fdaf90aed4c3ab4"
  },
  {
    "url": "assets/js/page-e4dfaf94.959edb7f.js",
    "revision": "88459fa2dda256f7983ddd80c19ff989"
  },
  {
    "url": "assets/js/vendors~layout-Layout.29d51f2c.js",
    "revision": "873a56a790e0d2440008bc4152145411"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/index.html",
    "revision": "e8962dc2a92a8ba785b6bc8f8b894113"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e4174dbd1404fa2e1d7707a1c65c5b05"
  },
  {
    "url": "guide/team/index.html",
    "revision": "863a81138a5c019dc277bbe1eccca06c"
  },
  {
    "url": "index.html",
    "revision": "64e4aa7660fbb73b39479c930dd6d850"
  },
  {
    "url": "product/index.html",
    "revision": "551700dc54e2a4637cd2f3018434f5d6"
  },
  {
    "url": "resources/index.html",
    "revision": "f75e5792c8e50f0bd1da4bbd4f2b27bb"
  },
  {
    "url": "support/index.html",
    "revision": "56fd7ae4dfaf19f3cf3922b7eac8e2b6"
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
