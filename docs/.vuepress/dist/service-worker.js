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
    "revision": "f81cb6ad4f3e96bb7aaf3b0dc6e43a7e"
  },
  {
    "url": "assets/css/0.styles.3895be83.css",
    "revision": "1f92e5f753b3dbde8a3c94f708300fe4"
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
    "url": "assets/img/0.41d20d93.svg",
    "revision": "41d20d930c36b55581e0a22d2b836277"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/五茶.jpg",
    "revision": "99c3a8349fae7f49857cc3204eef8dbb"
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
    "url": "assets/js/16.c3425ea5.js",
    "revision": "4db4145d0b9091d7e254db0f0627c339"
  },
  {
    "url": "assets/js/17.fbb3f955.js",
    "revision": "287dab6db35e36e7cbf38e497446dbcf"
  },
  {
    "url": "assets/js/18.bd9e3284.js",
    "revision": "957249d713135200168a6feafdaa074f"
  },
  {
    "url": "assets/js/19.87b40084.js",
    "revision": "9126f4d3217115b347cd0fd0b607ff56"
  },
  {
    "url": "assets/js/20.e9a2951d.js",
    "revision": "c16a8e375dbd50b6f9938d87c871680f"
  },
  {
    "url": "assets/js/21.805b0315.js",
    "revision": "173c008c2dd8d936272374a06076b3c9"
  },
  {
    "url": "assets/js/22.499d546d.js",
    "revision": "e33f107b525dbdb441fbeac8049f487a"
  },
  {
    "url": "assets/js/23.e6072f38.js",
    "revision": "192718a0a0d2be93ee35cf4380defa04"
  },
  {
    "url": "assets/js/24.1f671b20.js",
    "revision": "542ab4720011058574be906aaaacac97"
  },
  {
    "url": "assets/js/25.090cd55f.js",
    "revision": "3a30392d1b964c6fe2d0a30e40e44fdb"
  },
  {
    "url": "assets/js/26.5a81dc3f.js",
    "revision": "555a1642470aa861e8f10cd8df72e19a"
  },
  {
    "url": "assets/js/27.053ba8a5.js",
    "revision": "b723421c19efd278cd00be135676791a"
  },
  {
    "url": "assets/js/28.ea9fff43.js",
    "revision": "2f4af230f444ebb684cbc3836a663db9"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.10089f99.js",
    "revision": "2a0d33f891bdb5c11b8cefba66b26968"
  },
  {
    "url": "assets/js/layout-Layout.5486fac7.js",
    "revision": "a09de049580a483026d89be85d6b6677"
  },
  {
    "url": "assets/js/layout-NotFound.778b81c3.js",
    "revision": "1a7d94fb6599af35c29489af1ed5643d"
  },
  {
    "url": "assets/js/page-069942c9.0275252d.js",
    "revision": "2c1784bbbd39ac75a8da07862e70c085"
  },
  {
    "url": "assets/js/page-142fd774.0cc0a57e.js",
    "revision": "1713bd7c65aef4c2d9b109b881bfeda2"
  },
  {
    "url": "assets/js/page-2037549c.7a46d7db.js",
    "revision": "6972212826c26cbf35829992c762c100"
  },
  {
    "url": "assets/js/page-22954010.fe0ff487.js",
    "revision": "46367bd35c00c3e4560199ac678ae4fe"
  },
  {
    "url": "assets/js/page-25b298b6.5f86c929.js",
    "revision": "aa96b6c3e2c0167c415c29c77d24f0de"
  },
  {
    "url": "assets/js/page-3c041b9e.f8931fc2.js",
    "revision": "002a8b6b62bc1c0895e95465698c9509"
  },
  {
    "url": "assets/js/page-65eaf5e4.bbd0a60f.js",
    "revision": "7517a534dcb8716f31d6fa944073e08f"
  },
  {
    "url": "assets/js/page-7205f0b4.2f952a7d.js",
    "revision": "6d29fa9256ad5d9c73e33e378add8592"
  },
  {
    "url": "assets/js/page-e4dfaf94.adae20f1.js",
    "revision": "70ab42ebe1ac66fd64c2d9ac117c179f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.98308dcb.js",
    "revision": "266e7773063ac939cb41e42105de7b79"
  },
  {
    "url": "assets/js/vendors~layout-Layout.d78b1b5b.js",
    "revision": "ef7020166b9aaee8b14d6b3b72e5e36c"
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
    "revision": "c912a9cffe15a40293c38cedf7b891c0"
  },
  {
    "url": "doc/index.html",
    "revision": "0ec2bb5934fe9af2e9e4acd68a781263"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "81645d9f2ba11d5d6feca4d6f0782834"
  },
  {
    "url": "guide/index.html",
    "revision": "fad844b87bbfc1c0cee2df16cc586eb3"
  },
  {
    "url": "guide/team/index.html",
    "revision": "ebb9c948afce4017a66c496c6a34034e"
  },
  {
    "url": "index.html",
    "revision": "3f7a6d7ea3409159e093797c2ca506cf"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "8a1d4f887b13680c8f33165f41b51263"
  },
  {
    "url": "py-list/index.html",
    "revision": "95757638243f80bc9f6839ce2175c227"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "8ecf61125ca505baf5318f3fc0d47b66"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "2cc175da0ad3d71ac08500bf235f4c24"
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
