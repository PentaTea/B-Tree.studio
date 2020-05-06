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
    "revision": "996d01946cd0d1ef02714e133c1f1058"
  },
  {
    "url": "assets/css/0.styles.9dfe97ff.css",
    "revision": "6fae16d445f01d135634eba9e0c7a255"
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
    "url": "assets/js/1.6be3a19a.js",
    "revision": "94af3f12195db93afc6dedec695296ae"
  },
  {
    "url": "assets/js/16.ede859bb.js",
    "revision": "f7046110730df819dd5f9021a3a9ae58"
  },
  {
    "url": "assets/js/17.b4fab918.js",
    "revision": "8f06a347fbde1b14f244b6a486d32ea2"
  },
  {
    "url": "assets/js/18.046819bc.js",
    "revision": "71aeb1c93eab10536007b7fc2f1dfbc1"
  },
  {
    "url": "assets/js/19.03a8e75b.js",
    "revision": "120f5cb35c7954546ade3473138f1154"
  },
  {
    "url": "assets/js/20.f784930c.js",
    "revision": "6e1f0bfcae45ee73738cfe0acbc3e4f9"
  },
  {
    "url": "assets/js/21.3f8f35a5.js",
    "revision": "3b4a89dac3d1d1f4255cab1f1cef6d8e"
  },
  {
    "url": "assets/js/22.cf5ecafc.js",
    "revision": "99858a13039603038abf2695337ff851"
  },
  {
    "url": "assets/js/23.00f4f83a.js",
    "revision": "79a7be0651334145a1b819295ace685f"
  },
  {
    "url": "assets/js/24.bb6ca2c2.js",
    "revision": "98299f2fc73b99be1cd7b30203d60000"
  },
  {
    "url": "assets/js/25.88eb97c9.js",
    "revision": "061b6fffb5c12976fc6eeea2f6b2e01a"
  },
  {
    "url": "assets/js/26.c5d00ad6.js",
    "revision": "689e16b86df9033d8a6f6ef0af06ad30"
  },
  {
    "url": "assets/js/27.a3fa6e44.js",
    "revision": "951569532b82692eb03f7483b074e7a8"
  },
  {
    "url": "assets/js/28.37b81dd0.js",
    "revision": "c38f218da74412bd7270d5ef143703cd"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.5873a019.js",
    "revision": "5dc600d3a4ec9dd057bbbfd10753a60c"
  },
  {
    "url": "assets/js/layout-Layout.03a2c885.js",
    "revision": "86e38edd4c26e8c5dae0647445eb9cc5"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.c5116960.js",
    "revision": "60eb22672429325541aa9d7b6301806e"
  },
  {
    "url": "assets/js/page-142fd774.f85534c4.js",
    "revision": "9a3d7ca9a5374669b8539127ad973a6a"
  },
  {
    "url": "assets/js/page-2037549c.1efd32d0.js",
    "revision": "bbf333edc338660a93e02d8836ad435c"
  },
  {
    "url": "assets/js/page-22954010.23c56470.js",
    "revision": "78379b174a61944a173aa15b47e6cfb6"
  },
  {
    "url": "assets/js/page-25b298b6.346a1d01.js",
    "revision": "726cf179b63837133a150b542f2bd341"
  },
  {
    "url": "assets/js/page-3c041b9e.291156a8.js",
    "revision": "008f9a165efdaca25dd21bb45ef4f72b"
  },
  {
    "url": "assets/js/page-65eaf5e4.ec31cc0d.js",
    "revision": "7529397dfa7c24135c82a50b3989f12f"
  },
  {
    "url": "assets/js/page-7205f0b4.e40311c2.js",
    "revision": "f1881c73b79b612f2f77ff9f34f2f5e7"
  },
  {
    "url": "assets/js/page-e4dfaf94.644e47e8.js",
    "revision": "e50b62094ad7f50ba81dff7763037acc"
  },
  {
    "url": "assets/js/page-fd1ee6b4.3efa2045.js",
    "revision": "6086d65d03734d7662c740eba91f09ca"
  },
  {
    "url": "assets/js/vendors~layout-Layout.66cd8c1c.js",
    "revision": "311b87b47d58bb97d30db89bb946f7bb"
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
    "revision": "aa81ca85d98f2bad1aa4e1d888243780"
  },
  {
    "url": "doc/index.html",
    "revision": "f96c3324c1988e142d02c90b4e6d6b9a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "3fb9a3e3196f02e5b4d9055159d96ffc"
  },
  {
    "url": "guide/index.html",
    "revision": "584de339aff09b322ae666b9e1ee816f"
  },
  {
    "url": "guide/team/index.html",
    "revision": "1f4caf230770163ac7ccd0b62b3d3fee"
  },
  {
    "url": "index.html",
    "revision": "4c2e30a3e75207b3290b5e62ffaf89c0"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "643865bdd85257c6799bf662c06dd6ef"
  },
  {
    "url": "py-list/index.html",
    "revision": "d4005148a29c56f1c1677fd3b2d179e7"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "f1a3560b12caac14bcab19d8541ede27"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "89d355198cf119d52a4add22e7396ab5"
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
