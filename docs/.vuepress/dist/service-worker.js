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
    "revision": "86908bedc358aae3e59d54bdbe014b25"
  },
  {
    "url": "assets/css/0.styles.4c54f2e8.css",
    "revision": "a3833b6d9f30fe988d85fa992e2bd832"
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
    "url": "assets/js/14.4c69ae7d.js",
    "revision": "50a4eaa5c7f96505308808234fc5bc50"
  },
  {
    "url": "assets/js/15.f474ce9b.js",
    "revision": "32acde6a652e2ca0cb2fa25ba754e4e9"
  },
  {
    "url": "assets/js/16.3d8e25a4.js",
    "revision": "f927daa4c7b5764c92b413466755d7d6"
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
    "url": "assets/js/app.7e43ff45.js",
    "revision": "a88a58dfd478f7730adfebd1af003fc8"
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
    "url": "assets/js/page-07fa8526.05f0e766.js",
    "revision": "0862520997f9a1ec2d877e28a1d47c47"
  },
  {
    "url": "assets/js/page-1301ab8a.200f8c7a.js",
    "revision": "954aa822313646a8ffc8d69ed656d471"
  },
  {
    "url": "assets/js/page-2037549c.62aa6b60.js",
    "revision": "bbee30ae0120b1477ad34c012f475034"
  },
  {
    "url": "assets/js/page-25b298b6.24c12921.js",
    "revision": "12871d18d015d30e5b70b6c7336359e7"
  },
  {
    "url": "assets/js/page-3c041b9e.c0375f6b.js",
    "revision": "ca773c41cb87358730aaf867e4536644"
  },
  {
    "url": "assets/js/page-65eaf5e4.61146cf5.js",
    "revision": "c9fd5bfcbe485e77914d48cbf1e10123"
  },
  {
    "url": "assets/js/page-a2896314.c2077365.js",
    "revision": "0bb7e3c7c829691e91c7ca2300db5a9e"
  },
  {
    "url": "assets/js/page-a7e2470e.559700ec.js",
    "revision": "3c77d203cd8638cf872c2e82ff49243f"
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
    "revision": "1a85bceb29ce6a82516471931e59bbd2"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "79183434868d179d46df4611f96540f2"
  },
  {
    "url": "guide/team/index.html",
    "revision": "84f8cedfbb07569e0e2bbd3312ce0000"
  },
  {
    "url": "index.html",
    "revision": "f1f761c3b783e372e2a23d15e10669a0"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "08412ac0a826afb3ff91fa974ab3e04a"
  },
  {
    "url": "product/index.html",
    "revision": "bd9754de99a7577addbbe2562b527648"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "e2c9024a4ef7ff5f5c3f881e6711b597"
  },
  {
    "url": "resources/index.html",
    "revision": "0c319e4254fc38b0c333e3915f2c2d7a"
  },
  {
    "url": "support/index.html",
    "revision": "a8b1cac0ef64f2251e62bb8e32fffdf3"
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
