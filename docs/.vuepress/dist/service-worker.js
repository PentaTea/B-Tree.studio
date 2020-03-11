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
    "revision": "79916c1a23368507db13854119c66d9c"
  },
  {
    "url": "assets/css/0.styles.ac372554.css",
    "revision": "8187e8b775e3ff349eed92ddd778aaf4"
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
    "url": "assets/js/app.24e63840.js",
    "revision": "7c3d9476d9d8390eca9d43f8c2052eda"
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
    "url": "assets/js/page-07fa8526.29096468.js",
    "revision": "18688c9030821a9234126cf201580268"
  },
  {
    "url": "assets/js/page-1301ab8a.3df3017e.js",
    "revision": "8a0e4e0170d2b506560b2480b3eea4d3"
  },
  {
    "url": "assets/js/page-2037549c.79808d85.js",
    "revision": "5afc978ec76b3227dd18e848299e6da7"
  },
  {
    "url": "assets/js/page-25b298b6.2ced3941.js",
    "revision": "c3f3e1cdefb736250f70161e783d3ad2"
  },
  {
    "url": "assets/js/page-3c041b9e.4f659778.js",
    "revision": "b1055f720afef068f0be5030f4c24693"
  },
  {
    "url": "assets/js/page-65eaf5e4.a8e5df0d.js",
    "revision": "753308ef77ecdec35bdae40a3075b405"
  },
  {
    "url": "assets/js/page-7205f0b4.e5c80797.js",
    "revision": "8a2a7b503c4046a204b0b3962ae38a85"
  },
  {
    "url": "assets/js/page-a2896314.c9a62420.js",
    "revision": "58d4a98bb09c30d23c2076edc3d9e8b0"
  },
  {
    "url": "assets/js/page-a7e2470e.38c391c9.js",
    "revision": "8cdcf3258345dbeb53ad07b895771ee0"
  },
  {
    "url": "assets/js/page-e4dfaf94.cd13729f.js",
    "revision": "4c2158662d9488fd427ff090acc4f9c1"
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
    "revision": "fe9f41b376df8f7afeed399dd9403f98"
  },
  {
    "url": "doc/index.html",
    "revision": "4d218efa5b388a3f5c4e52ad7a86bdf0"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "bd8133e02e8cd2b9ce9cf89d1a440c16"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4c1169cbfbb222e9d6d759a7781bcd60"
  },
  {
    "url": "index.html",
    "revision": "454c26c8a752807bff77175c34311ed0"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "b2532e89888065c23aec10a2c8bce43a"
  },
  {
    "url": "product/index.html",
    "revision": "63f29c7a8c6d3a224670fbe3f6e8e801"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "62faba9bbd0d06b1669b4b7eca68291f"
  },
  {
    "url": "resources/index.html",
    "revision": "6e6d1710f5246a88e7f5e6f6472b130a"
  },
  {
    "url": "support/index.html",
    "revision": "ffae49e1780300750e1823661b6c4441"
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
