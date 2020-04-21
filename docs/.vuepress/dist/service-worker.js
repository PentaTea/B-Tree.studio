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
    "revision": "056583add21d36a3608bcc287d009eaa"
  },
  {
    "url": "assets/css/0.styles.53660137.css",
    "revision": "45d863949590628b5cfbd29e92dd92b5"
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
    "url": "assets/img/font.1e3551cd.svg",
    "revision": "1e3551cd00e4d875193b7daffc349413"
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
    "url": "assets/js/1.2ebe4dce.js",
    "revision": "409fe1117b89b5ac32ae77b03cf92bf8"
  },
  {
    "url": "assets/js/16.ac0ab1d9.js",
    "revision": "7c0633f21502f299b53744b49d48aa23"
  },
  {
    "url": "assets/js/17.28005eae.js",
    "revision": "fa7a3be2a835439e7f07aef772a628c5"
  },
  {
    "url": "assets/js/18.dcebadfd.js",
    "revision": "2eb9887991220785a68a9233cb9f380d"
  },
  {
    "url": "assets/js/19.075a1410.js",
    "revision": "7729e1ac34e25ad07bf88924219248a6"
  },
  {
    "url": "assets/js/20.f30bd19f.js",
    "revision": "5324dac83fc78d63c966856a71eb9b95"
  },
  {
    "url": "assets/js/21.00baa59f.js",
    "revision": "b91ae1709172752b00ca25805bea6ce4"
  },
  {
    "url": "assets/js/22.0314499e.js",
    "revision": "c111d2a552c3bb925ce365c29a313efc"
  },
  {
    "url": "assets/js/23.bbe82dd5.js",
    "revision": "b54c08b485d397d4ca785f96b9cb31ff"
  },
  {
    "url": "assets/js/24.01d6aa29.js",
    "revision": "65b653cc0fd28dbb30c8174953ddb0a5"
  },
  {
    "url": "assets/js/25.362f9ff1.js",
    "revision": "36816b379820ffb0840e99f64daac02b"
  },
  {
    "url": "assets/js/26.e4c7312d.js",
    "revision": "e1a381af31a921732c65cfb388a7ce35"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.bf8bcf64.js",
    "revision": "60b0c1c627b3048bca853089043d664c"
  },
  {
    "url": "assets/js/layout-Layout.d6d254c6.js",
    "revision": "5e24260d3c2012d46bd12396e87bdbab"
  },
  {
    "url": "assets/js/layout-NotFound.9ac4d0e6.js",
    "revision": "c2b77227a46a592252048783c4908306"
  },
  {
    "url": "assets/js/page-1301ab8a.5240531a.js",
    "revision": "8b4f9fc4ec32b606ad58f928455c95d8"
  },
  {
    "url": "assets/js/page-142fd774.769a751c.js",
    "revision": "7a13c88d218be2c8c7da828d23031c1d"
  },
  {
    "url": "assets/js/page-2037549c.880a86ab.js",
    "revision": "6f87655ec570010625c533f62a0450f8"
  },
  {
    "url": "assets/js/page-22954010.310493c1.js",
    "revision": "48cea01173a3e5298bc92fdec49dd685"
  },
  {
    "url": "assets/js/page-25b298b6.5a995012.js",
    "revision": "b7d5af4865339371495286ae76c3cfe3"
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
    "url": "assets/js/page-7205f0b4.bd67e73c.js",
    "revision": "fdbf0da11f98a17bf21c4692b2fe8bb2"
  },
  {
    "url": "assets/js/page-e4dfaf94.a2738b53.js",
    "revision": "52996b0696206d62ac6fbafec9225d39"
  },
  {
    "url": "assets/js/page-fd1ee6b4.cb59b76e.js",
    "revision": "bee013961d6380a221e370a593123583"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9c274e2f.js",
    "revision": "0fdeb1473781e8e67a6d884128893dc1"
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
    "revision": "80dbb85a43a276a1016abb8dcbe9b126"
  },
  {
    "url": "doc/index.html",
    "revision": "8fe378c2a9e94fe71e060cc466d15803"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "6a971678369c67a5b0ab324cb20d663d"
  },
  {
    "url": "guide/index.html",
    "revision": "cb38328babea519366712abf5fcf0226"
  },
  {
    "url": "guide/team/index.html",
    "revision": "dd06b5c4fd245bebc574fce3833a24f0"
  },
  {
    "url": "index.html",
    "revision": "f861313121069feffa36be56ee6eca11"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "c9385f514167bd0f950168bf03f9eaa6"
  },
  {
    "url": "py-list/index.html",
    "revision": "103fd00ce21377d4fd527066788380bd"
  },
  {
    "url": "resources/index.html",
    "revision": "84532359d2acdf17cec6aba35959e9cb"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "97cbc50d8e785a928329209a307728b4"
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
