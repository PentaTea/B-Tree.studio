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
    "revision": "ddbdca1915cd64e9005ca632f5ffb7f1"
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
    "url": "assets/js/app.f0dcae5d.js",
    "revision": "4114f5fd71b082d9ef30d512724272cf"
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
    "url": "assets/js/page-07fa8526.714a2508.js",
    "revision": "64671784770d7988de2cf0a14b1dd5c5"
  },
  {
    "url": "assets/js/page-1301ab8a.39581154.js",
    "revision": "389e5bd8e17672d71288522bdd29d9e5"
  },
  {
    "url": "assets/js/page-2037549c.674e5646.js",
    "revision": "34647d400df23960c0d3ca40039c79f2"
  },
  {
    "url": "assets/js/page-25b298b6.590108f9.js",
    "revision": "9a2460bd5c8930166344a88520ecf333"
  },
  {
    "url": "assets/js/page-3c041b9e.5a104243.js",
    "revision": "2f6c6c5b3628701956d28a72cb12238d"
  },
  {
    "url": "assets/js/page-65eaf5e4.ceea1a90.js",
    "revision": "bb29c03303ae457cd5c2bff99d5e2489"
  },
  {
    "url": "assets/js/page-7205f0b4.0dbd8f87.js",
    "revision": "6c68526f18a9c01d70066dea820dcf2d"
  },
  {
    "url": "assets/js/page-a2896314.c9a62420.js",
    "revision": "58d4a98bb09c30d23c2076edc3d9e8b0"
  },
  {
    "url": "assets/js/page-a7e2470e.76e20608.js",
    "revision": "40d1b60271452b3464d3bd141ea85c40"
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
    "revision": "ddf754e8d3a9092949af425be50055fd"
  },
  {
    "url": "doc/index.html",
    "revision": "1fab92c98358f229aed4d9c36df15f1a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "1b201a4f95de219c5b991a988dce4223"
  },
  {
    "url": "guide/team/index.html",
    "revision": "28de0cd87d5af74389edc2aab938c33a"
  },
  {
    "url": "index.html",
    "revision": "2547f958d504048188cd2e622b7e0bc7"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "7de3855800777eb85ef9a0e1c86af9c6"
  },
  {
    "url": "product/index.html",
    "revision": "8331654460aaba187b98a98a5131f99f"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "ba373f49324b515bcdcadb9b59296b47"
  },
  {
    "url": "resources/index.html",
    "revision": "c4d5d492b3d0311d0c6c0555b7c65975"
  },
  {
    "url": "support/index.html",
    "revision": "1576c2347eb009563d1416fa1230f19d"
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
