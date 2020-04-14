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
    "revision": "97307107f30de4a9fdc6b6fa5582d617"
  },
  {
    "url": "assets/css/0.styles.46d5ea1b.css",
    "revision": "eb548d083a32f24eec51df5135494641"
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
    "url": "assets/js/1.a5cff9f9.js",
    "revision": "8a2a2c807ffe200e4e1be956777b670f"
  },
  {
    "url": "assets/js/15.3a672b33.js",
    "revision": "54580d3131f4384313af547f56286478"
  },
  {
    "url": "assets/js/16.b893a52d.js",
    "revision": "847454dd96c0a144d3aeb6495e617011"
  },
  {
    "url": "assets/js/17.408192bb.js",
    "revision": "10dcd61d1e9647e57ddf5339960a65d3"
  },
  {
    "url": "assets/js/18.72cd183e.js",
    "revision": "cfa667cc5cdeccac952ac834edbd2ede"
  },
  {
    "url": "assets/js/19.b720366b.js",
    "revision": "5cd7ce6b26b43681c7892a1dfac47bc2"
  },
  {
    "url": "assets/js/20.7021efd2.js",
    "revision": "9d9d19a2e6b0bfc352b824fd958547f3"
  },
  {
    "url": "assets/js/21.215cee57.js",
    "revision": "9eae24843467fc9e5a3708486170ccaa"
  },
  {
    "url": "assets/js/22.6c0ea5f9.js",
    "revision": "92bbd0cadd3c580c4b3080d872c8f2ce"
  },
  {
    "url": "assets/js/23.3201da45.js",
    "revision": "fb47114c40ebd67f0b1ec9b95008736c"
  },
  {
    "url": "assets/js/24.e03ea3de.js",
    "revision": "58fcf11fc641cc35ed788eafdb927d32"
  },
  {
    "url": "assets/js/25.21d83988.js",
    "revision": "0c1771653b992c91fb92eb995c7dad47"
  },
  {
    "url": "assets/js/26.c979798d.js",
    "revision": "370a521a6daed6e36bc2a527c4bde8dd"
  },
  {
    "url": "assets/js/app.9d7f35fb.js",
    "revision": "d606288795b5b8b5d03da370e747830a"
  },
  {
    "url": "assets/js/layout-Layout.873652c7.js",
    "revision": "cd8c10f641d3593af5e57609b0bb7b2f"
  },
  {
    "url": "assets/js/layout-NotFound.df4d76e7.js",
    "revision": "4ec37bde8c08075f46c450e48ba4bc60"
  },
  {
    "url": "assets/js/page-1301ab8a.82b6d1d7.js",
    "revision": "42997de6f80c5625d0eeba021b2e4cbf"
  },
  {
    "url": "assets/js/page-142fd774.ffaee3de.js",
    "revision": "6a1172df8d4dafd0a5bf0f8600c9bea5"
  },
  {
    "url": "assets/js/page-2037549c.bfee7d53.js",
    "revision": "ecef982160ea8bc89f172c82ecdce3f4"
  },
  {
    "url": "assets/js/page-22954010.e9b3c668.js",
    "revision": "04c26da0f80b83d4e5b13f791a62d803"
  },
  {
    "url": "assets/js/page-25b298b6.df276e83.js",
    "revision": "1ed3ff77c0f9ea640cda743f0e9a94d5"
  },
  {
    "url": "assets/js/page-3c041b9e.c34f5cb3.js",
    "revision": "346b2e987fb36a2ec0ac25d58d3540f6"
  },
  {
    "url": "assets/js/page-65eaf5e4.7d91d6f1.js",
    "revision": "4bac8ee76e059f2404c577d2139e0b70"
  },
  {
    "url": "assets/js/page-7205f0b4.018fb819.js",
    "revision": "2d36074f06e3865fa90df68b1da96cc7"
  },
  {
    "url": "assets/js/page-e4dfaf94.2e1bdd4c.js",
    "revision": "8b3b2a7ccc4d596e16114680c4b3eada"
  },
  {
    "url": "assets/js/vendors~layout-Layout.90f4954a.js",
    "revision": "6cb31b0eaddfe8650d12caa112eda694"
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
    "revision": "3801616a8575ac0c187d3754b789984f"
  },
  {
    "url": "doc/index.html",
    "revision": "976880d9ee774a6cb128e1eb534a475c"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "23c8a2a5fcd84ac4d8b7963007e93c58"
  },
  {
    "url": "guide/team/index.html",
    "revision": "3f3345a319977f3d66c1dc2e38bf9f12"
  },
  {
    "url": "index.html",
    "revision": "54f8461c5f50de796ac57aa0b0b50f31"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "585fa7407623b6fb1331c8d3d3a203d2"
  },
  {
    "url": "py-list/index.html",
    "revision": "eaa8d3bf97b6b5f80e4f17cffe962039"
  },
  {
    "url": "resources/index.html",
    "revision": "60d2c5c89ba76314417e8a06fc113c7f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "58c1db56907e9703e3deedaf4d67ac74"
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
