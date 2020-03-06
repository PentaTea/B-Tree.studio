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
    "revision": "80cad96a019d5a62f2b4dc807ab46c36"
  },
  {
    "url": "assets/css/0.styles.15ec0b0f.css",
    "revision": "88c2eed27d409668337d8d54f67dd37a"
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
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/14.11a44362.js",
    "revision": "9354733259e4ae314255c21e9f20a4f0"
  },
  {
    "url": "assets/js/15.dd60868f.js",
    "revision": "785a9a21edf1a471cc4a84e5e70648ab"
  },
  {
    "url": "assets/js/16.47eb1bdc.js",
    "revision": "0863a5357f81fa903d8c3093190243d0"
  },
  {
    "url": "assets/js/17.6e602054.js",
    "revision": "5a41981b9a1c46546aad82af6eb856e3"
  },
  {
    "url": "assets/js/18.68966528.js",
    "revision": "8cb74283e74d01ed12983f6a41e8c1b6"
  },
  {
    "url": "assets/js/19.7d2963d1.js",
    "revision": "701c4ff4a53179a834ea5d9417630147"
  },
  {
    "url": "assets/js/20.84994a9e.js",
    "revision": "53ea70253da9be5de93bdca3debef7b1"
  },
  {
    "url": "assets/js/app.5ed04216.js",
    "revision": "bee48ea0f812152213b518ac9b0990c5"
  },
  {
    "url": "assets/js/layout-Layout.c4281ee5.js",
    "revision": "735dcaa79a2051cf48d9fc963e5d8c07"
  },
  {
    "url": "assets/js/layout-NotFound.1408db16.js",
    "revision": "180c427a531bdda811d6f8a50236852a"
  },
  {
    "url": "assets/js/page-07fa8526.194b9257.js",
    "revision": "814a88d73de6489fd698b9f33726a426"
  },
  {
    "url": "assets/js/page-1301ab8a.06a71c33.js",
    "revision": "d88523b1f1679d2a18e763a4ef7c8bdd"
  },
  {
    "url": "assets/js/page-2037549c.ae9e6c51.js",
    "revision": "43116c9175acb10e62283feb9f1aceb0"
  },
  {
    "url": "assets/js/page-25b298b6.e51b6fc5.js",
    "revision": "7e5a5d3bc4112f42cda093b31b6b3e89"
  },
  {
    "url": "assets/js/page-3c041b9e.db093be1.js",
    "revision": "6e17c9bd372ffa3ffc3e0b35210e5b67"
  },
  {
    "url": "assets/js/page-65eaf5e4.21d29aa3.js",
    "revision": "ae967217a17f35cd45a9e80a3016f8ae"
  },
  {
    "url": "assets/js/page-a2896314.fa4c305e.js",
    "revision": "d3c8055924b2698a53772b7557f6b832"
  },
  {
    "url": "assets/js/page-a7e2470e.7fde1bb7.js",
    "revision": "1f6a427ba4f8bdf3174ba1d736828cb6"
  },
  {
    "url": "assets/js/page-e4dfaf94.bd4c647e.js",
    "revision": "c8f082c5b3f7ee27ae74ef168edaa1ce"
  },
  {
    "url": "assets/js/vendors~layout-Layout.35400599.js",
    "revision": "d64cbb0aa36dec91406cd20c49cc7734"
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
    "url": "doc/index.html",
    "revision": "06e3649b3225b004fe0253ff9921d737"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "23713a645a3d5c1672ae66b5057ba056"
  },
  {
    "url": "guide/team/index.html",
    "revision": "2a5fc4388eee7fe09e7b8371a35c8b67"
  },
  {
    "url": "index.html",
    "revision": "6c6fe0dc7ef248940c8fe6d28d2ca097"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "aab0f72a57ae67e599b376d15d621efd"
  },
  {
    "url": "product/index.html",
    "revision": "f9e37b62aed53992f69f179c56db35a2"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "88e0c196111ae5fdad91fc96fb03615c"
  },
  {
    "url": "resources/index.html",
    "revision": "2bbbd75a2e1677e9ce8a22597898f5ea"
  },
  {
    "url": "support/index.html",
    "revision": "80b3134fd35defbedf8bedca3bcc9a29"
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
