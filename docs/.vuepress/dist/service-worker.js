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
    "revision": "e4189ff78f0acb9148a68018d29ddc8b"
  },
  {
    "url": "assets/css/0.styles.4f7ecfd0.css",
    "revision": "e9d1894fb073ec8812de9b92d329d8d7"
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
    "url": "assets/js/14.31f885d2.js",
    "revision": "174ef33af7b43c5adbc4d990a1e138d7"
  },
  {
    "url": "assets/js/15.e080ef4a.js",
    "revision": "b92d9b758b0c685b7828b00919bbb09f"
  },
  {
    "url": "assets/js/16.59cd5c6b.js",
    "revision": "aa62a93486f39f722cbe7c9af0dfe301"
  },
  {
    "url": "assets/js/17.7150f127.js",
    "revision": "fbbd59a20fa628b87d9c6d8e6143ae86"
  },
  {
    "url": "assets/js/18.978597ed.js",
    "revision": "0c7d193f9481e0e703f17bcdb9459f31"
  },
  {
    "url": "assets/js/19.2984bbaa.js",
    "revision": "e0dd5667bb7f366673f2dff4304299e3"
  },
  {
    "url": "assets/js/app.ad09f381.js",
    "revision": "49792b63ada048fc0553b3cf8438a338"
  },
  {
    "url": "assets/js/layout-Layout.c4b617ec.js",
    "revision": "deaebce5e8adbb4e5ff571231284f77a"
  },
  {
    "url": "assets/js/layout-NotFound.34adb722.js",
    "revision": "e25ba245d5d251366b5eb0071c4b6b8e"
  },
  {
    "url": "assets/js/page-07fa8526.17dc0a0c.js",
    "revision": "325a01bc1f028b4762cbefa939987d3c"
  },
  {
    "url": "assets/js/page-1301ab8a.0cfe8e59.js",
    "revision": "294df59a6fdf38a22c9ae446027390c8"
  },
  {
    "url": "assets/js/page-2037549c.29b9915c.js",
    "revision": "c7d09190edbe2bfef930b430af2ffbc5"
  },
  {
    "url": "assets/js/page-25b298b6.00a2ecf1.js",
    "revision": "c9f2d6f56e5d7ed748788fca3ecb6c71"
  },
  {
    "url": "assets/js/page-3c041b9e.8f8a6b64.js",
    "revision": "e26cdafb1242baf02add0ea07dc8738b"
  },
  {
    "url": "assets/js/page-65eaf5e4.9e9c066f.js",
    "revision": "4926a6554f64c2ce9a18294bbae06ebf"
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
    "url": "assets/js/page-e4dfaf94.dd1d50e1.js",
    "revision": "dc5e7535fff0b8a7101c7beaad3adbdd"
  },
  {
    "url": "assets/js/vendors~layout-Layout.44e93cba.js",
    "revision": "ce0c62b67b0d63ca66ba9d6f2d0bb5a2"
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
    "revision": "4451eab464da78df2bc992a5bde450cc"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "1065ae0e52d8e75c1933ea7362b7a175"
  },
  {
    "url": "guide/team/index.html",
    "revision": "217cc7cc565263924775a75ea63c5f50"
  },
  {
    "url": "index.html",
    "revision": "d4f2d40d914bdb45aa7573981f8d38b3"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "cd07a96830940c3466cb362f2671d956"
  },
  {
    "url": "product/index.html",
    "revision": "568dacbdfb34c098915816ba3c22318e"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "11004b9689d924d0cfd7758f405a7863"
  },
  {
    "url": "resources/index.html",
    "revision": "0dcf37b218f35aaa7bf237d871062844"
  },
  {
    "url": "support/index.html",
    "revision": "ad7d362aed5b1c192533ef2041bea40f"
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
