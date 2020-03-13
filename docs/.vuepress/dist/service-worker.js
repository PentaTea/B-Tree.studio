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
    "revision": "26f65ced2a815ffdaa0e1008acbc9e3a"
  },
  {
    "url": "assets/css/0.styles.e8335325.css",
    "revision": "f6663b98157d766d590757d135e83ab5"
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
    "url": "assets/img/tail-spin.a75a5f09.svg",
    "revision": "a75a5f095bf3a1155c66d012b647ca4c"
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
    "url": "assets/js/20.8df015d1.js",
    "revision": "59af9794c55d53f2766c5c4e135f43f4"
  },
  {
    "url": "assets/js/21.a8a89ae1.js",
    "revision": "ce379c3fca7f0c426c479cee9733ec8d"
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
    "url": "assets/js/app.be409fbc.js",
    "revision": "9eccaed3bb730a14b8c81f2d85a214ac"
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
    "url": "assets/js/page-07fa8526.f5ff7b14.js",
    "revision": "fb21e6757d5c387c7be75abd814a4646"
  },
  {
    "url": "assets/js/page-1301ab8a.a7c0bd99.js",
    "revision": "6c0cc1c29dab953e87e164d12a032bf5"
  },
  {
    "url": "assets/js/page-2037549c.a5d4b894.js",
    "revision": "3a3252d0294fec98919822571d0511c9"
  },
  {
    "url": "assets/js/page-25b298b6.cd8bed96.js",
    "revision": "147c4587b1b9d9ca20bdb320a7e3404f"
  },
  {
    "url": "assets/js/page-3c041b9e.deb47676.js",
    "revision": "f0b04c4b7175de2874e90635530779fa"
  },
  {
    "url": "assets/js/page-65eaf5e4.fa6e9a29.js",
    "revision": "98471742a39b462251995fc09d5829fe"
  },
  {
    "url": "assets/js/page-7205f0b4.30f79cb0.js",
    "revision": "869fb9c79d153566d9a1960509b7f0c1"
  },
  {
    "url": "assets/js/page-a2896314.75d430da.js",
    "revision": "60deafc119628836bbe4b0c54d6d754f"
  },
  {
    "url": "assets/js/page-a7e2470e.3b74d22c.js",
    "revision": "0038ce5fc367072feb238226b3af86df"
  },
  {
    "url": "assets/js/page-e4dfaf94.00815078.js",
    "revision": "b52120268321d327153b76de14cd20de"
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
    "revision": "4f607e9a81853e4ef17e55c4b3379031"
  },
  {
    "url": "doc/index.html",
    "revision": "ae8f3e417276327cbc8575e4570c5b95"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "6f3a24265e44ecd8ba0b24b41d416457"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d6138d446cdc07c16773fb3473ebad55"
  },
  {
    "url": "index.html",
    "revision": "9f269af18d8cae33e691b82c8ced9540"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "892b34fe37776c11db136e0a8b4ba11b"
  },
  {
    "url": "product/index.html",
    "revision": "e70b904f2654eb9a60d0664b9cd789c5"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "642cab93c65a70af58baf26644a7e6fd"
  },
  {
    "url": "resources/index.html",
    "revision": "614f7f6d6145bca7ab6266c678641c0c"
  },
  {
    "url": "support/index.html",
    "revision": "15378b2dfaa49033900943b3e1514af3"
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
