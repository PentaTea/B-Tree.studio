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
    "revision": "80c36e4e5bbcff34c4be01c0fc2131c5"
  },
  {
    "url": "assets/css/0.styles.adca8f67.css",
    "revision": "baac5288b99f3dcabe6ed2aef5e20c40"
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
    "url": "assets/js/1.3eb00112.js",
    "revision": "d7437d0248e5f1019c95ea3448d14673"
  },
  {
    "url": "assets/js/16.d9e158b3.js",
    "revision": "4c8c77d73460e527966a05f71af9759c"
  },
  {
    "url": "assets/js/17.a488198f.js",
    "revision": "2731c36ea74cbdb06d9678387261c753"
  },
  {
    "url": "assets/js/18.ab25f070.js",
    "revision": "f228eb1494d891b213e5c8e2cf951993"
  },
  {
    "url": "assets/js/19.a662365a.js",
    "revision": "c264bb753745dae57ccea9833a4d359c"
  },
  {
    "url": "assets/js/20.04e9f046.js",
    "revision": "5087d94c2455d70b7a80bedae9470062"
  },
  {
    "url": "assets/js/21.71197c59.js",
    "revision": "8721ba9f5692123270423d26f25ea8f1"
  },
  {
    "url": "assets/js/22.6cd80e41.js",
    "revision": "065cbbd858da3a07cbf26710f7cf30dd"
  },
  {
    "url": "assets/js/23.d9154b04.js",
    "revision": "2a2a6fcbbf8fef1fb74c0f9bc982c5c9"
  },
  {
    "url": "assets/js/24.96b3e3ef.js",
    "revision": "a1c78b4c322ce9cec3e9781778ef7a5d"
  },
  {
    "url": "assets/js/25.08d74c36.js",
    "revision": "76b25b9eae2815b8b129477acfaa9d05"
  },
  {
    "url": "assets/js/26.7f02680f.js",
    "revision": "7c58f218f1b896cb31ee06e28ab204b1"
  },
  {
    "url": "assets/js/27.7fbbb916.js",
    "revision": "0a605b2d5b00e3b6cae5e8b61e7be0bd"
  },
  {
    "url": "assets/js/app.4e6e9840.js",
    "revision": "feeb4b9ee582e7b976991e7e8cd406f0"
  },
  {
    "url": "assets/js/layout-Layout.b9c51f96.js",
    "revision": "37810fece679a1c21889c413ecd540ea"
  },
  {
    "url": "assets/js/layout-NotFound.ddb93eef.js",
    "revision": "f64962be0691e5b8b309838014e9c11a"
  },
  {
    "url": "assets/js/page-1301ab8a.18262c03.js",
    "revision": "dace3fa3f7676b04997c39df97e30039"
  },
  {
    "url": "assets/js/page-142fd774.8dd8768e.js",
    "revision": "c9921d7ff01f04bb557e425b5c257cb0"
  },
  {
    "url": "assets/js/page-2037549c.1ee5df0c.js",
    "revision": "2adde687242e93d979735d92960808f9"
  },
  {
    "url": "assets/js/page-22954010.fec8db81.js",
    "revision": "0ec141a2cd019b14cd586a194269c597"
  },
  {
    "url": "assets/js/page-25b298b6.4d3de48d.js",
    "revision": "b06db8671b47b214f9434a395918f163"
  },
  {
    "url": "assets/js/page-3c041b9e.032553a0.js",
    "revision": "1ec180616952d29b41497d0cf3d5a177"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c9ed91c.js",
    "revision": "5e295e700b9429ab4fedcbf94736ee50"
  },
  {
    "url": "assets/js/page-7205f0b4.581565c4.js",
    "revision": "f1d393e575ec44e6721cc477616d88c1"
  },
  {
    "url": "assets/js/page-e4dfaf94.f6428fad.js",
    "revision": "16cff9fe1df3862f5d346997ea190e35"
  },
  {
    "url": "assets/js/page-fd1ee6b4.fc866fa2.js",
    "revision": "d9f229ceb66bfa3aa16dcc4e13ff6122"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9cd99ccd.js",
    "revision": "c1a70e0c1b6ef69e0adb2cb0d1aa3053"
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
    "revision": "3d3a1298a8b40f0bffa6ad5984ee0b8d"
  },
  {
    "url": "doc/index.html",
    "revision": "a83a2d64cbe9a1bbca9d3b3c9dd8eae2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "54b07505e5046974fe2bdc1dcde85526"
  },
  {
    "url": "guide/index.html",
    "revision": "ef7bb3806cf52a2cae4a0aa74b8d7a14"
  },
  {
    "url": "guide/team/index.html",
    "revision": "de418036908bcafbb071e068709681bb"
  },
  {
    "url": "index.html",
    "revision": "37684f57c44280407dfeff2d9fb681c6"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "896bf21ed8db6027c040406300f450d9"
  },
  {
    "url": "py-list/index.html",
    "revision": "eeda2243073c0ec958c34ad069762248"
  },
  {
    "url": "resources/index.html",
    "revision": "04def114f26d08c807cdfc71df9b758a"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "a144d8d24fdebcd3933c942e3fd302c1"
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
