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
    "revision": "792aaddddb5886b4296465b55ac550dc"
  },
  {
    "url": "assets/css/0.styles.b0ee2157.css",
    "revision": "f9dd876061ed767fe3e70fcdcbf41ee2"
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
    "url": "assets/js/1.3eb00112.js",
    "revision": "d7437d0248e5f1019c95ea3448d14673"
  },
  {
    "url": "assets/js/16.0098c041.js",
    "revision": "1d10f3cade0a0886c3e6dc85a8581c00"
  },
  {
    "url": "assets/js/17.b0b87813.js",
    "revision": "4c152a3a3d5fa22ef0267b1b2ffe8de0"
  },
  {
    "url": "assets/js/18.ed14f3ef.js",
    "revision": "e0ecdedea3eee610df6db463e716e94e"
  },
  {
    "url": "assets/js/19.ba3b1649.js",
    "revision": "1d31c355ccd0824f57903a6489f6d9c6"
  },
  {
    "url": "assets/js/20.7470f01a.js",
    "revision": "02aa1fff6625bd082d0717ba6549effc"
  },
  {
    "url": "assets/js/21.77fa5d93.js",
    "revision": "17559b3678bbe4e400f719a63f932c5a"
  },
  {
    "url": "assets/js/22.1935d36f.js",
    "revision": "f8a70ea4f2bfb57badbb26db6e979bfa"
  },
  {
    "url": "assets/js/23.661e7290.js",
    "revision": "b639ebf17e69609e3422ad4aef471c0f"
  },
  {
    "url": "assets/js/24.041157db.js",
    "revision": "9ba63d9c42d1941767d45e22e8b486b2"
  },
  {
    "url": "assets/js/25.6f80a65e.js",
    "revision": "38ad6d647705f3104648cecdec13bccb"
  },
  {
    "url": "assets/js/26.4ce90b00.js",
    "revision": "b4531dcf4834c4e4c9b7ab7ca614e3ab"
  },
  {
    "url": "assets/js/27.735a1199.js",
    "revision": "3d29084fafc2c891a2391452ef8654dc"
  },
  {
    "url": "assets/js/app.d272e09e.js",
    "revision": "8e423790d7aea63121e13cb9c131793f"
  },
  {
    "url": "assets/js/layout-Layout.b7947204.js",
    "revision": "7d73b094b3f7376cb3127f0d94c5d996"
  },
  {
    "url": "assets/js/layout-NotFound.9ccfc250.js",
    "revision": "f3f711b856868e54d10fe0c9c760aeaa"
  },
  {
    "url": "assets/js/page-1301ab8a.56f0fc2f.js",
    "revision": "b61ca58290274e267dfcc97ab7728214"
  },
  {
    "url": "assets/js/page-142fd774.cdf9c82f.js",
    "revision": "a644d3b655bd74d7c18c7b0b20fc1681"
  },
  {
    "url": "assets/js/page-2037549c.b8308461.js",
    "revision": "2ed0ec59b3436aaa71822e79159160fe"
  },
  {
    "url": "assets/js/page-22954010.803aeb31.js",
    "revision": "7362ccc9873b4659ba200c84f28c5663"
  },
  {
    "url": "assets/js/page-25b298b6.e272265b.js",
    "revision": "7411bbb977ebe2f69fc44f94bc83c2d6"
  },
  {
    "url": "assets/js/page-3c041b9e.640b3d2b.js",
    "revision": "f71412e01110e312d1aa2052d825643f"
  },
  {
    "url": "assets/js/page-65eaf5e4.3dced53c.js",
    "revision": "742fd6670a26dd1ea5caee8ad98e0644"
  },
  {
    "url": "assets/js/page-7205f0b4.ea169338.js",
    "revision": "a92ec2cc3f45d1c8d2078045e1233ceb"
  },
  {
    "url": "assets/js/page-e4dfaf94.89442b27.js",
    "revision": "e27666b239948afb42844c1ed0b23071"
  },
  {
    "url": "assets/js/page-fd1ee6b4.c07c825a.js",
    "revision": "88934529328742bb8ab00161f719bf2b"
  },
  {
    "url": "assets/js/vendors~layout-Layout.fa9f2520.js",
    "revision": "b1f5b69b2f47b212f0f01d9e6c97a3cb"
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
    "revision": "6ff69fd514ec4a4ab1b612c7b5b37cff"
  },
  {
    "url": "doc/index.html",
    "revision": "8f58c067252f38d3c4f46b0416cc41fa"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "1424198a2d15a09daac9940f8c1f19f9"
  },
  {
    "url": "guide/index.html",
    "revision": "1b213e6bdb9e70c93bd6f12e3794a2f5"
  },
  {
    "url": "guide/team/index.html",
    "revision": "9e0cb37f9194f942158d9da469e09ded"
  },
  {
    "url": "index.html",
    "revision": "f220ce7f3c4c183f6c5d5d9532b0cc71"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "9a115530f38867685b2adf25fff4a002"
  },
  {
    "url": "py-list/index.html",
    "revision": "1dfdbcefc31616669b7d5bafa59406f0"
  },
  {
    "url": "resources/index.html",
    "revision": "e82e266ad85cffa9aafd1ded5c55e4a4"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "23d1a609dfb98fa1064e8bc9cd8ed462"
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
