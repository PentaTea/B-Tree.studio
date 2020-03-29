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
    "revision": "8375dee1255c02dcea8be6ff8d4231c7"
  },
  {
    "url": "assets/css/0.styles.3bdf9d1c.css",
    "revision": "6d56965365383d218f9699a592827e2b"
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
    "url": "assets/js/1.468b3d44.js",
    "revision": "438e1845c3a03e6224ebc5311d2a7d2a"
  },
  {
    "url": "assets/js/15.b6162f50.js",
    "revision": "3e4200e86626d94c8dbfc60632f723dc"
  },
  {
    "url": "assets/js/16.3ee7b6a6.js",
    "revision": "dd74a657163f59850ed653c5a2738e09"
  },
  {
    "url": "assets/js/17.6bc5f1d7.js",
    "revision": "a992f0ff84a1235e2c6bf89f5cc3d225"
  },
  {
    "url": "assets/js/18.802b0b56.js",
    "revision": "f65afa0eeac7916fa5a7fb86a40eca72"
  },
  {
    "url": "assets/js/19.3bc8690c.js",
    "revision": "a28f3e231e502f50c08cbdad46178856"
  },
  {
    "url": "assets/js/20.aa263bfa.js",
    "revision": "36dcd58c8e03f6c229f4d86f95dcd02f"
  },
  {
    "url": "assets/js/21.51c787c9.js",
    "revision": "05bbb565669ee6427c496c1628873c01"
  },
  {
    "url": "assets/js/22.fa90f58b.js",
    "revision": "2c0ec9535779619294581851f3e722ef"
  },
  {
    "url": "assets/js/23.0d3e64fc.js",
    "revision": "5c707b69ba106b35c3b38835aa9bfd18"
  },
  {
    "url": "assets/js/24.e859a96e.js",
    "revision": "70908fd153c5c9ed08838a606a45cf54"
  },
  {
    "url": "assets/js/app.5217d8ad.js",
    "revision": "98c6b2e552dcba9d68c32785602cc2b2"
  },
  {
    "url": "assets/js/layout-Layout.1439d369.js",
    "revision": "d713cb3c2bd193d9da257950661ef893"
  },
  {
    "url": "assets/js/layout-NotFound.a3ff2dde.js",
    "revision": "52884a0c94a1508e84aed2ea8af6deb0"
  },
  {
    "url": "assets/js/page-1301ab8a.820126a6.js",
    "revision": "58f863c4b8f8ec7c0ebce9ae6d2d178a"
  },
  {
    "url": "assets/js/page-142fd774.ce496e2c.js",
    "revision": "ffd1d3ead76f4ac93427ba1c129adadf"
  },
  {
    "url": "assets/js/page-2037549c.8b181bae.js",
    "revision": "9b410f6c8d2082ff46e3e30ae3eab612"
  },
  {
    "url": "assets/js/page-22954010.26b62824.js",
    "revision": "454fa061154a475b78e918769176abd7"
  },
  {
    "url": "assets/js/page-25b298b6.ba06d309.js",
    "revision": "6a5f3c10f9f80b9e4e5a40bc47c39bd6"
  },
  {
    "url": "assets/js/page-3c041b9e.1005521e.js",
    "revision": "20bdf77ce7de36c4b92f808ac4cc8a09"
  },
  {
    "url": "assets/js/page-65eaf5e4.22adf5e2.js",
    "revision": "e4e58b902688a9808889cac6626db32a"
  },
  {
    "url": "assets/js/page-7205f0b4.10856bd0.js",
    "revision": "94c151a0a9572779ae8314bbf2fa19b0"
  },
  {
    "url": "assets/js/page-e4dfaf94.b40e8c9a.js",
    "revision": "ee2aaf517d2e3d3237b618501a9b271d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.32f4f743.js",
    "revision": "4f3fbd8f75e817e154b6afa3e64f2c47"
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
    "revision": "c38a86818781b9341330efd73046072a"
  },
  {
    "url": "doc/index.html",
    "revision": "cd6ab4c9e9d39a796c6934f849af23d2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3ac4dbf89f77cd1250f73d83a79cbf43"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f0cced956bbdae0d0e867a4c37fb0978"
  },
  {
    "url": "index.html",
    "revision": "ee1c7a1b31142d38bcce8ed723d1e939"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "387156615bd7833d9290cd8fab7a33db"
  },
  {
    "url": "py-list/index.html",
    "revision": "31df636439a402192b54537be8b5ceb1"
  },
  {
    "url": "resources/index.html",
    "revision": "ec313a0643edaaa65de714d7e1a4d918"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "2fd1ff05e0eac8ad42c2d58be3a76e76"
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
