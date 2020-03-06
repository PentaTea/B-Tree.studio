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
    "revision": "d25f8512592fe1f5b57bfaf5eb060770"
  },
  {
    "url": "assets/css/0.styles.26b39345.css",
    "revision": "10654cb27c7e54a1bb7b9dd71d05a1d3"
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
    "url": "assets/js/14.05012cae.js",
    "revision": "9dcfda8d98409a78b0753a033c714ba8"
  },
  {
    "url": "assets/js/15.dd60868f.js",
    "revision": "785a9a21edf1a471cc4a84e5e70648ab"
  },
  {
    "url": "assets/js/16.47eb1bdc.js",
    "revision": "0863a5357f81fa903d8c3093190243d0"
  },
  {
    "url": "assets/js/17.6e602054.js",
    "revision": "5a41981b9a1c46546aad82af6eb856e3"
  },
  {
    "url": "assets/js/18.39e56552.js",
    "revision": "a4c387214cae73c477695782322f3fab"
  },
  {
    "url": "assets/js/19.7d2963d1.js",
    "revision": "701c4ff4a53179a834ea5d9417630147"
  },
  {
    "url": "assets/js/20.ffa2d32d.js",
    "revision": "2fe895bfcd72e503f94781c5d199e331"
  },
  {
    "url": "assets/js/app.dc68d313.js",
    "revision": "8bf238e13c283d1afff08c9de1f653ca"
  },
  {
    "url": "assets/js/layout-Layout.c4281ee5.js",
    "revision": "735dcaa79a2051cf48d9fc963e5d8c07"
  },
  {
    "url": "assets/js/layout-NotFound.1408db16.js",
    "revision": "180c427a531bdda811d6f8a50236852a"
  },
  {
    "url": "assets/js/page-07fa8526.05182f1f.js",
    "revision": "8d6ceac36c462094899d9c6184b2def3"
  },
  {
    "url": "assets/js/page-1301ab8a.06a71c33.js",
    "revision": "d88523b1f1679d2a18e763a4ef7c8bdd"
  },
  {
    "url": "assets/js/page-2037549c.ae9e6c51.js",
    "revision": "43116c9175acb10e62283feb9f1aceb0"
  },
  {
    "url": "assets/js/page-25b298b6.85d2fa92.js",
    "revision": "d4632357c8d61e7e6fb4414f53356eb0"
  },
  {
    "url": "assets/js/page-3c041b9e.1bee23a6.js",
    "revision": "8d6d3c5aaaa2dafac8cc576dda38649c"
  },
  {
    "url": "assets/js/page-65eaf5e4.a944bf70.js",
    "revision": "3fdfdba429e9eb1f5e5e64034afe0b28"
  },
  {
    "url": "assets/js/page-a2896314.1c244191.js",
    "revision": "8e996f39732522511276373fd9bea468"
  },
  {
    "url": "assets/js/page-a7e2470e.17ed2e04.js",
    "revision": "791727fef4313a35d3aebf7e8dd0e6e7"
  },
  {
    "url": "assets/js/page-e4dfaf94.bd4c647e.js",
    "revision": "c8f082c5b3f7ee27ae74ef168edaa1ce"
  },
  {
    "url": "assets/js/vendors~layout-Layout.35400599.js",
    "revision": "d64cbb0aa36dec91406cd20c49cc7734"
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
    "revision": "9dec6231fda13169292931fb1353604c"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "72d26b9dec2fcdd1a6d5e1c3960a9ee9"
  },
  {
    "url": "guide/team/index.html",
    "revision": "20a15f92afc21dbca68a83e8ac1a3319"
  },
  {
    "url": "index.html",
    "revision": "f71de0a56abb90a5f6601c043204e2a0"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "1b5a43968a780ae50ee0fbc3a183ca9f"
  },
  {
    "url": "product/index.html",
    "revision": "13606d55d4124ab4e73b91c672ffa873"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "284206f83e122e1ceb1a65626f4c3e96"
  },
  {
    "url": "resources/index.html",
    "revision": "38a6f321aa41523d1cd6210d31446ee3"
  },
  {
    "url": "support/index.html",
    "revision": "b30be09c91c20becd67e0dc86bb0755d"
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
