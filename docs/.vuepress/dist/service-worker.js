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
    "revision": "ca51ee1a88f9cad57885460ba9b95ebd"
  },
  {
    "url": "assets/css/0.styles.88b6ae75.css",
    "revision": "e0d04f3220a3d9972757235feb362771"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
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
    "url": "assets/js/16.c96220f1.js",
    "revision": "2ba4bff100e8484925f4a07356db2ccb"
  },
  {
    "url": "assets/js/17.20002e33.js",
    "revision": "639eb9dd167e4fa16cd965e12293ab4f"
  },
  {
    "url": "assets/js/18.065750c3.js",
    "revision": "94c761fefa4bc78cff3bc0d79e54ce14"
  },
  {
    "url": "assets/js/19.a2192d87.js",
    "revision": "cf194863dbe34982b3d5d896fc063fef"
  },
  {
    "url": "assets/js/20.f30ff517.js",
    "revision": "535a406e894b7cfba909716290a8850d"
  },
  {
    "url": "assets/js/21.6542e6f8.js",
    "revision": "20f79267ba861d1336215352ef9cd815"
  },
  {
    "url": "assets/js/22.167c0382.js",
    "revision": "9b7faccc2446e7e55b674c753ec8ee35"
  },
  {
    "url": "assets/js/23.9d79c02e.js",
    "revision": "91dcccfa5c1dec9dfac5f17e0dea9667"
  },
  {
    "url": "assets/js/24.8fd25c30.js",
    "revision": "74a06677161c7534115d96fe50380da4"
  },
  {
    "url": "assets/js/25.bedb9347.js",
    "revision": "fe7e15ec1d7a51eb0139c4f581c96447"
  },
  {
    "url": "assets/js/app.7f201ff8.js",
    "revision": "e97188fd82a969ada6d2be04030709fa"
  },
  {
    "url": "assets/js/layout-Layout.1d76618d.js",
    "revision": "245221a60bde0e74e02b7dae21c3fe54"
  },
  {
    "url": "assets/js/layout-NotFound.daaf6ed2.js",
    "revision": "e74c8ea991ac8aed66372ed0eb30f564"
  },
  {
    "url": "assets/js/page-07fa8526.59a36419.js",
    "revision": "47ad733c8ee1a727e55d0c2cde9305b7"
  },
  {
    "url": "assets/js/page-1301ab8a.0e0a3731.js",
    "revision": "6db7bb907c8b979260e6fbdec9da03ac"
  },
  {
    "url": "assets/js/page-2037549c.67a444d4.js",
    "revision": "2d4637497855a19ad9fbc2a7738c555a"
  },
  {
    "url": "assets/js/page-22954010.bc21e623.js",
    "revision": "dd0d2361f4c5bcfe29d3e135701836e2"
  },
  {
    "url": "assets/js/page-25b298b6.7f00a03d.js",
    "revision": "01798e6c75c1e4e806842d88e52ebb47"
  },
  {
    "url": "assets/js/page-3c041b9e.bd7d9a9b.js",
    "revision": "7dd36339defaf07093c22d50da913db8"
  },
  {
    "url": "assets/js/page-65eaf5e4.c211736c.js",
    "revision": "24eac11ee08b24629cc8f2da8997e162"
  },
  {
    "url": "assets/js/page-7205f0b4.1a240f91.js",
    "revision": "831f0c36e470e9777b54e4de5fc829b1"
  },
  {
    "url": "assets/js/page-a2896314.6544db94.js",
    "revision": "0e664bfaec531692728c59351964bb32"
  },
  {
    "url": "assets/js/page-a7e2470e.51dcfac8.js",
    "revision": "a8659def4dabe3cdd194b868881a20d6"
  },
  {
    "url": "assets/js/page-e4dfaf94.c905f682.js",
    "revision": "eac7de29fa0db1755ec99141dae1bfb4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.a2606cbc.js",
    "revision": "e8a7c32b75931228e49608da2aed174b"
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
    "revision": "928663b5dfc4da7362049fed547dcd75"
  },
  {
    "url": "doc/index.html",
    "revision": "ce40e3c393084a82bb25bc4c3bd63053"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "7b609d5a993f0fed1e5fddb259b4f88b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "67b9913e406db2a06e3388a21ba51762"
  },
  {
    "url": "index.html",
    "revision": "553c89cf1b77414c9c4a42c74a264c6c"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "46e38cd654fdebf940ec728f27011c05"
  },
  {
    "url": "product/index.html",
    "revision": "bcd3f8122a5005f6a918c659bbcd30be"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "a7c7583ec18dc84de8a1732c41b2351f"
  },
  {
    "url": "py-list/index.html",
    "revision": "750369d0241d35f4404c5c0739bc3e44"
  },
  {
    "url": "resources/index.html",
    "revision": "faa20339ba244e2609cede24f20f7d60"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "ae0f4c28bd787f6f3f3c213c1d49a668"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
