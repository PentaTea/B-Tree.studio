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
    "revision": "ff000487d8778f5de87509d5f760b819"
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
    "url": "assets/js/app.c222be5e.js",
    "revision": "0762589ff000de86839714a60a2faa51"
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
    "url": "assets/js/page-1301ab8a.e2b16721.js",
    "revision": "ea0962dc6c97019ffa4fb1f9cf16c576"
  },
  {
    "url": "assets/js/page-2037549c.6b683b60.js",
    "revision": "3ef41c171be7bdf17a2a878a67e96057"
  },
  {
    "url": "assets/js/page-25b298b6.824234c5.js",
    "revision": "48fee1e1f590a5b2962f6925b8472698"
  },
  {
    "url": "assets/js/page-3c041b9e.714bdddd.js",
    "revision": "c2ba7ca408cf37670e455fadd3020345"
  },
  {
    "url": "assets/js/page-65eaf5e4.fa6e9a29.js",
    "revision": "98471742a39b462251995fc09d5829fe"
  },
  {
    "url": "assets/js/page-7205f0b4.7bbc157a.js",
    "revision": "d56583bbd4586204f4c8b1af35db25cb"
  },
  {
    "url": "assets/js/page-a2896314.75d430da.js",
    "revision": "60deafc119628836bbe4b0c54d6d754f"
  },
  {
    "url": "assets/js/page-a7e2470e.12240811.js",
    "revision": "c8b6db2b581b0d835c3dee1be5afdece"
  },
  {
    "url": "assets/js/page-e4dfaf94.765b329b.js",
    "revision": "9f380ac071f19ef53cce0ee00e663c27"
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
    "revision": "a08cc691040f4a7245a6fefe3397c280"
  },
  {
    "url": "doc/index.html",
    "revision": "8d49c6ec1cce57d6b243cecdc35ff8aa"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "91d6447effa34c9af286243f435b1afb"
  },
  {
    "url": "guide/team/index.html",
    "revision": "babf25b939ec91dfac07bbd73de1e05f"
  },
  {
    "url": "index.html",
    "revision": "4915d8f31543ea533ccc3cbcc9297512"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "b5c81cf3df978d2ddd78e22d9b1d0b3c"
  },
  {
    "url": "product/index.html",
    "revision": "4e3356bf585f8361d617e0fd12345ad3"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "d9b5f220f49d490cd203b4e0f80d8c99"
  },
  {
    "url": "resources/index.html",
    "revision": "ba51130a7924780fe4ea86c5ce82ed17"
  },
  {
    "url": "support/index.html",
    "revision": "75b6886432f392f52f970c033388419f"
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
