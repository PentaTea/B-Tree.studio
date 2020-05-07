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
    "revision": "1f7a92f2490dfc6e4afb38f05807c171"
  },
  {
    "url": "assets/css/0.styles.a94e5a77.css",
    "revision": "891387b521330ff226350d1ffad58a32"
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
    "url": "assets/js/17.03eaf7c9.js",
    "revision": "5fd39ed49c3604586bba4916ee92b25a"
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
    "url": "assets/js/20.7ee5e8f2.js",
    "revision": "ea34a23a2e6ee3bc13442ad14bf2509c"
  },
  {
    "url": "assets/js/21.f4c333ed.js",
    "revision": "3d24fe7f79169294685e38253028ffe4"
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
    "url": "assets/js/26.5a81dc3f.js",
    "revision": "555a1642470aa861e8f10cd8df72e19a"
  },
  {
    "url": "assets/js/27.32767a0e.js",
    "revision": "c2654f862602a9a3b7b94ab51fb7e676"
  },
  {
    "url": "assets/js/28.ba562b92.js",
    "revision": "b0e608c3c3313b831fb9563397ac785e"
  },
  {
    "url": "assets/js/29.16eaa385.js",
    "revision": "c5f660424456dc000a62adb684b22502"
  },
  {
    "url": "assets/js/app.c14be703.js",
    "revision": "fee7b53fa4dbe40eca16cfbb424a43ef"
  },
  {
    "url": "assets/js/layout-Layout.29e7a31d.js",
    "revision": "01c623c738f6374e513baa4bf22f711f"
  },
  {
    "url": "assets/js/layout-NotFound.bc0e727b.js",
    "revision": "270c4c68093cd08c1e1ceed881d36d24"
  },
  {
    "url": "assets/js/page-069942c9.0275252d.js",
    "revision": "2c1784bbbd39ac75a8da07862e70c085"
  },
  {
    "url": "assets/js/page-142fd774.01c2326b.js",
    "revision": "36de07a6798e9741feabe790c9709bc2"
  },
  {
    "url": "assets/js/page-2037549c.7346c44e.js",
    "revision": "943067d40fffa46ce268e2e962c6546d"
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
    "url": "assets/js/page-3c041b9e.a90031c6.js",
    "revision": "1237698acfdbad78ffc8b82bd3546737"
  },
  {
    "url": "assets/js/page-65eaf5e4.1a6f4eea.js",
    "revision": "4a3d944663121b88979928be145f4e1e"
  },
  {
    "url": "assets/js/page-7205f0b4.2dbc6b49.js",
    "revision": "f2a1efa877b1147c1fce3016804aa020"
  },
  {
    "url": "assets/js/page-e4dfaf94.df93ed95.js",
    "revision": "7ff779d0a7092dbe21d92cf0ab6d9040"
  },
  {
    "url": "assets/js/page-fd1ee6b4.98308dcb.js",
    "revision": "266e7773063ac939cb41e42105de7b79"
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
    "revision": "3393f65557e0955623654c318edb9612"
  },
  {
    "url": "doc/index.html",
    "revision": "6fc69f94b52b882965beeb2abc3a564a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "be3cbf485d5d3b4859fb4268446e01a9"
  },
  {
    "url": "guide/index.html",
    "revision": "6f59c87e67a8c78d6b759af290f82145"
  },
  {
    "url": "guide/team/index.html",
    "revision": "8fe445533d4d383b50ba97387da3a6a7"
  },
  {
    "url": "index.html",
    "revision": "2d45ab4b8ba065ddb3a348db45e4a242"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "16bc538a6ca8e8989214f5edae87546b"
  },
  {
    "url": "py-list/index.html",
    "revision": "c5453af536323f4d770a54583a90ddd9"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "ccc955fc2e427330e00c45b67feac52e"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "104c1a69c4bcc44d4a60c67fb9fbd2c2"
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
