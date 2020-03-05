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
    "revision": "6101e4a6b91f04fc2165b2cf8469ca37"
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
    "url": "assets/js/app.b804a778.js",
    "revision": "633dea98183ecfc986da987e802ea38d"
  },
  {
    "url": "assets/js/layout-Layout.ec177ecb.js",
    "revision": "d3a60f37ed90200479fa318d92cc036d"
  },
  {
    "url": "assets/js/layout-NotFound.993919dd.js",
    "revision": "abfd267459d9e96eb6fea2e21f1ad6e9"
  },
  {
    "url": "assets/js/page-07fa8526.078869cc.js",
    "revision": "eb36218ecfd7196eb4a02c013a1ef695"
  },
  {
    "url": "assets/js/page-1301ab8a.f617d90c.js",
    "revision": "8ba9805ab082ab29deb7bde9b7748353"
  },
  {
    "url": "assets/js/page-2037549c.9fd883a0.js",
    "revision": "5d2f7802880f626142e0cf00b721a2ba"
  },
  {
    "url": "assets/js/page-25b298b6.5bd78911.js",
    "revision": "66070ee4acc2e3bdfc161d04d8bbde0a"
  },
  {
    "url": "assets/js/page-3c041b9e.8abfc9e3.js",
    "revision": "8dd79e2447ca12b602be010d78d75f9b"
  },
  {
    "url": "assets/js/page-65eaf5e4.9e9c066f.js",
    "revision": "4926a6554f64c2ce9a18294bbae06ebf"
  },
  {
    "url": "assets/js/page-a2896314.29f77ef8.js",
    "revision": "d319ca0c97dfe193e968a8d8e7d21bf2"
  },
  {
    "url": "assets/js/page-a7e2470e.539ba6fc.js",
    "revision": "59968553942236b901e64da3e0197a2c"
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
    "revision": "2178b6d11584177def4f65b443982344"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "0f64d09b6a07d7252306887355e5a28b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "72a1ac1e73944ce7c0e45d2c27bf3fd4"
  },
  {
    "url": "index.html",
    "revision": "4bb971ec28c11943b9a73c8fcd669bf2"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "895b30c0e5c99583b4f702e234c162d4"
  },
  {
    "url": "product/index.html",
    "revision": "ba2a61330a4a1e20a17299ecc53162e2"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "463059ebf0322f148ac622bbaebcec64"
  },
  {
    "url": "resources/index.html",
    "revision": "1d6a70b2cdaa4fc9e67aea58e86cbc44"
  },
  {
    "url": "support/index.html",
    "revision": "86a776b2ea60f470041deec93f7e27bf"
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
