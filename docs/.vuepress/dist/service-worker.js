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
    "revision": "9d8fbc041270974cc01167da14b5b1df"
  },
  {
    "url": "assets/css/0.styles.3168d201.css",
    "revision": "1652bfa0e3a585031f480766fe1b87c0"
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
    "url": "assets/js/19.6a190916.js",
    "revision": "8039c251906cd6bfb0a2de44173456e6"
  },
  {
    "url": "assets/js/20.6935790e.js",
    "revision": "9098055585800ff75dba86031b62ca81"
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
    "url": "assets/js/23.15536ed6.js",
    "revision": "142b9f11ee43c9477c30b42753a8eed6"
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
    "url": "assets/js/app.5e3c830a.js",
    "revision": "a792424c88a5a31298fd994438201134"
  },
  {
    "url": "assets/js/layout-Layout.869bc59f.js",
    "revision": "2d7adc6ee6a0c48f6f566d512f7e9937"
  },
  {
    "url": "assets/js/layout-NotFound.ebf35171.js",
    "revision": "b005ad68d05e3492df034ca0adb5fe41"
  },
  {
    "url": "assets/js/page-069942c9.58174a3c.js",
    "revision": "9d9cb7f40c0063ba50bbdc30f209c5c6"
  },
  {
    "url": "assets/js/page-142fd774.18dec07f.js",
    "revision": "7b4d2933e58d7217d81ad43624bbf4c0"
  },
  {
    "url": "assets/js/page-2037549c.9865a31e.js",
    "revision": "0dc135694665041764fda14661bb82b1"
  },
  {
    "url": "assets/js/page-22954010.92e75535.js",
    "revision": "6f3762c9e486bac6eaf4bc0439742bab"
  },
  {
    "url": "assets/js/page-25b298b6.6724b4aa.js",
    "revision": "5c936d64e5bb232529605baa47626fcd"
  },
  {
    "url": "assets/js/page-3c041b9e.736595bf.js",
    "revision": "92d7adc1dc1521d50619c21e1ae6ab76"
  },
  {
    "url": "assets/js/page-65eaf5e4.7c834287.js",
    "revision": "4879be5ce3cf93b50ff3fffc9036b704"
  },
  {
    "url": "assets/js/page-7205f0b4.2dbc6b49.js",
    "revision": "f2a1efa877b1147c1fce3016804aa020"
  },
  {
    "url": "assets/js/page-e4dfaf94.2cfe2891.js",
    "revision": "d3c685b62722a2dbcb4eb94169f171a2"
  },
  {
    "url": "assets/js/page-fd1ee6b4.ca431718.js",
    "revision": "d9dc16e97e2612f9aca0bfd87ac5bdce"
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
    "revision": "0ae29bbc0eb27213476909c73b736847"
  },
  {
    "url": "doc/index.html",
    "revision": "faaea8197d55d198caf04e478ef33a5e"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "884a7203a8f72af762eac07d4b43c0e0"
  },
  {
    "url": "guide/index.html",
    "revision": "ac41d1ae3f9a16c1001835f1885a9cfb"
  },
  {
    "url": "guide/team/index.html",
    "revision": "112171947f604145099b5703516b7e6f"
  },
  {
    "url": "index.html",
    "revision": "219875a2b13a9eccb275ce21e7a3a2fa"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "c54203618181065b6e9d8ba03ebccd09"
  },
  {
    "url": "py-list/index.html",
    "revision": "d793debb37ca4d3a0b5e17cd86f5250d"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "e6ec50830c7af4409fef17c535464a5a"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "d88614e5dcdc6e0d3bcb0fcb036f4644"
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
