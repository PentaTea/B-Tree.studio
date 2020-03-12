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
    "revision": "997c3356e382b49a4b4cafda0f1dd5dd"
  },
  {
    "url": "assets/css/0.styles.0eeed024.css",
    "revision": "65637e9e6d9f8f21177fc2f68811e9cf"
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
    "url": "assets/js/app.f624bb56.js",
    "revision": "9ed8a4d3823dd2e3a0a5d1ce8a937400"
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
    "url": "assets/js/page-07fa8526.dba6a6e2.js",
    "revision": "964e5f56fa9fe0f320bd73c38eaf794e"
  },
  {
    "url": "assets/js/page-1301ab8a.f45bd51f.js",
    "revision": "05c5a3e38e1bdfe1c3b306fd0d2a2b3f"
  },
  {
    "url": "assets/js/page-2037549c.ddaf1410.js",
    "revision": "d1c83299acd2b6dcb3fc9dcc30dddbea"
  },
  {
    "url": "assets/js/page-25b298b6.824234c5.js",
    "revision": "48fee1e1f590a5b2962f6925b8472698"
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
    "url": "assets/js/page-7205f0b4.30f79cb0.js",
    "revision": "869fb9c79d153566d9a1960509b7f0c1"
  },
  {
    "url": "assets/js/page-a2896314.5745c975.js",
    "revision": "398012f5711895948b8493a5b33e4bc2"
  },
  {
    "url": "assets/js/page-a7e2470e.52766756.js",
    "revision": "ac08179a9e67f809fe2058fac7c285b3"
  },
  {
    "url": "assets/js/page-e4dfaf94.00815078.js",
    "revision": "b52120268321d327153b76de14cd20de"
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
    "revision": "4fe0b72a759066e2fdb69e2f240c3400"
  },
  {
    "url": "doc/index.html",
    "revision": "e67c1b8f869e85861c24922990034bfa"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "ae1a7cb09c017250f9b740128973ed84"
  },
  {
    "url": "guide/team/index.html",
    "revision": "808c936cdcaf9cd6ce64433e3542cbde"
  },
  {
    "url": "index.html",
    "revision": "750a0feed79d448c2fc3ef52895886b1"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "0e88a0bceb933cbb56a3f7a266dec8b0"
  },
  {
    "url": "product/index.html",
    "revision": "078156f58daed0faec86dc4ceab71892"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "6bcf3cb7a393e863e9a4c3955034e873"
  },
  {
    "url": "resources/index.html",
    "revision": "a6e62f6cea73027795912ae92429c2b8"
  },
  {
    "url": "support/index.html",
    "revision": "d6287eb1c259bd38c2b6670015afda5a"
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
