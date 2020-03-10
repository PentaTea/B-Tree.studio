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
    "revision": "c940c1fabcad0be8de95a481664e1cf2"
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
    "url": "assets/js/15.e72c7b62.js",
    "revision": "d3192ceb0cc860ff3f97e94568827d4c"
  },
  {
    "url": "assets/js/16.5d41fde3.js",
    "revision": "d9da467f5d4ebafb3bca9348e719a38e"
  },
  {
    "url": "assets/js/17.deea3128.js",
    "revision": "8ba0d3aa4fb47d676c17ff0557af5a4d"
  },
  {
    "url": "assets/js/18.ec1518c6.js",
    "revision": "ff0736987927099961f37f489d566643"
  },
  {
    "url": "assets/js/19.07c73080.js",
    "revision": "e0f06c806f5bab7e293f89b6ca9a1d95"
  },
  {
    "url": "assets/js/20.bb56fed3.js",
    "revision": "2cdea8538542286703c09d9572bf0df0"
  },
  {
    "url": "assets/js/21.35eeb57e.js",
    "revision": "9a36625a4b5f6cd8dc6d6fa29757eec6"
  },
  {
    "url": "assets/js/22.b52d3dd5.js",
    "revision": "24f618f603980411cee5b916e8747b73"
  },
  {
    "url": "assets/js/app.e82b755f.js",
    "revision": "038511c4e54e3634a8364168754711a3"
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
    "url": "assets/js/page-07fa8526.f112222a.js",
    "revision": "3a3bf70fa10a4b923da113326568a1ff"
  },
  {
    "url": "assets/js/page-1301ab8a.559c6a1b.js",
    "revision": "9b168c1b63af15c9fed6f6cbc6418a86"
  },
  {
    "url": "assets/js/page-2037549c.104b22d5.js",
    "revision": "1b0e3f6e679394b4485826cf9f3f45a8"
  },
  {
    "url": "assets/js/page-25b298b6.b08cca5d.js",
    "revision": "287a0f12007c263e09bb82e308d6806b"
  },
  {
    "url": "assets/js/page-3c041b9e.c0375f6b.js",
    "revision": "ca773c41cb87358730aaf867e4536644"
  },
  {
    "url": "assets/js/page-65eaf5e4.a0eb4b00.js",
    "revision": "fcc841a9a888aca9b9901abc8825ace2"
  },
  {
    "url": "assets/js/page-7205f0b4.04c9207c.js",
    "revision": "2df3eb611907fe7cd27779c3fbb53e7c"
  },
  {
    "url": "assets/js/page-a2896314.4511e701.js",
    "revision": "bf7e217a924b00d01ed246e650606a2b"
  },
  {
    "url": "assets/js/page-a7e2470e.f3bd1cb0.js",
    "revision": "854d3c2f64da15b058c083c6d1ba2266"
  },
  {
    "url": "assets/js/page-e4dfaf94.bd2c8dc0.js",
    "revision": "43d6f5e3c71df0b6b77ad6fa141ac862"
  },
  {
    "url": "assets/js/vendors~layout-Layout.24ca2b10.js",
    "revision": "d1829d954987e37581a4675f5c8c45ea"
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
    "revision": "2aae97d0121ad40bfb1da33dcc09c7e8"
  },
  {
    "url": "doc/index.html",
    "revision": "7512a9eae9f9e1243276eaf5e1dc8cb3"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "4eacda2a41d19470b8637cbeee0e79d2"
  },
  {
    "url": "guide/team/index.html",
    "revision": "594eb475b172cae8c70b77102fce85dc"
  },
  {
    "url": "index.html",
    "revision": "58029179a1008896f5c1d622e77f54d8"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "c553d87a0b779716839a111331d2b27a"
  },
  {
    "url": "product/index.html",
    "revision": "cad51976efb376aad9503487d71eac14"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "3ccdf96f6ca6bf39af87dedb00e20e50"
  },
  {
    "url": "resources/index.html",
    "revision": "049a332f1df943345cedf42a49287028"
  },
  {
    "url": "support/index.html",
    "revision": "4158622f2329325f1b36c4d47cc42134"
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
