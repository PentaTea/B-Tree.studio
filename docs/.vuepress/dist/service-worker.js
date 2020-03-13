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
    "revision": "4f3ae6e0bffd220dc268987862df0afc"
  },
  {
    "url": "assets/css/0.styles.16b698a1.css",
    "revision": "7eb8d458c7b0bb3907c63b18b715a083"
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
    "url": "assets/img/tail-spin.bdc50dc9.svg",
    "revision": "bdc50dc9593770fc62d9965346a87772"
  },
  {
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/15.be5ef5bd.js",
    "revision": "584b820a790b23f48468985e84349285"
  },
  {
    "url": "assets/js/16.eeef3b62.js",
    "revision": "3cdd50dbcd3d81007050581902575c9a"
  },
  {
    "url": "assets/js/17.5d977788.js",
    "revision": "6913cdbe60af3fbcc68f9860fd56167a"
  },
  {
    "url": "assets/js/18.b8a619ab.js",
    "revision": "0980d3ea4fadc88eb68040848eef0958"
  },
  {
    "url": "assets/js/19.d02b5eeb.js",
    "revision": "b146923b47c6c7b03b739e1ffda9850a"
  },
  {
    "url": "assets/js/20.fcbb4ef0.js",
    "revision": "fc7ef5c06a84c132658fd52c2eb827aa"
  },
  {
    "url": "assets/js/21.c745498c.js",
    "revision": "8b658dfceee2dbd1750c06c67a8cdac5"
  },
  {
    "url": "assets/js/22.8deccc3b.js",
    "revision": "ece0af5df629c928b38e8f9bfaee0f38"
  },
  {
    "url": "assets/js/23.2c2342dc.js",
    "revision": "02c612397b48b1ed993614b6a98d1468"
  },
  {
    "url": "assets/js/app.38cf57b5.js",
    "revision": "618df5e6e414b4515ed44fbb25c2808d"
  },
  {
    "url": "assets/js/layout-Layout.9a457c60.js",
    "revision": "e87f76493be3f8e481fbf45677a69c70"
  },
  {
    "url": "assets/js/layout-NotFound.71987536.js",
    "revision": "1f501fc28379fa5176b812e6557f543f"
  },
  {
    "url": "assets/js/page-07fa8526.f121305a.js",
    "revision": "20cc3f86289311742a84c33ac9f8cb40"
  },
  {
    "url": "assets/js/page-1301ab8a.e2b16721.js",
    "revision": "ea0962dc6c97019ffa4fb1f9cf16c576"
  },
  {
    "url": "assets/js/page-2037549c.6b683b60.js",
    "revision": "3ef41c171be7bdf17a2a878a67e96057"
  },
  {
    "url": "assets/js/page-25b298b6.cd8bed96.js",
    "revision": "147c4587b1b9d9ca20bdb320a7e3404f"
  },
  {
    "url": "assets/js/page-3c041b9e.d7c9c74d.js",
    "revision": "94f761af5f415d0a7729497ecb26d8ba"
  },
  {
    "url": "assets/js/page-65eaf5e4.fa6e9a29.js",
    "revision": "98471742a39b462251995fc09d5829fe"
  },
  {
    "url": "assets/js/page-7205f0b4.5cd9fcd6.js",
    "revision": "536f0b3828df238e1d4196ed5494a214"
  },
  {
    "url": "assets/js/page-a2896314.8e8e5b9d.js",
    "revision": "db5c4eb98b2fe116fad920c01c842093"
  },
  {
    "url": "assets/js/page-a7e2470e.12240811.js",
    "revision": "c8b6db2b581b0d835c3dee1be5afdece"
  },
  {
    "url": "assets/js/page-e4dfaf94.765b329b.js",
    "revision": "9f380ac071f19ef53cce0ee00e663c27"
  },
  {
    "url": "assets/js/vendors~layout-Layout.032904ef.js",
    "revision": "230a47c5adc83474823f5c3e631777ce"
  },
  {
    "url": "assets/svg/briefcase.svg",
    "revision": "72eb0266680765e1d356ca037f5cef60"
  },
  {
    "url": "assets/svg/globe.svg",
    "revision": "38e3374309f7a3db37c31f885d4b47b4"
  },
  {
    "url": "assets/svg/map-pin.svg",
    "revision": "156d6c03b4a6d93409c2e612c4f81bec"
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
    "revision": "40b1d51dd340b321f7206d3ce1bfbea5"
  },
  {
    "url": "doc/index.html",
    "revision": "c0730900f784f2f01766a71bc7a3c4e5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "048e5c38b85f6867cba7ba26fad45163"
  },
  {
    "url": "guide/team/index.html",
    "revision": "29b87d916edb085701cc2fb1a203ab57"
  },
  {
    "url": "index.html",
    "revision": "f7c65f52f668254172d492964838b832"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "3e8163927806e5d6b526f2951004baca"
  },
  {
    "url": "product/index.html",
    "revision": "78e4a5d88966bcc5a0e36a933303e9d4"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "283e2272c00ec899cfe91a9b575fe75b"
  },
  {
    "url": "resources/index.html",
    "revision": "f1dbf3597ab83abfdde716a1534bd8dc"
  },
  {
    "url": "support/index.html",
    "revision": "5a77b079a377d76b8d7d3318dc024dc8"
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
