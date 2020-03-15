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
    "revision": "3bb102724beb730d4e10c145ad3fa830"
  },
  {
    "url": "assets/css/0.styles.758ec2a4.css",
    "revision": "3a8c3e64b4d09c0223000eb1038a0d56"
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
    "url": "assets/js/app.77fcdd4f.js",
    "revision": "0afefea4a9a5950396813a1729f8dce9"
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
    "url": "assets/js/page-07fa8526.ca66e629.js",
    "revision": "0211709e4b70e1e939f740d6a40c7344"
  },
  {
    "url": "assets/js/page-1301ab8a.6e357949.js",
    "revision": "f0f3fa9eab587e962626fda26f324882"
  },
  {
    "url": "assets/js/page-2037549c.89a33830.js",
    "revision": "316dfdf0351be4f8fc00278930012232"
  },
  {
    "url": "assets/js/page-25b298b6.cd8bed96.js",
    "revision": "147c4587b1b9d9ca20bdb320a7e3404f"
  },
  {
    "url": "assets/js/page-3c041b9e.fd45f500.js",
    "revision": "37165d546ab3df4eb09c83a811ee17bd"
  },
  {
    "url": "assets/js/page-65eaf5e4.ffc5108a.js",
    "revision": "8354af95f4fff93a8ef693921cad264d"
  },
  {
    "url": "assets/js/page-7205f0b4.5cd9fcd6.js",
    "revision": "536f0b3828df238e1d4196ed5494a214"
  },
  {
    "url": "assets/js/page-a2896314.d2302b67.js",
    "revision": "edc3721a177ee610aaad22b06a88180d"
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
    "revision": "df7c1c42e5e33521601549202826cb91"
  },
  {
    "url": "doc/index.html",
    "revision": "a748f3038b614adf7c209a5ef7181950"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "b8537eaefb079c96fd65f0ecd5937202"
  },
  {
    "url": "guide/team/index.html",
    "revision": "d4b198eaf80c226299438bf139e42e57"
  },
  {
    "url": "index.html",
    "revision": "44df114c43df2ae4dc866155d46df5a6"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "4e5615a95f5a433788f464634ffa6b5b"
  },
  {
    "url": "product/index.html",
    "revision": "6ece81e94f778602d73b7fe0982130fc"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "325afaa531555cc8c7867a72df51d8c8"
  },
  {
    "url": "resources/index.html",
    "revision": "d19c85349149c6030347242025dc9389"
  },
  {
    "url": "support/index.html",
    "revision": "8e93d0542dbff0092126130da2d607f2"
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
