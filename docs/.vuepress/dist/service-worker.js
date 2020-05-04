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
    "revision": "020b00833ae42d983f4827556be79523"
  },
  {
    "url": "assets/css/0.styles.56d4a260.css",
    "revision": "39e08349fe32c6c675ec3c574c6f5ba1"
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
    "url": "assets/js/18.2bb80bdf.js",
    "revision": "f9011dac8b3e8632053524a8f899b2dd"
  },
  {
    "url": "assets/js/19.3dc9f1e4.js",
    "revision": "f3f07d1e9f0728e3658c21ba98032519"
  },
  {
    "url": "assets/js/20.748a717c.js",
    "revision": "9f4014c45f170c6d2f538133ea711576"
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
    "url": "assets/js/23.dc9840e1.js",
    "revision": "7931bf32158451c1bfe62f57190af0db"
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
    "url": "assets/js/28.03ffae73.js",
    "revision": "1a5f16bd98a9915deeb0910643469ace"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.de3cdffa.js",
    "revision": "861b4726270690ba5556175460b5f784"
  },
  {
    "url": "assets/js/layout-Layout.91c1cdee.js",
    "revision": "73420150705d7c296993c671eeea69f0"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.5d791112.js",
    "revision": "027e42d0740c836680ce78c4e373ae80"
  },
  {
    "url": "assets/js/page-142fd774.1337facd.js",
    "revision": "c3b4d605be8587625412c0e878cb5088"
  },
  {
    "url": "assets/js/page-2037549c.880a86ab.js",
    "revision": "6f87655ec570010625c533f62a0450f8"
  },
  {
    "url": "assets/js/page-22954010.4c9e1f77.js",
    "revision": "045d52c81f35e9acd99d077bc4c3eb69"
  },
  {
    "url": "assets/js/page-25b298b6.adeb06db.js",
    "revision": "0f1ac47792b269bca76b33f882c2c98e"
  },
  {
    "url": "assets/js/page-3c041b9e.ae341c3a.js",
    "revision": "1b11b95adebebbd1484bde6af9eb376a"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c9ed91c.js",
    "revision": "5e295e700b9429ab4fedcbf94736ee50"
  },
  {
    "url": "assets/js/page-7205f0b4.ea59e6d8.js",
    "revision": "7a8b8eeb1511e99d58c2935858cbb1e4"
  },
  {
    "url": "assets/js/page-e4dfaf94.e573d759.js",
    "revision": "ed8d858272abaa69e677c202dc6c5270"
  },
  {
    "url": "assets/js/page-fd1ee6b4.53274532.js",
    "revision": "753f4732e634463afb453632bade14ff"
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
    "revision": "af4b80e9cac02bcc374628aa94063102"
  },
  {
    "url": "doc/index.html",
    "revision": "6b649506aeaf6d4addaaf124aec36da5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "7b6a5fe351650aa10f81191933a5cacd"
  },
  {
    "url": "guide/index.html",
    "revision": "07c826b7edffcda18dc8dceb33b4fd4a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "158d994953c5c849b2a50c813b61da06"
  },
  {
    "url": "index.html",
    "revision": "456bc726b759fce68eaf851e8bbd50bb"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "6f050e88d02d84904021ac4061c88500"
  },
  {
    "url": "py-list/index.html",
    "revision": "1e13124109712a5b8c81f18ce0691320"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "01234de4c83d90bca64e25d4c13b52a7"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "99762dcda2d54be7cde1ab4d979b03b1"
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
