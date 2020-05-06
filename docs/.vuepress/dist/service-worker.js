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
    "revision": "f5b4618b7fdfac988bdf58c623241932"
  },
  {
    "url": "assets/css/0.styles.f51f875f.css",
    "revision": "ec0188f68d81de2ba8e56b8195bb018c"
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
    "url": "assets/js/18.cfddfba1.js",
    "revision": "0c00a18dfecbfe11912725e8fbee98d3"
  },
  {
    "url": "assets/js/19.03a8e75b.js",
    "revision": "120f5cb35c7954546ade3473138f1154"
  },
  {
    "url": "assets/js/20.2fe2a7f3.js",
    "revision": "b8ebf9bacb85f4ae2982889d5a57971e"
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
    "url": "assets/js/26.6619d0aa.js",
    "revision": "9b07f26efd4324476b0ab03e9f7ff21d"
  },
  {
    "url": "assets/js/27.a3fa6e44.js",
    "revision": "951569532b82692eb03f7483b074e7a8"
  },
  {
    "url": "assets/js/28.a0d0422f.js",
    "revision": "df136b8102cf4e6dbc8161519c04ba26"
  },
  {
    "url": "assets/js/29.a9add4ce.js",
    "revision": "0880ccd008df646a4ef8f3da38cd1859"
  },
  {
    "url": "assets/js/app.c388f217.js",
    "revision": "9a3fdfd05892992f3efda1376b7dcbe7"
  },
  {
    "url": "assets/js/layout-Layout.03a2c885.js",
    "revision": "86e38edd4c26e8c5dae0647445eb9cc5"
  },
  {
    "url": "assets/js/layout-NotFound.2871a85e.js",
    "revision": "886da4d6dd0a985ca5a595f4efdffb88"
  },
  {
    "url": "assets/js/page-069942c9.994c12b3.js",
    "revision": "26d6014b9cb5b4b6e046914b24eff909"
  },
  {
    "url": "assets/js/page-142fd774.3e0de484.js",
    "revision": "ed47886a852c603b829069d109a9bbbc"
  },
  {
    "url": "assets/js/page-2037549c.05948559.js",
    "revision": "987da24aeadbff9130ce6410765a2f9f"
  },
  {
    "url": "assets/js/page-22954010.522c8601.js",
    "revision": "c429f38e1a308ff875f462bbc02d94d1"
  },
  {
    "url": "assets/js/page-25b298b6.07b609cd.js",
    "revision": "2bf650e656587e3ddd1a1a690ecc7a1c"
  },
  {
    "url": "assets/js/page-3c041b9e.00e591a8.js",
    "revision": "114ec858838831f520efc4f25c48c61c"
  },
  {
    "url": "assets/js/page-65eaf5e4.ec31cc0d.js",
    "revision": "7529397dfa7c24135c82a50b3989f12f"
  },
  {
    "url": "assets/js/page-7205f0b4.47ec344e.js",
    "revision": "b5fa0cdb73f161c5e868c329a0107e7c"
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
    "revision": "026d0aadca9020e552ae5a52e151d12b"
  },
  {
    "url": "doc/index.html",
    "revision": "dba53140ffbaa09ee28e10cecab6f72f"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "5a09b93f19e7ddda71653613e35c0a5f"
  },
  {
    "url": "guide/index.html",
    "revision": "3722fe4d49472b90a403a1c8dbb10041"
  },
  {
    "url": "guide/team/index.html",
    "revision": "34136ecdc568f63cca8227b64cbd42be"
  },
  {
    "url": "index.html",
    "revision": "d67c12ae1244affab95c82de78a7f7cf"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "1db19799afe71b0d4938b37e38f793ae"
  },
  {
    "url": "py-list/index.html",
    "revision": "b9420d5f722e81fc5ba5b793e9ed65fd"
  },
  {
    "url": "resources/ZhouYiEncode/index.html",
    "revision": "93ddf650a2ec29b1ee833b2d18680d97"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "0753c11257807e9fee70d44737c56f07"
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
