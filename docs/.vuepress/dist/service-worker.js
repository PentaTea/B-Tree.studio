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
    "revision": "1fc743e50e402c122c01d3e43fe723aa"
  },
  {
    "url": "assets/css/0.styles.aeaea17d.css",
    "revision": "6c6b1905a02f00d9b5d8a6122c4d4713"
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
    "url": "assets/img/wechat-pay.396d5c84.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
  },
  {
    "url": "assets/js/15.ae0b2143.js",
    "revision": "e91d76e448c32306e6d865ae01d2ca88"
  },
  {
    "url": "assets/js/16.3822e9a9.js",
    "revision": "7b17fa2c41e72588a06445f9578dcfab"
  },
  {
    "url": "assets/js/17.8e5e288b.js",
    "revision": "972d9ecfb65c5d803b0dce63ccf20d4f"
  },
  {
    "url": "assets/js/18.a65165d0.js",
    "revision": "4891b599db39f68c11c637990b5af415"
  },
  {
    "url": "assets/js/19.c983b851.js",
    "revision": "7577b0cef32059cdcaeb9654b05a248e"
  },
  {
    "url": "assets/js/20.fcbb4ef0.js",
    "revision": "fc7ef5c06a84c132658fd52c2eb827aa"
  },
  {
    "url": "assets/js/21.8e152790.js",
    "revision": "8e37219f0e0ae1d96334ccd852cff1e1"
  },
  {
    "url": "assets/js/22.11650a95.js",
    "revision": "e1202728d6c317df0b95d151abb7d47d"
  },
  {
    "url": "assets/js/23.0c8efc0e.js",
    "revision": "d0a1aa03963ebc01f46cce8ec81d8997"
  },
  {
    "url": "assets/js/app.a4bbd763.js",
    "revision": "b8ab179ab94b6bddb93f164117f79058"
  },
  {
    "url": "assets/js/layout-Layout.a5ce240d.js",
    "revision": "8ae6e5412f2f0edcdbab116291a8e4bb"
  },
  {
    "url": "assets/js/layout-NotFound.83011044.js",
    "revision": "60c7e4dc8ea573b00f2111c58f51d3ff"
  },
  {
    "url": "assets/js/page-07fa8526.d190db8f.js",
    "revision": "87c4eacb0e83242edf5fce49cdcb0f1b"
  },
  {
    "url": "assets/js/page-1301ab8a.9da90e91.js",
    "revision": "745ae7d64472dd0cdd1f1d251bc64eb4"
  },
  {
    "url": "assets/js/page-2037549c.89a33830.js",
    "revision": "316dfdf0351be4f8fc00278930012232"
  },
  {
    "url": "assets/js/page-25b298b6.c4db2f8a.js",
    "revision": "68c6fbeda2b33c3577938dc0ebb3c941"
  },
  {
    "url": "assets/js/page-3c041b9e.740e1272.js",
    "revision": "96697a93989d385cf6449ca998912198"
  },
  {
    "url": "assets/js/page-65eaf5e4.ed1e0b9f.js",
    "revision": "9b8026d89abd575bd5d28fc7a596799a"
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
    "url": "assets/js/page-a7e2470e.bab346ff.js",
    "revision": "a47207d24a8f58baaa130788eb3b4925"
  },
  {
    "url": "assets/js/page-e4dfaf94.1f6732c5.js",
    "revision": "9cb7ce4590b790f47f54093e8466f6bc"
  },
  {
    "url": "assets/js/vendors~layout-Layout.e94eefeb.js",
    "revision": "f66807b5096a444d303157a8cc173134"
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
    "revision": "a38c20fedb427814251002a7afb82407"
  },
  {
    "url": "doc/index.html",
    "revision": "8b53bf552199c1f3ed4cff2ac421f7ca"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "88ce6e49c4d22fb90f9c23e63c3ede58"
  },
  {
    "url": "guide/team/index.html",
    "revision": "049a6ecf0d3afead884321ee77b53923"
  },
  {
    "url": "index.html",
    "revision": "7d521754401036c7bdc17ac642529830"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "4988c1996b5f349dca83c2241bd5ced2"
  },
  {
    "url": "product/index.html",
    "revision": "1850c91813879a08bfc9f28bed18899f"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "ad896517bc960ee2633bf83344fbbfb7"
  },
  {
    "url": "resources/index.html",
    "revision": "6d9f017307176eec69eb72474e3357ad"
  },
  {
    "url": "support/index.html",
    "revision": "f473508eb432f050e3c3cb34768f9be5"
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
