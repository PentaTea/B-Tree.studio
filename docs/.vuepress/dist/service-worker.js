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
    "revision": "97d528e55149e984374063bfb48354db"
  },
  {
    "url": "assets/css/0.styles.af92e5fb.css",
    "revision": "4484d24d69c7fba2d368f3629dc63241"
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
    "url": "assets/js/17.b179215e.js",
    "revision": "c974797b03b1ace6507fb87818439258"
  },
  {
    "url": "assets/js/18.74fc02ac.js",
    "revision": "e5871902032a341ed6b26ce66e2d4eb5"
  },
  {
    "url": "assets/js/19.87b40084.js",
    "revision": "9126f4d3217115b347cd0fd0b607ff56"
  },
  {
    "url": "assets/js/20.1c716874.js",
    "revision": "1d1eda23ae1e86cf919dc2128ff579fc"
  },
  {
    "url": "assets/js/21.805b0315.js",
    "revision": "173c008c2dd8d936272374a06076b3c9"
  },
  {
    "url": "assets/js/22.bb885563.js",
    "revision": "810123f8e6a99282e5654e59b08eda97"
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
    "url": "assets/js/25.3c7602d7.js",
    "revision": "b662c3416e537bdefc9a0eec5380e808"
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
    "url": "assets/js/app.1b902dac.js",
    "revision": "5707e271a7a3e88c75520153447d9160"
  },
  {
    "url": "assets/js/layout-Layout.3646df13.js",
    "revision": "d26d7d010face178bfef7fcd16ceda65"
  },
  {
    "url": "assets/js/layout-NotFound.761cfe1a.js",
    "revision": "5715a4f1e9a432e011c6afaf601998d5"
  },
  {
    "url": "assets/js/page-069942c9.0275252d.js",
    "revision": "2c1784bbbd39ac75a8da07862e70c085"
  },
  {
    "url": "assets/js/page-142fd774.3f7f7ab4.js",
    "revision": "aeb2dbaf8aa91fe7a7cd9b3133cfc06e"
  },
  {
    "url": "assets/js/page-2037549c.5ae4db86.js",
    "revision": "f283aac6e0757cfd0f61f74d81f7ddfd"
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
    "url": "assets/js/page-3c041b9e.736595bf.js",
    "revision": "92d7adc1dc1521d50619c21e1ae6ab76"
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
    "url": "assets/js/vendors~layout-Layout.dcf32aed.js",
    "revision": "86216106d2cf5fe9ffaff84689dd15c9"
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
    "revision": "cfbdc9c1a7ea7ae6a490ca0eddc9d967"
  },
  {
    "url": "doc/index.html",
    "revision": "bdd1616c2b94eac286f94ca498fdf1c2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "be53c5387d7703c5b3f3283591cc9b22"
  },
  {
    "url": "guide/index.html",
    "revision": "f4cd7dcb104b80b183921060ed08e611"
  },
  {
    "url": "guide/team/index.html",
    "revision": "dd542e36c1d15164704cd99d72dc1cb0"
  },
  {
    "url": "index.html",
    "revision": "501aba054d4c650937bc60cdc3197706"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "61309e6d9744d64c835de5257fb9dfd4"
  },
  {
    "url": "py-list/index.html",
    "revision": "efd7d071e6eb7187b311d73e20f7a019"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "f8e1dfed4f6af317bedadee1299dca03"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "3484816b21d93c7d95218ca687a7704b"
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
