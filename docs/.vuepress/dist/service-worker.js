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
    "revision": "6445db6c516512fd72d5174b627f15ce"
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
    "url": "assets/js/app.d72ed1d5.js",
    "revision": "b08638a24e41eacc2362c059f766411d"
  },
  {
    "url": "assets/js/layout-Layout.4a101afb.js",
    "revision": "71e53ec8db71fed95ebeb357f70b7721"
  },
  {
    "url": "assets/js/layout-NotFound.81851a79.js",
    "revision": "189b8e8356ebf261775984e4d6129b3f"
  },
  {
    "url": "assets/js/page-07fa8526.59a36419.js",
    "revision": "47ad733c8ee1a727e55d0c2cde9305b7"
  },
  {
    "url": "assets/js/page-1301ab8a.d2d9eac8.js",
    "revision": "c2b3000e8a1aab84c9aa674237b4a276"
  },
  {
    "url": "assets/js/page-2037549c.d95be22f.js",
    "revision": "fa5ad186c0afb5dd74f4aa0d01d5407d"
  },
  {
    "url": "assets/js/page-22954010.e628a644.js",
    "revision": "f9a345e54d708aca2a7916358d9cf6ab"
  },
  {
    "url": "assets/js/page-25b298b6.edc5b563.js",
    "revision": "d02805a8d71ee4ff70a297cc38ca2a24"
  },
  {
    "url": "assets/js/page-3c041b9e.6a9a812a.js",
    "revision": "bf5936410f0c17c044cb795715be016d"
  },
  {
    "url": "assets/js/page-65eaf5e4.d43e4328.js",
    "revision": "b2a6aa5a2ec17159980f1a6ff6ba0499"
  },
  {
    "url": "assets/js/page-7205f0b4.1a240f91.js",
    "revision": "831f0c36e470e9777b54e4de5fc829b1"
  },
  {
    "url": "assets/js/page-a2896314.22741122.js",
    "revision": "9b4a0a4eb4d364d321764bcc21c700ab"
  },
  {
    "url": "assets/js/page-a7e2470e.5318876d.js",
    "revision": "e17e0ddb4f6f44d214de86a45328df40"
  },
  {
    "url": "assets/js/page-e4dfaf94.36e7ab3f.js",
    "revision": "bc25c615a1d1b97a1ed58d3625e2bc59"
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
    "revision": "9bacd36c8f906fb324f5246aee1049f3"
  },
  {
    "url": "doc/index.html",
    "revision": "382cc107108d4b8619d9252202315242"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "1a0b658c68914a909da53f080ca773d7"
  },
  {
    "url": "guide/team/index.html",
    "revision": "2730b5c46eba87905143f98938ffda70"
  },
  {
    "url": "index.html",
    "revision": "c635faad125c8d3764da949b10d75e2d"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "9829901e22691a04631b31603261f8c6"
  },
  {
    "url": "product/index.html",
    "revision": "bef3b2b6f66c51b072ba9754c8e3851a"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "75d1b6877699d63c2d383a64afa60dae"
  },
  {
    "url": "py-list/index.html",
    "revision": "ad0379ef8e4c3e2fbb9461677bb707f8"
  },
  {
    "url": "resources/index.html",
    "revision": "043c17ed9ea9cd8d4160437250a3aa5a"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "e1d90200ff1e824bbcd75dcbaf33f356"
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
