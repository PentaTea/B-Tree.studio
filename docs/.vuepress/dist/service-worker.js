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
    "revision": "df0718d5facbcc17278ff18304f6a99b"
  },
  {
    "url": "assets/css/0.styles.8a98e66a.css",
    "revision": "91fa7a58164ec8220bff9ee43c84b25e"
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
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
  },
  {
    "url": "assets/img/PingFangLight.61dc3db6.svg",
    "revision": "61dc3db6b8940b73312504f67b8cbc08"
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
    "url": "assets/js/1.bcbb0745.js",
    "revision": "6adc515fc6ce3e25dbe09f4b7b5c2d2d"
  },
  {
    "url": "assets/js/16.8dcf958d.js",
    "revision": "acba0bd4144ba218dfca03864e816d74"
  },
  {
    "url": "assets/js/17.444e264d.js",
    "revision": "6bfadab8a4529e76a2f8e9d9823f891f"
  },
  {
    "url": "assets/js/18.abdd9f2e.js",
    "revision": "2a16ab6989fa2b826cdf97a492a8aa32"
  },
  {
    "url": "assets/js/19.e75caefc.js",
    "revision": "ba4d472c4f1ba04ea90ea962099bd6ca"
  },
  {
    "url": "assets/js/20.d811f7cf.js",
    "revision": "c2c8da7b841f88ed6f972d1e838ea892"
  },
  {
    "url": "assets/js/21.75b0ccea.js",
    "revision": "5a9042fcfc1742bf398a2ec631595b74"
  },
  {
    "url": "assets/js/22.c0c479c1.js",
    "revision": "42e0777b3a22e04c753e9dc77256ab56"
  },
  {
    "url": "assets/js/23.c242bfd2.js",
    "revision": "bad685fef41f78d4706574942466dc6e"
  },
  {
    "url": "assets/js/24.b876d7ce.js",
    "revision": "38feb8b0f6909a543bf49f08cbcc02dc"
  },
  {
    "url": "assets/js/25.c6e26acc.js",
    "revision": "422102fc4d23f3afc83d4d56cb303d59"
  },
  {
    "url": "assets/js/26.281319b1.js",
    "revision": "07bd5d45c081d34437d7382f13d71aa7"
  },
  {
    "url": "assets/js/27.9f819fff.js",
    "revision": "75b35431597cff3141567413a15f6334"
  },
  {
    "url": "assets/js/app.8c143391.js",
    "revision": "581515165b9a0b1cc80526d48c9404e5"
  },
  {
    "url": "assets/js/layout-Layout.470970d7.js",
    "revision": "1c3eb8d7960e77bb3a285ad3b9464f05"
  },
  {
    "url": "assets/js/layout-NotFound.8bdcb7fd.js",
    "revision": "e97ae7be95eb0d1d38d277fa05404480"
  },
  {
    "url": "assets/js/page-1301ab8a.b2d40414.js",
    "revision": "272bb1e84dba44c4e6313d2630b4a0e1"
  },
  {
    "url": "assets/js/page-142fd774.1ac5e33a.js",
    "revision": "43134d2a95e6e72060c2a86ff419529e"
  },
  {
    "url": "assets/js/page-2037549c.1fbe6e06.js",
    "revision": "4cc4ffd2f92533644bc3e6fbc266ad06"
  },
  {
    "url": "assets/js/page-22954010.045babb0.js",
    "revision": "94e65f993bdb8fc492377b23a0123ba4"
  },
  {
    "url": "assets/js/page-25b298b6.07b609cd.js",
    "revision": "2bf650e656587e3ddd1a1a690ecc7a1c"
  },
  {
    "url": "assets/js/page-3c041b9e.032553a0.js",
    "revision": "1ec180616952d29b41497d0cf3d5a177"
  },
  {
    "url": "assets/js/page-65eaf5e4.20f83022.js",
    "revision": "ca098b5d2dadd487083e9fff51704c2e"
  },
  {
    "url": "assets/js/page-7205f0b4.09a7d9fa.js",
    "revision": "d2cbef103255d089cc4f302ec5241817"
  },
  {
    "url": "assets/js/page-e4dfaf94.078a21c8.js",
    "revision": "5fe30f964c69fd410039152abc43a991"
  },
  {
    "url": "assets/js/page-fd1ee6b4.cb59b76e.js",
    "revision": "bee013961d6380a221e370a593123583"
  },
  {
    "url": "assets/js/vendors~layout-Layout.4a070f8c.js",
    "revision": "0ce880081f6d3ec1ba47f34bb23a3ac2"
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
    "revision": "cb74d7d34fcbfe54acdc4f6e2835eff7"
  },
  {
    "url": "doc/index.html",
    "revision": "8b951b19457fae32d34ce0bc224a9ec9"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "9f2e7caa57c4af5b55627944f0c4cd5f"
  },
  {
    "url": "guide/index.html",
    "revision": "5c092c47f3597c2330cc4292774af941"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4d7838d5fd5f967d8eca0c0ef8daa9f4"
  },
  {
    "url": "index.html",
    "revision": "da99d116b61bbfac2d1d67dc03bd1dde"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "a84e83d2545aca3467ba0949ab9cb25e"
  },
  {
    "url": "py-list/index.html",
    "revision": "ba3517290652afdf9559b2b2d20b79ff"
  },
  {
    "url": "resources/index.html",
    "revision": "42b8778c7a77472e2725dd363e0dafc7"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "749aa619d3c9cb6569bf468614bc35d6"
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
