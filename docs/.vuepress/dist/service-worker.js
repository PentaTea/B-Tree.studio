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
    "revision": "b762c5b9f1bd737b3bf8ecaac95ebaa2"
  },
  {
    "url": "assets/css/0.styles.9416374d.css",
    "revision": "ac6540a6de137839121a246f930065fc"
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
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/15.0d2f8319.js",
    "revision": "c863be576515c88349ed44dde870d3c3"
  },
  {
    "url": "assets/js/16.eeef3b62.js",
    "revision": "3cdd50dbcd3d81007050581902575c9a"
  },
  {
    "url": "assets/js/17.5d977788.js",
    "revision": "6913cdbe60af3fbcc68f9860fd56167a"
  },
  {
    "url": "assets/js/18.b8a619ab.js",
    "revision": "0980d3ea4fadc88eb68040848eef0958"
  },
  {
    "url": "assets/js/19.d02b5eeb.js",
    "revision": "b146923b47c6c7b03b739e1ffda9850a"
  },
  {
    "url": "assets/js/20.c4db002d.js",
    "revision": "656fbbef0a1c09dfeefdb7fe16ac4cff"
  },
  {
    "url": "assets/js/21.c745498c.js",
    "revision": "8b658dfceee2dbd1750c06c67a8cdac5"
  },
  {
    "url": "assets/js/22.8deccc3b.js",
    "revision": "ece0af5df629c928b38e8f9bfaee0f38"
  },
  {
    "url": "assets/js/23.2c2342dc.js",
    "revision": "02c612397b48b1ed993614b6a98d1468"
  },
  {
    "url": "assets/js/app.0ce7f40d.js",
    "revision": "ebbb129d9c3cd096b01fc43c94be0b48"
  },
  {
    "url": "assets/js/layout-Layout.9a457c60.js",
    "revision": "e87f76493be3f8e481fbf45677a69c70"
  },
  {
    "url": "assets/js/layout-NotFound.71987536.js",
    "revision": "1f501fc28379fa5176b812e6557f543f"
  },
  {
    "url": "assets/js/page-07fa8526.dba6a6e2.js",
    "revision": "964e5f56fa9fe0f320bd73c38eaf794e"
  },
  {
    "url": "assets/js/page-1301ab8a.a7c0bd99.js",
    "revision": "6c0cc1c29dab953e87e164d12a032bf5"
  },
  {
    "url": "assets/js/page-2037549c.6b683b60.js",
    "revision": "3ef41c171be7bdf17a2a878a67e96057"
  },
  {
    "url": "assets/js/page-25b298b6.34073135.js",
    "revision": "31c2e52676af162b32614a62ce006f82"
  },
  {
    "url": "assets/js/page-3c041b9e.740e1272.js",
    "revision": "96697a93989d385cf6449ca998912198"
  },
  {
    "url": "assets/js/page-65eaf5e4.fa6e9a29.js",
    "revision": "98471742a39b462251995fc09d5829fe"
  },
  {
    "url": "assets/js/page-7205f0b4.5cd9fcd6.js",
    "revision": "536f0b3828df238e1d4196ed5494a214"
  },
  {
    "url": "assets/js/page-a2896314.8e8e5b9d.js",
    "revision": "db5c4eb98b2fe116fad920c01c842093"
  },
  {
    "url": "assets/js/page-a7e2470e.671a6c3d.js",
    "revision": "a8f6e0741c4979845a1c2f02e5913730"
  },
  {
    "url": "assets/js/page-e4dfaf94.c807eba6.js",
    "revision": "402c7c25a21cb12c713c9c9c85c37b3f"
  },
  {
    "url": "assets/js/vendors~layout-Layout.032904ef.js",
    "revision": "230a47c5adc83474823f5c3e631777ce"
  },
  {
    "url": "assets/svg/briefcase.svg",
    "revision": "72eb0266680765e1d356ca037f5cef60"
  },
  {
    "url": "assets/svg/globe.svg",
    "revision": "38e3374309f7a3db37c31f885d4b47b4"
  },
  {
    "url": "assets/svg/map-pin.svg",
    "revision": "156d6c03b4a6d93409c2e612c4f81bec"
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
    "revision": "1818067b8f3af16450ed5c89d932613b"
  },
  {
    "url": "doc/index.html",
    "revision": "acacb1942a3481d088178311aee9a8be"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e82e3003c045a419570f9eac5e332b0e"
  },
  {
    "url": "guide/team/index.html",
    "revision": "bf63487fb1ec258cc12a731e90999a64"
  },
  {
    "url": "index.html",
    "revision": "b8f6e79c4b5acce06468f4fdb8df545b"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "b59619c853f29922fd8b1d5be2850957"
  },
  {
    "url": "product/index.html",
    "revision": "95cf7008c85ed110edd53d6682b4b350"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "05c5586497d571eb61742b9b7167826d"
  },
  {
    "url": "resources/index.html",
    "revision": "83aea45075efcd140533c45c59bf5e1b"
  },
  {
    "url": "support/index.html",
    "revision": "6068ec6bb402dd04f5eb496d1cc69af0"
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
