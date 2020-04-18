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
    "revision": "f977fd5f2af00cdd79f86fe36918373e"
  },
  {
    "url": "assets/css/0.styles.adca8f67.css",
    "revision": "baac5288b99f3dcabe6ed2aef5e20c40"
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
    "url": "assets/js/1.bcbb0745.js",
    "revision": "6adc515fc6ce3e25dbe09f4b7b5c2d2d"
  },
  {
    "url": "assets/js/16.bf4df37b.js",
    "revision": "04bbb83be9505afab5f91c8f0e35ac86"
  },
  {
    "url": "assets/js/17.0ec20513.js",
    "revision": "94d204df1b5df625283f593b0ac59a5f"
  },
  {
    "url": "assets/js/18.c63c6f5d.js",
    "revision": "c04120353fefd91931142efec23225cf"
  },
  {
    "url": "assets/js/19.bb86e76b.js",
    "revision": "795691b7159d2517908e71abbebdf391"
  },
  {
    "url": "assets/js/20.f4f4d667.js",
    "revision": "780c8343cdd4988662931c436b094499"
  },
  {
    "url": "assets/js/21.2e9fe173.js",
    "revision": "36473b5e21abd26e921a6a073ea2286a"
  },
  {
    "url": "assets/js/22.2876e2dd.js",
    "revision": "7ab41755b828c37910e5f9c1af5a5871"
  },
  {
    "url": "assets/js/23.b5b1d13b.js",
    "revision": "b44b598ae8822cb6c9217ab0f0c2f25c"
  },
  {
    "url": "assets/js/24.08a4be2c.js",
    "revision": "1c7479d17f706e9762c112695c49a81b"
  },
  {
    "url": "assets/js/25.559e4db7.js",
    "revision": "be49e537cc6ba18d67ad4ae917ec77f4"
  },
  {
    "url": "assets/js/26.e7da905f.js",
    "revision": "c976663beb2b0693b95dbc7979079840"
  },
  {
    "url": "assets/js/27.c4512287.js",
    "revision": "a9545171590df93b92a4b2fee93e5883"
  },
  {
    "url": "assets/js/app.6587bfc8.js",
    "revision": "7d4a03a0e8a3df923ed78cab66aa9c7b"
  },
  {
    "url": "assets/js/layout-Layout.e824af80.js",
    "revision": "04a2c4711a18f219369403e319c82f90"
  },
  {
    "url": "assets/js/layout-NotFound.91b05865.js",
    "revision": "2a3d63163393569651635d064422b706"
  },
  {
    "url": "assets/js/page-1301ab8a.b6c4a453.js",
    "revision": "f27318c61e869eff5173e29d75fff613"
  },
  {
    "url": "assets/js/page-142fd774.c121dbf4.js",
    "revision": "12924f8ebbde7f9973927c7ad657e814"
  },
  {
    "url": "assets/js/page-2037549c.7e85b703.js",
    "revision": "a75b789ef061ab4c5bf0ab15d4a6b36f"
  },
  {
    "url": "assets/js/page-22954010.af6a4ca2.js",
    "revision": "06c2ff065847bfa7cf041826de54da93"
  },
  {
    "url": "assets/js/page-25b298b6.e272265b.js",
    "revision": "7411bbb977ebe2f69fc44f94bc83c2d6"
  },
  {
    "url": "assets/js/page-3c041b9e.cc9830dd.js",
    "revision": "7948cda40cc4a6c2b4149f3472b1df59"
  },
  {
    "url": "assets/js/page-65eaf5e4.9ff15b71.js",
    "revision": "a92117178a5041cae0e138cf5e497291"
  },
  {
    "url": "assets/js/page-7205f0b4.a72614b8.js",
    "revision": "9ed0ee42f2574d14eda53078e9eb003e"
  },
  {
    "url": "assets/js/page-e4dfaf94.4ecb603c.js",
    "revision": "87e2bbaf51147a665a69310ade830af6"
  },
  {
    "url": "assets/js/page-fd1ee6b4.c07c825a.js",
    "revision": "88934529328742bb8ab00161f719bf2b"
  },
  {
    "url": "assets/js/vendors~layout-Layout.609d4d1f.js",
    "revision": "ecceb6723445db2038a355ca3e387f46"
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
    "revision": "d2b607467ae4518054ce7ad2ef8d3270"
  },
  {
    "url": "doc/index.html",
    "revision": "d7aadccd3e3d3481719d9ab7b957238b"
  },
  {
    "url": "favicon.jpeg",
    "revision": "bff121c15a20f0ef170fda40fd5ef37b"
  },
  {
    "url": "funcTest/index.html",
    "revision": "a197e2e80918762de46a7936fd5967fa"
  },
  {
    "url": "guide/index.html",
    "revision": "7d7cb450796a1365babcdc8cd428cd0f"
  },
  {
    "url": "guide/team/index.html",
    "revision": "f59bab37c9d2ebfa8db9ca5fbddcc1fc"
  },
  {
    "url": "index.html",
    "revision": "025f2c16392894944573c21d5ebacc18"
  },
  {
    "url": "product/PCBRuler/index.html",
    "revision": "e0e8dbcf8c845b55448d118694236bc6"
  },
  {
    "url": "py-list/index.html",
    "revision": "76ed3aee96455eeb8a3eee7f70caed6e"
  },
  {
    "url": "resources/index.html",
    "revision": "dd575945fc72f5ba1f0e5f90b26b353d"
  },
  {
    "url": "support/alipay.jpg",
    "revision": "6428fd007a32f86b17b878509f75e815"
  },
  {
    "url": "support/index.html",
    "revision": "42a6ac17c38dd83950989d2ae399542f"
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
