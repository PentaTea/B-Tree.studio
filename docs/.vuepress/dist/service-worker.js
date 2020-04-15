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
    "revision": "de9cd3b5d188025d159607b1d16f6055"
  },
  {
    "url": "assets/css/0.styles.7d28b6d0.css",
    "revision": "00802fe8c67b57d0fcdabc13da1ac8ce"
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
    "url": "assets/js/17.3cc6dd81.js",
    "revision": "e876e57c8b794f2463fe289eec94cc01"
  },
  {
    "url": "assets/js/18.c5cbd3a2.js",
    "revision": "24869b040de5d82e3fb43082b370b63f"
  },
  {
    "url": "assets/js/19.746b7433.js",
    "revision": "699123ad466a0a2507230f2b4bb2d42b"
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
    "url": "assets/js/22.61d95327.js",
    "revision": "719e10451bea6fcde893a1dfee25de71"
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
    "url": "assets/js/app.ddcd8ce6.js",
    "revision": "3c6d4e7c2ac0d6a5dbfbff150596ec11"
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
    "url": "assets/js/page-142fd774.f7369f49.js",
    "revision": "b130f784ff4d1d775e8e1ab35712c7bc"
  },
  {
    "url": "assets/js/page-2037549c.8271ac0e.js",
    "revision": "054f23548bd55763df19cac6169db7ce"
  },
  {
    "url": "assets/js/page-22954010.200ee188.js",
    "revision": "0d20d334c0d06c366ba858b511c8912a"
  },
  {
    "url": "assets/js/page-25b298b6.55884cf6.js",
    "revision": "a03ea3633677cb2975bd01e64ee2dc31"
  },
  {
    "url": "assets/js/page-3c041b9e.9bfe7e12.js",
    "revision": "ac1185817c798f12c2be977ea247eaad"
  },
  {
    "url": "assets/js/page-65eaf5e4.a3dce6d0.js",
    "revision": "45ee8a14af1c1660ebb6d2a3f5fc5551"
  },
  {
    "url": "assets/js/page-7205f0b4.377fc6c1.js",
    "revision": "fe9cb21c105a9bc746a2c3eb82e141bc"
  },
  {
    "url": "assets/js/page-e4dfaf94.a3ca0109.js",
    "revision": "cc24652115c21a9fe9b7d3d0b58f0c16"
  },
  {
    "url": "assets/js/page-fd1ee6b4.84958d48.js",
    "revision": "adad2e39e70e0d18b1ac2f1add4996f0"
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
    "revision": "0928debdf264d9233b9d43cf9a26f393"
  },
  {
    "url": "doc/index.html",
    "revision": "5ea14718124255007e97d853ae28d367"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "d9d2c7cde7b3886577e746189ff6153f"
  },
  {
    "url": "guide/index.html",
    "revision": "353162a3541aa74bda18babec73fbb33"
  },
  {
    "url": "guide/team/index.html",
    "revision": "5eb0402d26635f0e090d698f5174dda5"
  },
  {
    "url": "index.html",
    "revision": "c439c09f3a6853c9dd8c9b7365df39f0"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "6571954726986d97f2300bf6372bb4b9"
  },
  {
    "url": "py-list/index.html",
    "revision": "e11a0cd30c34002a0a7ca7df3fc2ae26"
  },
  {
    "url": "resources/index.html",
    "revision": "65de8f3d9c0e6cfa567544796d064da5"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "f015feb9f3bd845dd2a6e56b30099804"
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
