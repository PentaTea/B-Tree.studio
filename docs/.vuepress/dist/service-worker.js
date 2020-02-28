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
    "revision": "3abdda91b3260c736c5d795f7efb0080"
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
    "url": "assets/js/12.1497048e.js",
    "revision": "876966962f8ead61c077be6520167109"
  },
  {
    "url": "assets/js/13.89535952.js",
    "revision": "c444e15ffb2f121ec0e7ed93b04aa684"
  },
  {
    "url": "assets/js/14.81085ea8.js",
    "revision": "cc9d10e28ec13e55ae53e3c63f30b4a9"
  },
  {
    "url": "assets/js/15.96da0770.js",
    "revision": "748cc2b90e52eef069fa9e033bd3a225"
  },
  {
    "url": "assets/js/app.073b3751.js",
    "revision": "af2337d9824dbf36106845107ce61c6d"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-1301ab8a.68498cf9.js",
    "revision": "bde77873d9dc68bfc6dbef44995e08bc"
  },
  {
    "url": "assets/js/page-2037549c.16a7a823.js",
    "revision": "1f6faf17b472099edba114d4093648c3"
  },
  {
    "url": "assets/js/page-25b298b6.86bc39a4.js",
    "revision": "202774ee786e8ebf2a93723684a1c4ae"
  },
  {
    "url": "assets/js/page-5c740a65.39165511.js",
    "revision": "352abdd7294f72ee8df9522b517aad41"
  },
  {
    "url": "assets/js/page-65eaf5e4.674fb5c9.js",
    "revision": "993deeaaa42475d699f2b86f5ffe47c4"
  },
  {
    "url": "assets/js/page-a2896314.a97103fa.js",
    "revision": "8229201223eacd2ba406afff8323b0ee"
  },
  {
    "url": "assets/js/page-d49eedf4.ac216a12.js",
    "revision": "f27201e3337523fdf47b33fd86be6d06"
  },
  {
    "url": "assets/js/page-e4dfaf94.697e4832.js",
    "revision": "79eed8998695f360c38c157c33fb81b9"
  },
  {
    "url": "assets/js/vendors~layout-Layout.7587e0f8.js",
    "revision": "1070bc21528d56cf395d1f5f330166fc"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "doc/a/index.html",
    "revision": "f953dec2639c0e4912af36c8b9a3591b"
  },
  {
    "url": "doc/index.html",
    "revision": "4d0e84864ddec7263af485250ec34d22"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "d1d2430f81bcc324a1af4ecebe924a1a"
  },
  {
    "url": "index.html",
    "revision": "9bdd2764455d5f98047d0c79877a122b"
  },
  {
    "url": "product/index.html",
    "revision": "4ab4fb103562fd9b909819f6d413370e"
  },
  {
    "url": "resources/index.html",
    "revision": "110079c21d6096d3a3446794a8353b7a"
  },
  {
    "url": "support/index.html",
    "revision": "13488c219b13e549c6e9e0390263cebd"
  },
  {
    "url": "team/index.html",
    "revision": "5069f61172666dc9a501c14fea62fe6a"
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
