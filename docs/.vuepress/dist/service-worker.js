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
    "revision": "1bd41634215e7a344b622b8a40f72b34"
  },
  {
    "url": "assets/css/0.styles.27e3b72d.css",
    "revision": "4fb79d6387e0e2a4287fc2445db7816b"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/alipay.6428fd00.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
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
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/15.65a5d190.js",
    "revision": "91288dac6660514a38ebf5a9396ce7c1"
  },
  {
    "url": "assets/js/16.2ead1f36.js",
    "revision": "e272cf82ac30b32a74e8ffd41c0ec248"
  },
  {
    "url": "assets/js/17.5d977788.js",
    "revision": "6913cdbe60af3fbcc68f9860fd56167a"
  },
  {
    "url": "assets/js/18.b8a619ab.js",
    "revision": "0980d3ea4fadc88eb68040848eef0958"
  },
  {
    "url": "assets/js/19.5af7326e.js",
    "revision": "47cc7def3316e29654607571a226cbfd"
  },
  {
    "url": "assets/js/20.8df015d1.js",
    "revision": "59af9794c55d53f2766c5c4e135f43f4"
  },
  {
    "url": "assets/js/21.5b04b15f.js",
    "revision": "aced8f8d5c1bc062b2846347396b2d62"
  },
  {
    "url": "assets/js/22.8deccc3b.js",
    "revision": "ece0af5df629c928b38e8f9bfaee0f38"
  },
  {
    "url": "assets/js/23.0c8efc0e.js",
    "revision": "d0a1aa03963ebc01f46cce8ec81d8997"
  },
  {
    "url": "assets/js/app.514aef34.js",
    "revision": "d64ebbae63481f71860511afa0d129e1"
  },
  {
    "url": "assets/js/layout-Layout.e08b445c.js",
    "revision": "83545fd5d75c4578cdd8253ea21ca790"
  },
  {
    "url": "assets/js/layout-NotFound.71987536.js",
    "revision": "1f501fc28379fa5176b812e6557f543f"
  },
  {
    "url": "assets/js/page-07fa8526.dba6a6e2.js",
    "revision": "964e5f56fa9fe0f320bd73c38eaf794e"
  },
  {
    "url": "assets/js/page-1301ab8a.9da90e91.js",
    "revision": "745ae7d64472dd0cdd1f1d251bc64eb4"
  },
  {
    "url": "assets/js/page-2037549c.89a33830.js",
    "revision": "316dfdf0351be4f8fc00278930012232"
  },
  {
    "url": "assets/js/page-25b298b6.34073135.js",
    "revision": "31c2e52676af162b32614a62ce006f82"
  },
  {
    "url": "assets/js/page-3c041b9e.740e1272.js",
    "revision": "96697a93989d385cf6449ca998912198"
  },
  {
    "url": "assets/js/page-65eaf5e4.ed1e0b9f.js",
    "revision": "9b8026d89abd575bd5d28fc7a596799a"
  },
  {
    "url": "assets/js/page-7205f0b4.fffc601a.js",
    "revision": "636f71145f7fd7c1e15bb06f5611ab3f"
  },
  {
    "url": "assets/js/page-a2896314.75d430da.js",
    "revision": "60deafc119628836bbe4b0c54d6d754f"
  },
  {
    "url": "assets/js/page-a7e2470e.52766756.js",
    "revision": "ac08179a9e67f809fe2058fac7c285b3"
  },
  {
    "url": "assets/js/page-e4dfaf94.e6a48769.js",
    "revision": "4060819e8a6dd2ffb06b6f8bd3c5764c"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5034633c.js",
    "revision": "6379eb86811bc4d74b722d0678823252"
  },
  {
    "url": "assets/svg/briefcase.svg",
    "revision": "72eb0266680765e1d356ca037f5cef60"
  },
  {
    "url": "assets/svg/globe.svg",
    "revision": "38e3374309f7a3db37c31f885d4b47b4"
  },
  {
    "url": "assets/svg/map-pin.svg",
    "revision": "156d6c03b4a6d93409c2e612c4f81bec"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "43bf721399b7e9272802025b27e3ab7e"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "35b0946cf837246727fda4dc7d873139"
  },
  {
    "url": "doc/index.html",
    "revision": "c01bb76ef656e96538e125772688892c"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "5edaf3086e53c36d07eca73c804ab274"
  },
  {
    "url": "guide/team/index.html",
    "revision": "7b06ef1a4e506ac79494504b3a3ca642"
  },
  {
    "url": "index.html",
    "revision": "e6b629397c3a824a4da7f08f6c7f9bba"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "b990ad65c274bd9ca93e1d454f01c171"
  },
  {
    "url": "product/index.html",
    "revision": "2e6f53c7a1770e111c8250b2f48d78db"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "80fb2dfbb9700c56b09a587e44068e2b"
  },
  {
    "url": "resources/index.html",
    "revision": "918e367b6e4fd88339a608bbe381d148"
  },
  {
    "url": "support/index.html",
    "revision": "9236f020cc267d7c62e1b640e6a55703"
  },
  {
    "url": "svg_test.svg",
    "revision": "08b37e8eb422f12620aa28175ee139c1"
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
