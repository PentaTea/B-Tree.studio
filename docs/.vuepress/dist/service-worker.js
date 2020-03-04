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
    "revision": "f1ff06f417a5d4ec20f25797790474c5"
  },
  {
    "url": "assets/css/0.styles.ab99be11.css",
    "revision": "6c34c10f024be3d8daa25bd4e150fdc7"
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
    "url": "assets/js/14.3f55c852.js",
    "revision": "db7bbd87108174afa306ded63bba4124"
  },
  {
    "url": "assets/js/15.afce1728.js",
    "revision": "db11a0e528f4ec37943698c12be6f9b5"
  },
  {
    "url": "assets/js/16.0965b341.js",
    "revision": "04fc780834c060e684fab5233fbf0845"
  },
  {
    "url": "assets/js/17.f6912fc3.js",
    "revision": "3b20dd7baae627abdef624eb8a430735"
  },
  {
    "url": "assets/js/18.978597ed.js",
    "revision": "0c7d193f9481e0e703f17bcdb9459f31"
  },
  {
    "url": "assets/js/19.2fc77657.js",
    "revision": "60298c7efaaa2e6715b52ddf5686ca0b"
  },
  {
    "url": "assets/js/app.a1fb387d.js",
    "revision": "0c8c51d33dd2b492d6a61d018165b282"
  },
  {
    "url": "assets/js/layout-Layout.5415a259.js",
    "revision": "27bdda7022fa154180c41a70ae948414"
  },
  {
    "url": "assets/js/layout-NotFound.993919dd.js",
    "revision": "abfd267459d9e96eb6fea2e21f1ad6e9"
  },
  {
    "url": "assets/js/page-07fa8526.51b33ed7.js",
    "revision": "9a8cb5d31b40587efb273cd17eabd3aa"
  },
  {
    "url": "assets/js/page-1301ab8a.9bb936de.js",
    "revision": "67e53b11d4a762aa2a05b9150861b983"
  },
  {
    "url": "assets/js/page-2037549c.caf64b35.js",
    "revision": "af1edd4b949d59c8ff2279c0db3ff737"
  },
  {
    "url": "assets/js/page-25b298b6.a9a3f873.js",
    "revision": "fdcc01f664b55fa2d693271d44c84aeb"
  },
  {
    "url": "assets/js/page-3c041b9e.935db583.js",
    "revision": "37a41fb05ec8b49fa0747c198e58b421"
  },
  {
    "url": "assets/js/page-65eaf5e4.3ac6e38c.js",
    "revision": "c667287d83c4736eb6e1bd3ed6bc4739"
  },
  {
    "url": "assets/js/page-a2896314.9e753d48.js",
    "revision": "674793d744f118d9aa9fc5a9aa3d430f"
  },
  {
    "url": "assets/js/page-a7e2470e.17ed2e04.js",
    "revision": "791727fef4313a35d3aebf7e8dd0e6e7"
  },
  {
    "url": "assets/js/page-e4dfaf94.0b75d91d.js",
    "revision": "a0eb222187d780c2cf0359d5efd6b92a"
  },
  {
    "url": "assets/js/vendors~layout-Layout.afafe988.js",
    "revision": "c5d9162e54c5985439512341a977d64f"
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
    "revision": "ee62ea7aa87bea7d8ef81d1d3d8f2097"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "64f435fce33dde48af31dbeb178f4053"
  },
  {
    "url": "guide/team/index.html",
    "revision": "9721c7b4852ed0ac060262fb113b3174"
  },
  {
    "url": "index.html",
    "revision": "9eba1e78b1bff6290648ce046ccf9a90"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "4be97ada0e55fd7264f1a3a8fc718916"
  },
  {
    "url": "product/index.html",
    "revision": "a781c692d7b470a245a9ddc980af76a1"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "0bd8f81bc31574e2ea558b05d3d96450"
  },
  {
    "url": "resources/index.html",
    "revision": "6aad08aeb601ae0b6128120c7cb183e0"
  },
  {
    "url": "support/index.html",
    "revision": "418c741e8e35c3893b270134ccd8c69f"
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
