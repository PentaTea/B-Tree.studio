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
    "revision": "3a19ee1e90c879fb76da6feb4761607b"
  },
  {
    "url": "assets/css/0.styles.c3dbb1a4.css",
    "revision": "da586ab5861d09517a06bd5d78b33c76"
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
    "url": "assets/js/16.4074205f.js",
    "revision": "98502487ac0ecdf8fc1db52cc54b9e96"
  },
  {
    "url": "assets/js/17.24ffa0eb.js",
    "revision": "34f0fd156d89533258054e027720c4ae"
  },
  {
    "url": "assets/js/18.2a350c94.js",
    "revision": "e9bcd9d40ddb2ca51ad4e8bedad7f375"
  },
  {
    "url": "assets/js/19.68d83651.js",
    "revision": "cefb6688bb7ecc84b976a0ecfbf25ee7"
  },
  {
    "url": "assets/js/20.1f63f117.js",
    "revision": "05446a1eff2aaecfc589d5928f9cd116"
  },
  {
    "url": "assets/js/21.299d3c61.js",
    "revision": "82eea5e8106f7fe911f126cbad8e4683"
  },
  {
    "url": "assets/js/22.4fe889d5.js",
    "revision": "253d64effd14c0f0b14f08d4382a8d6b"
  },
  {
    "url": "assets/js/23.13920987.js",
    "revision": "63d7506fb87e24d7ca355f59b9e54b53"
  },
  {
    "url": "assets/js/24.6f643e4c.js",
    "revision": "06ee1879f8508f39fb57e2fcb0c2abc7"
  },
  {
    "url": "assets/js/25.2372dcc1.js",
    "revision": "52958b2ff31feb0af50c16c9cce292e7"
  },
  {
    "url": "assets/js/app.057fbad1.js",
    "revision": "36836d67301296105e0395368e6d49d3"
  },
  {
    "url": "assets/js/layout-Layout.b5ce08f9.js",
    "revision": "ff57f4664f2655bcb5bd61e505924b73"
  },
  {
    "url": "assets/js/layout-NotFound.b5f42441.js",
    "revision": "8fada34b4f5d020a1d67843506322ee9"
  },
  {
    "url": "assets/js/page-07fa8526.a1586911.js",
    "revision": "98f4ca2df437187e78c78966c8bcfe55"
  },
  {
    "url": "assets/js/page-1301ab8a.9e21b001.js",
    "revision": "2a1bb7458248f166de3f9c3e4ab2eb35"
  },
  {
    "url": "assets/js/page-2037549c.369a3587.js",
    "revision": "dfaa898f19a82cad07346e4c989cd26e"
  },
  {
    "url": "assets/js/page-22954010.bc21e623.js",
    "revision": "dd0d2361f4c5bcfe29d3e135701836e2"
  },
  {
    "url": "assets/js/page-25b298b6.47ade78f.js",
    "revision": "d8e911435bdfc4644b59662a6880d6c8"
  },
  {
    "url": "assets/js/page-3c041b9e.1eba9d2b.js",
    "revision": "bce6f80168fcf658d671cf8b9c1ebb2b"
  },
  {
    "url": "assets/js/page-65eaf5e4.90807f64.js",
    "revision": "7e51eff495aa66edc964914d49eb4382"
  },
  {
    "url": "assets/js/page-7205f0b4.3736e460.js",
    "revision": "0b662dd228cf548d3c82478f702ced99"
  },
  {
    "url": "assets/js/page-a2896314.f456eda2.js",
    "revision": "770d109cfbd72adeb7b0e72b10f76ac3"
  },
  {
    "url": "assets/js/page-a7e2470e.9c4bf2c2.js",
    "revision": "7adea494c089ea782b05b0932038ebb7"
  },
  {
    "url": "assets/js/page-e4dfaf94.c905f682.js",
    "revision": "eac7de29fa0db1755ec99141dae1bfb4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.39097807.js",
    "revision": "8d6decf8175b7727a3c160b9786ce3f5"
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
    "revision": "6a6ef9bf6b0b364475c069ad67195814"
  },
  {
    "url": "doc/index.html",
    "revision": "97f78544a64b850f0808dd56a5b8a97b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "8deceeef6229f492ba8695ac5a21a7a3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "5062115a438ca3dca4556253bcf3e1d5"
  },
  {
    "url": "index.html",
    "revision": "86f5877eb53a824d0aca92d86f45d0c6"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "50ed63e2cd62ed372613b2dc12421d9a"
  },
  {
    "url": "product/index.html",
    "revision": "b50de60eee14c16977d450e89ee6dfc6"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "f3d02b6f4246dae24c7e5de6d3b3a1b1"
  },
  {
    "url": "py-list/index.html",
    "revision": "c1062eb91666c61ddcb9ac46d720f300"
  },
  {
    "url": "resources/index.html",
    "revision": "04c74676185d45ca5741f03cc5553c9e"
  },
  {
    "url": "support/index.html",
    "revision": "d62f44388816c67d2043cb78441c403d"
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
