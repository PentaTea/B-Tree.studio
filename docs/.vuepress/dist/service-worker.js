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
    "revision": "5b7cd3dd375650add83b61a542fc5e12"
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
    "url": "assets/js/11.24305833.js",
    "revision": "7f921a30302a05f98f43d9f99965cf99"
  },
  {
    "url": "assets/js/12.551462e6.js",
    "revision": "91ed1a981488a12033830260c058f96c"
  },
  {
    "url": "assets/js/13.28746940.js",
    "revision": "2229afaf90ac7eb08bedd1390c81029f"
  },
  {
    "url": "assets/js/14.ab1f9994.js",
    "revision": "0f799b7ce2a1af071116979efbaac779"
  },
  {
    "url": "assets/js/app.601d5e48.js",
    "revision": "2f51f258d646148a2b5c3f26a541d3b0"
  },
  {
    "url": "assets/js/layout-NotFound.e1c693d8.js",
    "revision": "cebd43730d7e9cd8bd9e0a2efb19b21a"
  },
  {
    "url": "assets/js/page-1301ab8a.3394a544.js",
    "revision": "b4759063b9a4208d852029f97002cf9b"
  },
  {
    "url": "assets/js/page-2037549c.d1338bc8.js",
    "revision": "043a192fcfb0c1af8753b594242305f9"
  },
  {
    "url": "assets/js/page-25b298b6.7e9a1699.js",
    "revision": "2e71a1ab359e09c44640753c4bd82fec"
  },
  {
    "url": "assets/js/page-3c041b9e.b1979786.js",
    "revision": "ea833c5254f3126ccd4e42349d1276ca"
  },
  {
    "url": "assets/js/page-65eaf5e4.815b28c1.js",
    "revision": "423b926decbe73654a925b935fcf2a2f"
  },
  {
    "url": "assets/js/page-a2896314.50444dfa.js",
    "revision": "83aa724a16b53c80a5d628935e42b0c0"
  },
  {
    "url": "assets/js/page-e4dfaf94.973a3d30.js",
    "revision": "2e2f88e32f744aa2f8cab7097433df4f"
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
    "revision": "10be852764d431a97401d4cca4791462"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "ef60d869690b89ae917aba0de9e4d603"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f627c2bdc5dda53f37722a5f463a164a"
  },
  {
    "url": "index.html",
    "revision": "472d4e9380730ba592b1415607fb05da"
  },
  {
    "url": "product/index.html",
    "revision": "fb3f204e6d8a5fd927a4daa19bc3421c"
  },
  {
    "url": "resources/index.html",
    "revision": "d9458d4d67976e3cf5217f2f91f594b1"
  },
  {
    "url": "support/index.html",
    "revision": "491436e0b22540e1dcc34db6bf8d1cbd"
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
