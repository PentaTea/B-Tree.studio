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
    "revision": "2b53a43a2e10c6630fb68da442c5954e"
  },
  {
    "url": "assets/css/0.styles.bd352911.css",
    "revision": "5be41c1a930b6cc680b6d58b38fc5184"
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
    "url": "assets/img/词典.jpg",
    "revision": "e302b87847786cc9ab27c1dedd5c00f5"
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
    "url": "assets/js/16.1b1cef7f.js",
    "revision": "5583920e17d5e6a6c6c7ec6473794292"
  },
  {
    "url": "assets/js/17.e3f6d686.js",
    "revision": "93e3e2feed3025cc9353ee83aa10889e"
  },
  {
    "url": "assets/js/18.17200e7d.js",
    "revision": "b73261697b9420b3d74c8efa3c71cdf8"
  },
  {
    "url": "assets/js/19.7d3bff8c.js",
    "revision": "8dc45af8728257c3a189d94d0b684394"
  },
  {
    "url": "assets/js/20.97f5c3a8.js",
    "revision": "33d65c821b1b5a38eb21e65634799946"
  },
  {
    "url": "assets/js/21.96c9c130.js",
    "revision": "77fa2aadd34849f068656bc82edd6157"
  },
  {
    "url": "assets/js/22.301ae6ee.js",
    "revision": "dc0d449c9e47abe1e98c3c93d60c4c1e"
  },
  {
    "url": "assets/js/23.b8a008fc.js",
    "revision": "92313c8d13069d2a40e65a2b56ae4d3a"
  },
  {
    "url": "assets/js/24.8fd25c30.js",
    "revision": "74a06677161c7534115d96fe50380da4"
  },
  {
    "url": "assets/js/25.d1adec04.js",
    "revision": "e26fbe3a096de488d6b366d0f6671cca"
  },
  {
    "url": "assets/js/app.a4307119.js",
    "revision": "c2d04fa27e499a88dac64d8af1b57705"
  },
  {
    "url": "assets/js/layout-Layout.fc7e11a1.js",
    "revision": "e5c2944ea5ad9add2bc0311ec881f4ac"
  },
  {
    "url": "assets/js/layout-NotFound.8d46d767.js",
    "revision": "90d69093c8d9b4b97443806e8bd5486f"
  },
  {
    "url": "assets/js/page-07fa8526.44bb510f.js",
    "revision": "c61eb658df30e28c4ec77ea3f3eb408d"
  },
  {
    "url": "assets/js/page-1301ab8a.b8c68b8b.js",
    "revision": "d2846f1d90abcbb894d8a12e31d9b656"
  },
  {
    "url": "assets/js/page-2037549c.7173b655.js",
    "revision": "c85614d45572f56bb47b815eef69c1bb"
  },
  {
    "url": "assets/js/page-22954010.2c2ecd6a.js",
    "revision": "aa339c2c49725dd2e00eb029119b00d8"
  },
  {
    "url": "assets/js/page-25b298b6.8fb345b8.js",
    "revision": "7fea7bf3f27792585a35b1c4ac758b76"
  },
  {
    "url": "assets/js/page-3c041b9e.06955b7e.js",
    "revision": "d3667f8078726a8c3e47634bc0c62007"
  },
  {
    "url": "assets/js/page-65eaf5e4.fad1d78a.js",
    "revision": "0c1d4f21c209c669023a3829c69ec919"
  },
  {
    "url": "assets/js/page-7205f0b4.549a9041.js",
    "revision": "a10178e7944d05b6827abd0c6002756d"
  },
  {
    "url": "assets/js/page-a2896314.34638b9b.js",
    "revision": "ea71ab4665ee5c7697af25b0e851d9d4"
  },
  {
    "url": "assets/js/page-a7e2470e.bc3ff68b.js",
    "revision": "c0b578a77726c255221151de9f4ad7bc"
  },
  {
    "url": "assets/js/page-e4dfaf94.3483b18d.js",
    "revision": "5b5e686e7b0339874f6ac99d9bf1b64d"
  },
  {
    "url": "assets/js/vendors~layout-Layout.5d583258.js",
    "revision": "234b24cb64cd13d94a84badff509f355"
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
    "revision": "12075877ced4aecad617b4781566bbfb"
  },
  {
    "url": "doc/index.html",
    "revision": "f2e559ba691a783c3fec140c8715a5c4"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "925d96245113f30fe9ac643f9516611a"
  },
  {
    "url": "guide/team/index.html",
    "revision": "fb3027b745cc15dbb4f347f7675fdc61"
  },
  {
    "url": "index.html",
    "revision": "0409ba75927e134f48f9fed8464ca537"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "5c9733116cfb10fafd029460740e47d9"
  },
  {
    "url": "product/index.html",
    "revision": "2eb5b0f068ad0350b2edc8d4df63e4dc"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "2b41438c9190df200fa9cbecba1617e4"
  },
  {
    "url": "py-list/index.html",
    "revision": "c4439ac257366a5c5fe90ec38319edf2"
  },
  {
    "url": "resources/index.html",
    "revision": "2549e7a6561cffcf776c9c9eed334a20"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "61d9c6eb847044311e0d2edd9c0692ee"
  },
  {
    "url": "support/wechat-pay.png",
    "revision": "396d5c8409c3f5498833e33e716797b8"
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
