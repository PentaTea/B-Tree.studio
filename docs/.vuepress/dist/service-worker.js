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
    "revision": "7826c1c042763a577bc2ed9813c9733b"
  },
  {
    "url": "assets/css/0.styles.8cee4712.css",
    "revision": "70e19f5185d069bc7e4396671d34aa1b"
  },
  {
    "url": "assets/fonts/element-icons.535877f5.woff",
    "revision": "535877f50039c0cb49a6196a5b7517cd"
  },
  {
    "url": "assets/fonts/element-icons.732389de.ttf",
    "revision": "732389ded34cb9c52dd88271f1345af9"
  },
  {
    "url": "assets/img/0.1e3551cd.svg",
    "revision": "1e3551cd00e4d875193b7daffc349413"
  },
  {
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
  },
  {
    "url": "assets/img/bottom.95e5f061.png",
    "revision": "95e5f061d05e955301855c38d92de840"
  },
  {
    "url": "assets/img/pcbruler.png",
    "revision": "b020907e22abf24cb7e27a2c0370d8b2"
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
    "url": "assets/img/top.b435c144.png",
    "revision": "b435c14401b5c99a6c93c505b38b492f"
  },
  {
    "url": "assets/js/1.2ebe4dce.js",
    "revision": "409fe1117b89b5ac32ae77b03cf92bf8"
  },
  {
    "url": "assets/js/16.f1c17f31.js",
    "revision": "9512d573dd2feaff4846b0e97e4ca1c3"
  },
  {
    "url": "assets/js/17.28005eae.js",
    "revision": "fa7a3be2a835439e7f07aef772a628c5"
  },
  {
    "url": "assets/js/18.25268e2f.js",
    "revision": "42ec80b4d2109335d4093ab3a38ba9d3"
  },
  {
    "url": "assets/js/19.9e0cfc4e.js",
    "revision": "0eb16bb1926994c2300b1cd52faaad88"
  },
  {
    "url": "assets/js/20.f30bd19f.js",
    "revision": "5324dac83fc78d63c966856a71eb9b95"
  },
  {
    "url": "assets/js/21.d5ba5d68.js",
    "revision": "dc39688f49bdf1a6070d4761e4756df1"
  },
  {
    "url": "assets/js/22.4a7019d5.js",
    "revision": "d26144b66dc8b4b8fba7312b3696c53b"
  },
  {
    "url": "assets/js/23.bbe82dd5.js",
    "revision": "b54c08b485d397d4ca785f96b9cb31ff"
  },
  {
    "url": "assets/js/24.1bf605c0.js",
    "revision": "6935caf4886d42dac1031b50f0ce3e56"
  },
  {
    "url": "assets/js/25.362f9ff1.js",
    "revision": "36816b379820ffb0840e99f64daac02b"
  },
  {
    "url": "assets/js/26.e4c7312d.js",
    "revision": "e1a381af31a921732c65cfb388a7ce35"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.e93c151e.js",
    "revision": "bd09c2753ea984cba9b6ce3b8f04cca9"
  },
  {
    "url": "assets/js/layout-Layout.dbbbf8e2.js",
    "revision": "fe2c706ce4f32019034a603918635e7a"
  },
  {
    "url": "assets/js/layout-NotFound.9ac4d0e6.js",
    "revision": "c2b77227a46a592252048783c4908306"
  },
  {
    "url": "assets/js/page-1301ab8a.5240531a.js",
    "revision": "8b4f9fc4ec32b606ad58f928455c95d8"
  },
  {
    "url": "assets/js/page-142fd774.769a751c.js",
    "revision": "7a13c88d218be2c8c7da828d23031c1d"
  },
  {
    "url": "assets/js/page-2037549c.880a86ab.js",
    "revision": "6f87655ec570010625c533f62a0450f8"
  },
  {
    "url": "assets/js/page-22954010.310493c1.js",
    "revision": "48cea01173a3e5298bc92fdec49dd685"
  },
  {
    "url": "assets/js/page-25b298b6.5a995012.js",
    "revision": "b7d5af4865339371495286ae76c3cfe3"
  },
  {
    "url": "assets/js/page-3c041b9e.d4a0fb8d.js",
    "revision": "85b90d1926840f2836253d5169cf442a"
  },
  {
    "url": "assets/js/page-65eaf5e4.2eece479.js",
    "revision": "279766432f9c6c0052bd489e3993fa36"
  },
  {
    "url": "assets/js/page-7205f0b4.e40311c2.js",
    "revision": "f1881c73b79b612f2f77ff9f34f2f5e7"
  },
  {
    "url": "assets/js/page-e4dfaf94.f6428fad.js",
    "revision": "16cff9fe1df3862f5d346997ea190e35"
  },
  {
    "url": "assets/js/page-fd1ee6b4.933463fc.js",
    "revision": "bb9256556899038d0400102585cb59d2"
  },
  {
    "url": "assets/js/vendors~layout-Layout.9c274e2f.js",
    "revision": "0fdeb1473781e8e67a6d884128893dc1"
  },
  {
    "url": "assets/svg/PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "assets/svg/PCBRuler.svg",
    "revision": "0210ace36bdd454de56380f92b8a39d3"
  },
  {
    "url": "b-tree-logo.svg",
    "revision": "8e1e1b4e31f53fd7a3f0a8f450f23e08"
  },
  {
    "url": "baidu_verify_Tw5hfGgVIE.html",
    "revision": "2ec3d8c062cf6196bc39ca0b61557752"
  },
  {
    "url": "blog/index.html",
    "revision": "ef0a9b0ce65ed1e027fce320ab68c4a5"
  },
  {
    "url": "doc/index.html",
    "revision": "6206cb36fd2f4b3daa7528d4dd62239d"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "820eb2aa549f6579fa55ba2f598cb705"
  },
  {
    "url": "guide/index.html",
    "revision": "67f5f73f22e9cc4fcaac08038157202e"
  },
  {
    "url": "guide/team/index.html",
    "revision": "7db01d17a22c24d4871c7556cb22e99b"
  },
  {
    "url": "index.html",
    "revision": "664252814eb575dcc12a20403563ffc6"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "090b4b3cf8b1ab2501270937edc5b90e"
  },
  {
    "url": "py-list/index.html",
    "revision": "7f75ecfae5215eb4f87a8f47e84b6331"
  },
  {
    "url": "resources/index.html",
    "revision": "cb8ecaff468a5fa5c46bf9ed6a055287"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "76c87b607b739f1ff75c3f481b907af3"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
