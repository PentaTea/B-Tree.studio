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
    "revision": "02f1cd44f0bad34eed908d4f3f2d9739"
  },
  {
    "url": "assets/css/0.styles.5aa65a64.css",
    "revision": "544cbdd5f2c413c97c252e0e3e319fc8"
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
    "url": "assets/js/16.2ead1f36.js",
    "revision": "e272cf82ac30b32a74e8ffd41c0ec248"
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
    "url": "assets/js/19.5af7326e.js",
    "revision": "47cc7def3316e29654607571a226cbfd"
  },
  {
    "url": "assets/js/20.8df015d1.js",
    "revision": "59af9794c55d53f2766c5c4e135f43f4"
  },
  {
    "url": "assets/js/21.a8a89ae1.js",
    "revision": "ce379c3fca7f0c426c479cee9733ec8d"
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
    "url": "assets/js/app.ddea3242.js",
    "revision": "ec4dd6c456b3c387bfbad02d36c506b0"
  },
  {
    "url": "assets/js/layout-Layout.4ce2c526.js",
    "revision": "7ed4831a1e3b1e068a34799a9c33850b"
  },
  {
    "url": "assets/js/layout-NotFound.71987536.js",
    "revision": "1f501fc28379fa5176b812e6557f543f"
  },
  {
    "url": "assets/js/page-07fa8526.d190db8f.js",
    "revision": "87c4eacb0e83242edf5fce49cdcb0f1b"
  },
  {
    "url": "assets/js/page-1301ab8a.9da90e91.js",
    "revision": "745ae7d64472dd0cdd1f1d251bc64eb4"
  },
  {
    "url": "assets/js/page-2037549c.89a33830.js",
    "revision": "316dfdf0351be4f8fc00278930012232"
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
    "url": "assets/js/page-65eaf5e4.ed1e0b9f.js",
    "revision": "9b8026d89abd575bd5d28fc7a596799a"
  },
  {
    "url": "assets/js/page-7205f0b4.fffc601a.js",
    "revision": "636f71145f7fd7c1e15bb06f5611ab3f"
  },
  {
    "url": "assets/js/page-a2896314.d2302b67.js",
    "revision": "edc3721a177ee610aaad22b06a88180d"
  },
  {
    "url": "assets/js/page-a7e2470e.911b52ae.js",
    "revision": "768800622e5120875418876ccb1f82df"
  },
  {
    "url": "assets/js/page-e4dfaf94.e6a48769.js",
    "revision": "4060819e8a6dd2ffb06b6f8bd3c5764c"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5034633c.js",
    "revision": "6379eb86811bc4d74b722d0678823252"
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
    "revision": "c103542f9336e02408c59beb98a8bc5d"
  },
  {
    "url": "doc/index.html",
    "revision": "7dba28a3090279c63e5cf3c9144b99e1"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "839aa08711e9688f808e3f381d3a3675"
  },
  {
    "url": "guide/team/index.html",
    "revision": "eb9e42e334c309d83f12097b4efdd77f"
  },
  {
    "url": "index.html",
    "revision": "adc1b2e7232e3e8665349b7593d4d40d"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "8ff8dc4597cbbd2b2e1bcca6e6322630"
  },
  {
    "url": "product/index.html",
    "revision": "d6270f24ea01611b308313cab1c6c769"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "178c42df09b5e79b161789ae164337d5"
  },
  {
    "url": "resources/index.html",
    "revision": "731f46ca5ca269afec13f3a04d0f5269"
  },
  {
    "url": "support/index.html",
    "revision": "f81a5b2e9a35c46e85e3935ec83fb662"
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
