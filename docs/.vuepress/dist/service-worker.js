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
    "revision": "9ab8a5f835b7e7805cdce11b08a77571"
  },
  {
    "url": "assets/css/0.styles.aaec4f5f.css",
    "revision": "a9893132f0761338be64cc4b141f9f39"
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
    "url": "assets/js/15.c08ec772.js",
    "revision": "010f030085df0b367b866f1b19920d04"
  },
  {
    "url": "assets/js/16.c674bbcb.js",
    "revision": "56802e0ecc2cc2ec4752c8f9624838aa"
  },
  {
    "url": "assets/js/17.defbe0d0.js",
    "revision": "427ab20b379e17cbd11d70d03ed01f9e"
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
    "url": "assets/js/20.c4db002d.js",
    "revision": "656fbbef0a1c09dfeefdb7fe16ac4cff"
  },
  {
    "url": "assets/js/21.14c0603f.js",
    "revision": "d38330e13f49e53e61aaa7faf3a4b1b2"
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
    "url": "assets/js/app.29b18ab5.js",
    "revision": "ad410818de71dd1e84c04197795a3a4e"
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
    "revision": "21f62bbba6cd720730d0456e91f3847b"
  },
  {
    "url": "doc/index.html",
    "revision": "fa0f4eb6d5e30d64062604363234dd7e"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "d4cbe875a21b7802cafd9781e85c50ae"
  },
  {
    "url": "guide/team/index.html",
    "revision": "a8eb72f205615cc0c9c7e47d4af1d03b"
  },
  {
    "url": "index.html",
    "revision": "d340ee9d4e0be048f79e79f637da35d4"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "b76fd6a33c09ed4d13b63fc5e4d487ad"
  },
  {
    "url": "product/index.html",
    "revision": "a2c4686fba6860b62cd0ea42c4e9eea3"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "9a22ee205dc37ce1074a31e10ee68a2b"
  },
  {
    "url": "resources/index.html",
    "revision": "a12ef41090cae215691f4aad1a4dba65"
  },
  {
    "url": "support/index.html",
    "revision": "afc626de48edbb3a874a6dda92e99e7a"
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
