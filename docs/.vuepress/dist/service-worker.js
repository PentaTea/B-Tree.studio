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
    "revision": "b7c723ca3383720938dab7237299e405"
  },
  {
    "url": "assets/css/0.styles.d34a4feb.css",
    "revision": "5c12c02e0175ecfadbf0e0981c3982bb"
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
    "url": "assets/js/14.f911be28.js",
    "revision": "feee7cc4fae1e36046204923b357403b"
  },
  {
    "url": "assets/js/15.e9733da1.js",
    "revision": "26c074ee392b1f2aaafdbe56d1fdf952"
  },
  {
    "url": "assets/js/16.5cac99d0.js",
    "revision": "a84666c239bc5e74e4428db3545fc009"
  },
  {
    "url": "assets/js/17.8fc524c1.js",
    "revision": "b5335889dd6e6007695d7e2b3a4dee51"
  },
  {
    "url": "assets/js/18.0e69692f.js",
    "revision": "d433e366de00d5ad73b3a6462a0d4547"
  },
  {
    "url": "assets/js/19.1e248490.js",
    "revision": "882b78f2813d03de2aeae088e6f70d3e"
  },
  {
    "url": "assets/js/20.e40597e1.js",
    "revision": "46f1c8cedeb651d56771c5ddf7319959"
  },
  {
    "url": "assets/js/21.9c07045c.js",
    "revision": "86e25bf9ead6de673716ecfb050db807"
  },
  {
    "url": "assets/js/app.85de334f.js",
    "revision": "ade06e5d9433c2bd0a69c6585677e610"
  },
  {
    "url": "assets/js/layout-Layout.9df51d81.js",
    "revision": "6bbbaa449590c8ae740b33e11270d30d"
  },
  {
    "url": "assets/js/layout-NotFound.afcbf010.js",
    "revision": "682e0430fb8f8aec56cea823beb01dd2"
  },
  {
    "url": "assets/js/page-07fa8526.65980da7.js",
    "revision": "11aaf003931320e6a7a806bdc456ff7e"
  },
  {
    "url": "assets/js/page-1301ab8a.200f8c7a.js",
    "revision": "954aa822313646a8ffc8d69ed656d471"
  },
  {
    "url": "assets/js/page-2037549c.104b22d5.js",
    "revision": "1b0e3f6e679394b4485826cf9f3f45a8"
  },
  {
    "url": "assets/js/page-25b298b6.a7a922d4.js",
    "revision": "32acb3b793220cfb594cdfa7740ffa14"
  },
  {
    "url": "assets/js/page-3c041b9e.1ce297fd.js",
    "revision": "f635fae1606229c4abb97336ff1b61b2"
  },
  {
    "url": "assets/js/page-65eaf5e4.a0eb4b00.js",
    "revision": "fcc841a9a888aca9b9901abc8825ace2"
  },
  {
    "url": "assets/js/page-a2896314.fa4b9cb9.js",
    "revision": "e0cddb8fb24b571e203cb2f32fc6fdc1"
  },
  {
    "url": "assets/js/page-a7e2470e.5e4742b2.js",
    "revision": "ae1c0d54fe09facb2f2016ca0ec9e2fe"
  },
  {
    "url": "assets/js/page-e4dfaf94.54f2ab20.js",
    "revision": "bd3b988ca5881f86e809915cc72b3e80"
  },
  {
    "url": "assets/js/vendors~layout-Layout.1f9f522e.js",
    "revision": "679dd0a4ddb1c7a6370bb3db2609f005"
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
    "revision": "e0ffab2bee1917f9e9e256cf564ed302"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "6d9039fd6f13a7ae165aaaa2ddb807a4"
  },
  {
    "url": "guide/team/index.html",
    "revision": "8b80ab7eec509ad33efa9d52ebdef3ee"
  },
  {
    "url": "index.html",
    "revision": "084a6e5a6acd79e31bb4bfcae2cff134"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "5b0b7a483d940c0be70c6a1c0232f48d"
  },
  {
    "url": "product/index.html",
    "revision": "74eeef9f06614db1f8ff4c04786aec6b"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "ea927fa9df74e8504d1a27e2691c8ab0"
  },
  {
    "url": "resources/index.html",
    "revision": "177e017176957ac5612a199ad204bad2"
  },
  {
    "url": "support/index.html",
    "revision": "fa81feb0ac9a3f13cf19042682228a40"
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
