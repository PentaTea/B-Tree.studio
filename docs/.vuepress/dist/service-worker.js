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
    "revision": "e95adb1cc75a7f8692c8b921c06d74c1"
  },
  {
    "url": "assets/css/0.styles.518ac18d.css",
    "revision": "86134745595b25ba727c4394147a4ff3"
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
    "url": "assets/img/AaXiaBiXiaoShu-2.0e13fef0.svg",
    "revision": "0e13fef0e9fb20e2a9d7eef47ed518ff"
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
    "url": "assets/js/18.7a61d54a.js",
    "revision": "e1aa4039778f461f21ce2bcf0374fdc6"
  },
  {
    "url": "assets/js/19.5b35afde.js",
    "revision": "04623733c0a7c3cc6a946763acca497f"
  },
  {
    "url": "assets/js/20.d811f7cf.js",
    "revision": "c2c8da7b841f88ed6f972d1e838ea892"
  },
  {
    "url": "assets/js/21.1196fb71.js",
    "revision": "8b1becc2934b7ed85f868f478977826b"
  },
  {
    "url": "assets/js/22.d20c9c4c.js",
    "revision": "31b8b24797b0da97020b41f4b52d070c"
  },
  {
    "url": "assets/js/23.bbe82dd5.js",
    "revision": "b54c08b485d397d4ca785f96b9cb31ff"
  },
  {
    "url": "assets/js/24.1bf605c0.js",
    "revision": "6935caf4886d42dac1031b50f0ce3e56"
  },
  {
    "url": "assets/js/25.362f9ff1.js",
    "revision": "36816b379820ffb0840e99f64daac02b"
  },
  {
    "url": "assets/js/26.08be286b.js",
    "revision": "aa0447f75752bf44881f17915a1f4fd5"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.95c1876e.js",
    "revision": "b5af825ca519bf0130a1593ccb36347e"
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
    "url": "assets/js/page-142fd774.a5c28ee8.js",
    "revision": "99f77398214e1f5663b5f3b4fcae0a60"
  },
  {
    "url": "assets/js/page-2037549c.f03bc000.js",
    "revision": "782403b238b04aefd155e7355846cf45"
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
    "url": "assets/js/page-3c041b9e.d4a0fb8d.js",
    "revision": "85b90d1926840f2836253d5169cf442a"
  },
  {
    "url": "assets/js/page-65eaf5e4.67c19936.js",
    "revision": "48e1b88c9176a1a4cd6a3eec8740ae24"
  },
  {
    "url": "assets/js/page-7205f0b4.09a7d9fa.js",
    "revision": "d2cbef103255d089cc4f302ec5241817"
  },
  {
    "url": "assets/js/page-e4dfaf94.f6428fad.js",
    "revision": "16cff9fe1df3862f5d346997ea190e35"
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
    "revision": "92d2461b1b4390d033b7f547907b90bd"
  },
  {
    "url": "doc/index.html",
    "revision": "9cb52e561549bfc03d1a85c26c92a2f3"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "05b77374afe56c2794919d463f51814d"
  },
  {
    "url": "guide/index.html",
    "revision": "8c34a84f73fb9423ef416468fd7ed8bb"
  },
  {
    "url": "guide/team/index.html",
    "revision": "da97cb309316e2da17b6fa0349ed16b0"
  },
  {
    "url": "index.html",
    "revision": "03d0bf7e0971aabcd0c3b40da3f01038"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "30c12a8fb21ce1324f7be75b36c0b693"
  },
  {
    "url": "py-list/index.html",
    "revision": "21b665ccd1a2b71a6d61388860828ee5"
  },
  {
    "url": "resources/index.html",
    "revision": "5d2df90b6d69f7ccd7d9eca9d8b71732"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "19f088798ff0711ba0537178e9447bed"
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
