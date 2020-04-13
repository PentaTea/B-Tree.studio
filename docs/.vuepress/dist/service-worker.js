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
    "revision": "5b8d317772f1442f9564244596aeff62"
  },
  {
    "url": "assets/css/0.styles.ab643d3e.css",
    "revision": "1252d66ba0e98475508a65d90ae6c4df"
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
    "url": "assets/js/22.1b008fd2.js",
    "revision": "d044695084a405ab1438c1a61cf3f466"
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
    "url": "assets/js/app.f4551220.js",
    "revision": "3eba56eb3bff93eec5698028e9afe5f3"
  },
  {
    "url": "assets/js/layout-Layout.4f3326ce.js",
    "revision": "d386173a83d4fdf148918b0f38ab39ec"
  },
  {
    "url": "assets/js/layout-NotFound.74e27940.js",
    "revision": "cd14f5c812f0e9ce46b2c78848584680"
  },
  {
    "url": "assets/js/page-1301ab8a.e5d1416d.js",
    "revision": "a88ad32724676a9ee4ab9e1ad1c4ca19"
  },
  {
    "url": "assets/js/page-142fd774.19b1bce9.js",
    "revision": "20c12137267c571108b643626c627a8e"
  },
  {
    "url": "assets/js/page-2037549c.2b37b5e5.js",
    "revision": "d0d32a6cfd741a6575e56197b8f73782"
  },
  {
    "url": "assets/js/page-22954010.8406d3e7.js",
    "revision": "8e8096fbb06614b159aab87b43f50cf5"
  },
  {
    "url": "assets/js/page-25b298b6.888302f6.js",
    "revision": "eb532f8859e5ce1a74992b92f037de12"
  },
  {
    "url": "assets/js/page-3c041b9e.3d3928bb.js",
    "revision": "a0d9353686e46e641918b62151b69e5c"
  },
  {
    "url": "assets/js/page-65eaf5e4.4f44a320.js",
    "revision": "b1d2f7127e8275812d59d1ea4d3bfb42"
  },
  {
    "url": "assets/js/page-7205f0b4.93dd8c3e.js",
    "revision": "b05f9d33dac479cf61cc8265d79cd65b"
  },
  {
    "url": "assets/js/page-e4dfaf94.a322d238.js",
    "revision": "c45900931d55f9430472b76155a08d05"
  },
  {
    "url": "assets/js/vendors~layout-Layout.c8c3f0b4.js",
    "revision": "f77ad8854c581a5fd48b971c0f817ffa"
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
    "revision": "604ca373393c0d1cefed10316a6f990a"
  },
  {
    "url": "doc/index.html",
    "revision": "8f74a787ed738488f49f6f830b7e4c1a"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "ccea662252f8c7a8f1eb28c105e77a44"
  },
  {
    "url": "guide/team/index.html",
    "revision": "b27b7c588d1d4864d501cdedf43107e9"
  },
  {
    "url": "index.html",
    "revision": "243e3ddd41e7ed7c70aa3c837d71e3dc"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "258ee1c9d278dc6e13ab0b689aa49661"
  },
  {
    "url": "py-list/index.html",
    "revision": "f655b4fa585c3ec7784a15c3948cfa3b"
  },
  {
    "url": "resources/index.html",
    "revision": "6dfcb707a3b67a48983ac600281d57ff"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "4c2ddc0d34ffe293d6c74b9b366d75f7"
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
