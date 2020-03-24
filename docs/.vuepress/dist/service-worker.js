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
    "revision": "177e488ba6c504c53bb5d3e9f4172dcc"
  },
  {
    "url": "assets/css/0.styles.3bb0653a.css",
    "revision": "dfff19834153b64e28693b2961c70e71"
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
    "url": "assets/js/16.7825476b.js",
    "revision": "038954b5aee96b53220bb0fc2c2d660a"
  },
  {
    "url": "assets/js/17.437c678e.js",
    "revision": "5879237a5492a8d72326a7d4c5d7a146"
  },
  {
    "url": "assets/js/18.9a18c1e1.js",
    "revision": "9608407e07e218faeea4fd9fb1940516"
  },
  {
    "url": "assets/js/19.6a447bb2.js",
    "revision": "019792897a3934b8d33141ef04722cc2"
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
    "url": "assets/js/app.63cb0b54.js",
    "revision": "c4e03eff5155a1b9310f701be2a21785"
  },
  {
    "url": "assets/js/layout-Layout.26f3a760.js",
    "revision": "536cd803c840c6834ec66ab885938303"
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
    "url": "assets/js/page-22954010.2c2ecd6a.js",
    "revision": "aa339c2c49725dd2e00eb029119b00d8"
  },
  {
    "url": "assets/js/page-25b298b6.420559c4.js",
    "revision": "7c413ca859875977ff0bdb3b205f05da"
  },
  {
    "url": "assets/js/page-3c041b9e.80e05b96.js",
    "revision": "3ade6592fcea2a4312dffbea922f7830"
  },
  {
    "url": "assets/js/page-65eaf5e4.dba10012.js",
    "revision": "80a11331c6c32ce950a3db3b577f6ce1"
  },
  {
    "url": "assets/js/page-7205f0b4.79840479.js",
    "revision": "f1aef04f638a93ba40ae85cda91fb84f"
  },
  {
    "url": "assets/js/page-a2896314.e243abe2.js",
    "revision": "0adb460e1d31c9fcebc1448c32abe394"
  },
  {
    "url": "assets/js/page-a7e2470e.5318876d.js",
    "revision": "e17e0ddb4f6f44d214de86a45328df40"
  },
  {
    "url": "assets/js/page-e4dfaf94.41792517.js",
    "revision": "137a1a4200d96a01a684c5f8d8fbccf4"
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
    "revision": "a137115116b14c7280be312ab9291664"
  },
  {
    "url": "doc/index.html",
    "revision": "c98eb676f3e7b27b1e26a55dde69d72e"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "afa016065ca527db0efcb3a2d50a2b4d"
  },
  {
    "url": "guide/team/index.html",
    "revision": "286a72d498c526362d6f0a1b879ef5fd"
  },
  {
    "url": "index.html",
    "revision": "941c4fff85d253c2557c96763657b0bd"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "0a7fc3949aa00e86546126279d54cf36"
  },
  {
    "url": "product/index.html",
    "revision": "9256ce52e919b32eb15322e654d1aff8"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "2736190e8caa43583f38268df99e5027"
  },
  {
    "url": "py-list/index.html",
    "revision": "f6dfb0afb8cb0cbd6679f86306808878"
  },
  {
    "url": "resources/index.html",
    "revision": "711143ff29c5e9175fde5f65bb1b0a6f"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "db6cf13ed291faecb6088d22e813ca01"
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
