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
    "revision": "0d4f1592784444e44971bb057c3e0df0"
  },
  {
    "url": "assets/css/0.styles.72c0b6f3.css",
    "revision": "766721b7eec89a76ca83ae898b07c474"
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
    "url": "assets/js/16.607c8d85.js",
    "revision": "b91b8f66307441b66e55da4748b7f596"
  },
  {
    "url": "assets/js/17.a488198f.js",
    "revision": "2731c36ea74cbdb06d9678387261c753"
  },
  {
    "url": "assets/js/18.0c3e8ae4.js",
    "revision": "80c2e682462a7999cdeadb0bf6a2a5dd"
  },
  {
    "url": "assets/js/19.7b924df5.js",
    "revision": "25f01ffb2398b780f3b9347380f44cc8"
  },
  {
    "url": "assets/js/20.a71a9754.js",
    "revision": "f3aa29a1839c6efcdf6cdfdd90f2cb73"
  },
  {
    "url": "assets/js/21.764d8d17.js",
    "revision": "a754753adf080ec247a7c3f913e8b81b"
  },
  {
    "url": "assets/js/22.9eb9d6f5.js",
    "revision": "1caac5435a751e4936d3becf7c80b4bd"
  },
  {
    "url": "assets/js/23.d9154b04.js",
    "revision": "2a2a6fcbbf8fef1fb74c0f9bc982c5c9"
  },
  {
    "url": "assets/js/24.38eca355.js",
    "revision": "a998647bfbbc27e67e7e26001f91ebbd"
  },
  {
    "url": "assets/js/25.75caac13.js",
    "revision": "66641abbf12ea0252e0bd3af156aff5d"
  },
  {
    "url": "assets/js/26.9809c628.js",
    "revision": "dd349f47b50d30a45c34856a4c0e4ed2"
  },
  {
    "url": "assets/js/27.7fbbb916.js",
    "revision": "0a605b2d5b00e3b6cae5e8b61e7be0bd"
  },
  {
    "url": "assets/js/app.da13f8c8.js",
    "revision": "56c8d5fec8119bed464dd705981224ad"
  },
  {
    "url": "assets/js/layout-Layout.8d6c3165.js",
    "revision": "4d356e2650475b48fba0d7e20b87f3c1"
  },
  {
    "url": "assets/js/layout-NotFound.a7a2f2f4.js",
    "revision": "1d92cf58c235813ebbfe59f068705576"
  },
  {
    "url": "assets/js/page-1301ab8a.51a72219.js",
    "revision": "9cbdf751b78ebc2ba8097f6d5b57518a"
  },
  {
    "url": "assets/js/page-142fd774.893901a3.js",
    "revision": "791814cf22917a41008481f7b770943c"
  },
  {
    "url": "assets/js/page-2037549c.45df87e3.js",
    "revision": "5c62c3395fa1fe732cc2fdfaf99c2f65"
  },
  {
    "url": "assets/js/page-22954010.045babb0.js",
    "revision": "94e65f993bdb8fc492377b23a0123ba4"
  },
  {
    "url": "assets/js/page-25b298b6.ba899f36.js",
    "revision": "28bbed36d8290196bc304706a9de7be3"
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
    "url": "assets/js/page-7205f0b4.76144eaa.js",
    "revision": "f2d9c661155c7a9f51e80c8962fd9c32"
  },
  {
    "url": "assets/js/page-e4dfaf94.5db737ce.js",
    "revision": "8bc48ccee93e7d64765f545bd016943b"
  },
  {
    "url": "assets/js/page-fd1ee6b4.933463fc.js",
    "revision": "bb9256556899038d0400102585cb59d2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.bba28b83.js",
    "revision": "ab7fe9c2ac24481ee28690ce8cfb3cd7"
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
    "revision": "e9898dc59272e8c54a0017fe17bacfdd"
  },
  {
    "url": "doc/index.html",
    "revision": "2d54bc41f4bef7e2f549cfab017f70f2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "68bf0c75a23c92d82aa47ccc1cf799f4"
  },
  {
    "url": "guide/index.html",
    "revision": "2760078e16f4a2fe55562f13e8a24aee"
  },
  {
    "url": "guide/team/index.html",
    "revision": "5ca911ec85f2961d2e6f9c02dab52fa6"
  },
  {
    "url": "index.html",
    "revision": "9a07b8348f73fc19af62aec8c962cb40"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "a4958aed83b77e5322fa3891a56b71bd"
  },
  {
    "url": "py-list/index.html",
    "revision": "5cf6d6640cece46c1d8caa3ee91becdf"
  },
  {
    "url": "resources/index.html",
    "revision": "177faced8166acbe8abfd570e8ce832a"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "bc96dce5244b59963510790aec992159"
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
