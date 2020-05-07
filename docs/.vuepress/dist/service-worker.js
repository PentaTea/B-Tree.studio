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
    "revision": "3312ba2a6c67f51e302edbee5c51c7b7"
  },
  {
    "url": "assets/css/0.styles.64dc4017.css",
    "revision": "aa31aaee29293012033a8d0ca98b36ff"
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
    "url": "assets/img/0.f31205f0.svg",
    "revision": "f31205f0f990d39936dd6b65ca574746"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
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
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/js/1.aa7f4835.js",
    "revision": "ffdde0d535b97f325d14158a01ca92c8"
  },
  {
    "url": "assets/js/16.3cd6efec.js",
    "revision": "2bce191437ffe63a10dddffdf578345f"
  },
  {
    "url": "assets/js/17.2c21a9bc.js",
    "revision": "905036166cd1b6459cfc31ba17f05ac3"
  },
  {
    "url": "assets/js/18.db0a58fc.js",
    "revision": "efc0d8c902c772df0a1ed3ba9c54c2db"
  },
  {
    "url": "assets/js/19.77ebee86.js",
    "revision": "e1e297cc8d25882164c99973d0ff6d21"
  },
  {
    "url": "assets/js/20.5b9e041c.js",
    "revision": "0fefb60c0d4a62cf47b878d0e8205c84"
  },
  {
    "url": "assets/js/21.838b171c.js",
    "revision": "fd60a68711d0e2584e9aebf9856d6bd3"
  },
  {
    "url": "assets/js/22.a4496072.js",
    "revision": "0532cefe63dcddf8c0ae8ae2121ae923"
  },
  {
    "url": "assets/js/23.53967b3f.js",
    "revision": "ab0f6ff2e989c4ffd1f7e7641f47a7c4"
  },
  {
    "url": "assets/js/24.1f671b20.js",
    "revision": "542ab4720011058574be906aaaacac97"
  },
  {
    "url": "assets/js/25.e366d8f3.js",
    "revision": "02bfc49860bb30083ac13f925761ae68"
  },
  {
    "url": "assets/js/26.f7a62462.js",
    "revision": "446e02fb2163cebcaa71f61b0f7bd9e8"
  },
  {
    "url": "assets/js/27.32767a0e.js",
    "revision": "c2654f862602a9a3b7b94ab51fb7e676"
  },
  {
    "url": "assets/js/28.d385ab48.js",
    "revision": "c7a69ce4ca345d8da0d25e797e5f89f4"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.fa64f839.js",
    "revision": "3143c27fda918e8758658eb0aabdd143"
  },
  {
    "url": "assets/js/layout-Layout.974c784c.js",
    "revision": "b14beaebd4435f2419e7ce124d199674"
  },
  {
    "url": "assets/js/layout-NotFound.bc0e727b.js",
    "revision": "270c4c68093cd08c1e1ceed881d36d24"
  },
  {
    "url": "assets/js/page-069942c9.fc48db01.js",
    "revision": "a5056d7e9a6aead97c901158cffaa59c"
  },
  {
    "url": "assets/js/page-142fd774.968b3b9c.js",
    "revision": "57ec47f1e2fa55e11e08b35df6608034"
  },
  {
    "url": "assets/js/page-2037549c.7a46d7db.js",
    "revision": "6972212826c26cbf35829992c762c100"
  },
  {
    "url": "assets/js/page-22954010.92e75535.js",
    "revision": "6f3762c9e486bac6eaf4bc0439742bab"
  },
  {
    "url": "assets/js/page-25b298b6.91327388.js",
    "revision": "5ce102503be195ff04433f6da2162ed4"
  },
  {
    "url": "assets/js/page-3c041b9e.4c28e13f.js",
    "revision": "f5ac00f4e458dcef96d44e997d768f27"
  },
  {
    "url": "assets/js/page-65eaf5e4.501d3ed1.js",
    "revision": "c92543d3e0ec9c3704ac43c822189242"
  },
  {
    "url": "assets/js/page-7205f0b4.16ae2ac6.js",
    "revision": "1cb34dc213e7950eba1d2d90498cc762"
  },
  {
    "url": "assets/js/page-e4dfaf94.11596ca9.js",
    "revision": "5aa5e56a2e4b9ca2f937f2810e104b8d"
  },
  {
    "url": "assets/js/page-fd1ee6b4.ca431718.js",
    "revision": "d9dc16e97e2612f9aca0bfd87ac5bdce"
  },
  {
    "url": "assets/js/vendors~layout-Layout.f45c498c.js",
    "revision": "3636a095531756772898831d3d4ba184"
  },
  {
    "url": "assets/svg/PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "assets/svg/PCBRuler.svg",
    "revision": "0210ace36bdd454de56380f92b8a39d3"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "10b01510126a0848868695eb6bfb9ab1"
  },
  {
    "url": "doc/index.html",
    "revision": "09a8e93819f8c2f8d32a95ac8fb4c175"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "4b3db5fc41a728b697b0f30e1a6b6e2b"
  },
  {
    "url": "guide/index.html",
    "revision": "1490d928a5bca9605c8fd94a5cd36fd6"
  },
  {
    "url": "guide/team/index.html",
    "revision": "01449f5a40b5c11ab60d238ca3aead32"
  },
  {
    "url": "index.html",
    "revision": "a6388d112cbb2bf30a83daad163f652a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "6500ad6774397ae78f008a418db4ed76"
  },
  {
    "url": "py-list/index.html",
    "revision": "8ac243e66cfd8b691280cee036707f56"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "4dfc416990a4aa6586cdbd0446bb38c1"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "4cb4bf283b079ddf44f7bd86c3d2b0c2"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
