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
    "revision": "4e7e618fd424ff90f4929915556b1114"
  },
  {
    "url": "assets/css/0.styles.3c2ed827.css",
    "revision": "225a322a19c4f266148d5b12f2a9464b"
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
    "url": "assets/js/15.0d2f8319.js",
    "revision": "c863be576515c88349ed44dde870d3c3"
  },
  {
    "url": "assets/js/16.eeef3b62.js",
    "revision": "3cdd50dbcd3d81007050581902575c9a"
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
    "url": "assets/js/19.d02b5eeb.js",
    "revision": "b146923b47c6c7b03b739e1ffda9850a"
  },
  {
    "url": "assets/js/20.c4db002d.js",
    "revision": "656fbbef0a1c09dfeefdb7fe16ac4cff"
  },
  {
    "url": "assets/js/21.c745498c.js",
    "revision": "8b658dfceee2dbd1750c06c67a8cdac5"
  },
  {
    "url": "assets/js/22.8deccc3b.js",
    "revision": "ece0af5df629c928b38e8f9bfaee0f38"
  },
  {
    "url": "assets/js/23.2c2342dc.js",
    "revision": "02c612397b48b1ed993614b6a98d1468"
  },
  {
    "url": "assets/js/app.55566a14.js",
    "revision": "0d2e63c391f711c3d5f995d003653b3a"
  },
  {
    "url": "assets/js/layout-Layout.9a457c60.js",
    "revision": "e87f76493be3f8e481fbf45677a69c70"
  },
  {
    "url": "assets/js/layout-NotFound.71987536.js",
    "revision": "1f501fc28379fa5176b812e6557f543f"
  },
  {
    "url": "assets/js/page-07fa8526.f121305a.js",
    "revision": "20cc3f86289311742a84c33ac9f8cb40"
  },
  {
    "url": "assets/js/page-1301ab8a.9da90e91.js",
    "revision": "745ae7d64472dd0cdd1f1d251bc64eb4"
  },
  {
    "url": "assets/js/page-2037549c.4db24ebf.js",
    "revision": "a6e79c3f2da19c90565dd82a0cf715f2"
  },
  {
    "url": "assets/js/page-25b298b6.cd8bed96.js",
    "revision": "147c4587b1b9d9ca20bdb320a7e3404f"
  },
  {
    "url": "assets/js/page-3c041b9e.44b9298e.js",
    "revision": "4765de40e771c0b428a94cf44dc62a02"
  },
  {
    "url": "assets/js/page-65eaf5e4.ffc5108a.js",
    "revision": "8354af95f4fff93a8ef693921cad264d"
  },
  {
    "url": "assets/js/page-7205f0b4.30f79cb0.js",
    "revision": "869fb9c79d153566d9a1960509b7f0c1"
  },
  {
    "url": "assets/js/page-a2896314.d2302b67.js",
    "revision": "edc3721a177ee610aaad22b06a88180d"
  },
  {
    "url": "assets/js/page-a7e2470e.12240811.js",
    "revision": "c8b6db2b581b0d835c3dee1be5afdece"
  },
  {
    "url": "assets/js/page-e4dfaf94.b41034ff.js",
    "revision": "39dc57418e2fe28845dc51992f6577c4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.032904ef.js",
    "revision": "230a47c5adc83474823f5c3e631777ce"
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
    "revision": "707ac9157cd3b4b290ec15b9dcd5f4de"
  },
  {
    "url": "doc/index.html",
    "revision": "c8dd6ee32a3ce84b9ccfa6a39e492fd5"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "335be6759a25212ff8db19549d32aca7"
  },
  {
    "url": "guide/team/index.html",
    "revision": "bab3f369da284d20655e5c88b99e1040"
  },
  {
    "url": "index.html",
    "revision": "c2b4695fa5d8cffbbc9b3fa9ff4d0221"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "209e7a604b74285d7a8fe016722d07ab"
  },
  {
    "url": "product/index.html",
    "revision": "ec57e981fc3dcdc72a899a22a0a73057"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "286028dc518a228391c8e865a0ef7c63"
  },
  {
    "url": "resources/index.html",
    "revision": "39dccd3e2bb2dc2721fb847e0f021c30"
  },
  {
    "url": "support/index.html",
    "revision": "be1a9f1cae55418ccce1c5f41e2c8a91"
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
