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
    "revision": "0b958c20a37f09c727a1cb60b945ad4d"
  },
  {
    "url": "assets/css/0.styles.4c54f2e8.css",
    "revision": "a3833b6d9f30fe988d85fa992e2bd832"
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
    "url": "assets/js/15.e72c7b62.js",
    "revision": "d3192ceb0cc860ff3f97e94568827d4c"
  },
  {
    "url": "assets/js/16.5d41fde3.js",
    "revision": "d9da467f5d4ebafb3bca9348e719a38e"
  },
  {
    "url": "assets/js/17.deea3128.js",
    "revision": "8ba0d3aa4fb47d676c17ff0557af5a4d"
  },
  {
    "url": "assets/js/18.ec1518c6.js",
    "revision": "ff0736987927099961f37f489d566643"
  },
  {
    "url": "assets/js/19.07c73080.js",
    "revision": "e0f06c806f5bab7e293f89b6ca9a1d95"
  },
  {
    "url": "assets/js/20.bb56fed3.js",
    "revision": "2cdea8538542286703c09d9572bf0df0"
  },
  {
    "url": "assets/js/21.35eeb57e.js",
    "revision": "9a36625a4b5f6cd8dc6d6fa29757eec6"
  },
  {
    "url": "assets/js/22.b52d3dd5.js",
    "revision": "24f618f603980411cee5b916e8747b73"
  },
  {
    "url": "assets/js/app.f78e2996.js",
    "revision": "c9f20a06efc9be63ffd65431aff5cbb9"
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
    "url": "assets/js/page-1301ab8a.200f8c7a.js",
    "revision": "954aa822313646a8ffc8d69ed656d471"
  },
  {
    "url": "assets/js/page-2037549c.ef69bec0.js",
    "revision": "f0d77d78bf2385de49dc2720b8b0ab73"
  },
  {
    "url": "assets/js/page-25b298b6.b08cca5d.js",
    "revision": "287a0f12007c263e09bb82e308d6806b"
  },
  {
    "url": "assets/js/page-3c041b9e.a47cfdd8.js",
    "revision": "04f01351f195af402d2f6b51cd6a7393"
  },
  {
    "url": "assets/js/page-65eaf5e4.6b2ab4d7.js",
    "revision": "3c8312724bdcbccf2b8b08677a9b14ef"
  },
  {
    "url": "assets/js/page-7205f0b4.059a99f2.js",
    "revision": "9be8b0decfa77e935e5c65cc2aef1ace"
  },
  {
    "url": "assets/js/page-a2896314.8817ed64.js",
    "revision": "21e0fdbd71a9f60fc5ec778939d63524"
  },
  {
    "url": "assets/js/page-a7e2470e.a2b0b8d8.js",
    "revision": "f894350061cf7ea1fd4b1de391682934"
  },
  {
    "url": "assets/js/page-e4dfaf94.72bd28e9.js",
    "revision": "b590885c2cb49de1395758ec57577034"
  },
  {
    "url": "assets/js/vendors~layout-Layout.24ca2b10.js",
    "revision": "d1829d954987e37581a4675f5c8c45ea"
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
    "revision": "557965ee8c0e75d5fe608b5362b54ec9"
  },
  {
    "url": "doc/index.html",
    "revision": "f2436f0f9353f2e1ffa277d549f65ad0"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "6052090bb969ca530c7a6891abdb3b4a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "9730da00cc30ed47ec7e0341321dea33"
  },
  {
    "url": "index.html",
    "revision": "363df33ffe782fc5a2e478548820ed25"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "8c28ba9d552de2c3477b54e706867edf"
  },
  {
    "url": "product/index.html",
    "revision": "75b6832a71ba7f2d8812892f4d908922"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "ed16f8554ef74f8e693d643ab89cb0d7"
  },
  {
    "url": "resources/index.html",
    "revision": "859f58b4e0258e47233c60692d1e588f"
  },
  {
    "url": "support/index.html",
    "revision": "2eba07e3055c38cd49543042ff4fd875"
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
