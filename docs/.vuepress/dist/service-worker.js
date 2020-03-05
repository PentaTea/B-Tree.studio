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
    "revision": "68fb55c7d657c4285e38f82eb9c90273"
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
    "url": "assets/js/app.9a1240e6.js",
    "revision": "33d749b60e26c0e815fca212687a7811"
  },
  {
    "url": "assets/js/layout-Layout.5a2236c0.js",
    "revision": "d3a60f37ed90200479fa318d92cc036d"
  },
  {
    "url": "assets/js/layout-NotFound.993919dd.js",
    "revision": "abfd267459d9e96eb6fea2e21f1ad6e9"
  },
  {
    "url": "assets/js/page-07fa8526.40e7c8f9.js",
    "revision": "e65b811daca136a493b8c7723247a35f"
  },
  {
    "url": "assets/js/page-1301ab8a.beffc4bb.js",
    "revision": "c2c4d6223fc5649604a3328d1a4ecd75"
  },
  {
    "url": "assets/js/page-2037549c.caf64b35.js",
    "revision": "af1edd4b949d59c8ff2279c0db3ff737"
  },
  {
    "url": "assets/js/page-25b298b6.5bd78911.js",
    "revision": "66070ee4acc2e3bdfc161d04d8bbde0a"
  },
  {
    "url": "assets/js/page-3c041b9e.22657ee9.js",
    "revision": "d1dc495535b559145c4ef8b4655b451a"
  },
  {
    "url": "assets/js/page-65eaf5e4.3dc4ede3.js",
    "revision": "1ce659403fc3fcc80d989b37a76ab607"
  },
  {
    "url": "assets/js/page-a2896314.b85193f1.js",
    "revision": "4eafeecca9a446ddbca8a2005622c8fe"
  },
  {
    "url": "assets/js/page-a7e2470e.0e8f2db4.js",
    "revision": "65d0f72ad6ba7c4265402881bec57101"
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
    "revision": "5a0ea1672291fbcdf6c2cb9267f12134"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "dde82438759fcaa3b3b758d46d4d01bb"
  },
  {
    "url": "guide/team/index.html",
    "revision": "ffe057a97afc3076eff6bf768b8db822"
  },
  {
    "url": "index.html",
    "revision": "db979cc6c49a253bc4fe951bdc076c6b"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "af594220aecd2db13b03dbe872d7fb7b"
  },
  {
    "url": "product/index.html",
    "revision": "34a3c605f98a4a640c923236733eaaec"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "c0333efbc628e0c985707985b5cc5cca"
  },
  {
    "url": "resources/index.html",
    "revision": "f9276571cfd7f33d24439468bb581bd1"
  },
  {
    "url": "support/index.html",
    "revision": "b662b781102feddf67f44b4e9ef08ec9"
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
