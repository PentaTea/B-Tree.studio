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
    "revision": "12ee51ab865e0d3cf54f890b1eda51e3"
  },
  {
    "url": "assets/css/0.styles.44ad2eec.css",
    "revision": "1e3b676d48cbed6f5ccea06cbaf0ce50"
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
    "url": "assets/js/1.f9f8c02d.js",
    "revision": "a0a378bfae3bb5d86195ae679a7064cf"
  },
  {
    "url": "assets/js/16.ded87fc7.js",
    "revision": "5305ecdcacbf665d9bdce2b913d6e62c"
  },
  {
    "url": "assets/js/17.0f28a0db.js",
    "revision": "a7c802c437df924f203992ba26f2e31b"
  },
  {
    "url": "assets/js/18.c5cbd3a2.js",
    "revision": "24869b040de5d82e3fb43082b370b63f"
  },
  {
    "url": "assets/js/19.f4ea9e95.js",
    "revision": "a6e1e417cb662b136d7f392646fb0715"
  },
  {
    "url": "assets/js/20.ad9dab1b.js",
    "revision": "3587191237122ff80d490a6fc5c17f22"
  },
  {
    "url": "assets/js/21.f70c3abb.js",
    "revision": "0c90ffd137a0a1a23ee0c1516762859c"
  },
  {
    "url": "assets/js/22.7b28aa50.js",
    "revision": "ddc65d7f78fab485da58358f041e20e0"
  },
  {
    "url": "assets/js/23.374e57cb.js",
    "revision": "c97754f0c346a62ca38dc9ad8a59b5fc"
  },
  {
    "url": "assets/js/24.a1b6bc75.js",
    "revision": "643e67b1ab27a38bba9b7c36d1e130a2"
  },
  {
    "url": "assets/js/25.1e836bfb.js",
    "revision": "2347e46ffad1b7ee189eb4a319c0862c"
  },
  {
    "url": "assets/js/26.00a73c97.js",
    "revision": "0a4b9e583fd823cb43b1e379916cadab"
  },
  {
    "url": "assets/js/27.9f819fff.js",
    "revision": "75b35431597cff3141567413a15f6334"
  },
  {
    "url": "assets/js/app.c14cc5a7.js",
    "revision": "e6a462252626ba7b3b948e5938e94afd"
  },
  {
    "url": "assets/js/layout-Layout.50ce21d2.js",
    "revision": "22e94032dfca1c976fcbf42d70f92e46"
  },
  {
    "url": "assets/js/layout-NotFound.5e7dda8b.js",
    "revision": "4bd6e00bc8e7e14c3eeda974afd14181"
  },
  {
    "url": "assets/js/page-1301ab8a.70486787.js",
    "revision": "06f771c40abd903b77e58a7b35b7da80"
  },
  {
    "url": "assets/js/page-142fd774.a375c51b.js",
    "revision": "ae4145f06b5937260c440d00ae99fb1a"
  },
  {
    "url": "assets/js/page-2037549c.00a29b4b.js",
    "revision": "f42d2c1e229cd7e9eac2ce781fdfa9f7"
  },
  {
    "url": "assets/js/page-22954010.fb9fe4eb.js",
    "revision": "f481c43f08943f07356ad3ef52702530"
  },
  {
    "url": "assets/js/page-25b298b6.e565e6f6.js",
    "revision": "e3bb0bb80a3ca09c25f2f535ae709339"
  },
  {
    "url": "assets/js/page-3c041b9e.9bfe7e12.js",
    "revision": "ac1185817c798f12c2be977ea247eaad"
  },
  {
    "url": "assets/js/page-65eaf5e4.68047b0b.js",
    "revision": "caea9a9455940096cc3c6ebae5f73b69"
  },
  {
    "url": "assets/js/page-7205f0b4.c859640a.js",
    "revision": "08bcc1df8e85e0b132918b0fe7493a1d"
  },
  {
    "url": "assets/js/page-e4dfaf94.f7b42359.js",
    "revision": "86a9eb9330bee6ccfd8edf8793a8c113"
  },
  {
    "url": "assets/js/page-fd1ee6b4.834c51b5.js",
    "revision": "5f91d197bf057e7753f0418633dc29ad"
  },
  {
    "url": "assets/js/vendors~layout-Layout.6d440321.js",
    "revision": "0d9e8e3060de3d2f08954ceff41e97e6"
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
    "revision": "57acb32b0a63cddcc88d3cc7d24e3029"
  },
  {
    "url": "doc/index.html",
    "revision": "0e3b8eaff448940036592e31ab72f8b2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "1c6b7897ea70e9581403da2b60b88bee"
  },
  {
    "url": "guide/index.html",
    "revision": "f9b1f382ea9ae9a72aba65dadd70729b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "b63fdc796234fe4e94142b72fb80ab09"
  },
  {
    "url": "index.html",
    "revision": "21a4721717016e7018dbc94663524405"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "196560b7dfcd01c4c5c8d5803105ae4f"
  },
  {
    "url": "py-list/index.html",
    "revision": "1b7f3bcabc8f4fb99e8c53b42a8ea6a3"
  },
  {
    "url": "resources/index.html",
    "revision": "37cc93b6e978ed4956e241d2b9267b3e"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "4eebdae3d6abc12a9ac12eb6948cd54c"
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
