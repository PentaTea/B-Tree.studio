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
    "revision": "0c19654a133250189d215abcfa01b905"
  },
  {
    "url": "assets/css/0.styles.397a20f8.css",
    "revision": "15c885b77059b534f4a214e382226e56"
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
    "url": "assets/js/14.35d43227.js",
    "revision": "b58c9f188f282a979a1dde7173516d86"
  },
  {
    "url": "assets/js/15.7c63d563.js",
    "revision": "e977a227780141ff6425576a55ae31e8"
  },
  {
    "url": "assets/js/16.e29f7d5c.js",
    "revision": "af1b23cede343b547231cff664bc738a"
  },
  {
    "url": "assets/js/17.21c151be.js",
    "revision": "d46df181bcb5aff55ff667462deb205d"
  },
  {
    "url": "assets/js/18.978597ed.js",
    "revision": "0c7d193f9481e0e703f17bcdb9459f31"
  },
  {
    "url": "assets/js/19.01131034.js",
    "revision": "38be3f5e8264a2ec631dd6dd9ace83e1"
  },
  {
    "url": "assets/js/app.f849ed71.js",
    "revision": "e2eb14ec045eac164395c72dc748d7f6"
  },
  {
    "url": "assets/js/layout-Layout.96746df3.js",
    "revision": "2327c3beded683cab0e15ab343735b7b"
  },
  {
    "url": "assets/js/layout-NotFound.71fe4637.js",
    "revision": "5b99af7f319f97980e7ba5da5a065dbc"
  },
  {
    "url": "assets/js/page-07fa8526.17dc0a0c.js",
    "revision": "325a01bc1f028b4762cbefa939987d3c"
  },
  {
    "url": "assets/js/page-1301ab8a.f302b6a3.js",
    "revision": "2f8d88ace888727bf73e9eaed48e72e8"
  },
  {
    "url": "assets/js/page-2037549c.99a95ea4.js",
    "revision": "c874fdad98e646b0a8502be6b7e0bfc1"
  },
  {
    "url": "assets/js/page-25b298b6.6ed06bc8.js",
    "revision": "3e7ac448700702c1a80460591c1a6b86"
  },
  {
    "url": "assets/js/page-3c041b9e.b729fe17.js",
    "revision": "14ce4972aab5f8e56c8d16aaad1f37d2"
  },
  {
    "url": "assets/js/page-65eaf5e4.2480671d.js",
    "revision": "dacd9897a3dca2770468ee1680d9fde4"
  },
  {
    "url": "assets/js/page-a2896314.c6c26e73.js",
    "revision": "fb368a40df4ec7eba1b4adf17801c0e4"
  },
  {
    "url": "assets/js/page-a7e2470e.bde9b7c7.js",
    "revision": "ab87c740e3a557614d797ac16a1318ad"
  },
  {
    "url": "assets/js/page-e4dfaf94.101d2e3d.js",
    "revision": "5cc716091e733cca44d675209f427adf"
  },
  {
    "url": "assets/js/vendors~layout-Layout.4a8f409c.js",
    "revision": "27520ba1fd945dd0422792576332c8b1"
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
    "revision": "077bf845d26f83359fa976fa6d86ccee"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "2261c541ed7f5d385182ab6a12025bbe"
  },
  {
    "url": "guide/team/index.html",
    "revision": "de4dc50fe8ef5a2928817b58ea090bbf"
  },
  {
    "url": "index.html",
    "revision": "baecc3f4f87107102ae57832db65d5a9"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "68ab4f3f1945e9695791c05844c89c63"
  },
  {
    "url": "product/index.html",
    "revision": "79269ca8cac1c3239c936e34bfb6a5f6"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "74188bb9340b4b42e1f42006bdf495ef"
  },
  {
    "url": "resources/index.html",
    "revision": "968b6a48df7533826691b601c7600636"
  },
  {
    "url": "support/index.html",
    "revision": "a8d588f153eab845a57286ac4dc4bcb7"
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
