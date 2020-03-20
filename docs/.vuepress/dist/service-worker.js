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
    "revision": "c4c6ec2eeb1f94c9444c8ad20d4bfeca"
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
    "url": "assets/js/app.5909e75d.js",
    "revision": "3303e988aea9e420463a07a01d327f22"
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
    "url": "assets/js/page-07fa8526.04482dad.js",
    "revision": "e331ad5dc1a1b02bea0e771aeafa44eb"
  },
  {
    "url": "assets/js/page-1301ab8a.0e0a3731.js",
    "revision": "6db7bb907c8b979260e6fbdec9da03ac"
  },
  {
    "url": "assets/js/page-2037549c.a7d21a02.js",
    "revision": "12348cec7af7077965a6a7d4aad1c450"
  },
  {
    "url": "assets/js/page-22954010.e628a644.js",
    "revision": "f9a345e54d708aca2a7916358d9cf6ab"
  },
  {
    "url": "assets/js/page-25b298b6.7f00a03d.js",
    "revision": "01798e6c75c1e4e806842d88e52ebb47"
  },
  {
    "url": "assets/js/page-3c041b9e.bd7d9a9b.js",
    "revision": "7dd36339defaf07093c22d50da913db8"
  },
  {
    "url": "assets/js/page-65eaf5e4.dba10012.js",
    "revision": "80a11331c6c32ce950a3db3b577f6ce1"
  },
  {
    "url": "assets/js/page-7205f0b4.d53b418f.js",
    "revision": "18ecd94365612a6303040fa0ef88f8ba"
  },
  {
    "url": "assets/js/page-a2896314.ee8eb6d0.js",
    "revision": "169c45300bffbd09eed0aaa95e63a4c0"
  },
  {
    "url": "assets/js/page-a7e2470e.399241ad.js",
    "revision": "a8093ea10180abc7f387e3534c118635"
  },
  {
    "url": "assets/js/page-e4dfaf94.71a82ebc.js",
    "revision": "dd93ce0ebd490afb7ea5e30f4efb56a0"
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
    "revision": "249115eaf2fdd92650d097cbdb2e4bef"
  },
  {
    "url": "doc/index.html",
    "revision": "78216fa48cb7e0abf20161b42d1a55f7"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3167138e98bee84912e1a331ca0f548a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "451c14b9321a05d6767cdb1d081b510b"
  },
  {
    "url": "index.html",
    "revision": "db8d7fd7ae67dd6eb5369e5b011004d1"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "a1d44d4dd3073460b901cb87dc5f71a0"
  },
  {
    "url": "product/index.html",
    "revision": "71eb2fe2e1d43d252371b4a872bdd79d"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "3c5e822c6b880ead1d63550153830ae0"
  },
  {
    "url": "py-list/index.html",
    "revision": "df59784eef1dd7e10c5577cf1040379a"
  },
  {
    "url": "resources/index.html",
    "revision": "aa17b4f72fb39deff752bba2dea25a4b"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "e14ae51a5dc39de7e5ef6d9b83aa1df0"
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
