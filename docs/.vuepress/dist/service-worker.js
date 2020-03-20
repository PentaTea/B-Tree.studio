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
    "revision": "9ef3f59c666c487456b66707341e6073"
  },
  {
    "url": "assets/css/0.styles.88b6ae75.css",
    "revision": "e0d04f3220a3d9972757235feb362771"
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
    "url": "assets/js/16.c96220f1.js",
    "revision": "2ba4bff100e8484925f4a07356db2ccb"
  },
  {
    "url": "assets/js/17.20002e33.js",
    "revision": "639eb9dd167e4fa16cd965e12293ab4f"
  },
  {
    "url": "assets/js/18.065750c3.js",
    "revision": "94c761fefa4bc78cff3bc0d79e54ce14"
  },
  {
    "url": "assets/js/19.a2192d87.js",
    "revision": "cf194863dbe34982b3d5d896fc063fef"
  },
  {
    "url": "assets/js/20.f30ff517.js",
    "revision": "535a406e894b7cfba909716290a8850d"
  },
  {
    "url": "assets/js/21.6542e6f8.js",
    "revision": "20f79267ba861d1336215352ef9cd815"
  },
  {
    "url": "assets/js/22.167c0382.js",
    "revision": "9b7faccc2446e7e55b674c753ec8ee35"
  },
  {
    "url": "assets/js/23.9d79c02e.js",
    "revision": "91dcccfa5c1dec9dfac5f17e0dea9667"
  },
  {
    "url": "assets/js/24.8fd25c30.js",
    "revision": "74a06677161c7534115d96fe50380da4"
  },
  {
    "url": "assets/js/25.bedb9347.js",
    "revision": "fe7e15ec1d7a51eb0139c4f581c96447"
  },
  {
    "url": "assets/js/app.a9f7fd83.js",
    "revision": "8a9ab48a6a550c0af413aec2d8d2c4bc"
  },
  {
    "url": "assets/js/layout-Layout.1d76618d.js",
    "revision": "245221a60bde0e74e02b7dae21c3fe54"
  },
  {
    "url": "assets/js/layout-NotFound.daaf6ed2.js",
    "revision": "e74c8ea991ac8aed66372ed0eb30f564"
  },
  {
    "url": "assets/js/page-07fa8526.59a36419.js",
    "revision": "47ad733c8ee1a727e55d0c2cde9305b7"
  },
  {
    "url": "assets/js/page-1301ab8a.ec668ee9.js",
    "revision": "f49220b4e6499123a9fad2609beaa185"
  },
  {
    "url": "assets/js/page-2037549c.e2ae5cbc.js",
    "revision": "c59684903b3e399ad5e1e6137495393d"
  },
  {
    "url": "assets/js/page-22954010.e628a644.js",
    "revision": "f9a345e54d708aca2a7916358d9cf6ab"
  },
  {
    "url": "assets/js/page-25b298b6.d883db69.js",
    "revision": "21d48e5b931df986fb17b0e988be984a"
  },
  {
    "url": "assets/js/page-3c041b9e.b82a1a8a.js",
    "revision": "c89c9de38517736b41393c081d8e3dbc"
  },
  {
    "url": "assets/js/page-65eaf5e4.c211736c.js",
    "revision": "24eac11ee08b24629cc8f2da8997e162"
  },
  {
    "url": "assets/js/page-7205f0b4.816266e3.js",
    "revision": "a3566955a410b6c6b120444e4838cdd9"
  },
  {
    "url": "assets/js/page-a2896314.2cafa226.js",
    "revision": "2b8366c4b39d1bdb0c1031cd66f87228"
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
    "url": "assets/js/vendors~layout-Layout.a2606cbc.js",
    "revision": "e8a7c32b75931228e49608da2aed174b"
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
    "revision": "591af50ef0c8d7d3898e58d733150f7f"
  },
  {
    "url": "doc/index.html",
    "revision": "5426eed774a23f0fa85afc437ee2c8c3"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3441b546c5412b19c21a7233aba0f07b"
  },
  {
    "url": "guide/team/index.html",
    "revision": "4c0558ddcd0d838557c615dca0328028"
  },
  {
    "url": "index.html",
    "revision": "7fdfb57381f87ebc1cfda62af2ae5cce"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "80099ff9d07a83c343ec2c15fb490cf2"
  },
  {
    "url": "product/index.html",
    "revision": "bc8acd556b59f8d713ec3e920434547c"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "fb236b4565068beda5d759184d8ffec1"
  },
  {
    "url": "py-list/index.html",
    "revision": "bb7cd66ea07edf3a6a1f6f1bef62d094"
  },
  {
    "url": "resources/index.html",
    "revision": "50e10803893850e3eda8876e9475891d"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "20fc0c85a838b603dddfcc61ded92e0c"
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
