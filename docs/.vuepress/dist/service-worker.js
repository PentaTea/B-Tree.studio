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
    "revision": "76caa268c177152aaf38dc72f128b54d"
  },
  {
    "url": "assets/css/0.styles.4d88a933.css",
    "revision": "e8a2c839d90ac3d81a0e7a7a302a1647"
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
    "url": "assets/js/16.216f3633.js",
    "revision": "433568f297310756a102a7558a6f4d48"
  },
  {
    "url": "assets/js/17.11393209.js",
    "revision": "5ec53279c6920b44bcdae803bd45e64c"
  },
  {
    "url": "assets/js/18.c7ef4683.js",
    "revision": "2048a50a1db31f45a5fd02f3b9477982"
  },
  {
    "url": "assets/js/19.6a447bb2.js",
    "revision": "019792897a3934b8d33141ef04722cc2"
  },
  {
    "url": "assets/js/20.03d382e3.js",
    "revision": "f5e8ed5a2ef66eebf37f414e09a516ba"
  },
  {
    "url": "assets/js/21.669d2c7a.js",
    "revision": "57e3a056ada086e916bee14c51707441"
  },
  {
    "url": "assets/js/22.7e4afcb6.js",
    "revision": "df6d10719056f55730b0aa3b8b4ed575"
  },
  {
    "url": "assets/js/23.a1e0ba0c.js",
    "revision": "60131c3c241bce794cc4de4834f4c93a"
  },
  {
    "url": "assets/js/24.8fd25c30.js",
    "revision": "74a06677161c7534115d96fe50380da4"
  },
  {
    "url": "assets/js/25.7d7e8b03.js",
    "revision": "2b9176c85e00021b7e2c6afcd080c016"
  },
  {
    "url": "assets/js/app.c6f8dcbd.js",
    "revision": "343d30173ab9abf74600c3c9a6248cf0"
  },
  {
    "url": "assets/js/layout-Layout.84256212.js",
    "revision": "53df0e90331e708ecef8554833afe15e"
  },
  {
    "url": "assets/js/layout-NotFound.daaf6ed2.js",
    "revision": "e74c8ea991ac8aed66372ed0eb30f564"
  },
  {
    "url": "assets/js/page-07fa8526.19a5ab1e.js",
    "revision": "57fa2b0b731a1c2258ec690bee521758"
  },
  {
    "url": "assets/js/page-1301ab8a.e5d1416d.js",
    "revision": "a88ad32724676a9ee4ab9e1ad1c4ca19"
  },
  {
    "url": "assets/js/page-2037549c.1a02d80a.js",
    "revision": "f700603969514ef2416e95dd4dd9f4f0"
  },
  {
    "url": "assets/js/page-22954010.bc21e623.js",
    "revision": "dd0d2361f4c5bcfe29d3e135701836e2"
  },
  {
    "url": "assets/js/page-25b298b6.53c48cde.js",
    "revision": "d7e17bbc6f7c662fd7154e04601ddd6c"
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
    "url": "assets/js/page-7205f0b4.d53b418f.js",
    "revision": "18ecd94365612a6303040fa0ef88f8ba"
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
    "url": "assets/js/page-e4dfaf94.71a82ebc.js",
    "revision": "dd93ce0ebd490afb7ea5e30f4efb56a0"
  },
  {
    "url": "assets/js/vendors~layout-Layout.48afab6a.js",
    "revision": "bc1966444ca06702de9933d09c1cc77b"
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
    "revision": "d3591cea093968f1dfd117aaed5d4e97"
  },
  {
    "url": "doc/index.html",
    "revision": "70c3bf0ac2df0810c24ed529b3bf79ee"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "3352318e380c493c3c001b3ba6065d24"
  },
  {
    "url": "guide/team/index.html",
    "revision": "1061e165d4dce3737899396434901f6f"
  },
  {
    "url": "index.html",
    "revision": "c3dc7f242715cf68b11758b57f55cf03"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "70c64e74eb3a91238aa566aa322dda1c"
  },
  {
    "url": "product/index.html",
    "revision": "a14f65320c7a32b08520f93a574f32ab"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "fb8647985c93c7c380a1d1d55640d2d3"
  },
  {
    "url": "py-list/index.html",
    "revision": "91e9abf69bf10b4007030b85990a5e5a"
  },
  {
    "url": "resources/index.html",
    "revision": "f6c5e7a9e92dd80713b0c52cbae11667"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "0b24b349b9368612c6b6cb8959bebe21"
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
