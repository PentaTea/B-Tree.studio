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
    "revision": "54323a05297d31ee7a0e721d411637e9"
  },
  {
    "url": "assets/css/0.styles.6595005b.css",
    "revision": "c380e8e4dc2318c78d11c8aaf2336efe"
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
    "url": "assets/js/15.2a48a398.js",
    "revision": "76d5d9ee07e3ee982c7928b03afe6a1e"
  },
  {
    "url": "assets/js/16.25379297.js",
    "revision": "a52d1fc42a4173df292ab5eeee843512"
  },
  {
    "url": "assets/js/17.7e2101b8.js",
    "revision": "03882988ff5e5979293ed413939c67e6"
  },
  {
    "url": "assets/js/18.2785f80a.js",
    "revision": "fa148f0c3aaaab83fa0048dd69797225"
  },
  {
    "url": "assets/js/19.62674935.js",
    "revision": "6133beda11637ab6758fee4d519ab7e9"
  },
  {
    "url": "assets/js/20.855939e0.js",
    "revision": "66964fe9ab1d5f83b0f2b80d9d54ba73"
  },
  {
    "url": "assets/js/21.2f1882b8.js",
    "revision": "afa3829e422e81a7a550cd3c3f10f5ea"
  },
  {
    "url": "assets/js/22.308b35a0.js",
    "revision": "74429477d68691ece058c56b4068201c"
  },
  {
    "url": "assets/js/23.74a9c0f1.js",
    "revision": "e564b95e3d28750fc38a56c5b61f8bed"
  },
  {
    "url": "assets/js/24.855b77c6.js",
    "revision": "2890706c3ec850691e7168d19412373e"
  },
  {
    "url": "assets/js/25.3992e783.js",
    "revision": "9415940420dd3ba45cf21954ed758809"
  },
  {
    "url": "assets/js/26.c979798d.js",
    "revision": "370a521a6daed6e36bc2a527c4bde8dd"
  },
  {
    "url": "assets/js/app.a606cc04.js",
    "revision": "5d58b827999c076c026a53a724c55ef6"
  },
  {
    "url": "assets/js/layout-Layout.6410e5a3.js",
    "revision": "797aeb581133e8e8fe537823a6b10456"
  },
  {
    "url": "assets/js/layout-NotFound.f973f2ea.js",
    "revision": "49f5351e2aea290a68a9a83dfd0e6111"
  },
  {
    "url": "assets/js/page-1301ab8a.d08c13b2.js",
    "revision": "0b70a9ac2a8f61aa061f3ef757412383"
  },
  {
    "url": "assets/js/page-142fd774.fa40f340.js",
    "revision": "d4f368cc7e124fc5a5f194346ad91901"
  },
  {
    "url": "assets/js/page-2037549c.bfee7d53.js",
    "revision": "ecef982160ea8bc89f172c82ecdce3f4"
  },
  {
    "url": "assets/js/page-22954010.937c9013.js",
    "revision": "7aee4e522daec18b7b010be11aebe6fb"
  },
  {
    "url": "assets/js/page-25b298b6.df276e83.js",
    "revision": "1ed3ff77c0f9ea640cda743f0e9a94d5"
  },
  {
    "url": "assets/js/page-3c041b9e.8866f3b8.js",
    "revision": "0ed20440ce12b3a74a3e3513ba93b574"
  },
  {
    "url": "assets/js/page-65eaf5e4.7d91d6f1.js",
    "revision": "4bac8ee76e059f2404c577d2139e0b70"
  },
  {
    "url": "assets/js/page-7205f0b4.b787c8c2.js",
    "revision": "050aa98ee181815e0a0a37900cf45e87"
  },
  {
    "url": "assets/js/page-e4dfaf94.2157f2e4.js",
    "revision": "979a74878d6f1d7f18973a48e6b2ffe8"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fd887c25.js",
    "revision": "891fb62a1b571160d2740f4a5a50dc79"
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
    "revision": "5a8c71feaf781f754d7da8470744a898"
  },
  {
    "url": "doc/index.html",
    "revision": "a660e82481745be9ceabd34be038559f"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e2a17b2a51889bcf5aedd43593a68184"
  },
  {
    "url": "guide/team/index.html",
    "revision": "bfa465ad04ab37709419a6967cafbd59"
  },
  {
    "url": "index.html",
    "revision": "7bec0372861a00435f33eaad477cb1c5"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "e3b985bf201df5fe09e7434b1a0d7146"
  },
  {
    "url": "py-list/index.html",
    "revision": "b2ec33197a6083c9cd06f36dc3bd2e3a"
  },
  {
    "url": "resources/index.html",
    "revision": "85e4bdf411cc10319f9ea70eeb7fd8c6"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "b2a27388b6f0ac9c32af7a2937b00348"
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
