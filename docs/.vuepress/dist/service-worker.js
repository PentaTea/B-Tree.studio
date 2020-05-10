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
    "revision": "fd1c2e22a43a531d722087e4d43302a0"
  },
  {
    "url": "assets/css/0.styles.f9062476.css",
    "revision": "37e4efbd2c5c11ff5f396f082ddf3428"
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
    "url": "assets/js/16.3cd6efec.js",
    "revision": "2bce191437ffe63a10dddffdf578345f"
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
    "url": "assets/js/19.c412f817.js",
    "revision": "deba3d8b911756849a994dbc67e0da9e"
  },
  {
    "url": "assets/js/20.6935790e.js",
    "revision": "9098055585800ff75dba86031b62ca81"
  },
  {
    "url": "assets/js/21.eaa987f1.js",
    "revision": "cb1794dc0df25cb72711a9584893014e"
  },
  {
    "url": "assets/js/22.3fdf449b.js",
    "revision": "d7f51bc9e86d94348caf03d4b6682f99"
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
    "url": "assets/js/25.514eff85.js",
    "revision": "2b41396db38fc469868b0c293e830c6a"
  },
  {
    "url": "assets/js/26.a708be16.js",
    "revision": "eaa7cc8276a0d19f9806608502365523"
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
    "url": "assets/js/app.a8f0ad52.js",
    "revision": "ba585a53203995893fb9edd3066df15c"
  },
  {
    "url": "assets/js/layout-Layout.bd0a652f.js",
    "revision": "1af8b8182194277ba80e056f0b340fcd"
  },
  {
    "url": "assets/js/layout-NotFound.761cfe1a.js",
    "revision": "5715a4f1e9a432e011c6afaf601998d5"
  },
  {
    "url": "assets/js/page-069942c9.58174a3c.js",
    "revision": "9d9cb7f40c0063ba50bbdc30f209c5c6"
  },
  {
    "url": "assets/js/page-142fd774.67b295ec.js",
    "revision": "66f011910fe13378ea5b03579e52d971"
  },
  {
    "url": "assets/js/page-2037549c.5982e5d6.js",
    "revision": "680fcd494d0d27c9e3982c0d03767848"
  },
  {
    "url": "assets/js/page-22954010.fddec071.js",
    "revision": "66b6972dfe93052392e9b1c524cd0a0d"
  },
  {
    "url": "assets/js/page-25b298b6.b77710d4.js",
    "revision": "60670bdcae333c0ef3edf14e544da6f7"
  },
  {
    "url": "assets/js/page-3c041b9e.0dad76e6.js",
    "revision": "0bb733c13d954a1cca17d272a5208daf"
  },
  {
    "url": "assets/js/page-65eaf5e4.7c834287.js",
    "revision": "4879be5ce3cf93b50ff3fffc9036b704"
  },
  {
    "url": "assets/js/page-7205f0b4.16ae2ac6.js",
    "revision": "1cb34dc213e7950eba1d2d90498cc762"
  },
  {
    "url": "assets/js/page-e4dfaf94.adae20f1.js",
    "revision": "70ab42ebe1ac66fd64c2d9ac117c179f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.fdc3dfb8.js",
    "revision": "5e37b994607dcd0cad2555bcf4ca557a"
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
    "revision": "8cf7dc2e0d05318a602e727eb283c264"
  },
  {
    "url": "doc/index.html",
    "revision": "d0a6f7b38c9674c215347a97182805f0"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "6ca41878fcb522c9e75157885c2f2778"
  },
  {
    "url": "guide/index.html",
    "revision": "c54c91874f57492ecdad8301cd030056"
  },
  {
    "url": "guide/team/index.html",
    "revision": "23cb6018f5656a1ce7644fdebb1236c5"
  },
  {
    "url": "index.html",
    "revision": "47bae5795867f67a4ec5e7a923ef562d"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "0a1a5ea56d9ce16eac8753721e9c12aa"
  },
  {
    "url": "py-list/index.html",
    "revision": "49c0285e251509f8106dccba14bde23b"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "bad1cbca1373b12805ff40ad4623e8e2"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "c14161f2f2193bf8a9c27e935651f602"
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
