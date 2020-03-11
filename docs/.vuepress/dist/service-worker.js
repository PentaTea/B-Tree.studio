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
    "revision": "dffda7bfc2474958cad5a8ca11af7c3b"
  },
  {
    "url": "assets/css/0.styles.1674935d.css",
    "revision": "4c88ebf34ca32977b1bfba316c83ff3e"
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
    "url": "assets/js/15.c23d4f80.js",
    "revision": "c5bcfd1cb5ed21d6ef5ca3bbe68d0c06"
  },
  {
    "url": "assets/js/16.b2d3ec18.js",
    "revision": "f336d509604f2679850b0effbd3af82c"
  },
  {
    "url": "assets/js/17.f7f212a5.js",
    "revision": "e0eb4878e5e6988f1fd9ea498682fe59"
  },
  {
    "url": "assets/js/18.1464e250.js",
    "revision": "097ca8b7ec25eeacebef8d08f6bae4de"
  },
  {
    "url": "assets/js/19.bdef9791.js",
    "revision": "b4a532838f2220cc1e020b9e54916ac9"
  },
  {
    "url": "assets/js/20.e9a83dc4.js",
    "revision": "b6f7f97c996fd0e8a2f1ea15f77400de"
  },
  {
    "url": "assets/js/21.4dfb5903.js",
    "revision": "48abe5c3d5245dbb0dfab67c2d3b8724"
  },
  {
    "url": "assets/js/22.8966e39a.js",
    "revision": "a658c436a8e427e44dbe1e96f787ae1f"
  },
  {
    "url": "assets/js/23.57a1f07e.js",
    "revision": "62e297fac51e7830e04934ad656d4262"
  },
  {
    "url": "assets/js/app.01fd355d.js",
    "revision": "e043bd7c66c9a000b67dde0a37d8e15e"
  },
  {
    "url": "assets/js/layout-Layout.718dc922.js",
    "revision": "89cd95aaca525f711b39ce73fa0c9d7f"
  },
  {
    "url": "assets/js/layout-NotFound.5d7b5651.js",
    "revision": "ab26315c418a9a470b1beccd31625d56"
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
    "url": "assets/js/page-2037549c.4db24ebf.js",
    "revision": "a6e79c3f2da19c90565dd82a0cf715f2"
  },
  {
    "url": "assets/js/page-25b298b6.dedd6c24.js",
    "revision": "5ecb5e8d33aceabae49f2e88a0ec6575"
  },
  {
    "url": "assets/js/page-3c041b9e.44b9298e.js",
    "revision": "4765de40e771c0b428a94cf44dc62a02"
  },
  {
    "url": "assets/js/page-65eaf5e4.1c891af7.js",
    "revision": "4a98009a4b78c586fc759462fd5fba15"
  },
  {
    "url": "assets/js/page-7205f0b4.7bbc157a.js",
    "revision": "d56583bbd4586204f4c8b1af35db25cb"
  },
  {
    "url": "assets/js/page-a2896314.6ec3637f.js",
    "revision": "905a9532448b6aa20c60833d5c98b47f"
  },
  {
    "url": "assets/js/page-a7e2470e.911b52ae.js",
    "revision": "768800622e5120875418876ccb1f82df"
  },
  {
    "url": "assets/js/page-e4dfaf94.56eee22a.js",
    "revision": "1dfb588ddc77e8f7225ce4234b482721"
  },
  {
    "url": "assets/js/vendors~layout-Layout.6eea660b.js",
    "revision": "2aeb02e6b3054b15f03eadb4f6b78183"
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
    "revision": "cecd95493946ba43f96019a7b649d2bd"
  },
  {
    "url": "doc/index.html",
    "revision": "d780bf47bad2823f90cd49437d250a00"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e31987627fa13091cb7b564846ff6588"
  },
  {
    "url": "guide/team/index.html",
    "revision": "e5d4780837ebc0c41b4bbd3cb078c2cf"
  },
  {
    "url": "index.html",
    "revision": "f596a8f8f6326bcaaabf380a3f8c4621"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "569d7b99c8cea58ea881486f7e6a657f"
  },
  {
    "url": "product/index.html",
    "revision": "8afdfe15d1ed682c3bc222f24edaf47e"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "f0519071c06327f92827f253ec90d11a"
  },
  {
    "url": "resources/index.html",
    "revision": "5b4150acc36f246182ddfc3637cc86a8"
  },
  {
    "url": "support/index.html",
    "revision": "de85af24f90fb1b150d118e2d999e8d6"
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
