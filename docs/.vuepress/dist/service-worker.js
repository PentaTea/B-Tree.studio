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
    "revision": "d8bb7f23fcc08b04bf43bdac54a6a59c"
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
    "url": "assets/js/app.97f20a7c.js",
    "revision": "677520d0ef206245186a57e3dde4b5f9"
  },
  {
    "url": "assets/js/layout-Layout.8da2f941.js",
    "revision": "0ee208e1ae452424970f545b0df2e4e3"
  },
  {
    "url": "assets/js/layout-NotFound.993919dd.js",
    "revision": "abfd267459d9e96eb6fea2e21f1ad6e9"
  },
  {
    "url": "assets/js/page-07fa8526.17dc0a0c.js",
    "revision": "325a01bc1f028b4762cbefa939987d3c"
  },
  {
    "url": "assets/js/page-1301ab8a.9bb936de.js",
    "revision": "67e53b11d4a762aa2a05b9150861b983"
  },
  {
    "url": "assets/js/page-2037549c.29b9915c.js",
    "revision": "c7d09190edbe2bfef930b430af2ffbc5"
  },
  {
    "url": "assets/js/page-25b298b6.a9a3f873.js",
    "revision": "fdcc01f664b55fa2d693271d44c84aeb"
  },
  {
    "url": "assets/js/page-3c041b9e.657fbb16.js",
    "revision": "22805efaed083e995a4b3830a14aa077"
  },
  {
    "url": "assets/js/page-65eaf5e4.9e9c066f.js",
    "revision": "4926a6554f64c2ce9a18294bbae06ebf"
  },
  {
    "url": "assets/js/page-a2896314.9e753d48.js",
    "revision": "674793d744f118d9aa9fc5a9aa3d430f"
  },
  {
    "url": "assets/js/page-a7e2470e.7fde1bb7.js",
    "revision": "1f6a427ba4f8bdf3174ba1d736828cb6"
  },
  {
    "url": "assets/js/page-e4dfaf94.3beb317b.js",
    "revision": "01e9e94a5f174e3f8c7ad26b9dd19727"
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
    "revision": "4248e199b8bdad382cd23109838064a2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "999ec36794763a3a72953b9cf087ee93"
  },
  {
    "url": "guide/team/index.html",
    "revision": "bd46bf7b304a7f2bf0788e6f1b4cadfb"
  },
  {
    "url": "index.html",
    "revision": "7d398578ffbcb895964365aab962f174"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "48e2944833b8bed7058346a30c9e9a5b"
  },
  {
    "url": "product/index.html",
    "revision": "0990e7bccf66a1f5c638bd141ca0cae5"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "fa8745fb63dd8507b8e673d6ed4c9875"
  },
  {
    "url": "resources/index.html",
    "revision": "28de49919bff2e4e8bf3c1f678f93088"
  },
  {
    "url": "support/index.html",
    "revision": "be00497df2568f672cb437db5af5d42c"
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
