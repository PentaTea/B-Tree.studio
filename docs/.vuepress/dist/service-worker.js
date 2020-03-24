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
    "revision": "7b5164812f5a49e082cdcc404872df6b"
  },
  {
    "url": "assets/css/0.styles.65cc70fb.css",
    "revision": "4213b4944432a002298539e3f637dcab"
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
    "url": "assets/js/16.86f3f674.js",
    "revision": "ccf360a565c3944e04c94f5bd74b8117"
  },
  {
    "url": "assets/js/17.437c678e.js",
    "revision": "5879237a5492a8d72326a7d4c5d7a146"
  },
  {
    "url": "assets/js/18.3fa3f973.js",
    "revision": "12b4b55a318bc1f5b3175b83efc9a61b"
  },
  {
    "url": "assets/js/19.1856f969.js",
    "revision": "31d8a78b8a1dc13a234752779686a538"
  },
  {
    "url": "assets/js/20.0d7c8389.js",
    "revision": "35280cdf8230efb7c5624d7b473e7e92"
  },
  {
    "url": "assets/js/21.9bb2c21d.js",
    "revision": "07a000eca51e128459576ee1337863b9"
  },
  {
    "url": "assets/js/22.25412312.js",
    "revision": "4e481f856b2d5755872a3fec9af238c3"
  },
  {
    "url": "assets/js/23.6847c5ab.js",
    "revision": "07f4d2016b3ec8180438a065e18ef8f5"
  },
  {
    "url": "assets/js/24.7025fc3d.js",
    "revision": "0cb4aec12e2e7e87db3d256e910b5905"
  },
  {
    "url": "assets/js/app.167bd140.js",
    "revision": "7d0e748b9ac14b83705635b97788e85c"
  },
  {
    "url": "assets/js/layout-Layout.f50fd36c.js",
    "revision": "84b7c71a9423006a8799cbf286a11bd3"
  },
  {
    "url": "assets/js/layout-NotFound.81851a79.js",
    "revision": "189b8e8356ebf261775984e4d6129b3f"
  },
  {
    "url": "assets/js/page-07fa8526.d3ad5105.js",
    "revision": "4e382d258c833a8fcf28985d3dc841ac"
  },
  {
    "url": "assets/js/page-1301ab8a.ec668ee9.js",
    "revision": "f49220b4e6499123a9fad2609beaa185"
  },
  {
    "url": "assets/js/page-2037549c.3731c292.js",
    "revision": "c9c74c7edb0530ef1e5bf192f7436493"
  },
  {
    "url": "assets/js/page-22954010.5586cac5.js",
    "revision": "dc359095555138fa967211bf11117d9e"
  },
  {
    "url": "assets/js/page-25b298b6.420559c4.js",
    "revision": "7c413ca859875977ff0bdb3b205f05da"
  },
  {
    "url": "assets/js/page-3c041b9e.bd7d9a9b.js",
    "revision": "7dd36339defaf07093c22d50da913db8"
  },
  {
    "url": "assets/js/page-65eaf5e4.6eeb6113.js",
    "revision": "28a7a1d305377edac3c80700dc436859"
  },
  {
    "url": "assets/js/page-7205f0b4.e450b244.js",
    "revision": "b8b6c57cb9ff393bde3fd7e759ada592"
  },
  {
    "url": "assets/js/page-a2896314.0b69bf19.js",
    "revision": "e528038ba0c3706ff4f6ef6840cd4de0"
  },
  {
    "url": "assets/js/page-a7e2470e.5318876d.js",
    "revision": "e17e0ddb4f6f44d214de86a45328df40"
  },
  {
    "url": "assets/js/page-e4dfaf94.c905f682.js",
    "revision": "eac7de29fa0db1755ec99141dae1bfb4"
  },
  {
    "url": "assets/js/vendors~layout-Layout.21d84bba.js",
    "revision": "bc663e3c3da1ea158d68d2181908f29e"
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
    "revision": "cc6d9d480d706bf74ee1e78080c3b3ef"
  },
  {
    "url": "doc/index.html",
    "revision": "cef1a986c8723d41ec25d2a48ee59b62"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "e489bd592fe3828337762ebbdc26301d"
  },
  {
    "url": "guide/team/index.html",
    "revision": "330c5218fb283917543d56304cca985e"
  },
  {
    "url": "index.html",
    "revision": "48b8316bc2ee585df516bf65edff687b"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "23d14772a0b20dbe90591e65d554fadc"
  },
  {
    "url": "product/index.html",
    "revision": "3088a10db3966a0ef91b94ea58d7866c"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "685c8d5c1af2fea9368150dfc83cad39"
  },
  {
    "url": "py-list/index.html",
    "revision": "bbaa69d1a7829255171031f808e0641b"
  },
  {
    "url": "resources/index.html",
    "revision": "fe9af4449f87ab5a15c16d4936ef701c"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "17789c8088258c08d9c35eed72705e5f"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
