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
    "revision": "5a9d8b816061f05ea418c659a2b6645f"
  },
  {
    "url": "assets/css/0.styles.ca67317e.css",
    "revision": "6c6f2c296a2924aab3dce84e8980813e"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/alipay.6428fd00.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "assets/img/Q.jpg",
    "revision": "c502f270958073d8b732ad88890c0a34"
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
    "url": "assets/js/15.702ac4a2.js",
    "revision": "1dc119adbfd336ec107e08c65c817288"
  },
  {
    "url": "assets/js/16.8a7fd7ad.js",
    "revision": "0597e5d1bf49907786d33fdbfe36d78d"
  },
  {
    "url": "assets/js/17.55296d16.js",
    "revision": "7afee89b5a09288a2393a9391892f3b3"
  },
  {
    "url": "assets/js/18.1750948a.js",
    "revision": "1665208b0c79351571ebb5141f344637"
  },
  {
    "url": "assets/js/19.bdef9791.js",
    "revision": "b4a532838f2220cc1e020b9e54916ac9"
  },
  {
    "url": "assets/js/20.5d7aa529.js",
    "revision": "ded486d57a541dd639c3260972d933c1"
  },
  {
    "url": "assets/js/21.d38c2362.js",
    "revision": "5b477dc7e07cbfd521393c1ed9d3bb48"
  },
  {
    "url": "assets/js/22.3cd081c8.js",
    "revision": "5b228eaf345918e5e5fdfa03aa4894a9"
  },
  {
    "url": "assets/js/23.57a1f07e.js",
    "revision": "62e297fac51e7830e04934ad656d4262"
  },
  {
    "url": "assets/js/app.0cb04648.js",
    "revision": "50b041f6daac324e1c854d7b5d64403f"
  },
  {
    "url": "assets/js/layout-Layout.2c31ed33.js",
    "revision": "2fa025c95e4094d8b4374418a575ba8e"
  },
  {
    "url": "assets/js/layout-NotFound.f013ddef.js",
    "revision": "c3f5ee600625b3c3a8b31e6dde7beef0"
  },
  {
    "url": "assets/js/page-07fa8526.8900062a.js",
    "revision": "0bfb88f10f82e14f4cfce320003f4a96"
  },
  {
    "url": "assets/js/page-1301ab8a.05396895.js",
    "revision": "b65ec0022206d47b096ff86d34c574a6"
  },
  {
    "url": "assets/js/page-2037549c.5863fc6d.js",
    "revision": "03c63bca78c229acbdfe69c3a9adabbc"
  },
  {
    "url": "assets/js/page-25b298b6.0704942b.js",
    "revision": "470155d6f5ed8aa98536c38a01549b0b"
  },
  {
    "url": "assets/js/page-3c041b9e.6757bca9.js",
    "revision": "b3cd3d2086263fd5a049fecca9e01f68"
  },
  {
    "url": "assets/js/page-65eaf5e4.3753d4b1.js",
    "revision": "46d2f3253d3471bed43cf3a3cfcace64"
  },
  {
    "url": "assets/js/page-7205f0b4.4f52dca4.js",
    "revision": "59c4e0570ba89b82df09a526019ff235"
  },
  {
    "url": "assets/js/page-a2896314.11dc6c82.js",
    "revision": "96f8da86b18dca3cdba90a961d5812ee"
  },
  {
    "url": "assets/js/page-a7e2470e.9baf9cd6.js",
    "revision": "ecc159cff6c7d58ab333ea1857e5fca7"
  },
  {
    "url": "assets/js/page-e4dfaf94.7250a29b.js",
    "revision": "a203f552e19b34c20268aebc8f255d25"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b621a908.js",
    "revision": "65c0a76294dd53b90d07bb6d251c1b75"
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
    "url": "blog/index.html",
    "revision": "e3cd490a71ec864a1cce61ebab95f569"
  },
  {
    "url": "doc/index.html",
    "revision": "cf2f53719ae9b21328215ced6f62c74d"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "7fd81b2c8596d6c4611b26b16ea7986f"
  },
  {
    "url": "guide/team/index.html",
    "revision": "01c89e48a730a869418b412e98a2fb52"
  },
  {
    "url": "index.html",
    "revision": "62f1772d0982ac994e0e37e37695564c"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "722fedae9eb969a2bb5e3b148b9a9998"
  },
  {
    "url": "product/index.html",
    "revision": "7b8fe5ce3ad37b5f9e126f238bd1aa87"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "13b7c9a0b31d2a439faf1438f3a7b3c8"
  },
  {
    "url": "resources/index.html",
    "revision": "ff20bdb742e4eebbfdda9549d486081d"
  },
  {
    "url": "support/index.html",
    "revision": "911a4981d5990d16a96137ac900c8369"
  },
  {
    "url": "svg_test.svg",
    "revision": "08b37e8eb422f12620aa28175ee139c1"
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
