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
    "revision": "d589a40b31daefea753bfbd526a15a21"
  },
  {
    "url": "assets/css/0.styles.80c2ad90.css",
    "revision": "2f907f8d1254382526094a20c3aee9a2"
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
    "url": "assets/js/1.6be3a19a.js",
    "revision": "94af3f12195db93afc6dedec695296ae"
  },
  {
    "url": "assets/js/16.b8bd9248.js",
    "revision": "af9bc0d6b52f33e8adba1f83061aae86"
  },
  {
    "url": "assets/js/17.1c05a550.js",
    "revision": "491b42698d71bbf57f8f4e276b03d5a7"
  },
  {
    "url": "assets/js/18.62523bd2.js",
    "revision": "74e820025f66324387bff425949f523a"
  },
  {
    "url": "assets/js/19.127a381e.js",
    "revision": "03bf14d851dbd0777e8e600f11b10a0b"
  },
  {
    "url": "assets/js/20.304a05a3.js",
    "revision": "4b9086b2ec8805b2bfc8b194e12010da"
  },
  {
    "url": "assets/js/21.b6cb2327.js",
    "revision": "249af5415021b71d389bee8838ff2b0e"
  },
  {
    "url": "assets/js/22.bc66c44d.js",
    "revision": "24d286fe7f3a313ef8d9403722b03b49"
  },
  {
    "url": "assets/js/23.4bdd5134.js",
    "revision": "b275a0c675f88247b685355c789a54a6"
  },
  {
    "url": "assets/js/24.9d804e34.js",
    "revision": "c3e9c97797027057e2054cb55681bef4"
  },
  {
    "url": "assets/js/25.4cbc8680.js",
    "revision": "0568dc2cd3080b28a9f051003272f798"
  },
  {
    "url": "assets/js/26.f9794fa6.js",
    "revision": "7ffe203ccee77c1a05728017f87e5e27"
  },
  {
    "url": "assets/js/27.4a69653d.js",
    "revision": "bd254b064c8bfdbe957034c6eefe1615"
  },
  {
    "url": "assets/js/28.9656b12d.js",
    "revision": "a7807898eb06241964bdeaf54bbe9053"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.6e07e25c.js",
    "revision": "dcbc2fd16ececa2f8fb92072ba28175e"
  },
  {
    "url": "assets/js/layout-Layout.e0c241b9.js",
    "revision": "4aca26e20ace8d0324ae49195c4a9fbb"
  },
  {
    "url": "assets/js/layout-NotFound.5a9fbd31.js",
    "revision": "b0a4f9a88198652e66bae05046ba1565"
  },
  {
    "url": "assets/js/page-069942c9.c5116960.js",
    "revision": "60eb22672429325541aa9d7b6301806e"
  },
  {
    "url": "assets/js/page-142fd774.b5488f92.js",
    "revision": "a5d5ccda6288ffb297bf1364d775ae70"
  },
  {
    "url": "assets/js/page-2037549c.b364bd86.js",
    "revision": "e91edf7369f910eca63aa967fc877e78"
  },
  {
    "url": "assets/js/page-22954010.51e7d496.js",
    "revision": "bf2b534f0b2dccb53bf276bebd42ac44"
  },
  {
    "url": "assets/js/page-25b298b6.346a1d01.js",
    "revision": "726cf179b63837133a150b542f2bd341"
  },
  {
    "url": "assets/js/page-3c041b9e.00e591a8.js",
    "revision": "114ec858838831f520efc4f25c48c61c"
  },
  {
    "url": "assets/js/page-65eaf5e4.c55f17ba.js",
    "revision": "5b8f937deb2a35c5461c72541327dca2"
  },
  {
    "url": "assets/js/page-7205f0b4.39a51fcd.js",
    "revision": "23aa6ac049f6a477c31a57bcade8a52e"
  },
  {
    "url": "assets/js/page-e4dfaf94.d70f77b1.js",
    "revision": "c3d96395682ddac8edc5d7435ba8391f"
  },
  {
    "url": "assets/js/page-fd1ee6b4.53274532.js",
    "revision": "753f4732e634463afb453632bade14ff"
  },
  {
    "url": "assets/js/vendors~layout-Layout.e43b2cee.js",
    "revision": "37809dd37a587f6601f281b7ecba5789"
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
    "revision": "1397c983386e398f79e5e2221b39c36f"
  },
  {
    "url": "doc/index.html",
    "revision": "150e7c081130b6873b87fef2afb327e6"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "8d79cf8a7fad34aedf0b0be0b389aa45"
  },
  {
    "url": "guide/index.html",
    "revision": "9672265407c24f36d4e10784032899ac"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f309bba26472b2e7df54e60ece71996b"
  },
  {
    "url": "index.html",
    "revision": "45b288018b1a49f6c42b2d49b3e0ccc9"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "636c6b344337fd80dad15d98e8a94f5a"
  },
  {
    "url": "py-list/index.html",
    "revision": "115dbdd8d2390cfebae7e3d33ef7544e"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "e091bdca9b7d98444bc4399f8b1fd388"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "1e19a9d70db6d451aaa3792ad0ff04e8"
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
