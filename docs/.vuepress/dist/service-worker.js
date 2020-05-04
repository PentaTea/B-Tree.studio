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
    "revision": "b2c3ea06dd8907c04d85accef3236cdf"
  },
  {
    "url": "assets/css/0.styles.3d71e4de.css",
    "revision": "2676087b9a9af578620eec1ffc339471"
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
    "url": "assets/js/18.046819bc.js",
    "revision": "71aeb1c93eab10536007b7fc2f1dfbc1"
  },
  {
    "url": "assets/js/19.03a8e75b.js",
    "revision": "120f5cb35c7954546ade3473138f1154"
  },
  {
    "url": "assets/js/20.f784930c.js",
    "revision": "6e1f0bfcae45ee73738cfe0acbc3e4f9"
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
    "url": "assets/js/23.00f4f83a.js",
    "revision": "79a7be0651334145a1b819295ace685f"
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
    "url": "assets/js/28.37b81dd0.js",
    "revision": "c38f218da74412bd7270d5ef143703cd"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.9253f613.js",
    "revision": "1915e4f4f826b3fcf264e3bf5a22892a"
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
    "url": "assets/js/page-069942c9.c798b6cb.js",
    "revision": "8c2640dcbe7732d910b018bed3385538"
  },
  {
    "url": "assets/js/page-142fd774.312fd673.js",
    "revision": "5bc3fccc167f0a9c55d865551a137f46"
  },
  {
    "url": "assets/js/page-2037549c.1efd32d0.js",
    "revision": "bbf333edc338660a93e02d8836ad435c"
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
    "url": "assets/js/page-3c041b9e.00e591a8.js",
    "revision": "114ec858838831f520efc4f25c48c61c"
  },
  {
    "url": "assets/js/page-65eaf5e4.2c9ed91c.js",
    "revision": "5e295e700b9429ab4fedcbf94736ee50"
  },
  {
    "url": "assets/js/page-7205f0b4.bd67e73c.js",
    "revision": "fdbf0da11f98a17bf21c4692b2fe8bb2"
  },
  {
    "url": "assets/js/page-e4dfaf94.e573d759.js",
    "revision": "ed8d858272abaa69e677c202dc6c5270"
  },
  {
    "url": "assets/js/page-fd1ee6b4.3efa2045.js",
    "revision": "6086d65d03734d7662c740eba91f09ca"
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
    "revision": "9a19a2546bf72883678e76851d2e96c1"
  },
  {
    "url": "doc/index.html",
    "revision": "1e74f3982ff61f72059e824f5fe5d529"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "7f259cd831da68afa25fd573d044d2a0"
  },
  {
    "url": "guide/index.html",
    "revision": "6ce4505676dfca7d4522fb98d1a21296"
  },
  {
    "url": "guide/team/index.html",
    "revision": "615bfb2470887c3fbc7e5c49bf10d863"
  },
  {
    "url": "index.html",
    "revision": "99b3e20cedf962de22d38f534a484cc3"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "95e83628bc3a8d4c3c2cf5fd8ba2f7f2"
  },
  {
    "url": "py-list/index.html",
    "revision": "87e399748b4c3a9120afa5b4365a9e70"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "f582f5d91b4105f8f239043479f1c7d5"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "3d50130c7545a8c9c000f7c4ad41de14"
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
