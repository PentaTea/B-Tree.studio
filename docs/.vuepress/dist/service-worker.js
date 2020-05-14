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
    "revision": "6f2f733a26c05383671de22bca3a695c"
  },
  {
    "url": "assets/css/0.styles.63119a7b.css",
    "revision": "2b036ce0d5bd55bb698990fadd2085d0"
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
    "url": "assets/js/17.186d9704.js",
    "revision": "80bb10d6d9f6a086030a15fcf103e5d1"
  },
  {
    "url": "assets/js/18.cf5c026b.js",
    "revision": "66c447e810460a35a6c0d9ff9ab145ff"
  },
  {
    "url": "assets/js/19.81dbd23b.js",
    "revision": "77b6c3e23f54498b781a4e703c262b1b"
  },
  {
    "url": "assets/js/20.9a915a69.js",
    "revision": "a0429d7634b4ec53d56900a31a1b1fb6"
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
    "url": "assets/js/23.4bbcc5cc.js",
    "revision": "ca70b38cb7961103716d580b962c6e05"
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
    "url": "assets/js/28.a4f5974a.js",
    "revision": "6583635977eb7d137f7333f921a8d3e9"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.13db205e.js",
    "revision": "738c48741c551590b27d0e23612ee58d"
  },
  {
    "url": "assets/js/layout-Layout.8a082fd6.js",
    "revision": "b080d2586392eae779e0ad64faea241a"
  },
  {
    "url": "assets/js/layout-NotFound.ed920cb5.js",
    "revision": "19ff29e85acdc6aca514659d452ee91f"
  },
  {
    "url": "assets/js/page-069942c9.58174a3c.js",
    "revision": "9d9cb7f40c0063ba50bbdc30f209c5c6"
  },
  {
    "url": "assets/js/page-142fd774.b087916e.js",
    "revision": "b1e890c1796c5a9078149a7975e4708f"
  },
  {
    "url": "assets/js/page-2037549c.36d1f80c.js",
    "revision": "7ba3601a5c63525ebb7e3061632eb015"
  },
  {
    "url": "assets/js/page-22954010.fe0ff487.js",
    "revision": "46367bd35c00c3e4560199ac678ae4fe"
  },
  {
    "url": "assets/js/page-25b298b6.6724b4aa.js",
    "revision": "5c936d64e5bb232529605baa47626fcd"
  },
  {
    "url": "assets/js/page-3c041b9e.f8931fc2.js",
    "revision": "002a8b6b62bc1c0895e95465698c9509"
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
    "url": "assets/js/page-e4dfaf94.73533687.js",
    "revision": "fd532edb5f26c543b9dc6c1aaea9974e"
  },
  {
    "url": "assets/js/page-fd1ee6b4.b65109f8.js",
    "revision": "325188d52ced7b29421c9b0fbebb64e3"
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
    "revision": "27a149077a5086461caea717569a0fc3"
  },
  {
    "url": "doc/index.html",
    "revision": "cdf95210d5bf8b6f21c496751634b582"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "d792a648f999233dae945733cd7a88bd"
  },
  {
    "url": "guide/index.html",
    "revision": "e6b012311df2a6d334a7a5246a8624e9"
  },
  {
    "url": "guide/team/index.html",
    "revision": "0b71a9b5dbeab90ba857613a134f3f9d"
  },
  {
    "url": "index.html",
    "revision": "3adb3c3ce863fd5d2b4eba56bbed693d"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "e6b4c3d8ef77c3d37709558d264c60b8"
  },
  {
    "url": "py-list/index.html",
    "revision": "3f3a2134dcd10bd45df52f9d6425ae8b"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "6edee0ec5d3037958134a08998a02d4c"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "39f26338a5b51da8a5612c05645a8e89"
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
