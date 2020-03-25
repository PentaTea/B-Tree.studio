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
    "revision": "d4807ea3a5136fbbbf447c215a998753"
  },
  {
    "url": "assets/css/0.styles.881aec39.css",
    "revision": "c3440ab86f326934307913ca5caded4f"
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
    "url": "assets/js/16.78109c92.js",
    "revision": "be165581d7ce0f82af93f59583992692"
  },
  {
    "url": "assets/js/17.e3f6d686.js",
    "revision": "93e3e2feed3025cc9353ee83aa10889e"
  },
  {
    "url": "assets/js/18.14dbd712.js",
    "revision": "c8f4add400fab0483432f5801e1433bf"
  },
  {
    "url": "assets/js/19.0f58fccc.js",
    "revision": "261eb2d63aed4511ab578ebfeb918381"
  },
  {
    "url": "assets/js/20.97f5c3a8.js",
    "revision": "33d65c821b1b5a38eb21e65634799946"
  },
  {
    "url": "assets/js/21.05e95a54.js",
    "revision": "2e24b928de71b8edd18cb2b1dc1a75e7"
  },
  {
    "url": "assets/js/22.301ae6ee.js",
    "revision": "dc0d449c9e47abe1e98c3c93d60c4c1e"
  },
  {
    "url": "assets/js/23.c0d133b0.js",
    "revision": "f172df64a09d790dcdd982387c19be48"
  },
  {
    "url": "assets/js/24.8fd25c30.js",
    "revision": "74a06677161c7534115d96fe50380da4"
  },
  {
    "url": "assets/js/25.052d932a.js",
    "revision": "bc2e045ad07437525f65f465202eba39"
  },
  {
    "url": "assets/js/app.64f5bfb2.js",
    "revision": "3de38116b05512d1ee544c999b97d0ec"
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
    "url": "assets/js/page-07fa8526.d3ad5105.js",
    "revision": "4e382d258c833a8fcf28985d3dc841ac"
  },
  {
    "url": "assets/js/page-1301ab8a.56ce7974.js",
    "revision": "f61b96f4460b7093c580a15788455675"
  },
  {
    "url": "assets/js/page-2037549c.7173b655.js",
    "revision": "c85614d45572f56bb47b815eef69c1bb"
  },
  {
    "url": "assets/js/page-22954010.dae887fc.js",
    "revision": "8c076377624799b662b6729c93c0a22f"
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
    "url": "assets/js/page-a7e2470e.e68b298d.js",
    "revision": "19252702aa9b61e49ae8081c18d4f450"
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
    "revision": "ffe286d67b681951c32a15484e7e7b1b"
  },
  {
    "url": "doc/index.html",
    "revision": "3cff51153631b88cc129d80e2c6c852b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "guide/index.html",
    "revision": "326381eb498bdda3f488f4b8611f6a79"
  },
  {
    "url": "guide/team/index.html",
    "revision": "55c33797f3dac9df547834cfd4b83157"
  },
  {
    "url": "index.html",
    "revision": "d2bea3a314c85c2cb517bbe6392e4c7d"
  },
  {
    "url": "PCB_WoodCore_animated.svg",
    "revision": "e11ee26c0f784a94781b6fe4f6f62961"
  },
  {
    "url": "product/某产品/index.html",
    "revision": "4912e1f63234cefe1b65ec56a92684c6"
  },
  {
    "url": "product/index.html",
    "revision": "a047848ba9d5771b0575025529ba41ab"
  },
  {
    "url": "product/WoodCore/index.html",
    "revision": "f91d57bd98c73443e43853ab0441965c"
  },
  {
    "url": "py-list/index.html",
    "revision": "1d3c61c18e2e91b975afdc7ade6138fc"
  },
  {
    "url": "resources/index.html",
    "revision": "0d00b31a59c2511bb7c0a6475bd4d7e8"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "9695f33d354d919a134588246c622325"
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
