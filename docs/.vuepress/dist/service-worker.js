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
    "revision": "c66310dc66879d88b8bcadc02dac2fcc"
  },
  {
    "url": "assets/css/0.styles.ca67317e.css",
    "revision": "6c6f2c296a2924aab3dce84e8980813e"
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
    "url": "assets/js/15.702ac4a2.js",
    "revision": "1dc119adbfd336ec107e08c65c817288"
  },
  {
    "url": "assets/js/16.8a7fd7ad.js",
    "revision": "0597e5d1bf49907786d33fdbfe36d78d"
  },
  {
    "url": "assets/js/17.55296d16.js",
    "revision": "7afee89b5a09288a2393a9391892f3b3"
  },
  {
    "url": "assets/js/18.1750948a.js",
    "revision": "1665208b0c79351571ebb5141f344637"
  },
  {
    "url": "assets/js/19.bdef9791.js",
    "revision": "b4a532838f2220cc1e020b9e54916ac9"
  },
  {
    "url": "assets/js/20.2246b357.js",
    "revision": "c197dba9a455bfee6f2e23152986414c"
  },
  {
    "url": "assets/js/21.8fd28e7d.js",
    "revision": "7e2bc2f5203ad79d1d0185ea3e254993"
  },
  {
    "url": "assets/js/22.3cd081c8.js",
    "revision": "5b228eaf345918e5e5fdfa03aa4894a9"
  },
  {
    "url": "assets/js/23.57a1f07e.js",
    "revision": "62e297fac51e7830e04934ad656d4262"
  },
  {
    "url": "assets/js/app.b6cc8a28.js",
    "revision": "d687fe553b9d2e18aee0726bf5a167e2"
  },
  {
    "url": "assets/js/layout-Layout.2c31ed33.js",
    "revision": "2fa025c95e4094d8b4374418a575ba8e"
  },
  {
    "url": "assets/js/layout-NotFound.f013ddef.js",
    "revision": "c3f5ee600625b3c3a8b31e6dde7beef0"
  },
  {
    "url": "assets/js/page-07fa8526.3350eec3.js",
    "revision": "d01207e8134161331b39cf14f659fe41"
  },
  {
    "url": "assets/js/page-1301ab8a.55ba260d.js",
    "revision": "5e42dc1335dc1f2f2f15712e655ac57f"
  },
  {
    "url": "assets/js/page-2037549c.b5798f5f.js",
    "revision": "2de918389a20a4c1c5672d4b785cb0e6"
  },
  {
    "url": "assets/js/page-25b298b6.2ced3941.js",
    "revision": "c3f3e1cdefb736250f70161e783d3ad2"
  },
  {
    "url": "assets/js/page-3c041b9e.00116eb9.js",
    "revision": "b724e6bb34094b6d89fa0c9562cd39e4"
  },
  {
    "url": "assets/js/page-65eaf5e4.a8e5df0d.js",
    "revision": "753308ef77ecdec35bdae40a3075b405"
  },
  {
    "url": "assets/js/page-7205f0b4.1551411d.js",
    "revision": "7ec1a853a74cd3bf1e6f1caa0b6041e6"
  },
  {
    "url": "assets/js/page-a2896314.4ca1285e.js",
    "revision": "c5d16a12a34e7e9b7114d0de8924ed0b"
  },
  {
    "url": "assets/js/page-a7e2470e.4367ffef.js",
    "revision": "6fad1bfe6f7ac008cb0dc29e54723b31"
  },
  {
    "url": "assets/js/page-e4dfaf94.951e337d.js",
    "revision": "94d50820d1608aa70544e56ef731ec4d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.b621a908.js",
    "revision": "65c0a76294dd53b90d07bb6d251c1b75"
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
    "revision": "b40699d3874121172c8e44ed8831e006"
  },
  {
    "url": "doc/index.html",
    "revision": "c3124046287f7e717c4a2cf4c95b0dc5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "1c07e2455664444e1710e7b456f90d15"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d89ea0e753930a7a5888bfe7c9c51fcd"
  },
  {
    "url": "index.html",
    "revision": "346c7deb42a5bb9be49a9f01e00ddc53"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "0ffc496f17e425bd87f958e2d1b2fc04"
  },
  {
    "url": "product/index.html",
    "revision": "4eaf423aa3e416e9d955bd096f774a46"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "31e11d07f6ced1a3a07f5c4b15a02767"
  },
  {
    "url": "resources/index.html",
    "revision": "9c31982dd1cdaa762dc70ce21f2389c2"
  },
  {
    "url": "support/index.html",
    "revision": "0cd9091afe3a0b262fa0da20804fbb26"
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
