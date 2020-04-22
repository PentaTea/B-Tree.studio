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
    "revision": "efe6f37a3e22012da5df31c9aa590ba1"
  },
  {
    "url": "assets/css/0.styles.e221104e.css",
    "revision": "32cdecf5e00d0441eaf24f962906bcc1"
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
    "url": "assets/img/0.1e3551cd.svg",
    "revision": "1e3551cd00e4d875193b7daffc349413"
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
    "url": "assets/js/1.2ebe4dce.js",
    "revision": "409fe1117b89b5ac32ae77b03cf92bf8"
  },
  {
    "url": "assets/js/16.f1c17f31.js",
    "revision": "9512d573dd2feaff4846b0e97e4ca1c3"
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
    "url": "assets/js/21.d5ba5d68.js",
    "revision": "dc39688f49bdf1a6070d4761e4756df1"
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
    "url": "assets/js/24.21388dbd.js",
    "revision": "c3da42ac636ab7677c638ef4fa9e7fab"
  },
  {
    "url": "assets/js/25.362f9ff1.js",
    "revision": "36816b379820ffb0840e99f64daac02b"
  },
  {
    "url": "assets/js/26.92829e82.js",
    "revision": "713a1c3c8c2a5015edf6abb0c45fbbf1"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.b2088449.js",
    "revision": "dab9554ba53a5f48af23fa78497598f7"
  },
  {
    "url": "assets/js/layout-Layout.dbbbf8e2.js",
    "revision": "fe2c706ce4f32019034a603918635e7a"
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
    "url": "assets/js/page-142fd774.a5c28ee8.js",
    "revision": "99f77398214e1f5663b5f3b4fcae0a60"
  },
  {
    "url": "assets/js/page-2037549c.1fbe6e06.js",
    "revision": "4cc4ffd2f92533644bc3e6fbc266ad06"
  },
  {
    "url": "assets/js/page-22954010.5477a74a.js",
    "revision": "fa4507a933a91a7fd9fef3bf346e1580"
  },
  {
    "url": "assets/js/page-25b298b6.5a995012.js",
    "revision": "b7d5af4865339371495286ae76c3cfe3"
  },
  {
    "url": "assets/js/page-3c041b9e.d4a0fb8d.js",
    "revision": "85b90d1926840f2836253d5169cf442a"
  },
  {
    "url": "assets/js/page-65eaf5e4.67c19936.js",
    "revision": "48e1b88c9176a1a4cd6a3eec8740ae24"
  },
  {
    "url": "assets/js/page-7205f0b4.dd9b56a5.js",
    "revision": "4d72398d0cae25a2e614e4bfb872d961"
  },
  {
    "url": "assets/js/page-e4dfaf94.a2738b53.js",
    "revision": "52996b0696206d62ac6fbafec9225d39"
  },
  {
    "url": "assets/js/page-fd1ee6b4.f50d75f8.js",
    "revision": "3ef89deb5f215b1d743b1b547a722532"
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
    "revision": "3dead598aa5374cc63f4d48d366e7154"
  },
  {
    "url": "doc/index.html",
    "revision": "889e2f8b6d429b906073be1ca474872c"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "57290f992e41f3cac20d44c03742121c"
  },
  {
    "url": "guide/index.html",
    "revision": "e51a779ad6089d048daeedead9f20697"
  },
  {
    "url": "guide/team/index.html",
    "revision": "0bd5bb8d48a739e0ea6bcf528d601dc4"
  },
  {
    "url": "index.html",
    "revision": "1d474dcc52f8803ab769fd7d3c0fb81a"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "5d014fea605a92463ca1d7a1eab70c63"
  },
  {
    "url": "py-list/index.html",
    "revision": "55f6a1b60c7043b24d9bbe8417646fc4"
  },
  {
    "url": "resources/index.html",
    "revision": "b953939057dd515c6e72d82fe45c0f77"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "6b39bd03a40bd45bc538fcff99a5fcdf"
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
