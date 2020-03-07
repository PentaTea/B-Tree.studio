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
    "revision": "5b31752df42749f6778abee85b446c60"
  },
  {
    "url": "assets/css/0.styles.296cac62.css",
    "revision": "640bc0bf792b939441d4587e06d5a69a"
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
    "url": "assets/js/14.7375928c.js",
    "revision": "3a3684fbb47c5a11bbf5a4c1d2f3e945"
  },
  {
    "url": "assets/js/15.f474ce9b.js",
    "revision": "32acde6a652e2ca0cb2fa25ba754e4e9"
  },
  {
    "url": "assets/js/16.3d8e25a4.js",
    "revision": "f927daa4c7b5764c92b413466755d7d6"
  },
  {
    "url": "assets/js/17.8fc524c1.js",
    "revision": "b5335889dd6e6007695d7e2b3a4dee51"
  },
  {
    "url": "assets/js/18.0e69692f.js",
    "revision": "d433e366de00d5ad73b3a6462a0d4547"
  },
  {
    "url": "assets/js/19.1e248490.js",
    "revision": "882b78f2813d03de2aeae088e6f70d3e"
  },
  {
    "url": "assets/js/20.e40597e1.js",
    "revision": "46f1c8cedeb651d56771c5ddf7319959"
  },
  {
    "url": "assets/js/21.9c07045c.js",
    "revision": "86e25bf9ead6de673716ecfb050db807"
  },
  {
    "url": "assets/js/app.3653d72b.js",
    "revision": "39e89ae4d1c04af99a26340931f04e64"
  },
  {
    "url": "assets/js/layout-Layout.9df51d81.js",
    "revision": "6bbbaa449590c8ae740b33e11270d30d"
  },
  {
    "url": "assets/js/layout-NotFound.afcbf010.js",
    "revision": "682e0430fb8f8aec56cea823beb01dd2"
  },
  {
    "url": "assets/js/page-07fa8526.05f0e766.js",
    "revision": "0862520997f9a1ec2d877e28a1d47c47"
  },
  {
    "url": "assets/js/page-1301ab8a.06a71c33.js",
    "revision": "d88523b1f1679d2a18e763a4ef7c8bdd"
  },
  {
    "url": "assets/js/page-2037549c.eb36244a.js",
    "revision": "848686f9fdbbe6d0a75369756b272eeb"
  },
  {
    "url": "assets/js/page-25b298b6.a7a922d4.js",
    "revision": "32acb3b793220cfb594cdfa7740ffa14"
  },
  {
    "url": "assets/js/page-3c041b9e.a47cfdd8.js",
    "revision": "04f01351f195af402d2f6b51cd6a7393"
  },
  {
    "url": "assets/js/page-65eaf5e4.d6e62fc4.js",
    "revision": "04dc6d2f2b6f6cf6e6c8302a9910eb40"
  },
  {
    "url": "assets/js/page-a2896314.a0551ba4.js",
    "revision": "d8d438cbb19b5c9fd326cd54bd280f31"
  },
  {
    "url": "assets/js/page-a7e2470e.559700ec.js",
    "revision": "3c77d203cd8638cf872c2e82ff49243f"
  },
  {
    "url": "assets/js/page-e4dfaf94.213dd9e7.js",
    "revision": "2b974d1403ff4e48983d37b85d85b609"
  },
  {
    "url": "assets/js/vendors~layout-Layout.1f9f522e.js",
    "revision": "679dd0a4ddb1c7a6370bb3db2609f005"
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
    "revision": "193a4ecea029ad67e4f15d3a75444886"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "64cd0d4d0ed10c381db2f3d29b30ff50"
  },
  {
    "url": "guide/team/index.html",
    "revision": "169f07aa70c8cd116d73ca0f191bc387"
  },
  {
    "url": "index.html",
    "revision": "317a064b8844fd70e3d3af10c908873e"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "f7cdfb12b6ca6b17d777526ef1cd6e5b"
  },
  {
    "url": "product/index.html",
    "revision": "bccaf39d07d75303f1e971ff7eddcf5b"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "da4f701d83e2b1ad7f07f421e5bd1287"
  },
  {
    "url": "resources/index.html",
    "revision": "7fe4ed3bc36917d97b96c6ffbddd7dcd"
  },
  {
    "url": "support/index.html",
    "revision": "fa1021dd6fe86040759f7dfd0585aea7"
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
